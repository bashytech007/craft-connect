// app/api/upload/route.js
// Server-side upload proxy to bypass CORS issues

import { NextResponse } from "next/server";
import { generateFileKey, getContentTypeFromExtension, getR2Client } from "../../../src/lib/r2";
import { PutObjectCommand } from "@aws-sdk/client-s3";

/**
 * POST /api/upload
 * Server-side upload proxy that uploads files to R2
 * This bypasses CORS issues by uploading from the server
 */
export async function POST(request) {
  try {
    console.log("[Upload API] Received upload request");
    const formData = await request.formData();
    const file = formData.get("file");
    const entityType = formData.get("entityType");
    const entityId = formData.get("entityId");
    const intent = formData.get("intent");

    console.log("[Upload API] Form data:", {
      hasFile: !!file,
      entityType,
      entityId,
      intent,
    });

    // Validate required fields
    if (!file) {
      console.error("[Upload API] Missing file");
      return NextResponse.json(
        { error: "File is required" },
        { status: 400 }
      );
    }

    if (!entityType || !entityId || !intent) {
      console.error("[Upload API] Missing required fields:", {
        entityType,
        entityId,
        intent,
      });
      return NextResponse.json(
        { error: "entityType, entityId, and intent are required" },
        { status: 400 }
      );
    }

    // Get file extension and content type
    const filename = file.name;
    const fileExtension = filename.split(".").pop() || "";
    const contentType = file.type || getContentTypeFromExtension(fileExtension);

    // Convert file to buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Generate file key and public URL (no presigned URL needed for server-side upload)
    const { key, publicUrl } = generateFileKey({
      entityType,
      entityId,
      intent,
      fileExtension,
    });

    // Upload directly to R2 using S3 client (server-side, no CORS issues)
    const s3Client = getR2Client();
    const bucketName = process.env.R2_BUCKET_NAME;

    if (!bucketName) {
      return NextResponse.json(
        { error: "R2 bucket name is not configured" },
        { status: 500 }
      );
    }

    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: key,
      Body: buffer,
      ContentType: contentType,
      Metadata: {
        "uploaded-by": "craft-connect",
      },
    });

    console.log("[Upload API] Uploading to R2:", {
      bucket: bucketName,
      key,
      contentType,
      fileSize: buffer.length,
    });

    await s3Client.send(command);

    console.log("[Upload API] Upload successful:", { key, publicUrl });

    return NextResponse.json({
      success: true,
      url: publicUrl,
      key,
      filename,
      fileSize: buffer.length,
    });

  } catch (error) {
    console.error("[Upload API] Upload error:", {
      message: error.message,
      stack: error.stack,
      name: error.name,
    });
    return NextResponse.json(
      {
        error: error.message || "Failed to upload file",
        detail: process.env.NODE_ENV === "development" ? error.stack : undefined,
      },
      { status: 500 }
    );
  }
}

