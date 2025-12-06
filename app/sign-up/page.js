"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Force dynamic rendering
export const dynamic = "force-dynamic";

export default function SignUpPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the join selection page
    router.replace("/join");
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <p className="text-gray-600">Redirecting...</p>
      </div>
    </div>
  );
}
