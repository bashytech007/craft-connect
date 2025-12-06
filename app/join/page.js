"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { X } from "lucide-react";
import ccLogo from "../../src/assets/cc-logo.svg";
import carpenterImage from "../../src/assets/categories/carpenter.svg";
import businessPartnersImage from "../../src/assets/categories/business-patners.svg";

// Force dynamic rendering
export const dynamic = "force-dynamic";

export default function JoinSelectionPage() {
  const router = useRouter();

  // Debug: Log to ensure component renders
  console.log("JoinSelectionPage rendering with both options");

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-6xl w-full overflow-hidden flex flex-col md:flex-row shadow-2xl">
        {/* Left Side - Main Image */}
        <div className="hidden md:block md:w-1/2 relative">
          <div className="relative w-full h-full min-h-[600px]">
            <Image
              src={carpenterImage}
              alt="Join CraftConnect"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 0vw, 50vw"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </div>

        {/* Right Side - Selection Options */}
        <div className="md:w-1/2 p-8 md:p-12 relative">
          <button
            onClick={() => router.push("/")}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src={ccLogo}
                alt="CraftConnect logo"
                width={32}
                height={32}
                className="w-8 h-8"
                unoptimized
              />
              <span className="font-bold text-xl">CraftConnect</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Join CraftConnect
            </h1>
            <p className="text-gray-600 text-lg">
              Choose how you want to join our platform
            </p>
          </div>

          {/* Selection Options - Flex Column */}
          <div className="flex flex-col gap-4 mb-6 w-full">
            {/* Artisan Option */}
            <button
              onClick={() => router.push("/sign-up/artisan")}
              className="group relative bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-amber-500 hover:shadow-lg transition-all duration-300 text-left flex items-center gap-4 w-full"
            >
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={carpenterImage}
                  alt="Artisan at work"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 96px, 128px"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                  Sign up as Artisan
                </h2>
                <p className="text-gray-600 mb-2">
                  Craft your{" "}
                  <span className="text-amber-500 font-semibold">Success</span>
                </p>
                <p className="text-sm text-gray-500">
                  Showcase your skills, connect with clients, and grow your
                  business
                </p>
              </div>
              <div className="text-amber-600 font-semibold text-2xl group-hover:translate-x-2 transition-transform flex-shrink-0">
                →
              </div>
            </button>

            {/* Client Option */}
            <button
              onClick={() => router.push("/sign-up/client")}
              className="group relative bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-amber-500 hover:shadow-lg transition-all duration-300 text-left flex items-center gap-4 w-full"
            >
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={businessPartnersImage}
                  alt="Business partners"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 96px, 128px"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                  Sign up as Client
                </h2>
                <p className="text-gray-600 mb-2">
                  Find the perfect{" "}
                  <span className="text-amber-500 font-semibold">Artisan</span>
                </p>
                <p className="text-sm text-gray-500">
                  Discover skilled artisans, browse portfolios, and get your
                  projects done
                </p>
              </div>
              <div className="text-amber-600 font-semibold text-2xl group-hover:translate-x-2 transition-transform flex-shrink-0">
                →
              </div>
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <span
                onClick={() => router.push("/sign-in")}
                className="text-amber-600 font-semibold cursor-pointer hover:underline"
              >
                Sign in
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

