// src/hooks/useFileUpload.js
// React hook for file uploads to R2 (JavaScript version)

import { useState } from "react";
import { uploadFileWithProgress } from "../lib/r2";

/**
 * Custom hook for file uploads with progress tracking
 *
 * @param {Object} options
 * @param {string} options.entityType - 'artisan' | 'client'
 * @param {string} options.entityId - User ID
 * @param {string} options.intent - 'profile' | 'portfolio' | 'avatar'
 * @param {Function} options.onSuccess - Callback with (url, metadata) on success
 * @returns {Object} Upload utilities
 */
export const useFileUpload = ({ entityType, entityId, intent, onSuccess }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);

  /**
   * Get file extension from filename
   */
  const getFileExtension = (filename) => {
    const lastDot = filename.lastIndexOf(".");
    if (lastDot === -1 || lastDot === filename.length - 1) {
      return "";
    }
    return filename.substring(lastDot + 1).toLowerCase();
  };

  /**
   * Handle file selection from input
   */
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setError(null);
    }
  };

  /**
   * Upload file to R2
   *
   * @param {File} customFile - Optional file to upload (overrides selected file)
   * @returns {Promise<Object>} { url, key, fileName, fileSize }
   */
  const uploadFile = async (customFile = null) => {
    const fileToUpload = customFile || file;

    if (!fileToUpload) {
      setError("Please select a file first");
      return null;
    }

    if (!entityId) {
      setError("Missing user ID. Please refresh and try again.");
      return null;
    }

    setLoading(true);
    setProgress(0);
    setError(null);

    try {
      const fileExtension = getFileExtension(fileToUpload.name);
      const contentType = fileToUpload.type || "application/octet-stream";

      // Try server-side upload first (bypasses CORS)
      try {
        setProgress(10); // Show some initial progress

        const formData = new FormData();
        formData.append("file", fileToUpload);
        formData.append("entityType", entityType);
        formData.append("entityId", entityId);
        formData.append("intent", intent);

        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          let errorData;
          try {
            errorData = await response.json();
          } catch (e) {
            errorData = {
              error: `Server upload failed with status ${response.status}`,
            };
          }
          const error = new Error(
            errorData.error || errorData.message || "Server upload failed"
          );
          error.isServerError = true;
          error.status = response.status;
          throw error;
        }

        setProgress(90);
        const data = await response.json();
        setProgress(100);

        const result = {
          url: data.url,
          key: data.key,
          fileName: data.filename || fileToUpload.name,
          fileSize: data.fileSize || fileToUpload.size,
          intent,
        };

        // Call success callback
        if (onSuccess) {
          await onSuccess(data.url, result);
        }

        setLoading(false);
        setProgress(0);
        return result;
      } catch (serverError) {
        console.error(
          "Server-side upload failed:",
          serverError.message || serverError,
          serverError.status ? `Status: ${serverError.status}` : ""
        );

        // Don't fallback to presigned URL for configuration or 5xx errors
        if (
          serverError.isServerError ||
          (serverError.message &&
            (serverError.message.includes("R2 storage") ||
              serverError.message.includes("not configured") ||
              serverError.message.includes("Missing R2"))) ||
          (serverError.status && serverError.status >= 500)
        ) {
          // Re-throw server errors - don't fallback to CORS-prone presigned URL
          throw serverError;
        }

        console.warn(
          "Falling back to presigned URL upload (requires CORS on R2 bucket)"
        );

        // Fallback to presigned URL upload (requires CORS on R2 bucket)
        // Step 1: Get presigned URL from backend
        const response = await fetch("/api/upload/presigned-url", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            entityType,
            entityId,
            intent,
            fileExtension,
            contentType,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            errorData.error || errorData.message || "Failed to get upload URL"
          );
        }

        const { uploadUrl, publicUrl, key } = await response.json();

        // Step 2: Upload file to R2 using presigned URL
        await uploadFileWithProgress(
          fileToUpload,
          uploadUrl,
          contentType,
          (percentage) => setProgress(10 + percentage * 0.9) // Scale to 10-100%
        );

        const result = {
          url: publicUrl,
          key,
          fileName: fileToUpload.name,
          fileSize: fileToUpload.size,
          intent,
        };

        // Call success callback
        if (onSuccess) {
          await onSuccess(publicUrl, result);
        }

        setLoading(false);
        setProgress(0);
        return result;
      }
    } catch (err) {
      let errorMessage = err.message || "Upload failed. Please try again.";

      // Check if it's a CORS error
      if (
        err.message &&
        (err.message.includes("CORS") ||
          err.message.includes("Access-Control-Allow-Origin"))
      ) {
        errorMessage =
          "CORS error: Your R2 bucket needs CORS configuration. The server-side upload should work, but if you see this, please contact support.";
      }

      setError(errorMessage);
      setLoading(false);
      setProgress(0);
      return null;
    }
  };

  /**
   * Reset upload state
   */
  const reset = () => {
    setFile(null);
    setLoading(false);
    setProgress(0);
    setError(null);
  };

  return {
    file,
    setFile,
    loading,
    progress,
    error,
    handleFileChange,
    uploadFile,
    reset,
  };
};
