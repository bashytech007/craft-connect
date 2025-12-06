(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/craft/craft-connect/src/assets/cc-logo.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/cc-logo.82c18ea3.svg");}),
"[project]/Desktop/craft/craft-connect/src/assets/cc-logo.svg.mjs { IMAGE => \"[project]/Desktop/craft/craft-connect/src/assets/cc-logo.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$cc$2d$logo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/src/assets/cc-logo.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$cc$2d$logo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 32,
    height: 29,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/craft/craft-connect/src/assets/dropdown.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/dropdown.3e31a7d6.svg");}),
"[project]/Desktop/craft/craft-connect/src/assets/dropdown.svg.mjs { IMAGE => \"[project]/Desktop/craft/craft-connect/src/assets/dropdown.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$dropdown$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/src/assets/dropdown.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$dropdown$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 16,
    height: 9,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/craft/craft-connect/src/assets/globe.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/globe.7dc7d2e5.svg");}),
"[project]/Desktop/craft/craft-connect/src/assets/globe.svg.mjs { IMAGE => \"[project]/Desktop/craft/craft-connect/src/assets/globe.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$globe$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/src/assets/globe.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$globe$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 18,
    height: 18,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/craft/craft-connect/src/components/Header/Header.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// import React, { useState } from 'react';
// import { User, Menu, X } from 'lucide-react';
// import ccLogo from "../../assets/cc-logo.svg";
// import dropdown from "../../assets/dropdown.svg";
// import global from "../../assets/globe.svg";
// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   return (
//     <header className="bg-white shadow-sm border-b">
//       <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex justify-between items-center h-16">
//         {/* Left side: Hamburger + Logo + Brand */}
//         <div className="flex items-center space-x-2">
//           {/* Hamburger only visible on mobile */}
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="md:hidden text-gray-700 hover:text-amber-600 transition-colors"
//           >
//             {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//           {/* Logo + Brand */}
//           <img src={ccLogo} alt="CraftConnect Logo" className="h-8 w-auto" />
//           <span className="font-bold text-gray-900 text-lg md:text-xl">CraftConnect</span>
//         </div>
//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center space-x-6">
//           <div className="flex items-center space-x-1">
//             <a href="#" className="text-gray-700 hover:text-amber-600 text-sm font-medium">Learning</a>
//             <img src={dropdown} alt="dropdown" />
//           </div>
//           <div className="flex items-center space-x-1">
//             <a href="#" className="text-gray-700 hover:text-amber-600 text-sm font-medium">Explore</a>
//             <img src={dropdown} alt="dropdown" />
//           </div>
//           <div className="flex items-center space-x-1">
//             <a href="#" className="text-gray-700 hover:text-amber-600 text-sm font-medium">English</a>
//             <img src={global} alt="global" />
//           </div>
//           <div className="flex items-center space-x-1">
//             <a href="#" className="text-gray-700 hover:text-amber-600 text-sm font-medium">Sign in</a>
//             <User className="w-5 h-5 text-gray-700" />
//           </div>
//           <button className="bg-[#D6B42F] text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90">
//             Sign in
//           </button>
//         </nav>
//       </div>
//       {/* Mobile Navigation */}
//       {isMobileMenuOpen && (
//         <div className="bg-white border-t md:hidden">
//           <div className="px-4 pt-2 pb-4 space-y-2">
//             <a href="#" className="block text-gray-700 hover:text-amber-600">Learning</a>
//             <a href="#" className="block text-gray-700 hover:text-amber-600">Explore</a>
//             <a href="#" className="block text-gray-700 hover:text-amber-600">English</a>
//             <a href="#" className="block text-gray-700 hover:text-amber-600">Sign in</a>
//             <button className="w-full bg-[#D6B42F] text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90">
//               Sign in
//             </button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };
// export default Header;
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// function Header() {
//   const navigate = useNavigate();
//   return (
//     <header className="bg-white shadow-sm sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <div 
//             className="flex items-center gap-2 cursor-pointer" 
//             onClick={() => navigate('/')}
//           >
//             <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
//               <span className="text-white font-bold text-xl">C</span>
//             </div>
//             <span className="font-bold text-xl text-gray-900">CraftConnect</span>
//           </div>
//           {/* Navigation */}
//           <nav className="hidden md:flex items-center gap-8">
//             <a href="#" className="text-gray-700 hover:text-amber-600 transition-colors">
//               Landing
//             </a>
//             <a href="#" className="text-gray-700 hover:text-amber-600 transition-colors">
//               Explore
//             </a>
//             <a href="#" className="text-gray-700 hover:text-amber-600 transition-colors">
//               English
//             </a>
//           </nav>
//           {/* Auth Buttons */}
//           <div className="flex items-center gap-4">
//             <button 
//               onClick={() => navigate('/sign-in')}
//               className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
//             >
//               Login
//             </button>
//             <button 
//               onClick={() => navigate('/sign-up')}
//               className="bg-amber-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-amber-600 transition-colors"
//             >
//               Sign Up
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
// export default Header;
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { supabase } from '../../lib/supabase';
// import { User, LogOut } from 'lucide-react';
// function Header() {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     // Get initial session
//     supabase.auth.getSession().then(({ data: { session } }) => {
//       setUser(session?.user ?? null);
//       setLoading(false);
//     });
//     // Listen for auth changes
//     const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
//       setUser(session?.user ?? null);
//     });
//     return () => subscription.unsubscribe();
//   }, []);
//   const handleSignOut = async () => {
//     await supabase.auth.signOut();
//     setUser(null);
//     navigate('/');
//   };
//   return (
//     <header className="bg-white shadow-sm sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <div 
//             className="flex items-center gap-2 cursor-pointer" 
//             onClick={() => navigate('/')}
//           >
//             <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
//               <span className="text-white font-bold text-xl">C</span>
//             </div>
//             <span className="font-bold text-xl text-gray-900">CraftConnect</span>
//           </div>
//           {/* Navigation */}
//           <nav className="hidden md:flex items-center gap-8">
//             <a href="#" className="text-gray-700 hover:text-amber-600 transition-colors">
//               Landing
//             </a>
//             <a href="#" className="text-gray-700 hover:text-amber-600 transition-colors">
//               Explore
//             </a>
//             <a href="#" className="text-gray-700 hover:text-amber-600 transition-colors">
//               English
//             </a>
//           </nav>
//           {/* Auth Buttons */}
//           <div className="flex items-center gap-4">
//             {loading ? (
//               <div className="w-20 h-8 bg-gray-200 animate-pulse rounded"></div>
//             ) : user ? (
//               // Logged in state
//               <>
//                 <div className="flex items-center gap-2 text-gray-700">
//                   <User className="w-5 h-5" />
//                   <span className="font-medium hidden sm:inline">
//                     {user.email?.split('@')[0]}
//                   </span>
//                 </div>
//                 <button 
//                   onClick={handleSignOut}
//                   className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors font-medium"
//                 >
//                   <LogOut className="w-5 h-5" />
//                   <span className="hidden sm:inline">Logout</span>
//                 </button>
//               </>
//             ) : (
//               // Logged out state
//               <>
//                 <button 
//                   onClick={() => navigate('/sign-in')}
//                   className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
//                 >
//                   Login
//                 </button>
//                 <button 
//                   onClick={() => navigate('/sign-up')}
//                   className="bg-amber-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-amber-600 transition-colors"
//                 >
//                   Sign Up
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
// export default Header;
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$contexts$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/src/contexts/AuthContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$cc$2d$logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$cc$2d$logo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/craft/craft-connect/src/assets/cc-logo.svg.mjs { IMAGE => "[project]/Desktop/craft/craft-connect/src/assets/cc-logo.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$dropdown$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$dropdown$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/craft/craft-connect/src/assets/dropdown.svg.mjs { IMAGE => "[project]/Desktop/craft/craft-connect/src/assets/dropdown.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$globe$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$globe$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/craft/craft-connect/src/assets/globe.svg.mjs { IMAGE => "[project]/Desktop/craft/craft-connect/src/assets/globe.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function Header() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { user, loading, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$contexts$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSignOut = ()=>{
        logout();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "bg-white sticky top-0 z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center h-16 md:h-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 cursor-pointer",
                            onClick: ()=>router.push("/"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$cc$2d$logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$cc$2d$logo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                    alt: "CraftConnect Logo",
                                    width: 40,
                                    height: 40,
                                    className: "h-8 md:h-10 w-auto",
                                    unoptimized: true
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/craft/craft-connect/src/components/Header/Header.jsx",
                                    lineNumber: 265,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold text-gray-900 text-lg md:text-xl",
                                    children: "CraftConnect"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/craft/craft-connect/src/components/Header/Header.jsx",
                                    lineNumber: 273,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/craft/craft-connect/src/components/Header/Header.jsx",
                            lineNumber: 261,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden md:flex items-center gap-4 lg:gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "text-gray-700 hover:text-amber-600 text-sm font-medium transition-colors",
                                            children: "Learning"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/craft/craft-connect/src/components/Header/Header.jsx",
                                            lineNumber: 281,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$dropdown$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$dropdown$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                            alt: "dropdown",
                                            width: 16,
                                            height: 16,
                                            className: "w-4 h-4",
                                            unoptimized: true
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/craft/craft-connect/src/components/Header/Header.jsx",
                                            lineNumber: 287,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/craft/craft-connect/src/components/Header/Header.jsx",
                                    lineNumber: 280,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "text-gray-700 hover:text-amber-600 text-sm font-medium transition-colors",
                                            children: "Explore"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/craft/craft-connect/src/components/Header/Header.jsx",
                                            lineNumber: 297,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$dropdown$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$dropdown$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                            alt: "dropdown",
                                            width: 16,
                                            height: 16,
                                            className: "w-4 h-4",
                                            unoptimized: true
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/craft/craft-connect/src/components/Header/Header.jsx",
                                            lineNumber: 303,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/craft/craft-connect/src/components/Header/Header.jsx",
                                    lineNumber: 296,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "text-gray-700 hover:text-amber-600 text-sm font-medium transition-colors",
                                            children: "English"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/craft/craft-connect/src/components/Header/Header.jsx",
                                            lineNumber: 313,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$globe$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$globe$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                            alt: "globe",
                                            width: 16,
                                            height: 16,
                                            className: "w-4 h-4",
                                            unoptimized: true
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/craft/craft-connect/src/components/Header/Header.jsx",
                                            lineNumber: 319,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/craft/craft-connect/src/components/Header/Header.jsx",
                                    lineNumber: 312,
                                    columnNumber: 13
                                }, this),
                                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-20 h-8 bg-gray-200 animate-pulse rounded"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/craft/craft-connect/src/components/Header/Header.jsx",
                                    lineNumber: 329,
                                    columnNumber: 15
                                }, this) : user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>router.push("/profile"),
                                            className: "flex items-center gap-1 text-gray-700 hover:text-amber-600 text-sm font-medium transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Sign in"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/craft/craft-connect/src/components/Header/Header.jsx",
                                                    lineNumber: 336,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/craft/craft-connect/src/components/Header/Header.jsx",
                                                    lineNumber: 337,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/craft/craft-connect/src/components/Header/Header.jsx",
                                            lineNumber: 332,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleSignOut,
                                            className: "flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors font-medium text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/craft/craft-connect/src/components/Header/Header.jsx",
                                                    lineNumber: 343,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "hidden lg:inline",
                                                    children: "Logout"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/craft/craft-connect/src/components/Header/Header.jsx",
                                                    lineNumber: 344,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/craft/craft-connect/src/components/Header/Header.jsx",
                                            lineNumber: 339,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>router.push("/sign-in"),
                                                    className: "text-gray-700 hover:text-amber-600 text-sm font-medium transition-colors",
                                                    children: "Sign in"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/craft/craft-connect/src/components/Header/Header.jsx",
                                                    lineNumber: 350,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                    className: "w-4 h-4 text-gray-700"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/craft/craft-connect/src/components/Header/Header.jsx",
                                                    lineNumber: 356,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/craft/craft-connect/src/components/Header/Header.jsx",
                                            lineNumber: 349,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>router.push("/join"),
                                            className: "bg-[#D6B42F] text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity",
                                            children: "Join"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/craft/craft-connect/src/components/Header/Header.jsx",
                                            lineNumber: 358,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/craft/craft-connect/src/components/Header/Header.jsx",
                            lineNumber: 279,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                            className: "md:hidden text-gray-700 hover:text-amber-600 transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: isMobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M6 18L18 6M6 6l12 12"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/craft/craft-connect/src/components/Header/Header.jsx",
                                    lineNumber: 380,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M4 6h16M4 12h16M4 18h16"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/craft/craft-connect/src/components/Header/Header.jsx",
                                    lineNumber: 387,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/craft/craft-connect/src/components/Header/Header.jsx",
                                lineNumber: 373,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/craft/craft-connect/src/components/Header/Header.jsx",
                            lineNumber: 369,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/craft/craft-connect/src/components/Header/Header.jsx",
                    lineNumber: 259,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-px bg-amber-500"
                }, void 0, false, {
                    fileName: "[project]/Desktop/craft/craft-connect/src/components/Header/Header.jsx",
                    lineNumber: 399,
                    columnNumber: 9
                }, this),
                isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:hidden border-t border-gray-200 py-4 space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#",
                            className: "block text-gray-700 hover:text-amber-600 transition-colors",
                            children: "Learning"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/craft/craft-connect/src/components/Header/Header.jsx",
                            lineNumber: 404,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#",
                            className: "block text-gray-700 hover:text-amber-600 transition-colors",
                            children: "Explore"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/craft/craft-connect/src/components/Header/Header.jsx",
                            lineNumber: 410,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#",
                            className: "block text-gray-700 hover:text-amber-600 transition-colors",
                            children: "English"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/craft/craft-connect/src/components/Header/Header.jsx",
                            lineNumber: 416,
                            columnNumber: 13
                        }, this),
                        !user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        router.push("/sign-in");
                                        setIsMobileMenuOpen(false);
                                    },
                                    className: "block w-full text-left text-gray-700 hover:text-amber-600 transition-colors",
                                    children: "Sign in"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/craft/craft-connect/src/components/Header/Header.jsx",
                                    lineNumber: 424,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        router.push("/join");
                                        setIsMobileMenuOpen(false);
                                    },
                                    className: "w-full bg-[#D6B42F] text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity",
                                    children: "Join"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/craft/craft-connect/src/components/Header/Header.jsx",
                                    lineNumber: 433,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/craft/craft-connect/src/components/Header/Header.jsx",
                    lineNumber: 403,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/craft/craft-connect/src/components/Header/Header.jsx",
            lineNumber: 258,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/craft/craft-connect/src/components/Header/Header.jsx",
        lineNumber: 257,
        columnNumber: 5
    }, this);
}
_s(Header, "yLb8J2+WKPl/Avthc/9V2o8PeUM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$contexts$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/craft/craft-connect/src/assets/craftlefthome.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/craftlefthome.6ccdef9d.svg");}),
"[project]/Desktop/craft/craft-connect/src/assets/craftlefthome.svg.mjs { IMAGE => \"[project]/Desktop/craft/craft-connect/src/assets/craftlefthome.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$craftlefthome$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/src/assets/craftlefthome.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$craftlefthome$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 42,
    height: 27,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/craft/craft-connect/src/assets/craftcenter.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/craftcenter.bbac26e2.svg");}),
