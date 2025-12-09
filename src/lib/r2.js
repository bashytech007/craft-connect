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

import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { nanoid } from "nanoid";

/**
 * R2 Configuration from environment variables
 */
const R2_CONFIG = {
  ACCOUNT_ID: process.env.R2_ACCOUNT_ID,
  ACCESS_KEY_ID: process.env.R2_ACCESS_KEY_ID,
  SECRET_ACCESS_KEY: process.env.R2_SECRET_ACCESS_KEY,
  BUCKET_NAME: process.env.R2_BUCKET_NAME,
  FOLDER_PREFIX: process.env.R2_FOLDER_PREFIX || "craftconnect",
  PUBLIC_URL: process.env.R2_PUBLIC_URL,
  CDN_URL: process.env.R2_CDN_URL || "",
};

// 🔍 DEBUG - Add this
console.log("=== R2 CONFIG DEBUG ===");
console.log("PUBLIC_URL:", R2_CONFIG.PUBLIC_URL);
console.log("ACCOUNT_ID:", R2_CONFIG.ACCOUNT_ID);
console.log("======================");

const validateR2Config = () => {
  const required = [
    "ACCOUNT_ID",
    "ACCESS_KEY_ID",
    "SECRET_ACCESS_KEY",
    "BUCKET_NAME",
  ];
  const missing = required.filter((key) => !R2_CONFIG[key]);

  if (missing.length > 0) {
    throw new Error(`Missing R2 config: ${missing.join(", ")}`);
  }

  // Warn if PUBLIC_URL is missing
  if (!R2_CONFIG.PUBLIC_URL) {
    console.warn(
      "Warning: R2_PUBLIC_URL is not set. Public URLs will not work correctly."
    );
  }
};

/**
 * Initialize S3 client for Cloudflare R2
 * Client is created lazily after validation
 */
