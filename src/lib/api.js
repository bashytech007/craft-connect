// API Client for CraftConnect Backend
const USE_PROXY = process.env.NEXT_PUBLIC_USE_API_PROXY !== "false";
const API_BASE_URL = USE_PROXY
  ? "/api/proxy"
  : process.env.NEXT_PUBLIC_API_URL || "https://craftconnect-a6v8.onrender.com";

console.log("🔧 API Configuration:", {
  USE_PROXY,
  API_BASE_URL,
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  NEXT_PUBLIC_USE_API_PROXY: process.env.NEXT_PUBLIC_USE_API_PROXY,
});

// Helper function to get auth token
const getAuthToken = () => {
  if (typeof window !== "undefined") {
    return (
      localStorage.getItem("access_token") ||
      localStorage.getItem("auth_token") ||
      localStorage.getItem("token")
    );
  }
  return null;
};

// Helper function to set auth token
const setAuthToken = (token) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("access_token", token);
    localStorage.setItem("auth_token", token);
    console.log("✅ Token stored:", token.substring(0, 20) + "...");
  }
};

// Helper function to remove auth token
const removeAuthToken = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("access_token");
    localStorage.removeItem("auth_token");
    localStorage.removeItem("token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user_type");
    localStorage.removeItem("user_id");
  }
};

// Base fetch function with auth headers
const apiRequest = async (endpoint, options = {}) => {
  const token = getAuthToken();
  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  if (token && !options.skipAuth) {
    headers["Authorization"] = `Bearer ${token}`;
    // Debug log to check token format (first 10 chars)
    if (endpoint.includes("/users/me") || endpoint.includes("/users/profile")) {
      console.log("🔐 Auth Header:", `Bearer ${token.substring(0, 10)}...`);
    }
  }

  const config = {
    ...options,
    headers,
  };

  try {
    // Build the final URL
    let url;
    if (USE_PROXY) {
      const cleanEndpoint = endpoint.startsWith("/")
        ? endpoint.substring(1)
        : endpoint;
      url = `${API_BASE_URL}/${cleanEndpoint}`;
    } else {
      url = `${API_BASE_URL}${endpoint}`;
    }

    console.log("🌐 API Request:", {
      endpoint,
      url,
      method: config.method || "GET",
      hasToken: !!token,
      hasBody: !!config.body,
    });

    const response = await fetch(url, config);

    // Get content type before consuming body
    const contentType = response.headers.get("content-type");

    console.log("📥 Response received:", {
      status: response.status,
      statusText: response.statusText,
      ok: response.ok,
      contentType,
    });

    // Clone response so we can read it twice if needed
    const responseClone = response.clone();

    // Try to get response text
    let data;
    let rawText = "";

    try {
      rawText = await response.text();
      console.log(
        "📄 Raw response (first 300 chars):",
        rawText.substring(0, 300)
      );

      // Try to parse as JSON
      if (rawText) {
        try {
          data = JSON.parse(rawText);
          console.log("✅ Parsed JSON successfully");
        } catch (parseError) {
          console.error("❌ JSON parse error:", parseError.message);
          // If it's HTML, it might be an error page
          if (rawText.includes("<!DOCTYPE") || rawText.includes("<html")) {
            data = {
              error: "Backend returned HTML instead of JSON",
              htmlPreview: rawText.substring(0, 200),
            };
          } else {
            data = { message: rawText };
          }
        }
      } else {
        data = {};
      }
    } catch (textError) {
      console.error("❌ Could not read response text:", textError);
      data = { error: "Could not read response" };
    }

    if (!response.ok) {
      console.error("❌ API Error:", {
        status: response.status,
        statusText: response.statusText,
        url,
        data,
      });

      // Extract error message
      let errorMessage =
        data.detail || data.message || data.error || data.non_field_errors?.[0];

      // Handle field errors
      if (!errorMessage && data && typeof data === "object") {
        // Check for nested errors object
        if (data.errors) {
          const firstKey = Object.keys(data.errors)[0];
          const firstVal = data.errors[firstKey];
          errorMessage = Array.isArray(firstVal)
            ? `${firstKey}: ${firstVal[0]}`
            : `${firstKey}: ${firstVal}`;
        } else {
          // Check for direct field errors
          const keys = Object.keys(data).filter(
            (k) => k !== "error" && k !== "detail"
          );
          if (keys.length > 0) {
            const key = keys[0];
            const val = data[key];
            errorMessage = Array.isArray(val)
              ? `${key}: ${val[0]}`
              : `${key}: ${val}`;
          }
        }
      }

      if (!errorMessage) {
        errorMessage = `HTTP ${response.status}: ${response.statusText}`;
      }

      const error = new Error(errorMessage);
      error.status = response.status;
      error.data = data;
      throw error;
    }

    return data;
  } catch (error) {
    console.error("🔥 API Request Exception:", error);

    // Re-throw if it's already our custom error
    if (error.status) {
      // If unauthorized, normally we'd clear the token.
      // But we're debugging a "User not found" 401 which happens despite having a token.
      // So we will NOT clear it automatically for now.
      if (error.status === 401) {
        console.warn(
          "🚫 Unauthorized (401) - Token might be invalid or user not found."
        );
        // removeAuthToken(); // DISABLED for debugging
      }
      throw error;
    }

    // Handle fetch failures (network errors, connection refused, etc.)
    if (error.message && error.message.includes("fetch failed")) {
      const errorMessage = error.cause?.message || error.message;
      const enhancedError = new Error(
        `Cannot connect to backend server: ${errorMessage}. Please check if the backend is running.`
      );
      enhancedError.originalError = error;
      throw enhancedError;
    }

    // Network errors
    throw new Error(
      error.message || "Network error. Please check your connection."
    );
  }
};

