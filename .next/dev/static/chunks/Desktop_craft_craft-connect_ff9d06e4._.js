(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/craft/craft-connect/src/lib/api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// // API Client for CraftConnect Backend
// // Use Next.js API proxy to avoid CORS issues in development
// // Set NEXT_PUBLIC_USE_API_PROXY=false to use direct API (requires CORS on backend)
// const USE_PROXY = process.env.NEXT_PUBLIC_USE_API_PROXY !== "false"; // Default to true (use proxy)
// const API_BASE_URL = USE_PROXY
//   ? "/api/proxy" // Use Next.js API proxy
//   : process.env.NEXT_PUBLIC_API_URL || "https://craftconnect-a6v8.onrender.com";
// // Helper function to get auth token
// const getAuthToken = () => {
//   if (typeof window !== "undefined") {
//     return localStorage.getItem("auth_token");
//   }
//   return null;
// };
// // Helper function to set auth token
// const setAuthToken = (token) => {
//   if (typeof window !== "undefined") {
//     localStorage.setItem("auth_token", token);
//   }
// };
// // Helper function to remove auth token
// const removeAuthToken = () => {
//   if (typeof window !== "undefined") {
//     localStorage.removeItem("auth_token");
//   }
// };
// // Base fetch function with auth headers
// const apiRequest = async (endpoint, options = {}) => {
//   const token = getAuthToken();
//   const headers = {
//     "Content-Type": "application/json",
//     ...options.headers,
//   };
//   if (token) {
//     headers["Authorization"] = `Bearer ${token}`;
//   }
//   const config = {
//     ...options,
//     headers,
//   };
//   try {
//     // Build the final URL
//     let url;
//     if (USE_PROXY) {
//       // For proxy, remove leading slash and build path: /api/proxy/users/artisan/register/
//       const cleanEndpoint = endpoint.startsWith("/")
//         ? endpoint.substring(1)
//         : endpoint;
//       url = `${API_BASE_URL}/${cleanEndpoint}`;
//     } else {
//       // Direct API call: http://localhost:8000/api/users/artisan/register/
//       url = `${API_BASE_URL}${endpoint}`;
//     }
//     const response = await fetch(url, config);
//     // Handle non-JSON responses
//     let data;
//     const contentType = response.headers.get("content-type");
//     if (contentType && contentType.includes("application/json")) {
//       data = await response.json();
//     } else {
//       const text = await response.text();
//       data = text ? { message: text } : {};
//     }
//     if (!response.ok) {
//       // Try to surface useful validation messages from common API shapes
//       let errorMessage = data.detail || data.message || data.error || undefined;
//       // Django/DRF style: { errors: { field: ["msg"] } }
//       if (!errorMessage && data && typeof data === "object" && data.errors) {
//         const firstKey = Object.keys(data.errors)[0];
//         const firstVal = data.errors[firstKey];
//         if (Array.isArray(firstVal)) {
//           errorMessage = `${firstKey}: ${firstVal[0]}`;
//         } else if (typeof firstVal === "string") {
//           errorMessage = `${firstKey}: ${firstVal}`;
//         }
//       }
//       // Fallback for field-level errors: { field: ["msg"] }
//       if (!errorMessage && data && typeof data === "object") {
//         const keys = Object.keys(data);
//         if (keys.length > 0) {
//           const key = keys[0];
//           const val = data[key];
//           if (Array.isArray(val)) {
//             errorMessage = `${key}: ${val[0]}`;
//           } else if (typeof val === "string") {
//             errorMessage = `${key}: ${val}`;
//           }
//         }
//       }
//       if (!errorMessage) {
//         errorMessage = `HTTP ${response.status}: ${response.statusText}`;
//       }
//       const error = new Error(errorMessage);
//       error.status = response.status;
//       error.data = data;
//       throw error;
//     }
//     return data;
//   } catch (error) {
//     // Re-throw if it's already our custom error
//     if (error.status) {
//       throw error;
//     }
//     // Otherwise, wrap network errors
//     throw new Error(
//       error.message || "Network error. Please check your connection."
//     );
//   }
// };
// // API Methods
// export const api = {
//   // Register Artisan
//   registerArtisan: async (userData) => {
//     const payload = {
//       first_name: userData.firstName,
//       last_name: userData.lastName,
//       phone_number: userData.phoneNumber,
//       email_address: userData.email,
//       password: userData.password,
//       location: userData.location,
//       language: userData.language || "English",
//       bio: userData.bio || "",
//       business_name: userData.businessName || "",
//     };
//     // Only include trade_category if we have a valid ID
//     if (userData.tradeCategory) {
//       payload.trade_category = userData.tradeCategory;
//     }
//     const response = await apiRequest("/users/artisan/register/", {
//       method: "POST",
//       body: JSON.stringify(payload),
//     });
//     return response;
//   },
//   // Register Client
//   registerClient: async (userData) => {
//     const response = await apiRequest("/users/client/register/", {
//       method: "POST",
//       body: JSON.stringify({
//         first_name: userData.firstName,
//         last_name: userData.lastName,
//         phone_number: userData.phoneNumber,
//         email_address: userData.email,
//         password: userData.password,
//         location: userData.location,
//         language: userData.language || "English",
//         bio: userData.bio || "",
//         business_name: userData.businessName || "",
//       }),
//     });
//     return response;
//   },
//   // Login
//   login: async (email, password) => {
//     const response = await apiRequest("/users/login/", {
//       method: "POST",
//       body: JSON.stringify({
//         email_address: email,
//         password: password,
//       }),
//     });
//     // Store token if provided (check multiple possible field names)
//     const token =
//       response.token ||
//       response.access_token ||
//       response.access ||
//       response.data?.token;
//     if (token) {
//       setAuthToken(token);
//     }
//     return response;
//   },
//   // Get current user
//   getCurrentUser: async () => {
//     return await apiRequest("/users/me/");
//   },
//   // Get profile
//   getProfile: async ({ userType, userId } = {}) => {
//     const query = new URLSearchParams();
//     if (userType) query.append("user_type", userType);
//     if (userId) query.append("user_id", userId);
//     const endpoint = query.toString()
//       ? `/users/profile/?${query.toString()}`
//       : "/users/profile/";
//     return await apiRequest(endpoint);
//   },
//   // Get all trade categories
//   getTradeCategories: async () => {
//     return await apiRequest("/users/trade-categories/");
//   },
//   // Create new trade category
//   createTradeCategory: async (name) => {
//     return await apiRequest("/users/trade-categories/add/", {
//       method: "POST",
//       body: JSON.stringify({ name }),
//     });
//   },
//   // Update profile
//   updateProfile: async (profileData, { userType, userId } = {}) => {
//     const query = new URLSearchParams();
//     if (userType) query.append("user_type", userType);
//     if (userId) query.append("user_id", userId);
//     const endpoint = query.toString()
//       ? `/users/profile/update/?${query.toString()}`
//       : "/users/profile/update/";
//     return await apiRequest(endpoint, {
//       method: "PUT",
//       body: JSON.stringify(profileData),
//     });
//   },
//   // Logout
//   logout: () => {
//     removeAuthToken();
//   },
//   // Check if user is authenticated
//   isAuthenticated: () => {
//     return !!getAuthToken();
//   },
// };
// export { getAuthToken, setAuthToken, removeAuthToken };
// API Client for CraftConnect Backend
// Use Next.js API proxy to avoid CORS issues in development
// Set NEXT_PUBLIC_USE_API_PROXY=false to use direct API (requires CORS on backend)
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
const USE_PROXY = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_USE_API_PROXY !== "false"; // Default to true (use proxy)
const API_BASE_URL = USE_PROXY ? "/api/proxy" // Use Next.js API proxy
 : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || "https://craftconnect-a6v8.onrender.com";
// Helper function to get auth token
const getAuthToken = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        // Try multiple possible token names for compatibility
        return localStorage.getItem("access_token") || localStorage.getItem("auth_token") || localStorage.getItem("token");
    }
    //TURBOPACK unreachable
    ;
};
// Helper function to set auth token
const setAuthToken = (token)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        localStorage.setItem("access_token", token); // Primary token storage
        localStorage.setItem("auth_token", token); // Backwards compatibility
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
    if (token) {
        headers["Authorization"] = `Bearer ${token}`;
    }
    const config = {
        ...options,
        headers
    };
    try {
        // Build the final URL
        let url;
        if (USE_PROXY) {
            // For proxy, remove leading slash and build path: /api/proxy/users/artisan/register/
            const cleanEndpoint = endpoint.startsWith("/") ? endpoint.substring(1) : endpoint;
            url = `${API_BASE_URL}/${cleanEndpoint}`;
        } else {
            // Direct API call: http://localhost:8000/api/users/artisan/register/
            url = `${API_BASE_URL}${endpoint}`;
        }
        const response = await fetch(url, config);
        // Handle non-JSON responses
        let data;
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            data = await response.json();
        } else {
            const text = await response.text();
            data = text ? {
                message: text
            } : {};
        }
        if (!response.ok) {
            // Try to surface useful validation messages from common API shapes
            let errorMessage = data.detail || data.message || data.error || undefined;
            // Django/DRF style: { errors: { field: ["msg"] } }
            if (!errorMessage && data && typeof data === "object" && data.errors) {
                const firstKey = Object.keys(data.errors)[0];
                const firstVal = data.errors[firstKey];
                if (Array.isArray(firstVal)) {
                    errorMessage = `${firstKey}: ${firstVal[0]}`;
                } else if (typeof firstVal === "string") {
                    errorMessage = `${firstKey}: ${firstVal}`;
                }
            }
            // Fallback for field-level errors: { field: ["msg"] }
            if (!errorMessage && data && typeof data === "object") {
                const keys = Object.keys(data);
                if (keys.length > 0) {
                    const key = keys[0];
                    const val = data[key];
                    if (Array.isArray(val)) {
                        errorMessage = `${key}: ${val[0]}`;
                    } else if (typeof val === "string") {
                        errorMessage = `${key}: ${val}`;
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
        // Re-throw if it's already our custom error
        if (error.status) {
            throw error;
        }
        // Otherwise, wrap network errors
        throw new Error(error.message || "Network error. Please check your connection.");
    }
};
const api = {
    // Register Artisan
    registerArtisan: async (userData)=>{
        const payload = {
            first_name: userData.firstName,
            last_name: userData.lastName,
            phone_number: userData.phoneNumber,
            email_address: userData.email,
            password: userData.password,
            location: userData.location,
            language: userData.language || "English",
            bio: userData.bio || "",
            business_name: userData.businessName || ""
        };
        // Only include trade_category if we have a valid ID
        if (userData.tradeCategory) {
            payload.trade_category = userData.tradeCategory;
        }
        // Include profile photo URL if provided
        if (userData.profilePhotoUrl) {
            payload.profile_photo_url = userData.profilePhotoUrl;
        }
        // Include portfolio URLs if provided
        if (userData.portfolioUrls && userData.portfolioUrls.length > 0) {
            payload.portfolio_urls = userData.portfolioUrls;
        }
        const response = await apiRequest("/users/artisan/register/", {
            method: "POST",
            body: JSON.stringify(payload)
        });
        return response;
    },
    // Register Client
    registerClient: async (userData)=>{
        const response = await apiRequest("/users/client/register/", {
            method: "POST",
            body: JSON.stringify({
                first_name: userData.firstName,
                last_name: userData.lastName,
                phone_number: userData.phoneNumber,
                email_address: userData.email,
                password: userData.password,
                location: userData.location,
                language: userData.language || "English",
                bio: userData.bio || "",
                business_name: userData.businessName || ""
            })
        });
        return response;
    },
    // Login
    login: async (email, password)=>{
        const response = await apiRequest("/users/login/", {
            method: "POST",
            body: JSON.stringify({
                email_address: email,
                password: password
            })
        });
        // Store token if provided (check multiple possible field names)
        const token = response.token || response.access_token || response.access || response.data?.token;
        if (token) {
            setAuthToken(token);
        }
        // Store user data for easy access
        if (response.user) {
            if ("TURBOPACK compile-time truthy", 1) {
                localStorage.setItem("user_type", response.user.user_type || response.user_type);
                localStorage.setItem("user_id", response.user.id || response.user.user_id);
            }
        }
        return response;
    },
    // Get current user
    getCurrentUser: async ()=>{
        return await apiRequest("/users/me/");
    },
    // Get profile - According to your Swagger, this needs user_type and user_id as query params
    getProfile: async ({ userType, userId } = {})=>{
        // If no params provided, try to get from localStorage
        let finalUserType = userType;
        let finalUserId = userId;
        if ("TURBOPACK compile-time truthy", 1) {
            if (!finalUserType) finalUserType = localStorage.getItem("user_type");
            if (!finalUserId) finalUserId = localStorage.getItem("user_id");
        }
        if (!finalUserType || !finalUserId) {
            throw new Error("Missing user_type or user_id. Please log in again.");
        }
        const query = new URLSearchParams();
        query.append("user_type", finalUserType);
        query.append("user_id", finalUserId);
        const endpoint = `/users/profile/?${query.toString()}`;
        return await apiRequest(endpoint);
    },
    // Get all trade categories
    getTradeCategories: async ()=>{
        return await apiRequest("/users/trade-categories/");
    },
    // Create new trade category
    createTradeCategory: async (name)=>{
        return await apiRequest("/users/trade-categories/add/", {
            method: "POST",
            body: JSON.stringify({
                name
            })
        });
    },
    // Update profile
    updateProfile: async (profileData, { userType, userId } = {})=>{
        // If no params provided, try to get from localStorage
        let finalUserType = userType;
        let finalUserId = userId;
        if ("TURBOPACK compile-time truthy", 1) {
            if (!finalUserType) finalUserType = localStorage.getItem("user_type");
            if (!finalUserId) finalUserId = localStorage.getItem("user_id");
        }
        if (!finalUserType || !finalUserId) {
            throw new Error("Missing user_type or user_id. Please log in again.");
        }
        const query = new URLSearchParams();
        query.append("user_type", finalUserType);
        query.append("user_id", finalUserId);
        const endpoint = `/users/profile/update/?${query.toString()}`;
        return await apiRequest(endpoint, {
            method: "PUT",
            body: JSON.stringify(profileData)
        });
    },
    // Logout
    logout: ()=>{
        removeAuthToken();
    },
    // Check if user is authenticated
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
            // Try to get full user data after login
            try {
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
                console.warn("Could not fetch user data after login:", err);
                // If getCurrentUser fails, use the login response if it contains user data
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
        lineNumber: 193,
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