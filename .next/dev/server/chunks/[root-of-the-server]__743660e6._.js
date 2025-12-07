module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/@aws-sdk/client-s3 [external] (@aws-sdk/client-s3, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@aws-sdk/client-s3", () => require("@aws-sdk/client-s3"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/node:fs/promises [external] (node:fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs/promises", () => require("node:fs/promises"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/Desktop/craft/craft-connect/src/lib/r2.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// // src/lib/r2.js
// // Cloudflare R2 file upload utilities (JavaScript version)
// import {
//   S3Client,
//   PutObjectCommand,
//   DeleteObjectCommand,
// } from "@aws-sdk/client-s3";
// import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
// import { nanoid } from "nanoid";
// /**
//  * R2 Configuration from environment variables
//  */
// const R2_CONFIG = {
//   ACCOUNT_ID: process.env.R2_ACCOUNT_ID,
//   ACCESS_KEY_ID: process.env.R2_ACCESS_KEY_ID,
//   SECRET_ACCESS_KEY: process.env.R2_SECRET_ACCESS_KEY,
//   BUCKET_NAME: process.env.R2_BUCKET_NAME,
//   FOLDER_PREFIX: process.env.R2_FOLDER_PREFIX || "craftconnect",
//   PUBLIC_URL: process.env.R2_PUBLIC_URL,
//   CDN_URL: process.env.R2_CDN_URL || "",
// };
// /**
//  * Validate R2 configuration
//  */
// const validateR2Config = () => {
//   const required = [
//     "ACCOUNT_ID",
//     "ACCESS_KEY_ID",
//     "SECRET_ACCESS_KEY",
//     "BUCKET_NAME",
//   ];
//   const missing = required.filter((key) => !R2_CONFIG[key]);
//   if (missing.length > 0) {
//     throw new Error(`Missing R2 config: ${missing.join(", ")}`);
//   }
// };
// /**
//  * Initialize S3 client for Cloudflare R2
//  * Client is created lazily after validation
//  */
// let r2Client = null;
// export const getR2Client = () => {
//   if (!r2Client) {
//     validateR2Config(); // Validate before creating client
//     r2Client = new S3Client({
//       region: "auto",
//       endpoint: `https://${R2_CONFIG.ACCOUNT_ID}.r2.cloudflarestorage.com`,
//       credentials: {
//         accessKeyId: R2_CONFIG.ACCESS_KEY_ID,
//         secretAccessKey: R2_CONFIG.SECRET_ACCESS_KEY,
//       },
//     });
//   }
//   return r2Client;
// };
// /**
//  * Get content type from file extension
//  */
// export const getContentTypeFromExtension = (extension) => {
//   const ext = extension.toLowerCase().replace(".", "");
//   const contentTypes = {
//     // Images
//     jpg: "image/jpeg",
//     jpeg: "image/jpeg",
//     png: "image/png",
//     gif: "image/gif",
//     webp: "image/webp",
//     svg: "image/svg+xml",
//     // Videos
//     mp4: "video/mp4",
//     webm: "video/webm",
//     mov: "video/quicktime",
//     avi: "video/x-msvideo",
//     // Documents
//     pdf: "application/pdf",
//   };
//   return contentTypes[ext] || "application/octet-stream";
// };
// /**
//  * Generate file key and metadata without creating presigned URL
//  * Useful for server-side uploads
//  *
//  * @param {Object} params
//  * @param {string} params.entityType - 'artisan' | 'client' | 'job'
//  * @param {string} params.entityId - User/entity ID
//  * @param {string} params.intent - 'profile' | 'portfolio' | 'avatar'
//  * @param {string} params.fileExtension - File extension (e.g., 'jpg', 'mp4')
//  * @returns {Object} { filename, key, publicUrl }
//  */
// export const generateFileKey = ({
//   entityType,
//   entityId,
//   intent,
//   fileExtension = "",
// }) => {
//   // Generate unique filename
//   const cleanExtension = fileExtension.replace(".", "");
//   const filename = `${nanoid()}${cleanExtension ? `.${cleanExtension}` : ""}`;
//   // Build object key: {FOLDER_PREFIX}/{entityType}/{entityId}/{intent}/{filename}
//   const key = `${R2_CONFIG.FOLDER_PREFIX}/${entityType}/${entityId}/${intent}/${filename}`;
//   // Generate public URL for accessing the file
//   const publicUrl = R2_CONFIG.CDN_URL
//     ? `${R2_CONFIG.CDN_URL}/${key}`
//     : `${R2_CONFIG.PUBLIC_URL}/${key}`;
//   return {
//     filename,
//     key,
//     publicUrl,
//   };
// };
// /**
//  * Generate presigned URL for file upload
//  *
//  * @param {Object} params
//  * @param {string} params.entityType - 'artisan' | 'client' | 'job'
//  * @param {string} params.entityId - User/entity ID
//  * @param {string} params.intent - 'profile' | 'portfolio' | 'avatar'
//  * @param {string} params.fileExtension - File extension (e.g., 'jpg', 'mp4')
//  * @param {string} params.contentType - MIME type
//  * @param {number} params.expiresIn - Expiry in seconds (default 3600)
//  * @returns {Promise<Object>} { filename, uploadUrl, key, publicUrl }
//  */
// export const generatePresignedUrl = async ({
//   entityType,
//   entityId,
//   intent,
//   fileExtension = "",
//   contentType = "application/octet-stream",
//   expiresIn = 3600, // 1 hour
// }) => {
//   // Generate unique filename
//   const cleanExtension = fileExtension.replace(".", "");
//   const filename = `${nanoid()}${cleanExtension ? `.${cleanExtension}` : ""}`;
//   // Build object key: {FOLDER_PREFIX}/{entityType}/{entityId}/{intent}/{filename}
//   const key = `${R2_CONFIG.FOLDER_PREFIX}/${entityType}/${entityId}/${intent}/${filename}`;
//   // Create PutObject command with metadata that may help with CORS
//   const command = new PutObjectCommand({
//     Bucket: R2_CONFIG.BUCKET_NAME,
//     Key: key,
//     ContentType: contentType,
//     // Add metadata headers that can help with CORS
//     Metadata: {
//       "uploaded-by": "craft-connect",
//     },
//   });
//   // Generate presigned URL for upload
//   const uploadUrl = await getSignedUrl(getR2Client(), command, { expiresIn });
//   // Generate public URL for accessing the file
//   const publicUrl = R2_CONFIG.CDN_URL
//     ? `${R2_CONFIG.CDN_URL}/${key}`
//     : `${R2_CONFIG.PUBLIC_URL}/${key}`;
//   return {
//     filename,
//     uploadUrl,
//     key,
//     publicUrl,
//   };
// };
// /**
//  * Upload file to R2 using presigned URL with progress tracking
//  *
//  * @param {File} file - File object to upload
//  * @param {string} uploadUrl - Presigned URL from generatePresignedUrl
//  * @param {string} contentType - MIME type
//  * @param {Function} onProgress - Progress callback (percentage: number) => void
//  * @returns {Promise<void>}
//  */
// export const uploadFileWithProgress = (
//   file,
//   uploadUrl,
//   contentType,
//   onProgress
// ) => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open("PUT", uploadUrl);
//     // Set content type
//     xhr.setRequestHeader("Content-Type", contentType);
//     // Track upload progress
//     xhr.upload.onprogress = (event) => {
//       if (event.lengthComputable) {
//         const percentComplete = Math.round((event.loaded / event.total) * 100);
//         onProgress(percentComplete);
//       }
//     };
//     // Handle completion
//     xhr.onload = () => {
//       if (xhr.status >= 200 && xhr.status < 300) {
//         resolve();
//       } else {
//         reject(new Error(`Upload failed with status: ${xhr.status}`));
//       }
//     };
//     // Handle errors
//     xhr.onerror = () => reject(new Error("Upload failed"));
//     xhr.ontimeout = () => reject(new Error("Upload timeout"));
//     // Send file
//     xhr.send(file);
//   });
// };
// /**
//  * Delete file from R2
//  *
//  * @param {string} key - File key in R2
//  * @returns {Promise<void>}
//  */
// export const deleteFileFromR2 = async (key) => {
//   const command = new DeleteObjectCommand({
//     Bucket: R2_CONFIG.BUCKET_NAME,
//     Key: key,
//   });
//   try {
//     await getR2Client().send(command);
//   } catch (error) {
//     console.error("Failed to delete file from R2:", error);
//     throw error;
//   }
// };
// /**
//  * Extract key from R2 URL
//  *
//  * @param {string} url - Full R2 URL
//  * @returns {string|null} - File key or null
//  */
// export const extractKeyFromUrl = (url) => {
//   const cdnUrl = R2_CONFIG.CDN_URL;
//   const publicUrl = R2_CONFIG.PUBLIC_URL;
//   if (cdnUrl && url.includes(cdnUrl)) {
//     return url.replace(`${cdnUrl}/`, "");
//   }
//   if (publicUrl && url.includes(publicUrl)) {
//     return url.replace(`${publicUrl}/`, "");
//   }
//   // Try bucket pattern
//   const bucketPattern = new RegExp(`${R2_CONFIG.BUCKET_NAME}/(.+)`);
//   const match = url.match(bucketPattern);
//   return match ? match[1] : null;
// };
// src/lib/r2.js
// Cloudflare R2 file upload utilities (JavaScript version)
__turbopack_context__.s([
    "deleteFileFromR2",
    ()=>deleteFileFromR2,
    "extractKeyFromUrl",
    ()=>extractKeyFromUrl,
    "generateFileKey",
    ()=>generateFileKey,
    "generatePresignedUrl",
    ()=>generatePresignedUrl,
    "getContentTypeFromExtension",
    ()=>getContentTypeFromExtension,
    "getR2Client",
    ()=>getR2Client,
    "uploadFileWithProgress",
    ()=>uploadFileWithProgress
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@aws-sdk/client-s3 [external] (@aws-sdk/client-s3, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f40$aws$2d$sdk$2f$s3$2d$request$2d$presigner$2f$dist$2d$es$2f$getSignedUrl$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/@aws-sdk/s3-request-presigner/dist-es/getSignedUrl.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/nanoid/index.js [app-route] (ecmascript) <locals>");
;
;
;
/**
 * R2 Configuration from environment variables
 */ const R2_CONFIG = {
    ACCOUNT_ID: process.env.R2_ACCOUNT_ID,
    ACCESS_KEY_ID: process.env.R2_ACCESS_KEY_ID,
    SECRET_ACCESS_KEY: process.env.R2_SECRET_ACCESS_KEY,
    BUCKET_NAME: process.env.R2_BUCKET_NAME,
    FOLDER_PREFIX: process.env.R2_FOLDER_PREFIX || "craftconnect",
    PUBLIC_URL: process.env.R2_PUBLIC_URL,
    CDN_URL: process.env.R2_CDN_URL || ""
};
// 🔍 DEBUG - Add this
console.log("=== R2 CONFIG DEBUG ===");
console.log("PUBLIC_URL:", R2_CONFIG.PUBLIC_URL);
console.log("ACCOUNT_ID:", R2_CONFIG.ACCOUNT_ID);
console.log("======================");
const validateR2Config = ()=>{
    const required = [
        "ACCOUNT_ID",
        "ACCESS_KEY_ID",
        "SECRET_ACCESS_KEY",
        "BUCKET_NAME"
    ];
    const missing = required.filter((key)=>!R2_CONFIG[key]);
    if (missing.length > 0) {
        throw new Error(`Missing R2 config: ${missing.join(", ")}`);
    }
    // Warn if PUBLIC_URL is missing
    if (!R2_CONFIG.PUBLIC_URL) {
        console.warn("Warning: R2_PUBLIC_URL is not set. Public URLs will not work correctly.");
    }
};
/**
 * Initialize S3 client for Cloudflare R2
 * Client is created lazily after validation
 */ let r2Client = null;
const getR2Client = ()=>{
    if (!r2Client) {
        validateR2Config();
        r2Client = new __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$29$__["S3Client"]({
            region: "auto",
            endpoint: `https://${R2_CONFIG.ACCOUNT_ID}.r2.cloudflarestorage.com`,
            credentials: {
                accessKeyId: R2_CONFIG.ACCESS_KEY_ID,
                secretAccessKey: R2_CONFIG.SECRET_ACCESS_KEY
            },
            forcePathStyle: true
        });
    }
    return r2Client;
};
const getContentTypeFromExtension = (extension)=>{
    const ext = extension.toLowerCase().replace(".", "");
    const contentTypes = {
        // Images
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        png: "image/png",
        gif: "image/gif",
        webp: "image/webp",
        svg: "image/svg+xml",
        // Videos
        mp4: "video/mp4",
        webm: "video/webm",
        mov: "video/quicktime",
        avi: "video/x-msvideo",
        // Documents
        pdf: "application/pdf"
    };
    return contentTypes[ext] || "application/octet-stream";
};
const generateFileKey = ({ entityType, entityId, intent, fileExtension = "" })=>{
    // Generate unique filename
    const cleanExtension = fileExtension.replace(".", "");
    const filename = `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])()}${cleanExtension ? `.${cleanExtension}` : ""}`;
    // Build object key: {FOLDER_PREFIX}/{entityType}/{entityId}/{intent}/{filename}
    const key = `${R2_CONFIG.FOLDER_PREFIX}/${entityType}/${entityId}/${intent}/${filename}`;
    // Generate public URL for accessing the file
    const publicUrl = R2_CONFIG.CDN_URL ? `${R2_CONFIG.CDN_URL}/${key}` : `${R2_CONFIG.PUBLIC_URL}/${key}`;
    return {
        filename,
        key,
        publicUrl
    };
};
const generatePresignedUrl = async ({ entityType, entityId, intent, fileExtension = "", contentType = "application/octet-stream", expiresIn = 3600 })=>{
    // Generate unique filename
    const cleanExtension = fileExtension.replace(".", "");
    const filename = `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])()}${cleanExtension ? `.${cleanExtension}` : ""}`;
    // Build object key: {FOLDER_PREFIX}/{entityType}/{entityId}/{intent}/{filename}
    const key = `${R2_CONFIG.FOLDER_PREFIX}/${entityType}/${entityId}/${intent}/${filename}`;
    // Create PutObject command with metadata that may help with CORS
    const command = new __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$29$__["PutObjectCommand"]({
        Bucket: R2_CONFIG.BUCKET_NAME,
        Key: key,
        ContentType: contentType,
        // Add metadata headers that can help with CORS
        Metadata: {
            "uploaded-by": "craft-connect"
        }
    });
    // Generate presigned URL for upload
    const presignedUrl = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f40$aws$2d$sdk$2f$s3$2d$request$2d$presigner$2f$dist$2d$es$2f$getSignedUrl$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSignedUrl"])(getR2Client(), command, {
        expiresIn
    });
    // ✅ FIX: Replace private cloudflarestorage.com domain with public R2.dev domain
    // This is necessary because the presigned URL uses the internal endpoint,
    // but for CORS to work in the browser, we need to use the public R2.dev URL
    const uploadUrl = R2_CONFIG.PUBLIC_URL ? presignedUrl.replace(`https://${R2_CONFIG.ACCOUNT_ID}.r2.cloudflarestorage.com`, R2_CONFIG.PUBLIC_URL) : presignedUrl;
    // Generate public URL for accessing the file
    const publicUrl = R2_CONFIG.CDN_URL ? `${R2_CONFIG.CDN_URL}/${key}` : `${R2_CONFIG.PUBLIC_URL}/${key}`;
    return {
        filename,
        uploadUrl,
        key,
        publicUrl
    };
};
const uploadFileWithProgress = (file, uploadUrl, contentType, onProgress)=>{
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open("PUT", uploadUrl);
        // Set content type
        xhr.setRequestHeader("Content-Type", contentType);
        // Track upload progress
        xhr.upload.onprogress = (event)=>{
            if (event.lengthComputable) {
                const percentComplete = Math.round(event.loaded / event.total * 100);
                onProgress(percentComplete);
            }
        };
        // Handle completion
        xhr.onload = ()=>{
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve();
            } else {
                reject(new Error(`Upload failed with status: ${xhr.status}`));
            }
        };
        // Handle errors
        xhr.onerror = ()=>reject(new Error("Upload failed"));
        xhr.ontimeout = ()=>reject(new Error("Upload timeout"));
        // Send file
        xhr.send(file);
    });
};
const deleteFileFromR2 = async (key)=>{
    const command = new __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$29$__["DeleteObjectCommand"]({
        Bucket: R2_CONFIG.BUCKET_NAME,
        Key: key
    });
    try {
        await getR2Client().send(command);
    } catch (error) {
        console.error("Failed to delete file from R2:", error);
        throw error;
    }
};
const extractKeyFromUrl = (url)=>{
    const cdnUrl = R2_CONFIG.CDN_URL;
    const publicUrl = R2_CONFIG.PUBLIC_URL;
    if (cdnUrl && url.includes(cdnUrl)) {
        return url.replace(`${cdnUrl}/`, "");
    }
    if (publicUrl && url.includes(publicUrl)) {
        return url.replace(`${publicUrl}/`, "");
    }
    // Try bucket pattern
    const bucketPattern = new RegExp(`${R2_CONFIG.BUCKET_NAME}/(.+)`);
    const match = url.match(bucketPattern);
    return match ? match[1] : null;
};
}),
"[project]/Desktop/craft/craft-connect/app/api/upload/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/api/upload/route.js
// Server-side upload proxy to bypass CORS issues
__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$lib$2f$r2$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/src/lib/r2.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@aws-sdk/client-s3 [external] (@aws-sdk/client-s3, cjs)");
;
;
;
async function POST(request) {
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
            intent
        });
        // Validate required fields
        if (!file) {
            console.error("[Upload API] Missing file");
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "File is required"
            }, {
                status: 400
            });
        }
        if (!entityType || !entityId || !intent) {
            console.error("[Upload API] Missing required fields:", {
                entityType,
                entityId,
                intent
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "entityType, entityId, and intent are required"
            }, {
                status: 400
            });
        }
        // Get file extension and content type
        const filename = file.name;
        const fileExtension = filename.split(".").pop() || "";
        const contentType = file.type || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$lib$2f$r2$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getContentTypeFromExtension"])(fileExtension);
        // Convert file to buffer
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        // Generate file key and public URL (no presigned URL needed for server-side upload)
        const { key, publicUrl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$lib$2f$r2$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateFileKey"])({
            entityType,
            entityId,
            intent,
            fileExtension
        });
        // Upload directly to R2 using S3 client (server-side, no CORS issues)
        const s3Client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$lib$2f$r2$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getR2Client"])();
        const bucketName = process.env.R2_BUCKET_NAME;
        if (!bucketName) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "R2 bucket name is not configured"
            }, {
                status: 500
            });
        }
        const command = new __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$29$__["PutObjectCommand"]({
            Bucket: bucketName,
            Key: key,
            Body: buffer,
            ContentType: contentType,
            Metadata: {
                "uploaded-by": "craft-connect"
            }
        });
        console.log("[Upload API] Uploading to R2:", {
            bucket: bucketName,
            key,
            contentType,
            fileSize: buffer.length
        });
        await s3Client.send(command);
        console.log("[Upload API] Upload successful:", {
            key,
            publicUrl
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            url: publicUrl,
            key,
            filename,
            fileSize: buffer.length
        });
    } catch (error) {
        console.error("[Upload API] Upload error:", {
            message: error.message,
            stack: error.stack,
            name: error.name
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message || "Failed to upload file",
            detail: ("TURBOPACK compile-time truthy", 1) ? error.stack : "TURBOPACK unreachable"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__743660e6._.js.map