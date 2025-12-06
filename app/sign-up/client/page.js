"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { api } from "../../../src/lib/api";
import { X, Mail } from "lucide-react";
import businessPartnersImage from "../../../src/assets/categories/business-patners.svg";
import ccLogo from "../../../src/assets/cc-logo.svg";

// Force dynamic rendering
export const dynamic = "force-dynamic";

export default function ClientSignUpPage() {
  const router = useRouter();
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    location: "",
    language: "English",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    // Basic validation
    if (
      !formData.email ||
      !formData.password ||
      !formData.firstName ||
      !formData.lastName ||
      !formData.phoneNumber ||
      !formData.location
    ) {
      setError("Please fill in all required fields");
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      setLoading(false);
      return;
    }

    try {
      await api.registerClient({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        password: formData.password,
        location: formData.location,
        language: formData.language,
      });

      setSuccess("Account created successfully! Redirecting to sign in...");
      setTimeout(() => {
        router.push("/sign-in");
      }, 2000);
    } catch (error) {
      setError(error.message || "Failed to create account. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden flex flex-col md:flex-row shadow-2xl">
        {/* Left Side - Image */}
        <div className="hidden md:block md:w-1/2 relative">
          <Image
            src={businessPartnersImage}
            alt="Business partners"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 0vw, 50vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>

        {/* Right Side - Form or Options */}
        <div className="md:w-1/2 p-8 overflow-y-auto relative max-h-screen">
          <button
            onClick={() => router.push("/")}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
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
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Sign up as Client
            </h2>
            <p className="text-gray-600">
              Find the perfect{" "}
              <span className="text-amber-500 font-semibold">Artisan</span>
            </p>
            <p className="text-sm text-gray-500">
              Discover skilled artisans and get your projects done
            </p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm">
              {success}
            </div>
          )}

          {!showForm ? (
            // Options Screen
            <div className="space-y-3">
              <button
                onClick={() => setShowForm(true)}
                className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-300 text-gray-700 py-3.5 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Continue with Email
              </button>

              <p className="text-xs text-gray-500 text-center mt-4 leading-relaxed">
                By signing up, you agree to the Terms of Service and Privacy
                Policy and to occasionally receive emails from us.
              </p>

              <p className="text-center text-sm text-gray-600 mt-4">
                Already have an account?{" "}
                <span
                  onClick={() => router.push("/sign-in")}
                  className="text-amber-600 font-semibold cursor-pointer hover:underline"
                >
                  Sign in
                </span>
              </p>
            </div>
          ) : (
            // Full Form
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name*
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter Name Here"
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter Name Here"
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter Number"
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Email"
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password*
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter Password (min 6 characters)"
                  required
                  minLength={6}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location*
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="City"
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Language*
                </label>
                <select
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                >
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                  <option value="German">German</option>
                  <option value="Italian">Italian</option>
                </select>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="mt-1 w-4 h-4 text-amber-500 rounded border-gray-300 focus:ring-amber-500"
                />
                <label htmlFor="terms" className="ml-2 text-xs text-gray-600">
                  By signing up, you agree to the Terms of Service and Privacy
                  Policy
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Signing up..." : "Sign up"}
              </button>

              <p className="text-center text-sm text-gray-600">
                Already have an account?{" "}
                <span
                  onClick={() => router.push("/sign-in")}
                  className="text-amber-600 font-semibold cursor-pointer hover:underline"
                >
                  Sign in
                </span>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

