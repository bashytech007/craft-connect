"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "../../src/contexts/AuthContext";
import { api } from "../../src/lib/api";
import Image from "next/image";
import {
  Camera,
  Edit2,
  MapPin,
  Phone,
  Mail,
  Award,
  LogOut,
  Menu,
  X,
  Search,
  Bell,
  Check,
  Star,
  Bot,
  User,
} from "lucide-react";
import cclogo from "../../src/assets/cc-logo.svg";

// Force dynamic rendering
export const dynamic = "force-dynamic";

export default function ProfilePage() {
  const router = useRouter();
  const { user: authUser, logout } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const profilePhotoRef = useRef(null);

  const [editData, setEditData] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    location: "",
    bio: "",
    language: "English",
    profile_picture: null,
  });

  // Craft icons - you can replace these with actual images
  const craftIcons = [
    { name: "Woodworking", icon: "🪵" },
    { name: "Pottery", icon: "🏺" },
    { name: "Jewelry", icon: "💍" },
    { name: "Metalwork", icon: "⚒️" },
  ];

  useEffect(() => {
    if (!authUser) {
      router.push("/sign-in");
      return;
    }
    getProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authUser]);

  const getProfile = async () => {
    try {
      // Use /users/me/ endpoint which the API will try first
      const profileData = await api.getProfile();
      console.log("Profile data:", profileData);
      setProfile(profileData);
      setEditData({
        first_name: profileData?.first_name || "",
        last_name: profileData?.last_name || "",
        phone_number: profileData?.phone_number || "",
        location: profileData?.location || "",
        bio: profileData?.bio || "",
        language: profileData?.language || "English",
        profile_picture:
          profileData?.profile_picture ||
          profileData?.profile_photo_url ||
          profileData?.profile_photo ||
          null,
      });
    } catch (error) {
      console.error("Error fetching profile:", error);
      // Don't redirect on 401/400 if we have user data from auth context
      // Just show empty profile or error message
      if (
        (error.message?.includes("401") ||
          error.message?.includes("Unauthorized")) &&
        !authUser
      ) {
        router.push("/sign-in");
        return;
      }

      // If we have authUser but API fails, set profile from authUser so UI can still render
      if (authUser) {
        setProfile({
          first_name: authUser.first_name || authUser.user?.first_name || "",
          last_name: authUser.last_name || authUser.user?.last_name || "",
          email_address:
            authUser.email_address ||
            authUser.email ||
            authUser.user?.email_address ||
            "",
          location:
            authUser.location || authUser.user?.location || "Not specified",
          bio: authUser.bio || authUser.user?.bio || "",
          language: authUser.language || authUser.user?.language || "English",
          profile_picture:
            authUser.profile_picture ||
            authUser.profile_photo_url ||
            authUser.user?.profile_picture ||
            null,
        });
        setEditData({
          first_name: authUser.first_name || authUser.user?.first_name || "",
          last_name: authUser.last_name || authUser.user?.last_name || "",
          phone_number:
            authUser.phone_number || authUser.user?.phone_number || "",
          location: authUser.location || authUser.user?.location || "",
          bio: authUser.bio || authUser.user?.bio || "",
          language: authUser.language || authUser.user?.language || "English",
          profile_picture:
            authUser.profile_picture || authUser.profile_photo_url || null,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  // File upload handler - same as signup
  const handleFileUpload = async (file, entityId, intent = "profile") => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("entityType", "artisan");
      formData.append("entityId", entityId);
      formData.append("intent", intent);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Upload failed");
      }

      const data = await response.json();
      return {
        url: data.url,
        key: data.key,
        filename: data.filename,
      };
    } catch (error) {
      console.error("Upload error:", error);
      throw error;
    }
  };

  // Handle profile photo upload
  const handleProfilePhotoChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert("Profile photo must be less than 5MB");
      return;
    }

    setIsUploading(true);
    try {
      const { userType, userId } = getUserIdentifiers();
      if (!userType || !userId) {
        throw new Error("Missing user_type or user_id");
      }

      // Option 1: Upload to R2 first, then update profile with URL
      const result = await handleFileUpload(file, userId, "profile");

      // Update profile with new photo URL - backend expects FormData
      const updatedProfile = await api.updateProfile(
        {
          profile_picture: result.url, // Try profile_picture first
          profile_photo_url: result.url, // Also include profile_photo_url as fallback
        },
        { userType, userId },
        false // FormData conversion handled in api.js
      );

      // Update local state
      setProfile(
        updatedProfile || {
          ...profile,
          profile_picture: result.url,
          profile_photo_url: result.url,
        }
      );

      setEditData({
        ...editData,
        profile_picture: result.url,
      });

      alert("Profile photo updated successfully!");
      // Refresh profile data
      await getProfile();
    } catch (err) {
      console.error("Profile photo upload error:", err);
      const errorMessage =
        err.data?.detail ||
        err.data?.message ||
        err.message ||
        "Failed to upload profile photo";
      alert(errorMessage);
    } finally {
      setIsUploading(false);
    }
  };

  const handleUpdate = async (additionalData = {}) => {
    setSaving(true);
    try {
      const { userType, userId } = getUserIdentifiers();
      if (!userType || !userId) {
        throw new Error("Missing user_type or user_id");
      }

      // Regular JSON update (profile photo is handled separately via handleProfilePhotoChange)
      const updateData = {
        first_name: editData.first_name,
        last_name: editData.last_name,
        phone_number: editData.phone_number,
        location: editData.location,
        bio: editData.bio,
        language: editData.language,
        ...additionalData,
      };

      const updatedProfile = await api.updateProfile(updateData, {
        userType,
        userId,
      });

      setProfile(updatedProfile || { ...profile, ...updateData });
      setEditing(false);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Profile update error:", error);
      alert("Error updating profile: " + (error.message || "Unknown error"));
    } finally {
      setSaving(false);
    }
  };

  const getUserIdentifiers = () => {
    if (!authUser) {
      // Try localStorage as fallback
      if (typeof window !== "undefined") {
        return {
          userType: localStorage.getItem("user_type"),
          userId: localStorage.getItem("user_id"),
        };
      }
      return { userType: null, userId: null };
    }
    return {
      userType:
        authUser.user_type ||
        authUser.userType ||
        authUser?.user?.user_type ||
        authUser?.profile_type ||
        (typeof window !== "undefined"
          ? localStorage.getItem("user_type")
          : null),
      userId:
        authUser.user_id ||
        authUser.userId ||
        authUser?.user?.id ||
        authUser?.id ||
        (typeof window !== "undefined"
          ? localStorage.getItem("user_id")
          : null),
    };
  };

  const handleSignOut = () => {
    logout();
    router.push("/sign-in");
  };

  // Skill level - default to 4 out of 5 stars
  const skillLevel = profile?.skill_level || 4;
  const maxSkillLevel = 5;

  // Get API base URL for images
  const getImageUrl = (url) => {
    if (!url) return null;
    if (url.startsWith("http")) return url;

    // Get base URL without /api suffix
    let baseUrl =
      process.env.NEXT_PUBLIC_API_URL ||
      "https://craftconnect-a6v8.onrender.com";

    // Remove /api if present at the end
    if (baseUrl.endsWith("/api")) {
      baseUrl = baseUrl.slice(0, -4);
    }
    if (baseUrl.endsWith("/api/")) {
      baseUrl = baseUrl.slice(0, -5);
    }

    // Ensure baseUrl doesn't have trailing slash
    baseUrl = baseUrl.replace(/\/$/, "");

    // Ensure url has leading slash
    const path = url.startsWith("/") ? url : `/${url}`;

    return `${baseUrl}${path}`;
  };

  // Get profile picture URL - check multiple possible field names
  const rawProfilePictureUrl =
    profile?.profile_picture ||
    profile?.profile_photo_url ||
    profile?.profile_photo ||
    editData?.profile_picture ||
    (typeof window !== "undefined"
      ? localStorage.getItem("profile_picture")
      : null) ||
    null;

  const profilePictureUrl = getImageUrl(rawProfilePictureUrl);

  // Check if URL is valid (not just a placeholder)
  const hasValidProfilePicture =
    profilePictureUrl &&
    profilePictureUrl !== "null" &&
    profilePictureUrl !== "undefined" &&
    (profilePictureUrl.startsWith("http") || profilePictureUrl.startsWith("/"));

  // Show loading only if we don't have any user data at all
  if (loading && !authUser && !profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Header */}
      <header className="bg-white border-b border-gray-200 md:hidden">
        <div className="px-4 py-3">
          <div className="text-xs text-gray-400 uppercase mb-2">PROFILE</div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src={cclogo}
                  alt="CraftConnect"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                  unoptimized
                />
                <span className="font-bold text-gray-900">CraftConnet</span>
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Search className="w-5 h-5 text-gray-700" />
              <Bell className="w-5 h-5 text-gray-700" />
              <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">
                  {profile?.first_name?.charAt(0) || "U"}
                </span>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mt-3 relative">
            <input
              type="text"
              placeholder="Try 'Masonry & Bricklaying'"
              className="w-full px-4 py-2.5 pl-10 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-sm"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-amber-500" />
          </div>
        </div>
      </header>

      {/* Desktop Header */}
      <header className="hidden md:block bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="text-xs text-gray-400 uppercase mb-2">PROFILE</div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="text-gray-700">
                <Menu className="w-5 h-5" />
              </button>
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src={cclogo}
                  alt="CraftConnect"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                  unoptimized
                />
                <span className="font-bold text-gray-900 text-lg">
                  CraftConnet
                </span>
              </Link>
              <div className="relative ml-4">
                <input
                  type="text"
                  placeholder="Try 'Masonry & Bricklaying'"
                  className="w-64 px-4 py-2 pl-10 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-sm"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-amber-500" />
              </div>
            </div>
            <nav className="flex items-center gap-6">
              <a
                href="#"
                className="text-gray-700 hover:text-amber-600 text-sm font-medium flex items-center gap-1"
              >
                Learning <span className="text-xs">▼</span>
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-amber-600 text-sm font-medium flex items-center gap-1"
              >
                Explore <span className="text-xs">▼</span>
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-amber-600 text-sm font-medium flex items-center gap-1"
              >
                English <span className="text-xs">▼</span>
              </a>
              <div className="flex items-center gap-2">
                <span className="text-gray-700 text-sm font-medium">
                  {profile?.first_name || "User"}
                </span>
                <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">
                    {profile?.first_name?.charAt(0) || "U"}
                  </span>
                </div>
              </div>
              <Bell className="w-5 h-5 text-gray-700" />
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Profile Card - Mobile: Stacked, Desktop: Two Column */}
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              {/* Left Column - Visuals (Profile Pic, Stars, Language, Crafts) */}
              <div className="flex flex-col items-center md:items-start md:w-1/3">
                {/* Profile Picture */}
                <div className="relative mb-4">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gradient-to-br from-amber-400 to-amber-600 relative">
                    {hasValidProfilePicture ? (
                      <>
                        <img
                          key={profilePictureUrl}
                          src={profilePictureUrl}
                          alt="Profile"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // If image fails to load, hide it and show fallback
                            console.error(
                              "Failed to load profile picture:",
                              profilePictureUrl
                            );
                            const parent = e.target.parentElement;
                            e.target.style.display = "none";
                            const fallback =
                              parent.querySelector(".profile-fallback");
                            if (fallback) fallback.style.display = "flex";
                          }}
                        />
                        <div className="profile-fallback w-full h-full hidden absolute inset-0 flex items-center justify-center text-white text-4xl md:text-5xl font-bold bg-gradient-to-br from-amber-400 to-amber-600">
                          {profile?.first_name?.charAt(0) ||
                            profile?.first_name?.[0] ||
                            "U"}
                        </div>
                      </>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white text-4xl md:text-5xl font-bold">
                        {profile?.first_name?.charAt(0) ||
                          profile?.first_name?.[0] ||
                          "U"}
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => profilePhotoRef.current?.click()}
                    disabled={isUploading}
                    className="absolute bottom-0 right-0 bg-amber-500 text-white p-2 rounded-full shadow-lg hover:bg-amber-600 transition-colors disabled:opacity-50"
                  >
                    <Camera className="w-4 h-4" />
                  </button>
                  <input
                    ref={profilePhotoRef}
                    type="file"
                    accept="image/*"
                    onChange={handleProfilePhotoChange}
                    className="hidden"
                  />
                </div>

                {/* Skill Level */}
                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-1">Skill level</div>
                  <div className="flex gap-1">
                    {[...Array(maxSkillLevel)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < skillLevel
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Language */}
                <div className="mb-4 text-sm">
                  <span className="text-gray-600">Language: </span>
                  <span className="text-gray-900 font-medium">
                    {profile?.language || editData.language || "English"}
                    {profile?.language === "English" ? "/Hausa" : ""}
                  </span>
                </div>

                {/* Craft Icons */}
                <div className="flex gap-3 mb-4">
                  {craftIcons.map((craft, index) => (
                    <div
                      key={index}
                      className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-xl border-2 border-gray-200"
                      title={craft.name}
                    >
                      {craft.icon}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Text Information */}
              <div className="flex-1 md:w-2/3">
                {/* Your Profile Section */}
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Your Profile
                  </h2>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="text-gray-900 font-semibold min-w-[100px]">
                        {profile?.first_name} {profile?.last_name}
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <div className="text-gray-700 text-sm">
                        {profile?.email_address ||
                          authUser?.email_address ||
                          "No email"}
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <div className="text-gray-700 text-sm">
                        {profile?.location || "Not specified"}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-600 font-semibold">
                        Professional
                      </span>
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                  </div>
                </div>

                {/* About Section */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    About
                  </h3>
                  {!editing ? (
                    <>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {profile?.bio ||
                          "I'm an About Us subtitle, designed to provide additional context, highlight key details, and support the main title by giving readers a clearer understanding of our offerings and impact."}
                      </p>
                      <button
                        onClick={() => setEditing(true)}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors mx-auto"
                      >
                        <Check className="w-4 h-4" />
                        Edit About
                      </button>
                    </>
                  ) : (
                    <div className="space-y-4">
                      <textarea
                        value={editData.bio}
                        onChange={(e) =>
                          setEditData({ ...editData, bio: e.target.value })
                        }
                        rows={4}
                        placeholder="Tell us about yourself..."
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none resize-none"
                      />
                      <div className="flex gap-2 justify-center">
                        <button
                          onClick={() => {
                            setEditing(false);
                            setEditData({
                              ...editData,
                              bio: profile?.bio || "",
                            });
                          }}
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => handleUpdate()}
                          disabled={saving}
                          className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors disabled:opacity-50 flex items-center gap-2"
                        >
                          <Check className="w-4 h-4" />
                          {saving ? "Saving..." : "Save"}
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* About Certification Section */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    About Certification
                  </h3>
                  <a
                    href="#"
                    className="text-red-600 hover:text-red-700 font-semibold inline-flex items-center gap-1"
                  >
                    Take Certificate Quiz
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Craft AI Floating Button */}
      <button
        className="fixed right-4 md:right-6 bottom-6 md:bottom-8 z-50 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 md:p-5 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 flex flex-col items-center justify-center group"
        aria-label="Craft AI"
      >
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center mb-1">
          <span className="text-green-600 font-bold text-lg md:text-xl">C</span>
        </div>
        <span className="text-xs md:text-sm font-semibold">Craft AI</span>
      </button>
    </div>
  );
}
