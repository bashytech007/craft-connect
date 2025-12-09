(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/craft/craft-connect/src/lib/api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// API Client for CraftConnect Backend
__turbopack_context__.s([
    "api",
    ()=>api,
    "getAuthToken",
    ()=>getAuthToken,
    "removeAuthToken",
    ()=>removeAuthToken,
    "setAuthToken",
    ()=>setAuthToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const USE_PROXY = ("TURBOPACK compile-time value", "true") !== "false";
const API_BASE_URL = ("TURBOPACK compile-time truthy", 1) ? "/api/proxy" : "TURBOPACK unreachable";
console.log("🔧 API Configuration:", {
    USE_PROXY,
    API_BASE_URL,
    NEXT_PUBLIC_API_URL: ("TURBOPACK compile-time value", "https://craftconnect-a6v8.onrender.com/api"),
    NEXT_PUBLIC_USE_API_PROXY: ("TURBOPACK compile-time value", "true")
});
// Helper function to get auth token
const getAuthToken = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        return localStorage.getItem("access_token") || localStorage.getItem("auth_token") || localStorage.getItem("token");
    }
    //TURBOPACK unreachable
    ;
};
// Helper function to set auth token
const setAuthToken = (token)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        localStorage.setItem("access_token", token);
        localStorage.setItem("auth_token", token);
        console.log("✅ Token stored:", token.substring(0, 20) + "...");
    }
};
// Helper function to remove auth token
const removeAuthToken = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        localStorage.removeItem("access_token");
        localStorage.removeItem("auth_token");
        localStorage.removeItem("token");
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("user_type");
        localStorage.removeItem("user_id");
    }
};
// Base fetch function with auth headers
const apiRequest = async (endpoint, options = {})=>{
    const token = getAuthToken();
    const headers = {
        "Content-Type": "application/json",
        ...options.headers
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
        headers
    };
    try {
        // Build the final URL
        let url;
        if ("TURBOPACK compile-time truthy", 1) {
            const cleanEndpoint = endpoint.startsWith("/") ? endpoint.substring(1) : endpoint;
            url = `${API_BASE_URL}/${cleanEndpoint}`;
        } else {
            url = `${API_BASE_URL}${endpoint}`;
        }
        console.log("🌐 API Request:", {
            endpoint,
            url,
            method: config.method || "GET",
            hasToken: !!token,
            hasBody: !!config.body
        });
        const response = await fetch(url, config);
        // Get content type before consuming body
        const contentType = response.headers.get("content-type");
        console.log("📥 Response received:", {
            status: response.status,
            statusText: response.statusText,
            ok: response.ok,
            contentType
        });
        // Clone response so we can read it twice if needed
        const responseClone = response.clone();
        // Try to get response text
        let data;
        let rawText = "";
        try {
            rawText = await response.text();
            console.log("📄 Raw response (first 300 chars):", rawText.substring(0, 300));
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
                            htmlPreview: rawText.substring(0, 200)
                        };
                    } else {
                        data = {
                            message: rawText
                        };
                    }
                }
            } else {
                data = {};
            }
        } catch (textError) {
            console.error("❌ Could not read response text:", textError);
            data = {
                error: "Could not read response"
            };
        }
        if (!response.ok) {
            console.error("❌ API Error:", {
                status: response.status,
                statusText: response.statusText,
                url,
                data
            });
            // Extract error message
            let errorMessage = data.detail || data.message || data.error || data.non_field_errors?.[0];
            // Handle field errors
            if (!errorMessage && data && typeof data === "object") {
                // Check for nested errors object
                if (data.errors) {
                    const firstKey = Object.keys(data.errors)[0];
                    const firstVal = data.errors[firstKey];
                    errorMessage = Array.isArray(firstVal) ? `${firstKey}: ${firstVal[0]}` : `${firstKey}: ${firstVal}`;
                } else {
                    // Check for direct field errors
                    const keys = Object.keys(data).filter((k)=>k !== "error" && k !== "detail");
                    if (keys.length > 0) {
                        const key = keys[0];
                        const val = data[key];
                        errorMessage = Array.isArray(val) ? `${key}: ${val[0]}` : `${key}: ${val}`;
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
                console.warn("🚫 Unauthorized (401) - Token might be invalid or user not found.");
            // removeAuthToken(); // DISABLED for debugging
            }
            throw error;
        }
        // Handle fetch failures (network errors, connection refused, etc.)
        if (error.message && error.message.includes("fetch failed")) {
            const errorMessage = error.cause?.message || error.message;
            const enhancedError = new Error(`Cannot connect to backend server: ${errorMessage}. Please check if the backend is running.`);
            enhancedError.originalError = error;
            throw enhancedError;
        }
        // Network errors
        throw new Error(error.message || "Network error. Please check your connection.");
    }
};
const api = {
    // Login - Matches Swagger spec exactly
    login: async (email, password)=>{
        console.log("🔐 Login attempt for:", email);
        try {
            // Ensure we don't send any existing (potentially invalid) token for login
            const response = await apiRequest("/users/login/", {
                method: "POST",
                skipAuth: true,
                body: JSON.stringify({
                    email_address: email,
                    password: password
                })
            });
            console.log("🔑 Login response structure:", {
                hasTokens: !!response.tokens,
                hasToken: !!response.token,
                hasAccess: !!response.access,
                hasUser: !!response.user,
                keys: Object.keys(response)
            });
            // According to Swagger: returns JWT tokens
            // Common patterns: { tokens: { access, refresh } } or { access, refresh, user }
            const token = response.tokens?.access || response.access || response.token || response.access_token;
            if (token) {
                setAuthToken(token);
                console.log("✅ Token saved from login");
            } else {
                console.warn("⚠️ No token in response:", response);
            }
            // Store user metadata
            if ("TURBOPACK compile-time truthy", 1) {
                if (response.user) {
                    if (response.user.user_type) {
                        localStorage.setItem("user_type", response.user.user_type);
                    }
                    if (response.user.id) {
                        localStorage.setItem("user_id", String(response.user.id));
                    }
                    // Store profile picture if available
                    const pic = response.user.profile_picture || response.user.profile_photo_url;
                    if (pic) {
                        localStorage.setItem("profile_picture", pic);
                    }
                }
                // Also check top-level fields
                if (response.user_type) {
                    localStorage.setItem("user_type", response.user_type);
                }
                if (response.user_id || response.id) {
                    localStorage.setItem("user_id", String(response.user_id || response.id));
                }
                if (response.profile_picture || response.profile_photo_url) {
                    localStorage.setItem("profile_picture", response.profile_picture || response.profile_photo_url);
                }
            }
            return response;
        } catch (error) {
            console.error("❌ Login failed:", error.message);
            throw error;
        }
    },
    // Register Artisan - Matches Swagger spec
    registerArtisan: async (userData)=>{
        const payload = {
            first_name: userData.firstName,
            last_name: userData.lastName,
            phone_number: userData.phoneNumber,
            email_address: userData.email,
            password: userData.password,
            location: userData.location,
            language: userData.language || "English"
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
            body: JSON.stringify(payload)
        });
        return response;
    },
    // Register Client - Matches Swagger spec
    registerClient: async (userData)=>{
        const payload = {
            first_name: userData.firstName,
            last_name: userData.lastName,
            phone_number: userData.phoneNumber,
            email_address: userData.email,
            password: userData.password,
            location: userData.location,
            language: userData.language || "English"
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
            body: JSON.stringify(payload)
        });
        return response;
    },
    // Get current user - Uses token automatically
    getCurrentUser: async ()=>{
        console.log("👤 Fetching current user with token");
        return await apiRequest("/users/me/");
    },
    // Get profile by ID or token
    getProfile: async ({ userType, userId } = {})=>{
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
            if ("TURBOPACK compile-time truthy", 1) {
                if (!finalUserType) finalUserType = localStorage.getItem("user_type");
                if (!finalUserId) finalUserId = localStorage.getItem("user_id");
            }
            console.log("👤 getProfile: Fallback params:", {
                finalUserType,
                finalUserId
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
                skipAuth: true
            });
        }
    },
    // Get trade categories
    getTradeCategories: async ()=>{
        return await apiRequest("/users/trade-categories/");
    },
    // Create trade category
    createTradeCategory: async (name)=>{
        return await apiRequest("/users/trade-categories/add/", {
            method: "POST",
            body: JSON.stringify({
                name
            })
        });
    },
    // Update profile - Uses FormData as per Swagger spec
    updateProfile: async (profileData, { userType, userId } = {})=>{
        let finalUserType = userType;
        let finalUserId = userId;
        if ("TURBOPACK compile-time truthy", 1) {
            if (!finalUserType) finalUserType = localStorage.getItem("user_type");
            if (!finalUserId) finalUserId = localStorage.getItem("user_id");
        }
        if (!finalUserType || !finalUserId) {
            throw new Error("Missing user_type or user_id");
        }
        console.log("📝 Updating profile:", {
            finalUserType,
            finalUserId
        });
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
            language: "language"
        };
        for (const [jsKey, apiKey] of Object.entries(fieldMap)){
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
        const url = ("TURBOPACK compile-time truthy", 1) ? `${API_BASE_URL}/users/profile/update/` : "TURBOPACK unreachable";
        console.log("📤 Sending profile update to:", url);
        // Log headers
        console.log("🔑 Update Headers:", headers);
        try {
            const response = await fetch(url, {
                method: "PUT",
                headers,
                body: formData
            });
            const contentType = response.headers.get("content-type");
            let data = {};
            if (contentType?.includes("application/json")) {
                data = await response.json();
            } else {
                const text = await response.text();
                data = text ? {
                    message: text
                } : {};
            }
            if (!response.ok) {
                // Check for User Not Found errors (404 or 401 with specific message)
                const isUserNotFound = response.status === 404 || response.status === 401 && (data.detail === "User not found" || data.code === "user_not_found");
                if (isUserNotFound) {
                    console.warn(`⚠️ User not found with type '${finalUserType}'. Starting retry sequence...`);
                    // List of all possible user types to try
                    const userTypesToTry = [
                        "Artisan",
                        "artisan",
                        "Client",
                        "client"
                    ];
                    // Remove the one we just tried to avoid duplicate
                    const remainingTypes = userTypesToTry.filter((t)=>t !== finalUserType);
                    for (const typeToTry of remainingTypes){
                        console.log(`🔄 Retrying update with user_type: '${typeToTry}'...`);
                        const retryFormData = new FormData();
                        // Rebuild form data with new user_type
                        for (const [key, value] of formData.entries()){
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
                                body: retryFormData
                            });
                            if (retryResponse.ok) {
                                console.log(`✅ Retry successful with user_type: '${typeToTry}'`);
                                // Update localStorage with the correct working user_type
                                if ("TURBOPACK compile-time truthy", 1) {
                                    localStorage.setItem("user_type", typeToTry);
                                }
                                const retryContentType = retryResponse.headers.get("content-type");
                                if (retryContentType?.includes("application/json")) {
                                    return await retryResponse.json();
                                }
                                return {}; // Success but no JSON
                            } else {
                                console.warn(`❌ Retry failed with '${typeToTry}': ${retryResponse.status}`);
                            }
                        } catch (retryError) {
                            console.warn(`❌ Retry exception with '${typeToTry}':`, retryError);
                        }
                    }
                    console.error("❌ All retries failed for profile update.");
                }
                console.error("❌ Profile update failed:", data);
                const errorMessage = data.detail || data.message || data.error || `HTTP ${response.status}: ${response.statusText}`;
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
    logout: ()=>{
        console.log("👋 Logging out");
        removeAuthToken();
    },
    // Check authentication
    isAuthenticated: ()=>{
        return !!getAuthToken();
    }
};
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/craft/craft-connect/src/contexts/AuthContext.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// /* eslint-disable react-refresh/only-export-components */
// "use client";
// import React, { createContext, useContext, useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { api } from "../lib/api";
// const AuthContext = createContext(null);
// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();
//   useEffect(() => {
//     checkAuth();
//   }, []);
//   const checkAuth = async () => {
//     try {
//       if (api.isAuthenticated()) {
//         const userData = await api.getCurrentUser();
//         setUser(userData);
//       }
//     } catch (error) {
//       console.error("Auth check failed:", error);
//       // Only clear auth if it's an auth error (401, 403)
//       if (error.status === 401 || error.status === 403) {
//         api.logout();
//         setUser(null);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };
//   const login = async (email, password) => {
//     const response = await api.login(email, password);
//     // Try to get user data after login
//     try {
//       const userData = await api.getCurrentUser();
//       setUser(userData);
//     } catch {
//       // If getCurrentUser fails, use the login response if it contains user data
//       if (response.user || response.data) {
//         setUser(response.user || response.data);
//       }
//     }
//     return response;
//   };
//   const logout = () => {
//     api.logout();
//     setUser(null);
//     router.push("/");
//   };
//   const value = {
//     user,
//     loading,
//     login,
//     logout,
//     checkAuth,
//     isAuthenticated: api.isAuthenticated,
//   };
//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };
// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within AuthProvider");
//   }
//   return context;
// };
/* eslint-disable react-refresh/only-export-components */ __turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/src/lib/api.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const AuthProvider = ({ children })=>{
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            checkAuth();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["AuthProvider.useEffect"], []);
    const checkAuth = async ()=>{
        try {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].isAuthenticated()) {
                const userData = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].getCurrentUser();
                setUser(userData);
                // Store user metadata if available
                if (("TURBOPACK compile-time value", "object") !== "undefined" && userData) {
                    if (userData.user_type) {
                        localStorage.setItem("user_type", userData.user_type);
                    }
                    if (userData.id) {
                        localStorage.setItem("user_id", userData.id);
                    }
                }
            }
        } catch (error) {
            console.error("Auth check failed:", error);
            // Attempt to restore session from localStorage if API fails but we have a token
            // This is a desperate fallback for "User not found" issues
            if ("TURBOPACK compile-time truthy", 1) {
                const storedType = localStorage.getItem("user_type");
                const storedId = localStorage.getItem("user_id");
                const storedPic = localStorage.getItem("profile_picture");
                if (storedType && storedId && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].isAuthenticated()) {
                    console.warn("⚠️ API failed but restoring session from localStorage metadata");
                    setUser({
                        user_type: storedType,
                        id: storedId,
                        profile_picture: storedPic,
                        // We don't have name/email, but this keeps the session alive
                        first_name: "User"
                    });
                    setLoading(false);
                    return; // Don't logout
                }
            }
            // Only clear auth if it's an auth error (401, 403)
            if (error.status === 401 || error.status === 403) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].logout();
                setUser(null);
            }
        } finally{
            setLoading(false);
        }
    };
    const login = async (email, password)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].login(email, password);
            // Store user metadata from login response
            if ("TURBOPACK compile-time truthy", 1) {
                if (response.user) {
                    if (response.user.user_type) {
                        localStorage.setItem("user_type", response.user.user_type);
                    }
                    if (response.user.id) {
                        localStorage.setItem("user_id", response.user.id);
                    }
                } else if (response.user_type) {
                    localStorage.setItem("user_type", response.user_type);
                }
                if (response.user_id || response.id) {
                    localStorage.setItem("user_id", response.user_id || response.id);
                }
            }
            // Only try to get full user data if we have a token
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].isAuthenticated()) {
                try {
                    // Small delay to ensure token is fully stored
                    await new Promise((resolve)=>setTimeout(resolve, 100));
                    const userData = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].getCurrentUser();
                    setUser(userData);
                    // Update metadata from getCurrentUser if available
                    if (("TURBOPACK compile-time value", "object") !== "undefined" && userData) {
                        if (userData.user_type) {
                            localStorage.setItem("user_type", userData.user_type);
                        }
                        if (userData.id) {
                            localStorage.setItem("user_id", userData.id);
                        }
                    }
                } catch (err) {
                    // Only log as warning if it's not a 401 (which is expected if token is missing)
                    if (err.status !== 401) {
                        console.warn("Could not fetch user data after login:", err);
                    }
                    // If getCurrentUser fails, use the login response if it contains user data
                    if (response.user || response.data) {
                        setUser(response.user || response.data);
                    } else if (response.email_address || response.email) {
                        // If we have at least email, create a minimal user object
                        setUser({
                            email: response.email_address || response.email,
                            ...response
                        });
                    } else {
                        setUser(response);
                    }
                }
            } else {
                // No token available, use login response data
                console.warn("No authentication token available after login");
                if (response.user || response.data) {
                    setUser(response.user || response.data);
                } else {
                    setUser(response);
                }
            }
            return response;
        } catch (error) {
            console.error("Login error:", error);
            throw error;
        }
    };
    const logout = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].logout();
        setUser(null);
        router.push("/");
    };
    const value = {
        user,
        loading,
        login,
        logout,
        checkAuth,
        isAuthenticated: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].isAuthenticated
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/craft/craft-connect/src/contexts/AuthContext.jsx",
        lineNumber: 238,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AuthProvider, "J17Kp8z+0ojgAqGoY5o3BCjwWms=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AuthProvider;
const useAuth = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within AuthProvider");
    }
    return context;
};
_s1(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/craft/craft-connect/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/Desktop/craft/craft-connect/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Desktop/craft/craft-connect/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Desktop/craft/craft-connect/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/Desktop/craft/craft-connect/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Desktop/craft/craft-connect/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Desktop_craft_craft-connect_ff9d06e4._.js.map