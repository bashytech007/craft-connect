"use client";

// Force this error page to render on the client to avoid
// any build-time serialization / React mismatch issues.
export const dynamic = "force-dynamic";

export default function Custom500() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Something went wrong</h1>
        <p className="text-gray-600 mb-6">
          An unexpected error occurred. Please refresh the page or try again later.
        </p>
      </div>
    </div>
  );
}


