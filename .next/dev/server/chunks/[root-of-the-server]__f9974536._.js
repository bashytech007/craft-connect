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
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Desktop/craft/craft-connect/app/api/upload/presigned-url/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/api/upload/presigned-url/route.js
// Backend API to generate presigned URLs for R2 uploads
__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/next/server.js [app-route] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/src/lib/r2'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
async function POST(request) {
    try {
        const body = await request.json();
        const { entityType, entityId, intent, fileExtension, contentType } = body;
        // Validate required fields
        if (!entityType) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'entityType is required'
            }, {
                status: 400
            });
        }
        if (!entityId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'entityId is required'
            }, {
                status: 400
            });
        }
        if (!intent) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'intent is required'
            }, {
                status: 400
            });
        }
        if (!fileExtension) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'fileExtension is required'
            }, {
                status: 400
            });
        }
        // Validate entityType
        const validEntityTypes = [
            'artisan',
            'client',
            'job',
            'review'
        ];
        if (!validEntityTypes.includes(entityType)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: `Invalid entityType. Must be one of: ${validEntityTypes.join(', ')}`
            }, {
                status: 400
            });
        }
        // Validate intent
        const validIntents = [
            'profile',
            'portfolio',
            'avatar',
            'work',
            'document'
        ];
        if (!validIntents.includes(intent)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: `Invalid intent. Must be one of: ${validIntents.join(', ')}`
            }, {
                status: 400
            });
        }
        // Get or infer content type
        const resolvedContentType = contentType || getContentTypeFromExtension(fileExtension);
        // File size limits (can be adjusted)
        const MAX_FILE_SIZE = {
            profile: 5 * 1024 * 1024,
            portfolio: 10 * 1024 * 1024,
            avatar: 5 * 1024 * 1024,
            work: 10 * 1024 * 1024,
            document: 20 * 1024 * 1024
        };
        // Generate presigned URL
        const result = await generatePresignedUrl({
            entityType,
            entityId,
            intent,
            fileExtension,
            contentType: resolvedContentType,
            expiresIn: 3600
        });
        // Optional: Save upload record to database
        // await db.uploads.create({
        //   entityType,
        //   entityId,
        //   intent,
        //   key: result.key,
        //   filename: result.filename,
        //   status: 'pending',
        //   expiresAt: new Date(Date.now() + 3600 * 1000),
        // });
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            ...result,
            maxFileSize: MAX_FILE_SIZE[intent] || 10 * 1024 * 1024,
            expiresIn: 3600
        });
    } catch (error) {
        console.error('Presigned URL generation error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message || 'Failed to generate upload URL'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f9974536._.js.map