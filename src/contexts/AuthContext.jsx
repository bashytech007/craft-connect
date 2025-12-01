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


/* eslint-disable react-refresh/only-export-components */
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { api } from "../lib/api";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkAuth = async () => {
    try {
      if (api.isAuthenticated()) {
        const userData = await api.getCurrentUser();
        setUser(userData);
        
        // Store user metadata if available
        if (typeof window !== "undefined" && userData) {
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
        api.logout();
        setUser(null);
      }
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      const response = await api.login(email, password);
      
      // Store user metadata from login response
      if (typeof window !== "undefined") {
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
        const userData = await api.getCurrentUser();
        setUser(userData);
        
        // Update metadata from getCurrentUser if available
        if (typeof window !== "undefined" && userData) {
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

  const logout = () => {
    api.logout();
    setUser(null);
    router.push("/");
  };

  const value = {
    user,
    loading,
    login,
    logout,
    checkAuth,
    isAuthenticated: api.isAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};