// API Methods
export const api = {
  // Login - Matches Swagger spec exactly
  login: async (email, password) => {
    console.log("🔐 Login attempt for:", email);

    try {
      // Ensure we don't send any existing (potentially invalid) token for login
      const response = await apiRequest("/users/login/", {
        method: "POST",
        skipAuth: true,
        body: JSON.stringify({
          email_address: email,
          password: password,
        }),
      });

      console.log("🔑 Login response structure:", {
        hasTokens: !!response.tokens,
        hasToken: !!response.token,
        hasAccess: !!response.access,
        hasUser: !!response.user,
        keys: Object.keys(response),
      });

      // According to Swagger: returns JWT tokens
      // Common patterns: { tokens: { access, refresh } } or { access, refresh, user }
      const token =
        response.tokens?.access ||
        response.access ||
        response.token ||
        response.access_token;

      if (token) {
        setAuthToken(token);
        console.log("✅ Token saved from login");
      } else {
        console.warn("⚠️ No token in response:", response);
      }

      // Store user metadata
      if (typeof window !== "undefined") {
        if (response.user) {
          if (response.user.user_type) {
            localStorage.setItem("user_type", response.user.user_type);
          }
          if (response.user.id) {
            localStorage.setItem("user_id", String(response.user.id));
          }
          // Store profile picture if available
          const pic =
            response.user.profile_picture || response.user.profile_photo_url;
          if (pic) {
            localStorage.setItem("profile_picture", pic);
          }
        }

        // Also check top-level fields
        if (response.user_type) {
          localStorage.setItem("user_type", response.user_type);
        }
        if (response.user_id || response.id) {
          localStorage.setItem(
            "user_id",
            String(response.user_id || response.id)
          );
        }
        if (response.profile_picture || response.profile_photo_url) {
          localStorage.setItem(
            "profile_picture",
            response.profile_picture || response.profile_photo_url
          );
        }
      }

      return response;
    } catch (error) {
      console.error("❌ Login failed:", error.message);
      throw error;
    }
  },

  // Register Artisan - Matches Swagger spec
  registerArtisan: async (userData) => {
    const payload = {
      first_name: userData.firstName,
      last_name: userData.lastName,
      phone_number: userData.phoneNumber,
      email_address: userData.email,
      password: userData.password,
      location: userData.location,
      language: userData.language || "English",
    };

    // Optional fields
    if (userData.bio) payload.bio = userData.bio;
    if (userData.businessName) payload.business_name = userData.businessName;
    if (userData.tradeCategory) payload.trade_category = userData.tradeCategory;

    // Add profile photo and portfolio URLs if provided
    if (userData.profilePhotoUrl) {
      payload.profile_photo_url = userData.profilePhotoUrl;
    }

    if (userData.portfolioUrls && userData.portfolioUrls.length > 0) {
      payload.portfolio_urls = userData.portfolioUrls;
    }

    // Add KYC fields if provided
    if (userData.ninType) payload.nin_type = userData.ninType;
    if (userData.ninFrontUrl) payload.nin_front_url = userData.ninFrontUrl;
    if (userData.ninBackUrl) payload.nin_back_url = userData.ninBackUrl;
    if (userData.selfieUrl) payload.selfie_url = userData.selfieUrl;

    console.log("📝 Registering artisan:", payload.email_address);

    const response = await apiRequest("/users/artisan/register/", {
      method: "POST",
      skipAuth: true,
      body: JSON.stringify(payload),
    });

    return response;
  },

  // Register Client - Matches Swagger spec
  registerClient: async (userData) => {
    const payload = {
      first_name: userData.firstName,
      last_name: userData.lastName,
      phone_number: userData.phoneNumber,
      email_address: userData.email,
      password: userData.password,
      location: userData.location,
      language: userData.language || "English",
    };

    // Optional fields
    if (userData.bio) payload.bio = userData.bio;
    if (userData.businessName) payload.business_name = userData.businessName;

    // Add profile photo if provided
    if (userData.profilePhotoUrl) {
      payload.profile_photo_url = userData.profilePhotoUrl;
    }

    console.log("📝 Registering client:", payload.email_address);

    const response = await apiRequest("/users/client/register/", {
      method: "POST",
      skipAuth: true,
      body: JSON.stringify(payload),
    });

    return response;
  },

  // Get current user - Uses token automatically
  getCurrentUser: async () => {
    console.log("👤 Fetching current user with token");
    return await apiRequest("/users/me/");
  },

  // Get profile by ID or token
  getProfile: async ({ userType, userId } = {}) => {
    // First try /users/me/ (requires token)
    try {
      console.log("👤 getProfile: Attempting /users/me/");
      return await apiRequest("/users/me/");
    } catch (error) {
      console.warn("⚠️ /users/me/ failed:", error.message);

      // If 401, the token is invalid/expired.
      // We'll try the fallback, but if we don't have user_type/user_id, we can't proceed.

      // Fallback to /users/profile/ with params
      let finalUserType = userType;
      let finalUserId = userId;

      if (typeof window !== "undefined") {
        if (!finalUserType) finalUserType = localStorage.getItem("user_type");
        if (!finalUserId) finalUserId = localStorage.getItem("user_id");
      }

      console.log("👤 getProfile: Fallback params:", {
        finalUserType,
        finalUserId,
      });

      if (!finalUserType || !finalUserId) {
        // If we don't have IDs and the token failed, rethrow the token error
        if (error.status === 401) throw error;
        throw new Error("Cannot get profile: missing user_type or user_id");
      }

      const query = new URLSearchParams();
      query.append("user_type", finalUserType);
      query.append("user_id", finalUserId);

      console.log("👤 getProfile: Attempting fallback to /users/profile/");

      // If the first call failed with 401, the token might be bad.
      // /users/profile/ might be public, so let's try WITHOUT the token first to avoid global 401s.
      // We pass skipAuth: true to apiRequest (we need to support this option)
      return await apiRequest(`/users/profile/?${query.toString()}`, {
        skipAuth: true,
      });
    }
  },

  // Get trade categories
  getTradeCategories: async () => {
    return await apiRequest("/users/trade-categories/");
  },

  // Create trade category
  createTradeCategory: async (name) => {
    return await apiRequest("/users/trade-categories/add/", {
      method: "POST",
      body: JSON.stringify({ name }),
    });
  },

  // Update profile - Uses FormData as per Swagger spec
  updateProfile: async (profileData, { userType, userId } = {}) => {
    let finalUserType = userType;
    let finalUserId = userId;

    if (typeof window !== "undefined") {
      if (!finalUserType) finalUserType = localStorage.getItem("user_type");
      if (!finalUserId) finalUserId = localStorage.getItem("user_id");
    }

    if (!finalUserType || !finalUserId) {
      throw new Error("Missing user_type or user_id");
    }

    console.log("📝 Updating profile:", { finalUserType, finalUserId });

    // Build FormData as required by backend
    const formData = new FormData();
    formData.append("user_type", finalUserType);
    formData.append("user_id", String(finalUserId));

    // Debug log for FormData
    console.log("📦 Update Profile Payload:");
    console.log("- user_type:", finalUserType);
    console.log("- user_id:", finalUserId);

    // Add profile fields
    const fieldMap = {
      firstName: "first_name",
      lastName: "last_name",
      phoneNumber: "phone_number",
      bio: "bio",
      businessName: "business_name",
      location: "location",
      language: "language",
    };

    for (const [jsKey, apiKey] of Object.entries(fieldMap)) {
      if (profileData[jsKey] !== undefined && profileData[jsKey] !== null) {
        formData.append(apiKey, String(profileData[jsKey]));
      }
    }

    // Handle profile picture file
    if (profileData.profile_picture instanceof File) {
      formData.append("profile_picture", profileData.profile_picture);
    }

    const token = getAuthToken();
    const headers = {};
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const url = USE_PROXY
      ? `${API_BASE_URL}/users/profile/update/`
      : `${API_BASE_URL}/users/profile/update/`;

    console.log("📤 Sending profile update to:", url);

    // Log headers
    console.log("🔑 Update Headers:", headers);

    try {
      const response = await fetch(url, {
        method: "PUT",
        headers,
        body: formData,
      });

      const contentType = response.headers.get("content-type");
      let data = {};

      if (contentType?.includes("application/json")) {
        data = await response.json();
      } else {
        const text = await response.text();
        data = text ? { message: text } : {};
      }

      if (!response.ok) {
        // Check for User Not Found errors (404 or 401 with specific message)
        const isUserNotFound =
          response.status === 404 ||
          (response.status === 401 &&
            (data.detail === "User not found" ||
              data.code === "user_not_found"));

        if (isUserNotFound) {
          console.warn(
            `⚠️ User not found with type '${finalUserType}'. Starting retry sequence...`
          );

          // List of all possible user types to try
          const userTypesToTry = ["Artisan", "artisan", "Client", "client"];

          // Remove the one we just tried to avoid duplicate
          const remainingTypes = userTypesToTry.filter(
            (t) => t !== finalUserType
          );

          for (const typeToTry of remainingTypes) {
            console.log(`🔄 Retrying update with user_type: '${typeToTry}'...`);

            const retryFormData = new FormData();
            // Rebuild form data with new user_type
            for (const [key, value] of formData.entries()) {
              if (key === "user_type") {
                retryFormData.append("user_type", typeToTry);
              } else {
                retryFormData.append(key, value);
              }
            }

            try {
              const retryResponse = await fetch(url, {
                method: "PUT",
                headers,
                body: retryFormData,
              });

              if (retryResponse.ok) {
                console.log(
                  `✅ Retry successful with user_type: '${typeToTry}'`
                );

                // Update localStorage with the correct working user_type
                if (typeof window !== "undefined") {
                  localStorage.setItem("user_type", typeToTry);
                }

                const retryContentType =
                  retryResponse.headers.get("content-type");
                if (retryContentType?.includes("application/json")) {
                  return await retryResponse.json();
                }
                return {}; // Success but no JSON
              } else {
                console.warn(
                  `❌ Retry failed with '${typeToTry}': ${retryResponse.status}`
                );
              }
            } catch (retryError) {
              console.warn(
                `❌ Retry exception with '${typeToTry}':`,
                retryError
              );
            }
          }

          console.error("❌ All retries failed for profile update.");
        }

        console.error("❌ Profile update failed:", data);
        const errorMessage =
          data.detail ||
          data.message ||
          data.error ||
          `HTTP ${response.status}: ${response.statusText}`;
        const error = new Error(errorMessage);
        error.status = response.status;
        error.data = data;
        throw error;
      }

      return data;
    } catch (error) {
      throw error;
    }
  },

  // Logout
  logout: () => {
    console.log("👋 Logging out");
    removeAuthToken();
  },

  // Check authentication
  isAuthenticated: () => {
    return !!getAuthToken();
  },
};

export { getAuthToken, setAuthToken, removeAuthToken };
