"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../src/contexts/AuthContext";
import { api } from "../../src/lib/api";
import {
  Camera,
  Edit2,
  MapPin,
  Phone,
  Mail,
  Award,
  LogOut,
  Home,
} from "lucide-react";

// Force dynamic rendering
export const dynamic = "force-dynamic";

export default function ProfilePage() {
  const router = useRouter();
  const { user: authUser, logout } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [editData, setEditData] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    location: "",
    bio: "",
    language: "English",
  });

  useEffect(() => {
    if (!authUser) {
      router.push("/sign-in");
      return;
    }
    getProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authUser]);

  const getUserIdentifiers = () => {
    if (!authUser) return { userType: null, userId: null };
    return {
      userType:
        authUser.user_type ||
        authUser.userType ||
        authUser?.user?.user_type ||
        authUser?.profile_type ||
        null,
      userId:
        authUser.user_id ||
        authUser.userId ||
        authUser?.user?.id ||
        authUser?.id ||
        null,
    };
  };

  const getProfile = async () => {
    try {
      const { userType, userId } = getUserIdentifiers();
      if (!userType || !userId) {
        throw new Error("Missing user_type or user_id");
      }

      const profileData = await api.getProfile({ userType, userId });
      setProfile(profileData);
      setEditData({
        first_name: profileData?.first_name || "",
        last_name: profileData?.last_name || "",
        phone_number: profileData?.phone_number || "",
        location: profileData?.location || "",
        bio: profileData?.bio || "",
        language: profileData?.language || "English",
      });
    } catch (error) {
      console.error("Error fetching profile:", error);
      if (
        error.message?.includes("401") ||
        error.message?.includes("Unauthorized")
      ) {
        router.push("/sign-in");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async () => {
    setSaving(true);
    try {
      const { userType, userId } = getUserIdentifiers();
      if (!userType || !userId) {
        throw new Error("Missing user_type or user_id");
      }

      const updatedProfile = await api.updateProfile(editData, {
        userType,
        userId,
      });
      setProfile(updatedProfile);
      setEditing(false);
      alert("Profile updated successfully!");
    } catch (error) {
      alert("Error updating profile: " + (error.message || "Unknown error"));
    } finally {
      setSaving(false);
    }
  };

  const handleSignOut = () => {
    logout();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => router.push("/")}
            >
              <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="font-bold text-xl text-gray-900">
                CraftConnect
              </span>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => router.push("/")}
                className="flex items-center gap-2 text-gray-700 hover:text-amber-600 transition-colors"
              >
                <Home className="w-5 h-5" />
                <span className="hidden sm:inline">Home</span>
              </button>
              <button
                onClick={handleSignOut}
                className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Profile Header Section */}
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 h-32"></div>

          <div className="px-8 pb-8">
            {/* Profile Photo */}
            <div className="relative -mt-16 mb-6">
              <div className="w-32 h-32 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white text-4xl font-bold">
                  {profile?.first_name?.charAt(0) || "U"}
                </div>
              </div>
              <button className="absolute bottom-0 right-0 bg-amber-500 text-white p-2 rounded-full shadow-lg hover:bg-amber-600 transition-colors">
                <Camera className="w-4 h-4" />
              </button>
            </div>

            {/* Edit Button */}
            <div className="flex justify-end mb-4">
              {!editing ? (
                <button
                  onClick={() => setEditing(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <Edit2 className="w-4 h-4" />
                  Edit About
                </button>
              ) : (
                <div className="flex gap-2">
                  <button
                    onClick={() => setEditing(false)}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleUpdate}
                    disabled={saving}
                    className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors disabled:opacity-50"
                  >
                    {saving ? "Saving..." : "Save Changes"}
                  </button>
                </div>
              )}
            </div>

            {/* Profile Content */}
            {!editing ? (
              // View Mode
              <div className="space-y-6">
                {/* Your Profile Section */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Your Profile
                  </h2>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="text-gray-900 font-semibold min-w-[120px]">
                        Name:
                      </div>
                      <div className="text-gray-700">
                        {profile?.first_name} {profile?.last_name}
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div className="text-gray-700">
                        {profile?.email_address || authUser?.email_address}
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div className="text-gray-700">
                        {profile?.phone_number || "Not provided"}
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div className="text-gray-700">
                        {profile?.location || "Not specified"}
                      </div>
                    </div>

                    {profile?.trade_category && (
                      <div className="flex items-start gap-3">
                        <div className="text-gray-900 font-semibold min-w-[120px]">
                          Category:
                        </div>
                        <div className="inline-flex items-center px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                          Category ID: {profile.trade_category}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* About Section */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    About
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {profile?.bio ||
                      'No description added yet. Click "Edit About" to add your story.'}
                  </p>
                </div>

                {/* Certifications Section */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-500" />
                    About Certification
                  </h3>
                  <button className="text-amber-600 hover:text-amber-700 font-semibold flex items-center gap-2">
                    Take Certificate Quiz
                    <span>→</span>
                  </button>
                </div>
              </div>
            ) : (
              // Edit Mode
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleUpdate();
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={editData.first_name}
                      onChange={(e) =>
                        setEditData({ ...editData, first_name: e.target.value })
                      }
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={editData.last_name}
                      onChange={(e) =>
                        setEditData({ ...editData, last_name: e.target.value })
                      }
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={editData.phone_number}
                    onChange={(e) =>
                      setEditData({ ...editData, phone_number: e.target.value })
                    }
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    value={editData.location}
                    onChange={(e) =>
                      setEditData({ ...editData, location: e.target.value })
                    }
                    placeholder="City, State"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bio
                  </label>
                  <textarea
                    value={editData.bio}
                    onChange={(e) =>
                      setEditData({ ...editData, bio: e.target.value })
                    }
                    rows={4}
                    placeholder="Tell us about yourself, your skills, and your experience..."
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Language
                  </label>
                  <select
                    value={editData.language}
                    onChange={(e) =>
                      setEditData({ ...editData, language: e.target.value })
                    }
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                  >
                    <option value="English">English</option>
                    <option value="French">French</option>
                    <option value="Spanish">Spanish</option>
                    <option value="Hausa">Hausa</option>
                    <option value="Yoruba">Yoruba</option>
                    <option value="Igbo">Igbo</option>
                  </select>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
