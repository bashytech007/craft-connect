module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Desktop/craft/craft-connect/app/api/proxy/[...path]/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Next.js API Route to proxy requests to backend (bypasses CORS)
__turbopack_context__.s([
    "GET",
    ()=>GET,
    "OPTIONS",
    ()=>OPTIONS,
    "POST",
    ()=>POST,
    "PUT",
    ()=>PUT
]);
async function POST(request, context) {
    const { path } = await context.params;
    const apiPath = Array.isArray(path) ? path.join("/") : path;
    // Get API base URL - ensure it doesn't have trailing slash
    // Default to production Render backend
    let API_BASE_URL = ("TURBOPACK compile-time value", "https://craftconnect-a6v8.onrender.com/api") || "https://craftconnect-a6v8.onrender.com";
    API_BASE_URL = API_BASE_URL.replace(/\/$/, ""); // Remove trailing slash
    // If API_BASE_URL doesn't include /api, add it (for backward compatibility)
    if (!API_BASE_URL.includes("/api")) {
        API_BASE_URL = `${API_BASE_URL}/api`;
    }
    // Ensure apiPath doesn't have leading slash, but preserve trailing slash if present
    let cleanApiPath = apiPath.startsWith("/") ? apiPath.substring(1) : apiPath;
    // Ensure trailing slash is present (Django REST framework requires it)
    if (!cleanApiPath.endsWith("/")) {
        cleanApiPath = cleanApiPath + "/";
    }
    const url = `${API_BASE_URL}/${cleanApiPath}`;
    console.log("Proxy POST:", url); // Debug log
    try {
        const body = await request.json();
        const headers = {
            "Content-Type": "application/json"
        };
        // Forward auth token if present
        const authHeader = request.headers.get("authorization");
        if (authHeader) {
            headers["Authorization"] = authHeader;
        }
        let response;
        try {
            response = await fetch(url, {
                method: "POST",
                headers,
                body: JSON.stringify(body)
            });
        } catch (fetchError) {
            // Handle network errors (connection refused, DNS errors, etc.)
            console.error("❌ Fetch failed:", fetchError.message);
            console.error("❌ Target URL:", url);
            console.error("❌ Error details:", {
                name: fetchError.name,
                message: fetchError.message,
                cause: fetchError.cause
            });
            return Response.json({
                error: "Failed to connect to backend server",
                detail: fetchError.message || "Network error. Please check if the backend server is running.",
                url: url,
                suggestion: "Make sure your backend server is running and accessible at the configured URL."
            }, {
                status: 503
            } // Service Unavailable
            );
        }
        // Check if response is HTML (error page)
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("text/html")) {
            await response.text(); // consume body for debugging, no need to store
            console.error("Received HTML instead of JSON from:", url);
            return Response.json({
                error: "Backend server returned HTML instead of JSON. Check if the API URL is correct.",
                detail: "The server at " + url + " returned an HTML page (likely an error page).",
                status: response.status
            }, {
                status: response.status
            });
        }
        // Handle response - try JSON first, fallback to text
        let data;
        if (contentType && contentType.includes("application/json")) {
            data = await response.json();
        } else {
            const text = await response.text();
            data = text ? {
                message: text
            } : {};
        }
        return Response.json(data, {
            status: response.status,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Authorization"
            }
        });
    } catch (error) {
        console.error("Proxy error:", error);
        console.error("Request URL was:", url);
        return Response.json({
            error: error.message || "Proxy request failed",
            detail: error.toString(),
            url: url
        }, {
            status: 500
        });
    }
}
async function GET(request, context) {
    const { path } = await context.params;
    const apiPath = Array.isArray(path) ? path.join("/") : path;
    // Get API base URL - ensure it doesn't have trailing slash
    // Default to production Render backend
    let API_BASE_URL = ("TURBOPACK compile-time value", "https://craftconnect-a6v8.onrender.com/api") || "https://craftconnect-a6v8.onrender.com";
    API_BASE_URL = API_BASE_URL.replace(/\/$/, ""); // Remove trailing slash
    // If API_BASE_URL doesn't include /api, add it (for backward compatibility)
    if (!API_BASE_URL.includes("/api")) {
        API_BASE_URL = `${API_BASE_URL}/api`;
    }
    // Ensure apiPath doesn't have leading slash, but preserve trailing slash if present
    let cleanApiPath = apiPath.startsWith("/") ? apiPath.substring(1) : apiPath;
    // Ensure trailing slash is present (Django REST framework requires it)
    if (!cleanApiPath.endsWith("/")) {
        cleanApiPath = cleanApiPath + "/";
    }
    // Get query parameters from the request URL and append them
    const searchParams = request.nextUrl.searchParams;
    const queryString = searchParams.toString();
    const url = queryString ? `${API_BASE_URL}/${cleanApiPath}?${queryString}` : `${API_BASE_URL}/${cleanApiPath}`;
    console.log("Proxy GET:", url); // Debug log
    try {
        const headers = {};
        // Forward auth token if present
        const authHeader = request.headers.get("authorization");
        if (authHeader) {
            headers["Authorization"] = authHeader;
        }
        let response;
        try {
            response = await fetch(url, {
                method: "GET",
                headers
            });
        } catch (fetchError) {
            // Handle network errors (connection refused, DNS errors, etc.)
            console.error("❌ Fetch failed:", fetchError.message);
            console.error("❌ Target URL:", url);
            console.error("❌ Error details:", {
                name: fetchError.name,
                message: fetchError.message,
                cause: fetchError.cause
            });
            return Response.json({
                error: "Failed to connect to backend server",
                detail: fetchError.message || "Network error. Please check if the backend server is running.",
                url: url,
                suggestion: "Make sure your backend server is running and accessible at the configured URL."
            }, {
                status: 503
            } // Service Unavailable
            );
        }
        // Check if response is HTML (error page)
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("text/html")) {
            await response.text();
            console.error("Received HTML instead of JSON from:", url);
            return Response.json({
                error: "Backend server returned HTML instead of JSON. Check if the API URL is correct.",
                detail: "The server at " + url + " returned an HTML page (likely an error page).",
                status: response.status
            }, {
                status: response.status
            });
        }
        // Handle response - try JSON first, fallback to text
        let data;
        if (contentType && contentType.includes("application/json")) {
            data = await response.json();
        } else {
            const text = await response.text();
            data = text ? {
                message: text
            } : {};
        }
        // Log error details for debugging (especially for 500 errors)
        if (!response.ok) {
            console.error("❌ Backend GET error:", {
                status: response.status,
                statusText: response.statusText,
                url: url,
                responseData: data
            });
        }
        return Response.json(data, {
            status: response.status,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Authorization"
            }
        });
    } catch (error) {
        console.error("Proxy error:", error);
        console.error("Request URL was:", url);
        return Response.json({
            error: error.message || "Proxy request failed",
            detail: error.toString(),
            url: url
        }, {
            status: 500
        });
    }
}
async function PUT(request, context) {
    const { path } = await context.params;
    const apiPath = Array.isArray(path) ? path.join("/") : path;
    // Get API base URL - ensure it doesn't have trailing slash
    // Default to production Render backend
    let API_BASE_URL = ("TURBOPACK compile-time value", "https://craftconnect-a6v8.onrender.com/api") || "https://craftconnect-a6v8.onrender.com";
    API_BASE_URL = API_BASE_URL.replace(/\/$/, ""); // Remove trailing slash
    // If API_BASE_URL doesn't include /api, add it (for backward compatibility)
    if (!API_BASE_URL.includes("/api")) {
        API_BASE_URL = `${API_BASE_URL}/api`;
    }
    // Ensure apiPath doesn't have leading slash, but preserve trailing slash if present
    let cleanApiPath = apiPath.startsWith("/") ? apiPath.substring(1) : apiPath;
    // Ensure trailing slash is present (Django REST framework requires it)
    if (!cleanApiPath.endsWith("/")) {
        cleanApiPath = cleanApiPath + "/";
    }
    const url = `${API_BASE_URL}/${cleanApiPath}`;
    console.log("Proxy PUT:", url); // Debug log
    try {
        // Check if request has FormData (for file uploads)
        const contentType = request.headers.get("content-type");
        let body;
        let headers = {};
        if (contentType && contentType.includes("multipart/form-data")) {
            // Handle FormData
            body = await request.formData();
            // Don't set Content-Type - browser sets it with boundary
            console.log("📤 PUT with FormData");
        } else {
            // Handle JSON
            body = await request.json();
            headers["Content-Type"] = "application/json";
            console.log("📤 PUT with JSON:", JSON.stringify(body).substring(0, 200));
        }
        // Forward auth token if present
        const authHeader = request.headers.get("authorization");
        if (authHeader) {
            headers["Authorization"] = authHeader;
        }
        const fetchOptions = {
            method: "PUT",
            headers
        };
        // Set body based on type
        if (body instanceof FormData) {
            fetchOptions.body = body;
        } else {
            fetchOptions.body = JSON.stringify(body);
            if (!headers["Content-Type"]) {
                headers["Content-Type"] = "application/json";
            }
        }
        let response;
        try {
            response = await fetch(url, fetchOptions);
        } catch (fetchError) {
            // Handle network errors (connection refused, DNS errors, etc.)
            console.error("❌ Fetch failed:", fetchError.message);
            console.error("❌ Target URL:", url);
            console.error("❌ Error details:", {
                name: fetchError.name,
                message: fetchError.message,
                cause: fetchError.cause
            });
            return Response.json({
                error: "Failed to connect to backend server",
                detail: fetchError.message || "Network error. Please check if the backend server is running.",
                url: url,
                suggestion: "Make sure your backend server is running and accessible at the configured URL."
            }, {
                status: 503
            } // Service Unavailable
            );
        }
        // Check if response is HTML (error page)
        const responseContentType = response.headers.get("content-type");
        if (responseContentType && responseContentType.includes("text/html")) {
            const htmlText = await response.text();
            console.error("❌ Received HTML instead of JSON from:", url);
            console.error("HTML Response:", htmlText.substring(0, 500));
            return Response.json({
                error: "Backend server returned HTML instead of JSON. Check if the API URL is correct.",
                detail: "The server at " + url + " returned an HTML page (likely an error page).",
                status: response.status
            }, {
                status: response.status
            });
        }
        // Handle response - try JSON first, fallback to text
        let data;
        if (responseContentType && responseContentType.includes("application/json")) {
            data = await response.json();
        } else {
            const text = await response.text();
            data = text ? {
                message: text
            } : {};
        }
        // Log error details for debugging (especially for 500 errors)
        if (!response.ok) {
            console.error("❌ Backend PUT error:", {
                status: response.status,
                statusText: response.statusText,
                url: url,
                requestBody: body instanceof FormData ? "[FormData]" : JSON.stringify(body).substring(0, 200),
                responseData: data
            });
        }
        return Response.json(data, {
            status: response.status,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Authorization"
            }
        });
    } catch (error) {
        console.error("Proxy error:", error);
        console.error("Request URL was:", url);
        return Response.json({
            error: error.message || "Proxy request failed",
            detail: error.toString(),
            url: url
        }, {
            status: 500
        });
    }
}
async function OPTIONS() {
    return new Response(null, {
        status: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization"
        }
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e6efb5b5._.js.map