let r2Client = null;
export const getR2Client = () => {
  if (!r2Client) {
    validateR2Config();
    r2Client = new S3Client({
      region: "auto",
      endpoint: `https://${R2_CONFIG.ACCOUNT_ID}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId: R2_CONFIG.ACCESS_KEY_ID,
        secretAccessKey: R2_CONFIG.SECRET_ACCESS_KEY,
      },
      forcePathStyle: true, // ✅ ADD THIS LINE
    });
  }
  return r2Client;
};

/**
 * Get content type from file extension
 */
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


export const getContentTypeFromExtension = (extension) => {
  const ext = extension.toLowerCase().replace(".", "");
  const contentTypes = {
    // Images
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    png: "image/png",
    gif: "image/gif",
    webp: "image/webp",
    svg: "image/svg+xml",
    
    // Videos - ADD THESE
    mp4: "video/mp4",
    webm: "video/webm",
    mov: "video/quicktime",
    avi: "video/x-msvideo",
    mkv: "video/x-matroska",
    m4v: "video/x-m4v",
    
    // Documents
    pdf: "application/pdf",
  };
  return contentTypes[ext] || "application/octet-stream";
};
/**
 * Generate file key and metadata without creating presigned URL
 * Useful for server-side uploads
 *
 * @param {Object} params
 * @param {string} params.entityType - 'artisan' | 'client' | 'job'
 * @param {string} params.entityId - User/entity ID
 * @param {string} params.intent - 'profile' | 'portfolio' | 'avatar'
 * @param {string} params.fileExtension - File extension (e.g., 'jpg', 'mp4')
 * @returns {Object} { filename, key, publicUrl }
 */
export const generateFileKey = ({
  entityType,
  entityId,
  intent,
  fileExtension = "",
}) => {
  // Generate unique filename
  const cleanExtension = fileExtension.replace(".", "");
  const filename = `${nanoid()}${cleanExtension ? `.${cleanExtension}` : ""}`;

  // Build object key: {FOLDER_PREFIX}/{entityType}/{entityId}/{intent}/{filename}
  const key = `${R2_CONFIG.FOLDER_PREFIX}/${entityType}/${entityId}/${intent}/${filename}`;

  // Generate public URL for accessing the file
  const publicUrl = R2_CONFIG.CDN_URL
    ? `${R2_CONFIG.CDN_URL}/${key}`
    : `${R2_CONFIG.PUBLIC_URL}/${key}`;

  return {
    filename,
    key,
    publicUrl,
  };
};

/**
 * Generate presigned URL for file upload
 *
 * @param {Object} params
 * @param {string} params.entityType - 'artisan' | 'client' | 'job'
 * @param {string} params.entityId - User/entity ID
 * @param {string} params.intent - 'profile' | 'portfolio' | 'avatar'
 * @param {string} params.fileExtension - File extension (e.g., 'jpg', 'mp4')
 * @param {string} params.contentType - MIME type
 * @param {number} params.expiresIn - Expiry in seconds (default 3600)
 * @returns {Promise<Object>} { filename, uploadUrl, key, publicUrl }
 */
export const generatePresignedUrl = async ({
  entityType,
  entityId,
  intent,
  fileExtension = "",
  contentType = "application/octet-stream",
  expiresIn = 3600, // 1 hour
}) => {
  // Generate unique filename
  const cleanExtension = fileExtension.replace(".", "");
  const filename = `${nanoid()}${cleanExtension ? `.${cleanExtension}` : ""}`;

  // Build object key: {FOLDER_PREFIX}/{entityType}/{entityId}/{intent}/{filename}
  const key = `${R2_CONFIG.FOLDER_PREFIX}/${entityType}/${entityId}/${intent}/${filename}`;

  // Create PutObject command with metadata that may help with CORS
  const command = new PutObjectCommand({
    Bucket: R2_CONFIG.BUCKET_NAME,
    Key: key,
    ContentType: contentType,
    // Add metadata headers that can help with CORS
    Metadata: {
      "uploaded-by": "craft-connect",
    },
  });

  // Generate presigned URL for upload
  const presignedUrl = await getSignedUrl(getR2Client(), command, { expiresIn });

  // ✅ FIX: Replace private cloudflarestorage.com domain with public R2.dev domain
  // This is necessary because the presigned URL uses the internal endpoint,
  // but for CORS to work in the browser, we need to use the public R2.dev URL
  const uploadUrl = R2_CONFIG.PUBLIC_URL
    ? presignedUrl.replace(
        `https://${R2_CONFIG.ACCOUNT_ID}.r2.cloudflarestorage.com`,
        R2_CONFIG.PUBLIC_URL
      )
    : presignedUrl;

  // Generate public URL for accessing the file
  const publicUrl = R2_CONFIG.CDN_URL
    ? `${R2_CONFIG.CDN_URL}/${key}`
    : `${R2_CONFIG.PUBLIC_URL}/${key}`;

  return {
    filename,
    uploadUrl,
    key,
    publicUrl,
  };
};

/**
 * Upload file to R2 using presigned URL with progress tracking
 *
 * @param {File} file - File object to upload
 * @param {string} uploadUrl - Presigned URL from generatePresignedUrl
 * @param {string} contentType - MIME type
 * @param {Function} onProgress - Progress callback (percentage: number) => void
 * @returns {Promise<void>}
 */
export const uploadFileWithProgress = (
  file,
  uploadUrl,
  contentType,
  onProgress
) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("PUT", uploadUrl);

    // Set content type
    xhr.setRequestHeader("Content-Type", contentType);

    // Track upload progress
    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percentComplete = Math.round((event.loaded / event.total) * 100);
        onProgress(percentComplete);
      }
    };

    // Handle completion
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve();
      } else {
        reject(new Error(`Upload failed with status: ${xhr.status}`));
      }
    };

    // Handle errors
    xhr.onerror = () => reject(new Error("Upload failed"));
    xhr.ontimeout = () => reject(new Error("Upload timeout"));

    // Send file
    xhr.send(file);
  });
};

/**
 * Delete file from R2
 *
 * @param {string} key - File key in R2
 * @returns {Promise<void>}
 */
export const deleteFileFromR2 = async (key) => {
  const command = new DeleteObjectCommand({
    Bucket: R2_CONFIG.BUCKET_NAME,
    Key: key,
  });

  try {
    await getR2Client().send(command);
  } catch (error) {
    console.error("Failed to delete file from R2:", error);
    throw error;
  }
};

/**
 * Extract key from R2 URL
 *
 * @param {string} url - Full R2 URL
 * @returns {string|null} - File key or null
 */
export const extractKeyFromUrl = (url) => {
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