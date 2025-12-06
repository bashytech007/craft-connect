// app/api/upload/presigned-url/route.js
// Backend API to generate presigned URLs for R2 uploads

import { NextResponse } from "next/server";
import {
  generatePresignedUrl,
  getContentTypeFromExtension,
} from "../../../../src/lib/r2";

/**
 * POST /api/upload/presigned-url
 * Generate presigned URL for file upload
 */
export async function POST(request) {
  try {
    const body = await request.json();
    const { entityType, entityId, intent, fileExtension, contentType } = body;

    // Validate required fields
    if (!entityType) {
      return NextResponse.json(
        { error: "entityType is required" },
        { status: 400 }
      );
    }

    if (!entityId) {
      return NextResponse.json(
        { error: "entityId is required" },
        { status: 400 }
      );
    }

    if (!intent) {
      return NextResponse.json(
        { error: "intent is required" },
        { status: 400 }
      );
    }

    if (!fileExtension) {
      return NextResponse.json(
        { error: "fileExtension is required" },
        { status: 400 }
      );
    }

    // Validate entityType
    const validEntityTypes = ["artisan", "client", "job", "review"];
    if (!validEntityTypes.includes(entityType)) {
      return NextResponse.json(
        {
          error: `Invalid entityType. Must be one of: ${validEntityTypes.join(
            ", "
          )}`,
        },
        { status: 400 }
      );
    }

    // Validate intent
    const validIntents = ["profile", "portfolio", "avatar", "work", "document"];
    if (!validIntents.includes(intent)) {
      return NextResponse.json(
        { error: `Invalid intent. Must be one of: ${validIntents.join(", ")}` },
        { status: 400 }
      );
    }

    // Get or infer content type
    const resolvedContentType =
      contentType || getContentTypeFromExtension(fileExtension);

    // File size limits (can be adjusted)
    const MAX_FILE_SIZE = {
      profile: 5 * 1024 * 1024, // 5MB for profile photos
      portfolio: 10 * 1024 * 1024, // 10MB for portfolio items
      avatar: 5 * 1024 * 1024, // 5MB for avatars
      work: 10 * 1024 * 1024, // 10MB for work samples
      document: 20 * 1024 * 1024, // 20MB for documents
    };

    // Generate presigned URL
    const result = await generatePresignedUrl({
      entityType,
      entityId,
      intent,
      fileExtension,
      contentType: resolvedContentType,
      expiresIn: 3600, // 1 hour
    });

    // Optional: Save upload record to database
    // await db.uploads.create({
    //   entityType,
    //   entityId,
    //   intent,
    //   key: result.key,
    //   filename: result.filename,
    //   status: 'pending',
    //   expiresAt: new Date(Date.now() + 3600 * 1000),
    // });

    return NextResponse.json({
      success: true,
      ...result,
      maxFileSize: MAX_FILE_SIZE[intent] || 10 * 1024 * 1024,
      expiresIn: 3600,
    });
  } catch (error) {
    console.error("Presigned URL generation error:", error);

    // Provide more detailed error message for configuration issues
    let errorMessage = error.message || "Failed to generate upload URL";
    if (error.message && error.message.includes("Missing R2 config")) {
      errorMessage =
        "R2 storage is not configured. Please check environment variables.";
    }

    return NextResponse.json(
      {
        error: errorMessage,
        detail:
          process.env.NODE_ENV === "development" ? error.stack : undefined,
      },
      { status: 500 }
    );
  }
}