"[project]/Desktop/craft/craft-connect/src/assets/craftcenter.svg.mjs { IMAGE => \"[project]/Desktop/craft/craft-connect/src/assets/craftcenter.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$craftcenter$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/src/assets/craftcenter.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$craftcenter$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 74,
    height: 74,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/craft/craft-connect/src/assets/craftright.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/craftright.7c38b5e1.svg");}),
"[project]/Desktop/craft/craft-connect/src/assets/craftright.svg.mjs { IMAGE => \"[project]/Desktop/craft/craft-connect/src/assets/craftright.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$craftright$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/src/assets/craftright.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$craftright$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 58,
    height: 58,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/craft/craft-connect/src/components/Hero/HeroSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$craftlefthome$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$craftlefthome$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/craft/craft-connect/src/assets/craftlefthome.svg.mjs { IMAGE => "[project]/Desktop/craft/craft-connect/src/assets/craftlefthome.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$craftcenter$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$craftcenter$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/craft/craft-connect/src/assets/craftcenter.svg.mjs { IMAGE => "[project]/Desktop/craft/craft-connect/src/assets/craftcenter.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$craftright$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$craftright$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/craft/craft-connect/src/assets/craftright.svg.mjs { IMAGE => "[project]/Desktop/craft/craft-connect/src/assets/craftright.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
"use client";
;
;
;
;
;
;
const HeroSection = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-white py-8 sm:py-12 md:py-16 lg:py-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 mb-4 sm:mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-green-100 flex items-center justify-center shadow-sm overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$craftlefthome$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$craftlefthome$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                alt: "craft-home-img",
                                fill: true,
                                className: "object-contain p-2",
                                unoptimized: true
                            }, void 0, false, {
                                fileName: "[project]/Desktop/craft/craft-connect/src/components/Hero/HeroSection.jsx",
                                lineNumber: 17,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/craft/craft-connect/src/components/Hero/HeroSection.jsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center shadow-lg ring-4 ring-amber-200 overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$craftcenter$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$craftcenter$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                alt: "craft-logo",
                                fill: true,
                                className: "object-cover p-2",
                                unoptimized: true
                            }, void 0, false, {
                                fileName: "[project]/Desktop/craft/craft-connect/src/components/Hero/HeroSection.jsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/craft/craft-connect/src/components/Hero/HeroSection.jsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-amber-100 flex items-center justify-center shadow-sm overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$craftright$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$craftright$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                alt: "craft-right",
                                fill: true,
                                className: "object-contain p-2",
                                unoptimized: true
                            }, void 0, false, {
                                fileName: "[project]/Desktop/craft/craft-connect/src/components/Hero/HeroSection.jsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/craft/craft-connect/src/components/Hero/HeroSection.jsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/craft/craft-connect/src/components/Hero/HeroSection.jsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between max-w-xs sm:max-w-md mx-auto text-xs sm:text-sm md:text-base text-gray-600 mb-6 sm:mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium",
                            children: "Artisan"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/craft/craft-connect/src/components/Hero/HeroSection.jsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium",
                            children: "Client"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/craft/craft-connect/src/components/Hero/HeroSection.jsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/craft/craft-connect/src/components/Hero/HeroSection.jsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-3xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6",
                            children: [
                                "Where your ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-amber-600",
                                    children: "Craft"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/craft/craft-connect/src/components/Hero/HeroSection.jsx",
                                    lineNumber: 58,
                                    columnNumber: 24
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/Desktop/craft/craft-connect/src/components/Hero/HeroSection.jsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                "connect you to ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-amber-600",
                                    children: "Clients"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/craft/craft-connect/src/components/Hero/HeroSection.jsx",
                                    lineNumber: 60,
                                    columnNumber: 28
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/craft/craft-connect/src/components/Hero/HeroSection.jsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-base sm:text-lg text-gray-600 mx-auto max-w-2xl",
                            children: "Join thousands of skilled artisans connecting with clients who value quality craftsmanship"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/craft/craft-connect/src/components/Hero/HeroSection.jsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/craft/craft-connect/src/components/Hero/HeroSection.jsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/craft/craft-connect/src/components/Hero/HeroSection.jsx",
            lineNumber: 12,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/craft/craft-connect/src/components/Hero/HeroSection.jsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = HeroSection;
const __TURBOPACK__default__export__ = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/craft/craft-connect/src/components/Search/SearchSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
;
var _s = __turbopack_context__.k.signature();
;
;
const SearchSection = ({ onSearch })=>{
    _s();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const handleSearch = (e)=>{
        e.preventDefault();
        if (onSearch) {
            onSearch(searchQuery);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12 md:mb-16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-3xl mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSearch,
                className: "w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: searchQuery,
                            onChange: (e)=>setSearchQuery(e.target.value),
                            placeholder: "Try 'Masonry & Bricklaying'",
                            className: "flex-1 px-4 md:px-6 py-3 md:py-4 text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none text-base md:text-lg"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/craft/craft-connect/src/components/Search/SearchSection.jsx",
                            lineNumber: 19,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: "bg-[#D6B42F] text-white px-4 md:px-6 py-3 md:py-4 hover:opacity-90 transition-opacity flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "w-5 h-5 md:w-6 md:h-6"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/craft/craft-connect/src/components/Search/SearchSection.jsx",
                                lineNumber: 30,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/craft/craft-connect/src/components/Search/SearchSection.jsx",
                            lineNumber: 26,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/craft/craft-connect/src/components/Search/SearchSection.jsx",
                    lineNumber: 18,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/craft/craft-connect/src/components/Search/SearchSection.jsx",
                lineNumber: 17,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/craft/craft-connect/src/components/Search/SearchSection.jsx",
            lineNumber: 16,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/craft/craft-connect/src/components/Search/SearchSection.jsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SearchSection, "4/Qdl0R3tQNJqUS4eMrvY/uMU/4=");
_c = SearchSection;
const __TURBOPACK__default__export__ = SearchSection;
var _c;
__turbopack_context__.k.register(_c, "SearchSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/craft/craft-connect/src/assets/categories/woodworking.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/woodworking.47679d21.svg");}),
"[project]/Desktop/craft/craft-connect/src/assets/categories/woodworking.svg.mjs { IMAGE => \"[project]/Desktop/craft/craft-connect/src/assets/categories/woodworking.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$categories$2f$woodworking$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/src/assets/categories/woodworking.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$categories$2f$woodworking$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 237,
    height: 243,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/craft/craft-connect/src/assets/categories/leather.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/leather.552018a3.svg");}),
"[project]/Desktop/craft/craft-connect/src/assets/categories/leather.svg.mjs { IMAGE => \"[project]/Desktop/craft/craft-connect/src/assets/categories/leather.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$categories$2f$leather$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/src/assets/categories/leather.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$categories$2f$leather$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 237,
    height: 243,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/craft/craft-connect/src/assets/categories/metal.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/metal.0b11ab40.svg");}),
"[project]/Desktop/craft/craft-connect/src/assets/categories/metal.svg.mjs { IMAGE => \"[project]/Desktop/craft/craft-connect/src/assets/categories/metal.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$categories$2f$metal$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/src/assets/categories/metal.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$categories$2f$metal$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 237,
    height: 243,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/craft/craft-connect/src/assets/categories/pottery.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/pottery.01612a8b.svg");}),
"[project]/Desktop/craft/craft-connect/src/assets/categories/pottery.svg.mjs { IMAGE => \"[project]/Desktop/craft/craft-connect/src/assets/categories/pottery.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$categories$2f$pottery$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/src/assets/categories/pottery.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$categories$2f$pottery$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 237,
    height: 241,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/craft/craft-connect/src/assets/categories/textiles.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/textiles.5a12ad15.svg");}),
"[project]/Desktop/craft/craft-connect/src/assets/categories/textiles.svg.mjs { IMAGE => \"[project]/Desktop/craft/craft-connect/src/assets/categories/textiles.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$categories$2f$textiles$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/src/assets/categories/textiles.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$categories$2f$textiles$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 219,
    height: 220,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/craft/craft-connect/src/assets/categories/jewelry.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/jewelry.41609858.svg");}),
"[project]/Desktop/craft/craft-connect/src/assets/categories/jewelry.svg.mjs { IMAGE => \"[project]/Desktop/craft/craft-connect/src/assets/categories/jewelry.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$categories$2f$jewelry$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/src/assets/categories/jewelry.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$categories$2f$jewelry$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 237,
    height: 243,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/craft/craft-connect/src/components/Categories/CategoriesSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/next/image.js [app-client] (ecmascript)");
// Import SVGs
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$categories$2f$woodworking$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$categories$2f$woodworking$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/craft/craft-connect/src/assets/categories/woodworking.svg.mjs { IMAGE => "[project]/Desktop/craft/craft-connect/src/assets/categories/woodworking.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$categories$2f$leather$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$categories$2f$leather$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/craft/craft-connect/src/assets/categories/leather.svg.mjs { IMAGE => "[project]/Desktop/craft/craft-connect/src/assets/categories/leather.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$categories$2f$metal$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$categories$2f$metal$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/craft/craft-connect/src/assets/categories/metal.svg.mjs { IMAGE => "[project]/Desktop/craft/craft-connect/src/assets/categories/metal.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$categories$2f$pottery$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$categories$2f$pottery$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/craft/craft-connect/src/assets/categories/pottery.svg.mjs { IMAGE => "[project]/Desktop/craft/craft-connect/src/assets/categories/pottery.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$categories$2f$textiles$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$categories$2f$textiles$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/craft/craft-connect/src/assets/categories/textiles.svg.mjs { IMAGE => "[project]/Desktop/craft/craft-connect/src/assets/categories/textiles.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$categories$2f$jewelry$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$categories$2f$jewelry$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/craft/craft-connect/src/assets/categories/jewelry.svg.mjs { IMAGE => "[project]/Desktop/craft/craft-connect/src/assets/categories/jewelry.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
"use client";
;
;
;
;
;
;
;
;
;
const categories = [
    {
        name: "Textiles",
        label: "Textile & Fashion Arts",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$categories$2f$textiles$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$categories$2f$textiles$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        description: "Weaving, Embroidery, Tailoring"
    },
    {
        name: "Wood Working",
        label: "Woodwork & Carving",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$categories$2f$woodworking$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$categories$2f$woodworking$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        description: "Furniture, Carpentry, Restoration"
    },
    {
        name: "Pottery",
        label: "Pottery & Ceramics",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$categories$2f$pottery$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$categories$2f$pottery$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        description: "Ceramics, Tableware, Art"
    },
    {
        name: "Metal Working",
        label: "Metalwork & Smithing",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$categories$2f$metal$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$categories$2f$metal$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        description: "Welding, Forging, Sculpture"
    },
    {
        name: "Jewelry",
        label: "Building & Architectural Trades",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$categories$2f$jewelry$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$categories$2f$jewelry$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        description: "Custom Pieces, Repairs, Design"
    },
    {
        name: "Leather Craft",
        label: "Visual Arts",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$categories$2f$leather$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$categories$2f$leather$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        description: "Bags, Belts, Custom Goods"
    }
];
const CategoriesSection = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-12 md:my-16 lg:my-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-8 md:mb-12 lg:mb-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4",
                        children: "Categories of Artisans"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/craft/craft-connect/src/components/Categories/CategoriesSection.jsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-base sm:text-lg md:text-xl text-gray-600",
                        children: "Discover skilled craftspeople in every field"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/craft/craft-connect/src/components/Categories/CategoriesSection.jsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/craft/craft-connect/src/components/Categories/CategoriesSection.jsx",
                lineNumber: 57,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6",
                children: categories.map((category, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full h-48 md:h-56 overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: category.image,
                                    alt: category.name,
                                    fill: true,
                                    className: "object-cover group-hover:scale-105 transition-transform duration-300",
                                    unoptimized: true
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/craft/craft-connect/src/components/Categories/CategoriesSection.jsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/craft/craft-connect/src/components/Categories/CategoriesSection.jsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 md:p-4 text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm md:text-base text-gray-700 font-medium",
                                    children: category.label
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/craft/craft-connect/src/components/Categories/CategoriesSection.jsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/craft/craft-connect/src/components/Categories/CategoriesSection.jsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, index, true, {
                        fileName: "[project]/Desktop/craft/craft-connect/src/components/Categories/CategoriesSection.jsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/Desktop/craft/craft-connect/src/components/Categories/CategoriesSection.jsx",
                lineNumber: 67,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/craft/craft-connect/src/components/Categories/CategoriesSection.jsx",
        lineNumber: 55,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = CategoriesSection;
const __TURBOPACK__default__export__ = CategoriesSection;
var _c;
__turbopack_context__.k.register(_c, "CategoriesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/craft/craft-connect/src/components/Artisans/FeaturedArtisans.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { Play } from "lucide-react";
// const FeaturedArtisans = () => {
//   const [activeVideo, setActiveVideo] = useState(0);
//   // Main featured video data
//   const featuredVideo = {
//     thumbnail:
//       "https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=1200&h=600&fit=crop",
//     title: "See Our Craft in Action",
//     description:
//       "Watch our skilled artisans demonstrate their expertise and passion for their craft",
//   };
//   // Thumbnail videos for the slider
//   const thumbnailVideos = [
//     {
//       id: 1,
//       thumbnail:
//         "https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=400&h=300&fit=crop",
//     },
//     {
//       id: 2,
//       thumbnail:
//         "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&h=300&fit=crop",
//     },
//     {
//       id: 3,
//       thumbnail:
//         "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=400&h=300&fit=crop",
//     },
//     {
//       id: 4,
//       thumbnail:
//         "https://images.unsplash.com/photo-1607400201515-c2c41c07d307?w=400&h=300&fit=crop",
//     },
//   ];
//   return (
//     <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-12 md:my-16 lg:my-24">
//       {/* Main Featured Video */}
//       <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl mb-6 md:mb-8 group cursor-pointer">
//         <Image
//           src={featuredVideo.thumbnail}
//           alt={featuredVideo.title}
//           fill
//           className="object-cover"
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
//         />
//         {/* Dark overlay */}
//         <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300"></div>
//         {/* Play button centered */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           <button className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 hover:bg-amber-500 group">
//             <Play className="w-10 h-10 md:w-12 md:h-12 text-amber-600 group-hover:text-white fill-current ml-1" />
//           </button>
//         </div>
//       </div>
//       {/* Thumbnail Slider - Centered */}
//       <div className="flex justify-center gap-4 overflow-x-auto pb-6 scrollbar-hide">
//         {thumbnailVideos.map((video, index) => (
//           <div
//             key={video.id}
//             onClick={() => setActiveVideo(index)}
//             className={`relative flex-shrink-0 w-40 h-28 md:w-48 md:h-32 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
//               activeVideo === index
//                 ? "ring-4 ring-amber-500 shadow-xl"
//                 : "hover:ring-2 hover:ring-gray-300 shadow-md"
//             }`}
//           >
//             <Image
//               src={video.thumbnail}
//               alt={`Video ${video.id}`}
//               fill
//               className="object-cover"
//               sizes="(max-width: 768px) 160px, 192px"
//             />
//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-30 transition-all"></div>
//             {/* Small play icon */}
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="w-10 h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
//                 <Play className="w-5 h-5 text-gray-800 fill-current ml-0.5" />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };
// export default FeaturedArtisans;
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const FeaturedArtisans = ()=>{
    _s();
    const [activeVideo, setActiveVideo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Main featured video data
    const featuredVideo = {
        thumbnail: "https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=1200&h=600&fit=crop",
        title: "See Our Craft in Action",
        description: "Watch our skilled artisans demonstrate their expertise and passion for their craft"
    };
    // Thumbnail videos for the slider
    const thumbnailVideos = [
        {
            id: 1,
            thumbnail: "https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=400&h=300&fit=crop"
        },
        {
            id: 2,
            thumbnail: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&h=300&fit=crop"
        },
        {
            id: 3,
            thumbnail: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=400&h=300&fit=crop"
        },
        {
            id: 4,
            thumbnail: "https://images.unsplash.com/photo-1607400201515-c2c41c07d307?w=400&h=300&fit=crop"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-12 md:my-16 lg:my-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl mb-6 md:mb-8 group cursor-pointer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: featuredVideo.thumbnail,
                        alt: featuredVideo.title,
                        className: "absolute inset-0 w-full h-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/craft/craft-connect/src/components/Artisans/FeaturedArtisans.jsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/craft/craft-connect/src/components/Artisans/FeaturedArtisans.jsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 hover:bg-amber-500 group",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                className: "w-10 h-10 md:w-12 md:h-12 text-amber-600 group-hover:text-white fill-current ml-1"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/craft/craft-connect/src/components/Artisans/FeaturedArtisans.jsx",
                                lineNumber: 162,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/craft/craft-connect/src/components/Artisans/FeaturedArtisans.jsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/craft/craft-connect/src/components/Artisans/FeaturedArtisans.jsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/craft/craft-connect/src/components/Artisans/FeaturedArtisans.jsx",
                lineNumber: 149,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center gap-4 overflow-x-auto pb-6 scrollbar-hide",
                children: thumbnailVideos.map((video, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>setActiveVideo(index),
                        className: `relative flex-shrink-0 w-40 h-28 md:w-48 md:h-32 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${activeVideo === index ? "ring-4 ring-amber-500 shadow-xl" : "hover:ring-2 hover:ring-gray-300 shadow-md"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: video.thumbnail,
                                alt: `Video ${video.id}`,
                                className: "absolute inset-0 w-full h-full object-cover"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/craft/craft-connect/src/components/Artisans/FeaturedArtisans.jsx",
                                lineNumber: 179,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-30 transition-all"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/craft/craft-connect/src/components/Artisans/FeaturedArtisans.jsx",
                                lineNumber: 186,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                        className: "w-5 h-5 text-gray-800 fill-current ml-0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/craft/craft-connect/src/components/Artisans/FeaturedArtisans.jsx",
                                        lineNumber: 191,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/craft/craft-connect/src/components/Artisans/FeaturedArtisans.jsx",
                                    lineNumber: 190,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/craft/craft-connect/src/components/Artisans/FeaturedArtisans.jsx",
                                lineNumber: 189,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, video.id, true, {
                        fileName: "[project]/Desktop/craft/craft-connect/src/components/Artisans/FeaturedArtisans.jsx",
                        lineNumber: 170,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/Desktop/craft/craft-connect/src/components/Artisans/FeaturedArtisans.jsx",
                lineNumber: 168,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/craft/craft-connect/src/components/Artisans/FeaturedArtisans.jsx",
        lineNumber: 147,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FeaturedArtisans, "T2yFu+qA1D4CjBN1UolCd2v4Jow=");
_c = FeaturedArtisans;
const __TURBOPACK__default__export__ = FeaturedArtisans;
var _c;
__turbopack_context__.k.register(_c, "FeaturedArtisans");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/craft/craft-connect/src/components/Footer/Footer.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/lucide-react/dist/esm/icons/facebook.js [app-client] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$cc$2d$logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$cc$2d$logo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/craft/craft-connect/src/assets/cc-logo.svg.mjs { IMAGE => "[project]/Desktop/craft/craft-connect/src/assets/cc-logo.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
;
;
;
;
;
const Footer = ()=>{
    const socialLinks = [
        {
            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"],
            href: "#",
            label: "Facebook"
        },
        {
            Icon: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    className: "w-4 h-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/craft/craft-connect/src/components/Footer/Footer.jsx",
                        lineNumber: 12,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/craft/craft-connect/src/components/Footer/Footer.jsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
            href: "#",
            label: "X (Twitter)"
        },
        {
            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"],
            href: "#",
            label: "LinkedIn"
        },
        {
            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"],
            href: "#",
            label: "Instagram"
        },
        {
            Icon: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    className: "w-4 h-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/craft/craft-connect/src/components/Footer/Footer.jsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/craft/craft-connect/src/components/Footer/Footer.jsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
            href: "#",
            label: "TikTok"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-white border-t border-gray-200",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$cc$2d$logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$cc$2d$logo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                alt: "CraftConnect logo",
                                width: 32,
                                height: 32,
                                className: "w-8 h-8",
                                unoptimized: true
                            }, void 0, false, {
                                fileName: "[project]/Desktop/craft/craft-connect/src/components/Footer/Footer.jsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-gray-900 text-lg",
                                        children: "CraftConnect"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/craft/craft-connect/src/components/Footer/Footer.jsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600 text-sm",
                                        children: "Craftconnect Nigeria Ltd. 2025"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/craft/craft-connect/src/components/Footer/Footer.jsx",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/craft/craft-connect/src/components/Footer/Footer.jsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/craft/craft-connect/src/components/Footer/Footer.jsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: socialLinks.map((item)=>{
                                    const IconComponent = item.Icon;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: item.href,
                                        "aria-label": item.label,
                                        className: "w-9 h-9 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors text-white",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {}, void 0, false, {
                                            fileName: "[project]/Desktop/craft/craft-connect/src/components/Footer/Footer.jsx",
                                            lineNumber: 68,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, item.label, false, {
                                        fileName: "[project]/Desktop/craft/craft-connect/src/components/Footer/Footer.jsx",
                                        lineNumber: 62,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0));
                                })
                            }, void 0, false, {
                                fileName: "[project]/Desktop/craft/craft-connect/src/components/Footer/Footer.jsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-px h-6 bg-gray-300"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/craft/craft-connect/src/components/Footer/Footer.jsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/craft/craft-connect/src/components/Footer/Footer.jsx",
                                            lineNumber: 85,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/craft/craft-connect/src/components/Footer/Footer.jsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium",
                                        children: "English"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/craft/craft-connect/src/components/Footer/Footer.jsx",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/craft/craft-connect/src/components/Footer/Footer.jsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/craft/craft-connect/src/components/Footer/Footer.jsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/craft/craft-connect/src/components/Footer/Footer.jsx",
                lineNumber: 34,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/craft/craft-connect/src/components/Footer/Footer.jsx",
            lineNumber: 33,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/craft/craft-connect/src/components/Footer/Footer.jsx",
        lineNumber: 32,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Footer;
const __TURBOPACK__default__export__ = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/craft/craft-connect/src/components/CTA/WhyTrustSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
;
;
;
const WhyTrustSection = ()=>{
    const features = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"],
            title: "Verified Skills",
            description: "AI-powered ratings ensure artisans' expertise is authentic.",
            color: "green"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
            title: "Professional Portfolios",
            description: "View artisans' best work with ease.",
            color: "blue"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"],
            title: "Verified Skills",
            description: "Transparent pricing and market demand analysis.",
            color: "blue"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
            title: "Secure & Transparent",
            description: "A safe space for artisans and customers to connect.",
            color: "gray"
        }
    ];
    const getIconColor = (color)=>{
        switch(color){
            case "green":
                return "text-green-600";
            case "blue":
                return "text-blue-600";
            default:
                return "text-gray-600";
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-12 md:my-16 lg:my-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-8 md:mb-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900",
                    children: "Why Trust Craft Connect"
                }, void 0, false, {
                    fileName: "[project]/Desktop/craft/craft-connect/src/components/CTA/WhyTrustSection.jsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/craft/craft-connect/src/components/CTA/WhyTrustSection.jsx",
                lineNumber: 47,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto",
                children: features.map((feature, index)=>{
                    const Icon = feature.icon;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start p-6 bg-white rounded-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-shrink-0 mr-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: `w-8 h-8 ${getIconColor(feature.color)}`
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/craft/craft-connect/src/components/CTA/WhyTrustSection.jsx",
                                    lineNumber: 63,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/craft/craft-connect/src/components/CTA/WhyTrustSection.jsx",
                                lineNumber: 62,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-gray-900 mb-2 text-lg",
                                        children: feature.title
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/craft/craft-connect/src/components/CTA/WhyTrustSection.jsx",
                                        lineNumber: 66,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 leading-relaxed",
                                        children: feature.description
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/craft/craft-connect/src/components/CTA/WhyTrustSection.jsx",
                                        lineNumber: 69,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/craft/craft-connect/src/components/CTA/WhyTrustSection.jsx",
                                lineNumber: 65,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, index, true, {
                        fileName: "[project]/Desktop/craft/craft-connect/src/components/CTA/WhyTrustSection.jsx",
                        lineNumber: 58,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/Desktop/craft/craft-connect/src/components/CTA/WhyTrustSection.jsx",
                lineNumber: 54,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/craft/craft-connect/src/components/CTA/WhyTrustSection.jsx",
        lineNumber: 45,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = WhyTrustSection;
const __TURBOPACK__default__export__ = WhyTrustSection;
var _c;
__turbopack_context__.k.register(_c, "WhyTrustSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/craft/craft-connect/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$components$2f$Header$2f$Header$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/src/components/Header/Header.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$components$2f$Hero$2f$HeroSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/src/components/Hero/HeroSection.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$components$2f$Search$2f$SearchSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/src/components/Search/SearchSection.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$components$2f$Categories$2f$CategoriesSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/src/components/Categories/CategoriesSection.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$components$2f$Artisans$2f$FeaturedArtisans$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/src/components/Artisans/FeaturedArtisans.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$components$2f$Footer$2f$Footer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/src/components/Footer/Footer.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$components$2f$CTA$2f$WhyTrustSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/src/components/CTA/WhyTrustSection.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
'use client';
;
;
;
;
;
;
;
;
;
const dynamic = 'force-dynamic';
function HomePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$components$2f$Header$2f$Header$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/craft/craft-connect/app/page.js",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$components$2f$Hero$2f$HeroSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Desktop/craft/craft-connect/app/page.js",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$components$2f$Search$2f$SearchSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Desktop/craft/craft-connect/app/page.js",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$components$2f$Categories$2f$CategoriesSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Desktop/craft/craft-connect/app/page.js",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$components$2f$Artisans$2f$FeaturedArtisans$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Desktop/craft/craft-connect/app/page.js",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$components$2f$CTA$2f$WhyTrustSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Desktop/craft/craft-connect/app/page.js",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/craft/craft-connect/app/page.js",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$components$2f$Footer$2f$Footer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/craft/craft-connect/app/page.js",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "fixed right-4 md:right-6 bottom-6 md:bottom-8 z-50 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 md:p-5 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 flex flex-col items-center justify-center group",
                "aria-label": "Craft AI",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                        className: "w-6 h-6 md:w-7 md:h-7 mb-1"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/craft/craft-connect/app/page.js",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs md:text-sm font-semibold",
                        children: "Craft AI"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/craft/craft-connect/app/page.js",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/craft/craft-connect/app/page.js",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/craft/craft-connect/app/page.js",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_craft_craft-connect_431a30a9._.js.map