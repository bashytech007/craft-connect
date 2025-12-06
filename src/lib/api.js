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
const USE_PROXY = process.env.NEXT_PUBLIC_USE_API_PROXY !== "false"; // Default to true (use proxy)
const API_BASE_URL = USE_PROXY
  ? "/api/proxy" // Use Next.js API proxy
  : process.env.NEXT_PUBLIC_API_URL || "https://craftconnect-a6v8.onrender.com";

// Helper function to get auth token
const getAuthToken = () => {
  if (typeof window !== "undefined") {
    // Try multiple possible token names for compatibility
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
    localStorage.setItem("access_token", token); // Primary token storage
    localStorage.setItem("auth_token", token); // Backwards compatibility
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

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const config = {
    ...options,
    headers,
  };

  try {
    // Build the final URL
    let url;
    if (USE_PROXY) {
      // For proxy, remove leading slash and build path: /api/proxy/users/artisan/register/
      const cleanEndpoint = endpoint.startsWith("/")
        ? endpoint.substring(1)
        : endpoint;
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
      data = text ? { message: text } : {};
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
    throw new Error(
      error.message || "Network error. Please check your connection."
    );
  }
};

// API Methods
export const api = {
  // Register Artisan
  registerArtisan: async (userData) => {
    const payload = {
      first_name: userData.firstName,
      last_name: userData.lastName,
      phone_number: userData.phoneNumber,
      email_address: userData.email,
      password: userData.password,
      location: userData.location,
      language: userData.language || "English",
      bio: userData.bio || "",
      business_name: userData.businessName || "",
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
      body: JSON.stringify(payload),
    });
    return response;
  },

  // Register Client
  registerClient: async (userData) => {
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
        business_name: userData.businessName || "",
      }),
    });
    return response;
  },

  // Login
  login: async (email, password) => {
    const response = await apiRequest("/users/login/", {
      method: "POST",
      body: JSON.stringify({
        email_address: email,
        password: password,
      }),
    });

    // Store token if provided (check multiple possible field names)
    const token =
      response.token ||
      response.access_token ||
      response.access ||
      response.data?.token;
    
    if (token) {
      setAuthToken(token);
    }

    // Store user data for easy access
    if (response.user) {
      if (typeof window !== "undefined") {
        localStorage.setItem("user_type", response.user.user_type || response.user_type);
        localStorage.setItem("user_id", response.user.id || response.user.user_id);
      }
    }

    return response;
  },

  // Get current user
  getCurrentUser: async () => {
    return await apiRequest("/users/me/");
  },

  // Get profile - According to your Swagger, this needs user_type and user_id as query params
  getProfile: async ({ userType, userId } = {}) => {
    // If no params provided, try to get from localStorage
    let finalUserType = userType;
    let finalUserId = userId;

    if (typeof window !== "undefined") {
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
  getTradeCategories: async () => {
    return await apiRequest("/users/trade-categories/");
  },

  // Create new trade category
  createTradeCategory: async (name) => {
    return await apiRequest("/users/trade-categories/add/", {
      method: "POST",
      body: JSON.stringify({ name }),
    });
  },

  // Update profile
  updateProfile: async (profileData, { userType, userId } = {}) => {
    // If no params provided, try to get from localStorage
    let finalUserType = userType;
    let finalUserId = userId;

    if (typeof window !== "undefined") {
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
      body: JSON.stringify(profileData),
    });
  },

  // Logout
  logout: () => {
    removeAuthToken();
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    return !!getAuthToken();
  },
};

export { getAuthToken, setAuthToken, removeAuthToken };