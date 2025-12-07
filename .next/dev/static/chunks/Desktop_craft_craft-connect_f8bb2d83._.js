(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/craft/craft-connect/src/assets/categories/carpenter.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/carpenter.f0ba7a3d.svg");}),
"[project]/Desktop/craft/craft-connect/src/assets/categories/carpenter.svg.mjs { IMAGE => \"[project]/Desktop/craft/craft-connect/src/assets/categories/carpenter.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$categories$2f$carpenter$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/src/assets/categories/carpenter.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$categories$2f$carpenter$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 583,
    height: 583,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { api } from "../../../src/lib/api";
// import { X, Mail } from "lucide-react";
// import carpenterImage from "../../../src/assets/categories/carpenter.svg";
// import ccLogo from "../../../src/assets/cc-logo.svg";
// // Force dynamic rendering
// export const dynamic = "force-dynamic";
// export default function ArtisanSignUpPage() {
//   const router = useRouter();
//   const [showForm, setShowForm] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [loadingCategories, setLoadingCategories] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phoneNumber: "",
//     password: "",
//     category: "", // category name (for display)
//     location: "",
//     language: "English",
//     tradeCategory: null, // actual category ID sent to backend
//   });
//   // Trade categories loaded from backend
//   const [categories, setCategories] = useState([]);
//   // Load trade categories from backend on mount
//   useEffect(() => {
//     const fetchCategories = async () => {
//       setLoadingCategories(true);
//       try {
//         const data = await api.getTradeCategories();
//         // Expecting data to be an array of { id, name }
//         setCategories(data || []);
//       } catch (err) {
//         console.error("Failed to load trade categories:", err);
//         // Don't block signup if categories fail; user can sign up without category
//       } finally {
//         setLoadingCategories(false);
//       }
//     };
//     fetchCategories();
//   }, []);
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };
//   // When user changes category select, update both name and ID
//   const handleCategoryChange = (e) => {
//     const selectedName = e.target.value;
//     const selected = categories.find((cat) => cat.name === selectedName);
//     setFormData({
//       ...formData,
//       category: selectedName,
//       tradeCategory: selected ? selected.id : null,
//     });
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     setSuccess("");
//     // Basic validation
//     if (
//       !formData.email ||
//       !formData.password ||
//       !formData.firstName ||
//       !formData.lastName ||
//       !formData.phoneNumber ||
//       !formData.location
//     ) {
//       setError("Please fill in all required fields");
//       setLoading(false);
//       return;
//     }
//     if (formData.password.length < 6) {
//       setError("Password must be at least 6 characters");
//       setLoading(false);
//       return;
//     }
//     try {
//       await api.registerArtisan({
//         firstName: formData.firstName,
//         lastName: formData.lastName,
//         email: formData.email,
//         phoneNumber: formData.phoneNumber,
//         password: formData.password,
//         location: formData.location,
//         language: formData.language,
//         tradeCategory: formData.tradeCategory || null,
//       });
//       setSuccess("Account created successfully! Redirecting to sign in...");
//       setTimeout(() => {
//         loggedRouter.push("/sign-in");
//       }, 2000);
//     } catch (error) {
//       setError(error.message || "Failed to create account. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
//       <div className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden flex flex-col md:flex-row shadow-2xl">
//         {/* Left Side - Image */}
//         <div className="hidden md:block md:w-1/2 relative">
//           <Image
//             src={carpenterImage}
//             alt="Artisan at work"
//             fill
//             className="object-cover"
//             sizes="(max-width: 768px) 0vw, 50vw"
//             unoptimized
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//         </div>
//         {/* Right Side - Form or Options */}
//         <div className="md:w-1/2 p-8 overflow-y-auto relative max-h-screen">
//           <button
//             onClick={() => loggedRouter.push("/")}
//             className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
//           >
//             <X className="w-6 h-6" />
//           </button>
//           <div className="mb-6">
//             <div className="flex items-center gap-2 mb-4">
//               <Image
//                 src={ccLogo}
//                 alt="CraftConnect logo"
//                 width={32}
//                 height={32}
//                 className="w-8 h-8"
//                 unoptimized
//               />
//               <span className="font-bold text-xl">CraftConnect</span>
//             </div>
//             <h2 className="text-2xl font-bold text-gray-900 mb-2">
//               Sign up as Artisan
//             </h2>
//             <p className="text-gray-600">
//               Craft your{" "}
//               <span className="text-amber-500 font-semibold">Success</span>
//             </p>
//             <p className="text-sm text-gray-500">
//               Start your artisan journey today
//             </p>
//           </div>
//           {error && (
//             <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
//               {error}
//             </div>
//           )}
//           {success && (
//             <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm">
//               {success}
//             </div>
//           )}
//           {!showForm ? (
//             // Options Screen
//             <div className="space-y-3">
//               <button
//                 onClick={() => setShowForm(true)}
//                 className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-300 text-gray-700 py-3.5 rounded-lg font-medium hover:bg-gray-50 transition-colors"
//               >
//                 <Mail className="w-5 h-5" />
//                 Continue with Email
//               </button>
//               <p className="text-xs text-gray-500 text-center mt-4 leading-relaxed">
//                 By signing up, you agree to the Terms of Service and Privacy
//                 Policy and to occasionally receive emails from us.
//               </p>
//               <p className="text-center text-sm text-gray-600 mt-4">
//                 Already have an account?{" "}
//                 <span
//                   onClick={() => loggedRouter.push("/sign-in")}
//                   className="text-amber-600 font-semibold cursor-pointer hover:underline"
//                 >
//                   Sign in
//                 </span>
//               </p>
//             </div>
//           ) : (
//             // Full Form
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     First Name*
//                   </label>
//                   <input
//                     type="text"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     placeholder="Enter Name Here"
//                     required
//                     className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Last Name*
//                   </label>
//                   <input
//                     type="text"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     placeholder="Enter Name Here"
//                     required
//                     className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Phone Number*
//                 </label>
//                 <input
//                   type="tel"
//                   name="phoneNumber"
//                   value={formData.phoneNumber}
//                   onChange={handleChange}
//                   placeholder="Enter Number"
//                   required
//                   className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Email Address*
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Enter Email"
//                   required
//                   className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Password*
//                 </label>
//                 <input
//                   type="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   placeholder="Enter Password (min 6 characters)"
//                   required
//                   minLength={6}
//                   className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Trade Category*
//                 </label>
//                 <select
//                   name="category"
//                   value={formData.category}
//                   onChange={handleCategoryChange}
//                   disabled={loadingCategories || categories.length === 0}
//                   className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
//                 >
//                   <option value="">
//                     {loadingCategories ? "Loading categories..." : "Select"}
//                   </option>
//                   {categories.map((cat) => (
//                     <option key={cat.id} value={cat.name}>
//                       {cat.name}
//                     </option>
//                   ))}
//                 </select>
//                 {categories.length === 0 && !loadingCategories && (
//                   <p className="text-xs text-red-500 mt-2">
//                     No categories available yet. Please contact support.
//                   </p>
//                 )}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Location*
//                 </label>
//                 <input
//                   type="text"
//                   name="location"
//                   value={formData.location}
//                   onChange={handleChange}
//                   placeholder="City"
//                   required
//                   className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
//                 />
//               </div>
//               <div className="flex items-start">
//                 <input
//                   type="checkbox"
//                   id="terms"
//                   required
//                   className="mt-1 w-4 h-4 text-amber-500 rounded border-gray-300 focus:ring-amber-500"
//                 />
//                 <label htmlFor="terms" className="ml-2 text-xs text-gray-600">
//                   By signing up, you agree to the Terms of Service and Privacy
//                   Policy
//                 </label>
//               </div>
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {loading ? "Signing up..." : "Sign up"}
//               </button>
//               <p className="text-center text-sm text-gray-600">
//                 Already have an account?{" "}
//                 <span
//                   onClick={() => loggedRouter.push("/sign-in")}
//                   className="text-amber-600 font-semibold cursor-pointer hover:underline"
//                 >
//                   Sign in
//                 </span>
//               </p>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
// Enchnaced ui for signup with artisans
// "use client";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { api } from "../../../src/lib/api";
// import { X, Mail, Check } from "lucide-react";
// import carpenterImage from "../../../src/assets/categories/carpenter.svg";
// import ccLogo from "../../../src/assets/cc-logo.svg";
// // Force dynamic rendering
// export const dynamic = "force-dynamic";
// // Trade category emoji/icon mapping (frontend only)
// // Designer: Replace these emojis with actual images/icons later
// const TRADE_ICONS = {
//   "Carpenter": { emoji: "🔨", color: "bg-amber-100 border-amber-300 hover:border-amber-500" },
//   "Tailor": { emoji: "✂️", color: "bg-purple-100 border-purple-300 hover:border-purple-500" },
//   "Fashion Designer": { emoji: "👗", color: "bg-fuchsia-100 border-fuchsia-300 hover:border-fuchsia-500" },
//   "Electrician": { emoji: "⚡", color: "bg-yellow-100 border-yellow-300 hover:border-yellow-500" },
//   "Plumber": { emoji: "🔧", color: "bg-blue-100 border-blue-300 hover:border-blue-500" },
//   "Painter": { emoji: "🎨", color: "bg-pink-100 border-pink-300 hover:border-pink-500" },
//   "Mason": { emoji: "🧱", color: "bg-orange-100 border-orange-300 hover:border-orange-500" },
//   "Bricklayer": { emoji: "🧱", color: "bg-orange-100 border-orange-300 hover:border-orange-500" },
//   "Barber": { emoji: "💇", color: "bg-cyan-100 border-cyan-300 hover:border-cyan-500" },
//   "Hairdresser": { emoji: "💇‍♀️", color: "bg-cyan-100 border-cyan-300 hover:border-cyan-500" },
//   "Mechanic": { emoji: "🔩", color: "bg-gray-100 border-gray-300 hover:border-gray-500" },
//   "Welder": { emoji: "🔥", color: "bg-red-100 border-red-300 hover:border-red-500" },
//   "Tiler": { emoji: "⬛", color: "bg-slate-100 border-slate-300 hover:border-slate-500" },
//   "AC Technician": { emoji: "❄️", color: "bg-sky-100 border-sky-300 hover:border-sky-500" },
//   "Refrigeration": { emoji: "❄️", color: "bg-sky-100 border-sky-300 hover:border-sky-500" },
//   "Event Decorator": { emoji: "🎉", color: "bg-rose-100 border-rose-300 hover:border-rose-500" },
//   "Photographer": { emoji: "📸", color: "bg-indigo-100 border-indigo-300 hover:border-indigo-500" },
//   "Videographer": { emoji: "🎥", color: "bg-indigo-100 border-indigo-300 hover:border-indigo-500" },
//   // Default for unknown categories
//   "default": { emoji: "🛠️", color: "bg-gray-100 border-gray-300 hover:border-gray-500" }
// };
// export default function ArtisanSignUpPage() {
//   const router = useRouter();
//   const [showForm, setShowForm] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [loadingCategories, setLoadingCategories] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phoneNumber: "",
//     password: "",
//     location: "",
//     language: "English",
//     tradeCategory: null, // actual category ID sent to backend
//   });
//   // Trade categories loaded from backend
//   const [categories, setCategories] = useState([]);
//   // Load trade categories from backend on mount
//   useEffect(() => {
//     const fetchCategories = async () => {
//       setLoadingCategories(true);
//       try {
//         const data = await api.getTradeCategories();
//         setCategories(data || []);
//       } catch (err) {
//         console.error("Failed to load trade categories:", err);
//       } finally {
//         setLoadingCategories(false);
//       }
//     };
//     fetchCategories();
//   }, []);
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };
//   // Select trade category by clicking card
//   const selectTradeCategory = (categoryId) => {
//     setFormData({
//       ...formData,
//       tradeCategory: formData.tradeCategory === categoryId ? null : categoryId,
//     });
//   };
//   // Get trade icon info (emoji + color)
//   const getTradeIcon = (categoryName) => {
//     return TRADE_ICONS[categoryName] || TRADE_ICONS["default"];
//   };
//   const handleSubmit = async (skipCategory = false) => {
//     setLoading(true);
//     setError("");
//     setSuccess("");
//     // Basic validation
//     if (
//       !formData.email ||
//       !formData.password ||
//       !formData.firstName ||
//       !formData.lastName ||
//       !formData.phoneNumber ||
//       !formData.location
//     ) {
//       setError("Please fill in all required fields");
//       setLoading(false);
//       return;
//     }
//     if (formData.password.length < 6) {
//       setError("Password must be at least 6 characters");
//       setLoading(false);
//       return;
//     }
//     // Allow skipping category selection
//     const dataToSend = {
//       firstName: formData.firstName,
//       lastName: formData.lastName,
//       email: formData.email,
//       phoneNumber: formData.phoneNumber,
//       password: formData.password,
//       location: formData.location,
//       language: formData.language,
//       tradeCategory: skipCategory ? null : formData.tradeCategory,
//     };
//     try {
//       await api.registerArtisan(dataToSend);
//       setSuccess(
//         skipCategory
//           ? "Account created! You can add your trade category later. Redirecting..."
//           : "Account created successfully! Redirecting to sign in..."
//       );
//       setTimeout(() => {
//         loggedRouter.push("/sign-in");
//       }, 2000);
//     } catch (error) {
//       setError(error.message || "Failed to create account. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };
//   // Get selected category name for display
//   const selectedCategory = categories.find(cat => cat.id === formData.tradeCategory);
//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
//       <div className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden flex flex-col md:flex-row shadow-2xl">
//         {/* Left Side - Image */}
//         <div className="hidden md:block md:w-1/2 relative">
//           <Image
//             src={carpenterImage}
//             alt="Artisan at work"
//             fill
//             className="object-cover"
//             sizes="(max-width: 768px) 0vw, 50vw"
//             unoptimized
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//         </div>
//         {/* Right Side - Form */}
//         <div className="md:w-1/2 p-8 overflow-y-auto relative max-h-screen">
//           <button
//             onClick={() => loggedRouter.push("/")}
//             className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
//           >
//             <X className="w-6 h-6" />
//           </button>
//           <div className="mb-6">
//             <div className="flex items-center gap-2 mb-4">
//               <Image
//                 src={ccLogo}
//                 alt="CraftConnect logo"
//                 width={32}
//                 height={32}
//                 className="w-8 h-8"
//                 unoptimized
//               />
//               <span className="font-bold text-xl">CraftConnect</span>
//             </div>
//             <h2 className="text-2xl font-bold text-gray-900 mb-2">
//               Sign up as Artisan
//             </h2>
//             <p className="text-gray-600">
//               Craft your{" "}
//               <span className="text-amber-500 font-semibold">Success</span>
//             </p>
//             <p className="text-sm text-gray-500">
//               Start your artisan journey today
//             </p>
//           </div>
//           {error && (
//             <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
//               {error}
//             </div>
//           )}
//           {success && (
//             <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm">
//               {success}
//             </div>
//           )}
//           {!showForm ? (
//             // Options Screen
//             <div className="space-y-3">
//               <button
//                 onClick={() => setShowForm(true)}
//                 className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-300 text-gray-700 py-3.5 rounded-lg font-medium hover:bg-gray-50 transition-colors"
//               >
//                 <Mail className="w-5 h-5" />
//                 Continue with Email
//               </button>
//               <p className="text-xs text-gray-500 text-center mt-4 leading-relaxed">
//                 By signing up, you agree to the Terms of Service and Privacy
//                 Policy and to occasionally receive emails from us.
//               </p>
//               <p className="text-center text-sm text-gray-600 mt-4">
//                 Already have an account?{" "}
//                 <span
//                   onClick={() => loggedRouter.push("/sign-in")}
//                   className="text-amber-600 font-semibold cursor-pointer hover:underline"
//                 >
//                   Sign in
//                 </span>
//               </p>
//             </div>
//           ) : (
//             // Full Form
//             <div className="space-y-4">
//               {/* Basic Info Section */}
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     First Name*
//                   </label>
//                   <input
//                     type="text"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     placeholder="Enter Name Here"
//                     required
//                     className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Last Name*
//                   </label>
//                   <input
//                     type="text"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     placeholder="Enter Name Here"
//                     required
//                     className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Phone Number*
//                 </label>
//                 <input
//                   type="tel"
//                   name="phoneNumber"
//                   value={formData.phoneNumber}
//                   onChange={handleChange}
//                   placeholder="08012345678"
//                   required
//                   className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Email Address*
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Enter Email"
//                   required
//                   className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Password*
//                 </label>
//                 <input
//                   type="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   placeholder="Min 6 characters"
//                   required
//                   minLength={6}
//                   className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Location*
//                 </label>
//                 <input
//                   type="text"
//                   name="location"
//                   value={formData.location}
//                   onChange={handleChange}
//                   placeholder="e.g., Lagos, Abuja"
//                   required
//                   className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Language*
//                 </label>
//                 <select
//                   name="language"
//                   value={formData.language}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
//                 >
//                   <option>English</option>
//                   <option>Pidgin</option>
//                   <option>Yoruba</option>
//                   <option>Hausa</option>
//                   <option>Igbo</option>
//                 </select>
//               </div>
//               {/* Trade Category Selection - Visual Cards */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Your Trade (Optional - can add later)
//                 </label>
//                 <p className="text-xs text-gray-500 mb-3">
//                   Tap to select your trade. Don't worry, you can skip this and add it later.
//                 </p>
//                 {loadingCategories ? (
//                   <div className="text-center py-8 text-gray-500">
//                     Loading trades...
//                   </div>
//                 ) : categories.length === 0 ? (
//                   <div className="text-center py-8 text-gray-500 bg-gray-50 rounded-lg">
//                     No trades available. You can skip this step.
//                   </div>
//                 ) : (
//                   <div className="grid grid-cols-3 gap-3 max-h-64 overflow-y-auto p-2 bg-gray-50 rounded-lg">
//                     {categories.map((category) => {
//                       const icon = getTradeIcon(category.name);
//                       const isSelected = formData.tradeCategory === category.id;
//                       return (
//                         <button
//                           key={category.id}
//                           type="button"
//                           onClick={() => selectTradeCategory(category.id)}
//                           className={`
//                             relative p-4 rounded-xl border-2 transition-all
//                             ${icon.color}
//                             ${isSelected
//                               ? 'border-amber-500 shadow-lg scale-105 ring-2 ring-amber-200'
//                               : 'border-transparent'
//                             }
//                           `}
//                         >
//                           {isSelected && (
//                             <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
//                               <Check className="w-4 h-4 text-white" />
//                             </div>
//                           )}
//                           <div className="text-3xl mb-2">{icon.emoji}</div>
//                           <div className="text-xs font-semibold text-gray-800 text-center leading-tight">
//                             {category.name}
//                           </div>
//                         </button>
//                       );
//                     })}
//                   </div>
//                 )}
//                 {selectedCategory && (
//                   <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
//                     <p className="text-sm text-amber-800">
//                       <span className="font-semibold">Selected:</span> {selectedCategory.name}
//                     </p>
//                   </div>
//                 )}
//               </div>
//               {/* Terms Checkbox */}
//               <div className="flex items-start">
//                 <input
//                   type="checkbox"
//                   id="terms"
//                   required
//                   className="mt-1 w-4 h-4 text-amber-500 rounded border-gray-300 focus:ring-amber-500"
//                 />
//                 <label htmlFor="terms" className="ml-2 text-xs text-gray-600">
//                   By signing up, you agree to the Terms of Service and Privacy
//                   Policy
//                 </label>
//               </div>
//               {/* Submit Buttons */}
//               <div className="space-y-2">
//                 <button
//                   type="button"
//                   onClick={() => handleSubmit(false)}
//                   disabled={loading}
//                   className="w-full bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   {loading ? "Creating account..." : formData.tradeCategory ? "Sign up" : "Sign up (Add trade later)"}
//                 </button>
//                 {/* Skip Category Button - Only show if no category selected */}
//                 {!formData.tradeCategory && (
//                   <button
//                     type="button"
//                     onClick={() => handleSubmit(true)}
//                     disabled={loading}
//                     className="w-full bg-white border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//                   >
//                     Skip for now (Add trade later)
//                   </button>
//                 )}
//               </div>
//               <p className="text-center text-sm text-gray-600">
//                 Already have an account?{" "}
//                 <span
//                   onClick={() => loggedRouter.push("/sign-in")}
//                   className="text-amber-600 font-semibold cursor-pointer hover:underline"
//                 >
//                   Sign in
//                 </span>
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
// Enhanced ui complete signup with presigned url and cloudfare
// "use client";
// import { useState, useEffect, useRef } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { api } from "../../../src/lib/api";
// import {
//   X,
//   Mail,
//   Check,
//   Camera,
//   Upload,
//   ArrowRight,
//   ArrowLeft,
//   Video,
// } from "lucide-react";
// import carpenterImage from "../../../src/assets/categories/carpenter.svg";
// import ccLogo from "../../../src/assets/cc-logo.svg";
// export const dynamic = "force-dynamic";
// // Trade category icon mapping
// const TRADE_ICONS = {
//   Carpenter: {
//     emoji: "🔨",
//     color: "bg-amber-100 border-amber-300 hover:border-amber-500",
//   },
//   Tailor: {
//     emoji: "✂️",
//     color: "bg-purple-100 border-purple-300 hover:border-purple-500",
//   },
//   "Fashion Designer": {
//     emoji: "👗",
//     color: "bg-fuchsia-100 border-fuchsia-300 hover:border-fuchsia-500",
//   },
//   Electrician: {
//     emoji: "⚡",
//     color: "bg-yellow-100 border-yellow-300 hover:border-yellow-500",
//   },
//   Plumber: {
//     emoji: "🔧",
//     color: "bg-blue-100 border-blue-300 hover:border-blue-500",
//   },
//   Painter: {
//     emoji: "🎨",
//     color: "bg-pink-100 border-pink-300 hover:border-pink-500",
//   },
//   Mason: {
//     emoji: "🧱",
//     color: "bg-orange-100 border-orange-300 hover:border-orange-500",
//   },
//   Bricklayer: {
//     emoji: "🧱",
//     color: "bg-orange-100 border-orange-300 hover:border-orange-500",
//   },
//   Barber: {
//     emoji: "💇",
//     color: "bg-cyan-100 border-cyan-300 hover:border-cyan-500",
//   },
//   Hairdresser: {
//     emoji: "💇‍♀️",
//     color: "bg-cyan-100 border-cyan-300 hover:border-cyan-500",
//   },
//   Mechanic: {
//     emoji: "🔩",
//     color: "bg-gray-100 border-gray-300 hover:border-gray-500",
//   },
//   Welder: {
//     emoji: "🔥",
//     color: "bg-red-100 border-red-300 hover:border-red-500",
//   },
//   Tiler: {
//     emoji: "⬛",
//     color: "bg-slate-100 border-slate-300 hover:border-slate-500",
//   },
//   "AC Technician": {
//     emoji: "❄️",
//     color: "bg-sky-100 border-sky-300 hover:border-sky-500",
//   },
//   Refrigeration: {
//     emoji: "❄️",
//     color: "bg-sky-100 border-sky-300 hover:border-sky-500",
//   },
//   "Event Decorator": {
//     emoji: "🎉",
//     color: "bg-rose-100 border-rose-300 hover:border-rose-500",
//   },
//   Photographer: {
//     emoji: "📸",
//     color: "bg-indigo-100 border-indigo-300 hover:border-indigo-500",
//   },
//   Videographer: {
//     emoji: "🎥",
//     color: "bg-indigo-100 border-indigo-300 hover:border-indigo-500",
//   },
//   default: {
//     emoji: "🛠️",
//     color: "bg-gray-100 border-gray-300 hover:border-gray-500",
//   },
// };
// export default function ArtisanSignUpPage() {
//   const router = useRouter();
//   // Wrap router to log all navigation attempts
//   const originalPush = loggedRouter.push;
//   const loggedRouter = {
//     ...router,
//     push: (href, options) => {
//       console.log("🔍 Router.push called:", href, "from signup page");
//       const stack = new Error().stack;
//       console.log("📍 Call stack:", stack);
//       // Only allow redirect to sign-in after successful signup
//       if (href === "/sign-in") {
//         console.log(
//           "⚠️ Redirecting to sign-in - this should only happen after signup"
//         );
//       }
//       return originalPush.call(router, href, options);
//     },
//   };
//   const [currentStep, setCurrentStep] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const [loadingCategories, setLoadingCategories] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [uploadProgress, setUploadProgress] = useState({});
//   const [mounted, setMounted] = useState(false);
//   const profilePhotoRef = useRef(null);
//   const portfolioRef = useRef(null);
//   // Ensure component is mounted before rendering
//   useEffect(() => {
//     setMounted(true);
//     console.log("✅ ArtisanSignUpPage mounted, currentStep:", currentStep);
//     console.log(
//       "✅ URL:",
//       typeof window !== "undefined" ? window.location.href : "server"
//     );
//     // Prevent any automatic redirects - this page should always be accessible
//     if (typeof window !== "undefined") {
//       console.log("✅ Page is accessible, no redirect should happen");
//       // Explicitly prevent any navigation away from this page unless user completes signup
//       const currentPath = window.location.pathname;
//       if (currentPath !== "/sign-up/artisan") {
//         console.warn("⚠️ Unexpected path change detected:", currentPath);
//       }
//     }
//   }, []);
//   // Prevent accidental navigation - only allow navigation after successful signup
//   useEffect(() => {
//     const handleBeforeUnload = (e) => {
//       // Don't prevent navigation, just log it
//       console.log("🔄 Navigation detected");
//     };
//     if (typeof window !== "undefined") {
//       window.addEventListener("beforeunload", handleBeforeUnload);
//       return () =>
//         window.removeEventListener("beforeunload", handleBeforeUnload);
//     }
//   }, []);
//   // Debug: Log current step on mount and changes
//   useEffect(() => {
//     if (mounted) {
//       console.log("✅ ArtisanSignUpPage currentStep:", currentStep);
//       console.log("✅ Form data:", {
//         hasFirstName: !!formData.firstName,
//         hasEmail: !!formData.email,
//         tradeCategory: formData.tradeCategory,
//       });
//     }
//   }, [
//     currentStep,
//     formData.firstName,
//     formData.email,
//     formData.tradeCategory,
//     mounted,
//   ]);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phoneNumber: "",
//     password: "",
//     location: "",
//     language: "English",
//     tradeCategory: null,
//     profilePhotoUrl: null,
//     profilePhotoPreview: null,
//     portfolioUrls: [], // Array of { url, preview, type, key }
//   });
//   const [categories, setCategories] = useState([]);
//   const [tempUserId, setTempUserId] = useState(null);
//   useEffect(() => {
//     const fetchCategories = async () => {
//       setLoadingCategories(true);
//       try {
//         const data = await api.getTradeCategories();
//         setCategories(data || []);
//         console.log("Trade categories loaded:", data?.length || 0);
//       } catch (err) {
//         console.error("Failed to load trade categories:", err);
//         // Don't block signup if categories fail
//         setCategories([]);
//       } finally {
//         setLoadingCategories(false);
//       }
//     };
//     fetchCategories();
//   }, []);
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
//   const selectTradeCategory = (categoryId) => {
//     setFormData({
//       ...formData,
//       tradeCategory: formData.tradeCategory === categoryId ? null : categoryId,
//     });
//   };
//   const getTradeIcon = (categoryName) => {
//     return TRADE_ICONS[categoryName] || TRADE_ICONS["default"];
//   };
//   // Upload profile photo to R2
//   const handleProfilePhoto = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     if (file.size > 5 * 1024 * 1024) {
//       setError("Profile photo must be less than 5MB");
//       return;
//     }
//     setError("");
//     setUploadProgress({ profile: 0 });
//     try {
//       // Create temporary user ID if not exists (for demo - in production, get from registration)
//       const userId = tempUserId || "temp_" + Date.now();
//       if (!tempUserId) setTempUserId(userId);
//       // Get file extension
//       const fileExt = file.name.split(".").pop();
//       // Get presigned URL
//       const urlResponse = await fetch("/api/upload/presigned-url", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           entityType: "artisan",
//           entityId: userId,
//           intent: "profile",
//           fileExtension: fileExt,
//           contentType: file.type,
//         }),
//       });
//       if (!urlResponse.ok) throw new Error("Failed to get upload URL");
//       const { uploadUrl, publicUrl, key } = await urlResponse.json();
//       // Upload to R2 with progress
//       await new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open("PUT", uploadUrl);
//         xhr.setRequestHeader("Content-Type", file.type);
//         xhr.upload.onprogress = (event) => {
//           if (event.lengthComputable) {
//             const percent = Math.round((event.loaded / event.total) * 100);
//             setUploadProgress({ profile: percent });
//           }
//         };
//         xhr.onload = () => {
//           if (xhr.status >= 200 && xhr.status < 300) {
//             resolve();
//           } else {
//             reject(new Error("Upload failed"));
//           }
//         };
//         xhr.onerror = () => reject(new Error("Upload failed"));
//         xhr.send(file);
//       });
//       // Save URL and preview
//       setFormData({
//         ...formData,
//         profilePhotoUrl: publicUrl,
//         profilePhotoPreview: URL.createObjectURL(file),
//       });
//       setUploadProgress({});
//     } catch (err) {
//       setError(err.message || "Failed to upload profile photo");
//       setUploadProgress({});
//     }
//   };
//   // Upload portfolio items
//   const handlePortfolioUpload = async (e) => {
//     const files = Array.from(e.target.files);
//     for (const file of files) {
//       if (file.size > 10 * 1024 * 1024) {
//         setError("Each file must be less than 10MB");
//         return;
//       }
//     }
//     if (formData.portfolioUrls.length + files.length > 10) {
//       setError("Maximum 10 portfolio items allowed");
//       return;
//     }
//     setError("");
//     const userId = tempUserId || "temp_" + Date.now();
//     if (!tempUserId) setTempUserId(userId);
//     try {
//       const uploadedItems = [];
//       for (let i = 0; i < files.length; i++) {
//         const file = files[i];
//         const fileExt = file.name.split(".").pop();
//         const isVideo = file.type.startsWith("video/");
//         setUploadProgress({ [`portfolio_${i}`]: 0 });
//         // Get presigned URL
//         const urlResponse = await fetch("/api/upload/presigned-url", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             entityType: "artisan",
//             entityId: userId,
//             intent: "portfolio",
//             fileExtension: fileExt,
//             contentType: file.type,
//           }),
//         });
//         if (!urlResponse.ok) throw new Error("Failed to get upload URL");
//         const { uploadUrl, publicUrl, key } = await urlResponse.json();
//         // Upload to R2
//         await new Promise((resolve, reject) => {
//           const xhr = new XMLHttpRequest();
//           xhr.open("PUT", uploadUrl);
//           xhr.setRequestHeader("Content-Type", file.type);
//           xhr.upload.onprogress = (event) => {
//             if (event.lengthComputable) {
//               const percent = Math.round((event.loaded / event.total) * 100);
//               setUploadProgress({ [`portfolio_${i}`]: percent });
//             }
//           };
//           xhr.onload = () => {
//             if (xhr.status >= 200 && xhr.status < 300) resolve();
//             else reject(new Error("Upload failed"));
//           };
//           xhr.onerror = () => reject(new Error("Upload failed"));
//           xhr.send(file);
//         });
//         uploadedItems.push({
//           url: publicUrl,
//           preview: URL.createObjectURL(file),
//           type: isVideo ? "video" : "image",
//           key,
//         });
//       }
//       setFormData({
//         ...formData,
//         portfolioUrls: [...formData.portfolioUrls, ...uploadedItems],
//       });
//       setUploadProgress({});
//     } catch (err) {
//       setError(err.message || "Failed to upload portfolio");
//       setUploadProgress({});
//     }
//   };
//   const removePortfolioItem = (index) => {
//     const newPortfolio = formData.portfolioUrls.filter((_, i) => i !== index);
//     setFormData({ ...formData, portfolioUrls: newPortfolio });
//   };
//   // Validation
//   const canProceedStep1 =
//     formData.firstName &&
//     formData.lastName &&
//     formData.email &&
//     formData.phoneNumber &&
//     formData.password.length >= 6 &&
//     formData.location;
//   // Step 2 (Trade) is optional - can proceed without selection
//   const canProceedStep2 = true;
//   // Step 3 (Profile Photo) is optional - can proceed without photo
//   const canProceedStep3 = true;
//   // Step 4 (Portfolio) is optional - can proceed without portfolio
//   const canProceedStep4 = true;
//   // Submit to backend
//   const handleSubmit = async () => {
//     console.log("🚀 handleSubmit called - submitting form");
//     setLoading(true);
//     setError("");
//     setSuccess("");
//     try {
//       // Register artisan with all data including R2 URLs
//       await api.registerArtisan({
//         firstName: formData.firstName,
//         lastName: formData.lastName,
//         email: formData.email,
//         phoneNumber: formData.phoneNumber,
//         password: formData.password,
//         location: formData.location,
//         language: formData.language,
//         tradeCategory: formData.tradeCategory,
//         profilePhotoUrl: formData.profilePhotoUrl,
//         portfolioUrls: formData.portfolioUrls.map((item) => item.url),
//       });
//       setSuccess("Account created successfully! Redirecting...");
//       // Only redirect after successful account creation
//       setTimeout(() => {
//         console.log("✅ Account created successfully, redirecting to sign-in");
//         loggedRouter.push("/sign-in");
//       }, 2000);
//     } catch (error) {
//       setError(error.message || "Failed to create account. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };
//   // Skip to finish
//   const skipToFinish = async () => {
//     // Validate required fields first
//     if (
//       !formData.firstName ||
//       !formData.lastName ||
//       !formData.email ||
//       !formData.phoneNumber ||
//       !formData.password ||
//       formData.password.length < 6 ||
//       !formData.location
//     ) {
//       setError("Please complete Step 1 (Basic Info) before creating account.");
//       // If on step 0, move to step 1
//       if (currentStep === 0) {
//         setCurrentStep(1);
//       }
//       return;
//     }
//     console.log(
//       "🚀 skipToFinish called - creating account without redirecting yet"
//     );
//     setLoading(true);
//     setError("");
//     try {
//       await api.registerArtisan({
//         firstName: formData.firstName,
//         lastName: formData.lastName,
//         email: formData.email,
//         phoneNumber: formData.phoneNumber,
//         password: formData.password,
//         location: formData.location,
//         language: formData.language,
//         tradeCategory: formData.tradeCategory || null,
//         profilePhotoUrl: formData.profilePhotoUrl || null,
//         portfolioUrls:
//           formData.portfolioUrls.length > 0
//             ? formData.portfolioUrls.map((item) => item.url)
//             : [],
//       });
//       setSuccess(
//         "Account created! You can complete your profile later. Redirecting..."
//       );
//       // Only redirect after successful account creation
//       setTimeout(() => {
//         console.log("✅ Account created successfully, redirecting to sign-in");
//         loggedRouter.push("/sign-in");
//       }, 2000);
//     } catch (error) {
//       setError(error.message || "Failed to create account. Please try again.");
//       setLoading(false);
//     }
//   };
//   const selectedCategory = categories.find(
//     (cat) => cat.id === formData.tradeCategory
//   );
//   const isUploading = Object.keys(uploadProgress).length > 0;
//   // Ensure component always renders something
//   console.log(
//     "🎨 Rendering ArtisanSignUpPage, currentStep:",
//     currentStep,
//     "mounted:",
//     mounted
//   );
//   // Don't render until mounted to prevent hydration issues
//   if (!mounted) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <p className="text-gray-600">Loading signup form...</p>
//         </div>
//       </div>
//     );
//   }
//   // Error boundary - catch any render errors
//   try {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
//         <div className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden flex flex-col md:flex-row shadow-2xl">
//           {/* Left Side - Image */}
//           <div className="hidden md:block md:w-1/2 relative">
//             <Image
//               src={carpenterImage}
//               alt="Artisan at work"
//               fill
//               className="object-cover"
//               sizes="(max-width: 768px) 0vw, 50vw"
//               unoptimized
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//           </div>
//           {/* Right Side - Content */}
//           <div className="md:w-1/2 p-8 overflow-y-auto relative max-h-screen">
//             <button
//               onClick={() => loggedRouter.push("/")}
//               className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
//             >
//               <X className="w-6 h-6" />
//             </button>
//             {/* Header */}
//             <div className="mb-6">
//               <div className="flex items-center gap-2 mb-4">
//                 <Image
//                   src={ccLogo}
//                   alt="CraftConnect"
//                   width={32}
//                   height={32}
//                   className="w-8 h-8"
//                   unoptimized
//                 />
//                 <span className="font-bold text-xl">CraftConnect</span>
//               </div>
//               <h2 className="text-2xl font-bold text-gray-900 mb-2">
//                 Sign up as Artisan
//               </h2>
//               <p className="text-gray-600">
//                 Craft your{" "}
//                 <span className="text-amber-500 font-semibold">Success</span>
//               </p>
//               {/* Debug: Show current step */}
//               {process.env.NODE_ENV === "development" && (
//                 <p className="text-xs text-gray-400 mt-2">
//                   Debug: Current Step = {currentStep}
//                 </p>
//               )}
//             </div>
//             {/* Progress */}
//             {currentStep > 0 && (
//               <div className="mb-6">
//                 <div className="flex items-center justify-between mb-2">
//                   <span className="text-sm font-medium text-gray-700">
//                     Step {currentStep} of 4
//                   </span>
//                   <span className="text-xs text-gray-500">
//                     {Math.round((currentStep / 4) * 100)}% complete
//                   </span>
//                 </div>
//                 <div className="w-full bg-gray-200 rounded-full h-2">
//                   <div
//                     className="bg-amber-500 h-2 rounded-full transition-all duration-300"
//                     style={{ width: `${(currentStep / 4) * 100}%` }}
//                   ></div>
//                 </div>
//               </div>
//             )}
//             {/* Messages */}
//             {error && (
//               <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
//                 {error}
//               </div>
//             )}
//             {success && (
//               <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm">
//                 {success}
//               </div>
//             )}
//             {/* Upload Progress */}
//             {isUploading && (
//               <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
//                 <div className="text-sm font-semibold text-blue-800 mb-2">
//                   Uploading...
//                 </div>
//                 {Object.entries(uploadProgress).map(([key, progress]) => (
//                   <div key={key} className="mb-2">
//                     <div className="flex justify-between text-xs text-blue-700 mb-1">
//                       <span>{key.replace("_", " ")}</span>
//                       <span>{progress}%</span>
//                     </div>
//                     <div className="w-full bg-blue-200 rounded-full h-1.5">
//                       <div
//                         className="bg-blue-600 h-1.5 rounded-full transition-all"
//                         style={{ width: `${progress}%` }}
//                       ></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//             {/* STEP 0: Initial Screen - Continue with Email */}
//             {currentStep === 0 && (
//               <div className="space-y-3">
//                 <div className="text-center mb-4">
//                   <h3 className="text-lg font-bold text-gray-900 mb-2">
//                     Get Started
//                   </h3>
//                   <p className="text-sm text-gray-600">
//                     Create your artisan account in just a few steps
//                   </p>
//                 </div>
//                 <button
//                   onClick={() => {
//                     console.log(
//                       "Continue with Email clicked, moving to step 1"
//                     );
//                     setCurrentStep(1);
//                   }}
//                   className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-300 text-gray-700 py-3.5 rounded-lg font-medium hover:bg-gray-50 transition-colors"
//                 >
//                   <Mail className="w-5 h-5" />
//                   Continue with Email
//                 </button>
//                 <p className="text-xs text-gray-500 text-center mt-4 leading-relaxed">
//                   By signing up, you agree to the Terms of Service and Privacy
//                   Policy and to occasionally receive emails from us.
//                 </p>
//                 <p className="text-center text-sm text-gray-600 mt-4">
//                   Already have an account?{" "}
//                   <span
//                     onClick={() => loggedRouter.push("/sign-in")}
//                     className="text-amber-600 font-semibold cursor-pointer hover:underline"
//                   >
//                     Sign in
//                   </span>
//                 </p>
//               </div>
//             )}
//             {/* STEP 1: Basic Info */}
//             {currentStep === 1 && (
//               <form
//                 onSubmit={(e) => {
//                   e.preventDefault();
//                   if (canProceedStep1) setCurrentStep(2);
//                 }}
//                 className="space-y-4"
//               >
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       First Name*
//                     </label>
//                     <input
//                       type="text"
//                       name="firstName"
//                       value={formData.firstName}
//                       onChange={handleChange}
//                       placeholder="Enter Name Here"
//                       required
//                       className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Last Name*
//                     </label>
//                     <input
//                       type="text"
//                       name="lastName"
//                       value={formData.lastName}
//                       onChange={handleChange}
//                       placeholder="Enter Name Here"
//                       required
//                       className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Phone Number*
//                   </label>
//                   <input
//                     type="tel"
//                     name="phoneNumber"
//                     value={formData.phoneNumber}
//                     onChange={handleChange}
//                     placeholder="08012345678"
//                     required
//                     className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Email Address*
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="Enter Email"
//                     required
//                     className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Password*
//                   </label>
//                   <input
//                     type="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     placeholder="Min 6 characters"
//                     required
//                     minLength={6}
//                     className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Location*
//                   </label>
//                   <input
//                     type="text"
//                     name="location"
//                     value={formData.location}
//                     onChange={handleChange}
//                     placeholder="e.g., Lagos, Abuja"
//                     required
//                     className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Language*
//                   </label>
//                   <select
//                     name="language"
//                     value={formData.language}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
//                   >
//                     <option>English</option>
//                     <option>Pidgin</option>
//                     <option>Yoruba</option>
//                     <option>Hausa</option>
//                     <option>Igbo</option>
//                   </select>
//                 </div>
//                 <div className="flex gap-3">
//                   <button
//                     type="button"
//                     onClick={() => setCurrentStep(0)}
//                     className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 flex items-center gap-2"
//                   >
//                     <ArrowLeft className="w-5 h-5" /> Back
//                   </button>
//                   <button
//                     type="submit"
//                     disabled={!canProceedStep1}
//                     className="flex-1 bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//                   >
//                     Next: Trade Selection <ArrowRight className="w-5 h-5" />
//                   </button>
//                 </div>
//                 <button
//                   type="button"
//                   onClick={skipToFinish}
//                   disabled={loading || !canProceedStep1}
//                   className="w-full bg-white border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors disabled:opacity-50"
//                 >
//                   Skip & Create Account
//                 </button>
//               </form>
//             )}
//             {/* STEP 2: Trade Selection */}
//             {currentStep === 2 && (
//               <div className="space-y-4">
//                 <div>
//                   <h3 className="text-lg font-bold text-gray-900 mb-1">
//                     Select Your Trade
//                   </h3>
//                   <p className="text-sm text-gray-600">
//                     Choose your trade category. You can skip this and add it
//                     later.
//                   </p>
//                 </div>
//                 {loadingCategories ? (
//                   <div className="text-center py-8 text-gray-500">
//                     Loading trades...
//                   </div>
//                 ) : categories.length === 0 ? (
//                   <div className="text-center py-8 text-gray-500 bg-gray-50 rounded-lg">
//                     No trades available. You can skip this step.
//                   </div>
//                 ) : (
//                   <div className="grid grid-cols-3 gap-3 max-h-96 overflow-y-auto p-2 bg-gray-50 rounded-lg">
//                     {categories.map((category) => {
//                       const icon = getTradeIcon(category.name);
//                       const isSelected = formData.tradeCategory === category.id;
//                       return (
//                         <button
//                           key={category.id}
//                           type="button"
//                           onClick={() => selectTradeCategory(category.id)}
//                           className={`
//                           relative p-4 rounded-xl border-2 transition-all
//                           ${icon.color}
//                           ${
//                             isSelected
//                               ? "border-amber-500 shadow-lg scale-105 ring-2 ring-amber-200"
//                               : "border-transparent"
//                           }
//                         `}
//                         >
//                           {isSelected && (
//                             <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
//                               <Check className="w-4 h-4 text-white" />
//                             </div>
//                           )}
//                           <div className="text-3xl mb-2">{icon.emoji}</div>
//                           <div className="text-xs font-semibold text-gray-800 text-center leading-tight">
//                             {category.name}
//                           </div>
//                         </button>
//                       );
//                     })}
//                   </div>
//                 )}
//                 {selectedCategory && (
//                   <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
//                     <p className="text-sm text-amber-800">
//                       <span className="font-semibold">Selected:</span>{" "}
//                       {selectedCategory.name}
//                     </p>
//                   </div>
//                 )}
//                 <div className="flex gap-3">
//                   <button
//                     onClick={() => setCurrentStep(1)}
//                     className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 flex items-center gap-2"
//                   >
//                     <ArrowLeft className="w-5 h-5" /> Back
//                   </button>
//                   <button
//                     onClick={() => setCurrentStep(3)}
//                     className="flex-1 bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors flex items-center justify-center gap-2"
//                   >
//                     Next: Profile Photo <ArrowRight className="w-5 h-5" />
//                   </button>
//                 </div>
//                 <button
//                   onClick={skipToFinish}
//                   disabled={loading}
//                   className="w-full bg-white border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
//                 >
//                   Skip & Create Account
//                 </button>
//               </div>
//             )}
//             {/* STEP 3: Profile Photo */}
//             {currentStep === 3 && (
//               <div className="space-y-4">
//                 <div>
//                   <h3 className="text-lg font-bold text-gray-900 mb-1">
//                     Profile Photo
//                   </h3>
//                   <p className="text-sm text-gray-600">
//                     Take a selfie or upload a photo. This helps clients
//                     recognize you.
//                   </p>
//                 </div>
//                 {!formData.profilePhotoPreview ? (
//                   <div className="space-y-3">
//                     <button
//                       onClick={() => profilePhotoRef.current?.click()}
//                       disabled={isUploading}
//                       className="w-full h-64 border-4 border-dashed border-amber-300 rounded-xl hover:border-amber-500 transition-colors flex flex-col items-center justify-center gap-3 bg-amber-50 disabled:opacity-50"
//                     >
//                       <Camera className="w-16 h-16 text-amber-500" />
//                       <span className="text-lg font-semibold text-amber-700">
//                         {isUploading ? "Uploading..." : "Tap to Take Photo"}
//                       </span>
//                       <span className="text-sm text-gray-600">Max 5MB</span>
//                     </button>
//                     <p className="text-xs text-gray-500 text-center">
//                       Or upload from your device
//                     </p>
//                   </div>
//                 ) : (
//                   <div className="relative">
//                     <img
//                       src={formData.profilePhotoPreview}
//                       alt="Profile"
//                       className="w-full h-64 object-cover rounded-xl"
//                     />
//                     <button
//                       onClick={() =>
//                         setFormData({
//                           ...formData,
//                           profilePhotoUrl: null,
//                           profilePhotoPreview: null,
//                         })
//                       }
//                       className="absolute top-3 right-3 bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600"
//                     >
//                       Change Photo
//                     </button>
//                     <div className="absolute bottom-3 left-3 bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-semibold">
//                       ✓ Uploaded to R2
//                     </div>
//                   </div>
//                 )}
//                 <input
//                   ref={profilePhotoRef}
//                   type="file"
//                   accept="image/*"
//                   capture="user"
//                   onChange={handleProfilePhoto}
//                   disabled={isUploading}
//                   className="hidden"
//                 />
//                 <div className="flex gap-3">
//                   <button
//                     onClick={() => setCurrentStep(2)}
//                     className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 flex items-center gap-2"
//                   >
//                     <ArrowLeft className="w-5 h-5" /> Back
//                   </button>
//                   <button
//                     onClick={() => setCurrentStep(4)}
//                     disabled={isUploading}
//                     className="flex-1 bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//                   >
//                     Next: Portfolio <ArrowRight className="w-5 h-5" />
//                   </button>
//                 </div>
//                 <button
//                   onClick={skipToFinish}
//                   disabled={loading || isUploading}
//                   className="w-full bg-white border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
//                 >
//                   Skip & Create Account
//                 </button>
//               </div>
//             )}
//             {/* STEP 4: Portfolio Upload */}
//             {currentStep === 4 && (
//               <div className="space-y-4">
//                 <div>
//                   <h3 className="text-lg font-bold text-gray-900 mb-1">
//                     Portfolio
//                   </h3>
//                   <p className="text-sm text-gray-600">
//                     Upload photos or videos of your work. Showcase your skills!
//                     (Max 10 items)
//                   </p>
//                 </div>
//                 {formData.portfolioUrls.length > 0 && (
//                   <div className="grid grid-cols-2 gap-3">
//                     {formData.portfolioUrls.map((item, index) => (
//                       <div key={index} className="relative group">
//                         {item.type === "video" ? (
//                           <video
//                             src={item.preview}
//                             className="w-full h-32 object-cover rounded-lg"
//                             controls
//                           />
//                         ) : (
//                           <img
//                             src={item.preview}
//                             alt={`Portfolio ${index + 1}`}
//                             className="w-full h-32 object-cover rounded-lg"
//                           />
//                         )}
//                         <button
//                           onClick={() => removePortfolioItem(index)}
//                           className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
//                         >
//                           ×
//                         </button>
//                         <div className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
//                           {item.type === "video" ? (
//                             <Video className="w-3 h-3 inline" />
//                           ) : (
//                             "📷"
//                           )}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//                 {formData.portfolioUrls.length < 10 && (
//                   <button
//                     onClick={() => portfolioRef.current?.click()}
//                     disabled={isUploading}
//                     className="w-full h-32 border-4 border-dashed border-amber-300 rounded-xl hover:border-amber-500 transition-colors flex flex-col items-center justify-center gap-2 bg-amber-50 disabled:opacity-50"
//                   >
//                     <Upload className="w-8 h-8 text-amber-500" />
//                     <span className="text-sm font-semibold text-amber-700">
//                       {isUploading
//                         ? "Uploading..."
//                         : `Add ${
//                             formData.portfolioUrls.length > 0
//                               ? "More"
//                               : "Portfolio"
//                           } Items`}
//                     </span>
//                     <span className="text-xs text-gray-600">
//                       Images or Videos (Max 10MB each)
//                     </span>
//                   </button>
//                 )}
//                 <input
//                   ref={portfolioRef}
//                   type="file"
//                   accept="image/*,video/*"
//                   multiple
//                   onChange={handlePortfolioUpload}
//                   disabled={isUploading || formData.portfolioUrls.length >= 10}
//                   className="hidden"
//                 />
//                 <div className="flex gap-3">
//                   <button
//                     onClick={() => setCurrentStep(3)}
//                     className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 flex items-center gap-2"
//                   >
//                     <ArrowLeft className="w-5 h-5" /> Back
//                   </button>
//                   <button
//                     onClick={handleSubmit}
//                     disabled={loading || isUploading}
//                     className="flex-1 bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//                   >
//                     {loading ? "Creating Account..." : "Complete Signup"}
//                   </button>
//                 </div>
//                 <button
//                   onClick={skipToFinish}
//                   disabled={loading || isUploading}
//                   className="w-full bg-white border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
//                 >
//                   Skip & Create Account
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   } catch (error) {
//     console.error("❌ Error rendering ArtisanSignUpPage:", error);
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
//         <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl text-center">
//           <h2 className="text-2xl font-bold text-gray-900 mb-4">
//             Error Loading Signup
//           </h2>
//           <p className="text-gray-600 mb-4">{error.message}</p>
//           <button
//             onClick={() => window.location.reload()}
//             className="bg-amber-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-amber-600"
//           >
//             Reload Page
//           </button>
//         </div>
//       </div>
//     );
//   }
// }
__turbopack_context__.s([
    "default",
    ()=>ArtisanSignUpPage,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/src/lib/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/Desktop/craft/craft-connect/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$categories$2f$carpenter$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$categories$2f$carpenter$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/craft/craft-connect/src/assets/categories/carpenter.svg.mjs { IMAGE => "[project]/Desktop/craft/craft-connect/src/assets/categories/carpenter.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$cc$2d$logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$cc$2d$logo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/craft/craft-connect/src/assets/cc-logo.svg.mjs { IMAGE => "[project]/Desktop/craft/craft-connect/src/assets/cc-logo.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
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
const dynamic = "force-dynamic";
// Trade category icon mapping
const TRADE_ICONS = {
    Carpenter: {
        emoji: "🔨",
        color: "bg-amber-100 border-amber-300 hover:border-amber-500"
    },
    Tailor: {
        emoji: "✂️",
        color: "bg-purple-100 border-purple-300 hover:border-purple-500"
    },
    "Fashion Designer": {
        emoji: "👗",
        color: "bg-fuchsia-100 border-fuchsia-300 hover:border-fuchsia-500"
    },
    Electrician: {
        emoji: "⚡",
        color: "bg-yellow-100 border-yellow-300 hover:border-yellow-500"
    },
    Plumber: {
        emoji: "🔧",
        color: "bg-blue-100 border-blue-300 hover:border-blue-500"
    },
    Painter: {
        emoji: "🎨",
        color: "bg-pink-100 border-pink-300 hover:border-pink-500"
    },
    Mason: {
        emoji: "🧱",
        color: "bg-orange-100 border-orange-300 hover:border-orange-500"
    },
    Bricklayer: {
        emoji: "🧱",
        color: "bg-orange-100 border-orange-300 hover:border-orange-500"
    },
    Barber: {
        emoji: "💇",
        color: "bg-cyan-100 border-cyan-300 hover:border-cyan-500"
    },
    Hairdresser: {
        emoji: "💇‍♀️",
        color: "bg-cyan-100 border-cyan-300 hover:border-cyan-500"
    },
    Mechanic: {
        emoji: "🔩",
        color: "bg-gray-100 border-gray-300 hover:border-gray-500"
    },
    Welder: {
        emoji: "🔥",
        color: "bg-red-100 border-red-300 hover:border-red-500"
    },
    Tiler: {
        emoji: "⬛",
        color: "bg-slate-100 border-slate-300 hover:border-slate-500"
    },
    "AC Technician": {
        emoji: "❄️",
        color: "bg-sky-100 border-sky-300 hover:border-sky-500"
    },
    Refrigeration: {
        emoji: "❄️",
        color: "bg-sky-100 border-sky-300 hover:border-sky-500"
    },
    "Event Decorator": {
        emoji: "🎉",
        color: "bg-rose-100 border-rose-300 hover:border-rose-500"
    },
    Photographer: {
        emoji: "📸",
        color: "bg-indigo-100 border-indigo-300 hover:border-indigo-500"
    },
    Videographer: {
        emoji: "🎥",
        color: "bg-indigo-100 border-indigo-300 hover:border-indigo-500"
    },
    default: {
        emoji: "🛠️",
        color: "bg-gray-100 border-gray-300 hover:border-gray-500"
    }
};
function ArtisanSignUpPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loadingCategories, setLoadingCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [uploadProgress, setUploadProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const profilePhotoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const portfolioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArtisanSignUpPage.useEffect": ()=>{
            setMounted(true);
        }
    }["ArtisanSignUpPage.useEffect"], []);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        location: "",
        language: "English",
        tradeCategory: null,
        profilePhotoUrl: null,
        profilePhotoPreview: null,
        portfolioUrls: []
    });
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [tempUserId, setTempUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArtisanSignUpPage.useEffect": ()=>{
            const fetchCategories = {
                "ArtisanSignUpPage.useEffect.fetchCategories": async ()=>{
                    setLoadingCategories(true);
                    try {
                        const data = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].getTradeCategories();
                        setCategories(data || []);
                    } catch (err) {
                        console.error("Failed to load trade categories:", err);
                        setCategories([]);
                    } finally{
                        setLoadingCategories(false);
                    }
                }
            }["ArtisanSignUpPage.useEffect.fetchCategories"];
            fetchCategories();
        }
    }["ArtisanSignUpPage.useEffect"], []);
    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const selectTradeCategory = (categoryId)=>{
        setFormData({
            ...formData,
            tradeCategory: formData.tradeCategory === categoryId ? null : categoryId
        });
    };
    const getTradeIcon = (categoryName)=>{
        return TRADE_ICONS[categoryName] || TRADE_ICONS["default"];
    };
    // File upload handler - Server-side upload (no CORS issues!)
    const handleFileUpload = async (file, entityId, intent = "profile")=>{
        try {
            console.log("Starting file upload...", {
                file: file.name,
                entityId,
                intent
            });
            // Create FormData for server-side upload
            const formData = new FormData();
            formData.append("file", file);
            formData.append("entityType", "artisan");
            formData.append("entityId", entityId);
            formData.append("intent", intent);
            // Upload via server-side endpoint (no CORS issues!)
            const response = await fetch("/api/upload", {
                method: "POST",
                body: formData
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Upload failed");
            }
            const data = await response.json();
            console.log("Upload successful!", data);
            return {
                url: data.url,
                key: data.key,
                filename: data.filename
            };
        } catch (error) {
            console.error("Upload error:", error);
            throw error;
        }
    };
    // Upload profile photo to R2
    const handleProfilePhoto = async (e)=>{
        const file = e.target.files[0];
        if (!file) return;
        if (file.size > 5 * 1024 * 1024) {
            setError("Profile photo must be less than 5MB");
            return;
        }
        setError("");
        setUploadProgress({
            profile: 0
        });
        try {
            const userId = tempUserId || "temp_" + Date.now();
            if (!tempUserId) setTempUserId(userId);
            setUploadProgress({
                profile: 10
            });
            const result = await handleFileUpload(file, userId, "profile");
            setUploadProgress({
                profile: 100
            });
            setFormData({
                ...formData,
                profilePhotoUrl: result.url,
                profilePhotoPreview: URL.createObjectURL(file)
            });
            setUploadProgress({});
        } catch (err) {
            setError(err.message || "Failed to upload profile photo");
            setUploadProgress({});
        }
    };
    // Upload portfolio items
    const handlePortfolioUpload = async (e)=>{
        const files = Array.from(e.target.files);
        for (const file of files){
            if (file.size > 10 * 1024 * 1024) {
                setError("Each file must be less than 10MB");
                return;
            }
        }
        if (formData.portfolioUrls.length + files.length > 10) {
            setError("Maximum 10 portfolio items allowed");
            return;
        }
        setError("");
        const userId = tempUserId || "temp_" + Date.now();
        if (!tempUserId) setTempUserId(userId);
        try {
            const uploadedItems = [];
            for(let i = 0; i < files.length; i++){
                const file = files[i];
                const isVideo = file.type.startsWith("video/");
                setUploadProgress({
                    [`portfolio_${i}`]: 0
                });
                const result = await handleFileUpload(file, userId, "portfolio");
                setUploadProgress({
                    [`portfolio_${i}`]: 100
                });
                uploadedItems.push({
                    url: result.url,
                    preview: URL.createObjectURL(file),
                    type: isVideo ? "video" : "image",
                    key: result.key
                });
            }
            setFormData({
                ...formData,
                portfolioUrls: [
                    ...formData.portfolioUrls,
                    ...uploadedItems
                ]
            });
            setUploadProgress({});
        } catch (err) {
            setError(err.message || "Failed to upload portfolio");
            setUploadProgress({});
        }
    };
    const removePortfolioItem = (index)=>{
        const newPortfolio = formData.portfolioUrls.filter((_, i)=>i !== index);
        setFormData({
            ...formData,
            portfolioUrls: newPortfolio
        });
    };
    // Validation
    const canProceedStep1 = formData.firstName && formData.lastName && formData.email && formData.phoneNumber && formData.password.length >= 6 && formData.location;
    // ✅ FIXED: Submit to backend WITHOUT automatic redirect
    const handleSubmit = async ()=>{
        setLoading(true);
        setError("");
        setSuccess("");
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].registerArtisan({
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phoneNumber: formData.phoneNumber,
                password: formData.password,
                location: formData.location,
                language: formData.language,
                tradeCategory: formData.tradeCategory,
                profilePhotoUrl: formData.profilePhotoUrl,
                portfolioUrls: formData.portfolioUrls.map((item)=>item.url)
            });
            // Check if backend returns auth token (for auto-login)
            if (response?.token || response?.access_token) {
                const token = response.token || response.access_token;
                localStorage.setItem("token", token);
                localStorage.setItem("userId", response.userId || response.id);
                localStorage.setItem("userType", "artisan");
                setSuccess("🎉 Account created! Taking you to your dashboard...");
                setTimeout(()=>{
                    router.push("/dashboard");
                }, 1500);
            } else {
                // ✅ NO AUTO-REDIRECT - Show success message and manual link
                setSuccess("account_created");
            }
            setLoading(false);
        } catch (error) {
            setError(error.message || "Failed to create account. Please try again.");
            setLoading(false);
        }
    };
    // ✅ FIXED: Skip to finish WITHOUT automatic redirect
    const skipToFinish = async ()=>{
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.phoneNumber || !formData.password || formData.password.length < 6 || !formData.location) {
            setError("Please complete Step 1 (Basic Info) before creating account.");
            if (currentStep === 0) setCurrentStep(1);
            return;
        }
        setLoading(true);
        setError("");
        setSuccess("");
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].registerArtisan({
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phoneNumber: formData.phoneNumber,
                password: formData.password,
                location: formData.location,
                language: formData.language,
                tradeCategory: formData.tradeCategory || null,
                profilePhotoUrl: formData.profilePhotoUrl || null,
                portfolioUrls: formData.portfolioUrls.length > 0 ? formData.portfolioUrls.map((item)=>item.url) : []
            });
            // Check if backend returns auth token
            if (response?.token || response?.access_token) {
                const token = response.token || response.access_token;
                localStorage.setItem("token", token);
                localStorage.setItem("userId", response.userId || response.id);
                localStorage.setItem("userType", "artisan");
                setSuccess("🎉 Account created! Taking you to your dashboard...");
                setTimeout(()=>{
                    router.push("/dashboard");
                }, 1500);
            } else {
                // ✅ NO AUTO-REDIRECT - Show success message
                setSuccess("account_created");
            }
            setLoading(false);
        } catch (error) {
            setError(error.message || "Failed to create account. Please try again.");
            setLoading(false);
        }
    };
    const selectedCategory = categories.find((cat)=>cat.id === formData.tradeCategory);
    const isUploading = Object.keys(uploadProgress).length > 0;
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600",
                    children: "Loading signup form..."
                }, void 0, false, {
                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                    lineNumber: 2417,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                lineNumber: 2416,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
            lineNumber: 2415,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl max-w-4xl w-full overflow-hidden flex flex-col md:flex-row shadow-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden md:block md:w-1/2 relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$categories$2f$carpenter$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$categories$2f$carpenter$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                            alt: "Artisan at work",
                            fill: true,
                            className: "object-cover",
                            sizes: "(max-width: 768px) 0vw, 50vw",
                            unoptimized: true
                        }, void 0, false, {
                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                            lineNumber: 2428,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                            lineNumber: 2436,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                    lineNumber: 2427,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:w-1/2 p-8 overflow-y-auto relative max-h-screen",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>router.push("/"),
                            className: "absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                lineNumber: 2445,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                            lineNumber: 2441,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$cc$2d$logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$src$2f$assets$2f$cc$2d$logo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                            alt: "CraftConnect",
                                            width: 32,
                                            height: 32,
                                            className: "w-8 h-8",
                                            unoptimized: true
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                            lineNumber: 2451,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-xl",
                                            children: "CraftConnect"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                            lineNumber: 2459,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                    lineNumber: 2450,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-gray-900 mb-2",
                                    children: "Sign up as Artisan"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                    lineNumber: 2461,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600",
                                    children: [
                                        "Craft your",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-amber-500 font-semibold",
                                            children: "Success"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                            lineNumber: 2466,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                    lineNumber: 2464,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                            lineNumber: 2449,
                            columnNumber: 11
                        }, this),
                        currentStep > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium text-gray-700",
                                            children: [
                                                "Step ",
                                                currentStep,
                                                " of 4"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                            lineNumber: 2474,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-gray-500",
                                            children: [
                                                Math.round(currentStep / 4 * 100),
                                                "% complete"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                            lineNumber: 2477,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                    lineNumber: 2473,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full bg-gray-200 rounded-full h-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-amber-500 h-2 rounded-full transition-all duration-300",
                                        style: {
                                            width: `${currentStep / 4 * 100}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                        lineNumber: 2482,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                    lineNumber: 2481,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                            lineNumber: 2472,
                            columnNumber: 13
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                            lineNumber: 2492,
                            columnNumber: 13
                        }, this),
                        success === "account_created" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 p-4 bg-green-50 border-2 border-green-400 rounded-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "w-6 h-6 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                            lineNumber: 2502,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                        lineNumber: 2501,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-bold text-green-900 mb-2",
                                                children: "🎉 Account Created Successfully!"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                                lineNumber: 2505,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-green-800 mb-4",
                                                children: "Your artisan account has been created. You can now sign in with your email and password to start connecting with clients."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                                lineNumber: 2508,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>router.push("/sign-in"),
                                                className: "w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2",
                                                children: [
                                                    "Go to Sign In ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                                        lineNumber: 2517,
                                                        columnNumber: 35
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                                lineNumber: 2513,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                        lineNumber: 2504,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                lineNumber: 2500,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                            lineNumber: 2499,
                            columnNumber: 13
                        }, this) : success ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm",
                            children: success
                        }, void 0, false, {
                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                            lineNumber: 2523,
                            columnNumber: 13
                        }, this) : null,
                        isUploading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm font-semibold text-blue-800 mb-2",
                                    children: "Uploading..."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                    lineNumber: 2531,
                                    columnNumber: 15
                                }, this),
                                Object.entries(uploadProgress).map(([key, progress])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-xs text-blue-700 mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: key.replace("_", " ")
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                                        lineNumber: 2537,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            progress,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                                        lineNumber: 2538,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                                lineNumber: 2536,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full bg-blue-200 rounded-full h-1.5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-blue-600 h-1.5 rounded-full transition-all",
                                                    style: {
                                                        width: `${progress}%`
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                                    lineNumber: 2541,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                                lineNumber: 2540,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, key, true, {
                                        fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                        lineNumber: 2535,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                            lineNumber: 2530,
                            columnNumber: 13
                        }, this),
                        currentStep === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-bold text-gray-900 mb-2",
                                            children: "Get Started"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                            lineNumber: 2555,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600",
                                            children: "Create your artisan account in just a few steps"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                            lineNumber: 2558,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                    lineNumber: 2554,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setCurrentStep(1),
                                    className: "w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-300 text-gray-700 py-3.5 rounded-lg font-medium hover:bg-gray-50 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                            lineNumber: 2567,
                                            columnNumber: 17
                                        }, this),
                                        "Continue with Email"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                    lineNumber: 2563,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-500 text-center mt-4 leading-relaxed",
                                    children: "By signing up, you agree to the Terms of Service and Privacy Policy"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                    lineNumber: 2571,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-center text-sm text-gray-600 mt-4",
                                    children: [
                                        "Already have an account?",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            onClick: ()=>router.push("/sign-in"),
                                            className: "text-amber-600 font-semibold cursor-pointer hover:underline",
                                            children: "Sign in"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                            lineNumber: 2578,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                    lineNumber: 2576,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                            lineNumber: 2553,
                            columnNumber: 13
                        }, this),
                        currentStep === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "First Name*"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                                    lineNumber: 2593,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    name: "firstName",
                                                    value: formData.firstName,
                                                    onChange: handleChange,
                                                    placeholder: "Enter Name",
                                                    required: true,
                                                    className: "w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                                    lineNumber: 2596,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                            lineNumber: 2592,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "Last Name*"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                                    lineNumber: 2608,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    name: "lastName",
                                                    value: formData.lastName,
                                                    onChange: handleChange,
                                                    placeholder: "Enter Name",
                                                    required: true,
                                                    className: "w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                                    lineNumber: 2611,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                            lineNumber: 2607,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                    lineNumber: 2591,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Phone Number*"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                            lineNumber: 2624,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "tel",
                                            name: "phoneNumber",
                                            value: formData.phoneNumber,
                                            onChange: handleChange,
                                            placeholder: "08012345678",
                                            required: true,
                                            className: "w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                            lineNumber: 2627,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                    lineNumber: 2623,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Email Address*"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                            lineNumber: 2639,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            name: "email",
                                            value: formData.email,
                                            onChange: handleChange,
                                            placeholder: "Enter Email",
                                            required: true,
                                            className: "w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                            lineNumber: 2642,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                    lineNumber: 2638,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Password*"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                            lineNumber: 2654,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "password",
                                            name: "password",
                                            value: formData.password,
                                            onChange: handleChange,
                                            placeholder: "Min 6 characters",
                                            required: true,
                                            minLength: 6,
                                            className: "w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                            lineNumber: 2657,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                    lineNumber: 2653,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Location*"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                            lineNumber: 2670,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            name: "location",
                                            value: formData.location,
                                            onChange: handleChange,
                                            placeholder: "e.g., Lagos, Abuja",
                                            required: true,
                                            className: "w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                            lineNumber: 2673,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                    lineNumber: 2669,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Language*"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                            lineNumber: 2685,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            name: "language",
                                            value: formData.language,
                                            onChange: handleChange,
                                            className: "w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "English"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                                    lineNumber: 2694,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Pidgin"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                                    lineNumber: 2695,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Yoruba"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                                    lineNumber: 2696,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Hausa"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                                    lineNumber: 2697,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Igbo"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                                    lineNumber: 2698,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                            lineNumber: 2688,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                    lineNumber: 2684,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setCurrentStep(0),
                                            className: "px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                                    lineNumber: 2708,
                                                    columnNumber: 19
                                                }, this),
                                                " Back"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                            lineNumber: 2703,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>canProceedStep1 && setCurrentStep(2),
                                            disabled: !canProceedStep1,
                                            className: "flex-1 bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
                                            children: [
                                                "Next: Trade ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                                    lineNumber: 2716,
                                                    columnNumber: 31
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                            lineNumber: 2710,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                    lineNumber: 2702,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: skipToFinish,
                                    disabled: loading || !canProceedStep1,
                                    className: "w-full bg-white border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors disabled:opacity-50",
                                    children: "Skip & Create Account"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                    lineNumber: 2720,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                            lineNumber: 2590,
                            columnNumber: 13
                        }, this),
                        currentStep === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-bold text-gray-900 mb-1",
                                            children: "Select Your Trade"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                            lineNumber: 2735,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600",
                                            children: "Choose your trade category (optional)"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                            lineNumber: 2738,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                    lineNumber: 2734,
                                    columnNumber: 15
                                }, this),
                                loadingCategories ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-8 text-gray-500",
                                    children: "Loading trades..."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                    lineNumber: 2744,
                                    columnNumber: 17
                                }, this) : categories.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-8 text-gray-500 bg-gray-50 rounded-lg",
                                    children: "No trades available"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                    lineNumber: 2748,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 gap-3 max-h-96 overflow-y-auto p-2 bg-gray-50 rounded-lg",
                                    children: categories.map((category)=>{
                                        const icon = getTradeIcon(category.name);
                                        const isSelected = formData.tradeCategory === category.id;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>selectTradeCategory(category.id),
                                            className: `relative p-4 rounded-xl border-2 transition-all ${icon.color} ${isSelected ? "border-amber-500 shadow-lg scale-105 ring-2 ring-amber-200" : "border-transparent"}`,
                                            children: [
                                                isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute -top-2 -right-2 w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        className: "w-4 h-4 text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                                        lineNumber: 2772,
                                                        columnNumber: 29
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                                    lineNumber: 2771,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-3xl mb-2",
                                                    children: icon.emoji
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                                    lineNumber: 2775,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs font-semibold text-gray-800 text-center leading-tight",
                                                    children: category.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                                    lineNumber: 2776,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, category.id, true, {
                                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                            lineNumber: 2758,
                                            columnNumber: 23
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                    lineNumber: 2752,
                                    columnNumber: 17
                                }, this),
                                selectedCategory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 bg-amber-50 border border-amber-200 rounded-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-amber-800",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold",
                                                children: "Selected:"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                                lineNumber: 2788,
                                                columnNumber: 21
                                            }, this),
                                            " ",
                                            selectedCategory.name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                        lineNumber: 2787,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                    lineNumber: 2786,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setCurrentStep(1),
                                            className: "px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                                    lineNumber: 2799,
                                                    columnNumber: 19
                                                }, this),
                                                " Back"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                            lineNumber: 2795,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setCurrentStep(3),
                                            className: "flex-1 bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors flex items-center justify-center gap-2",
                                            children: [
                                                "Next: Profile Photo ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                                    lineNumber: 2805,
                                                    columnNumber: 39
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                            lineNumber: 2801,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                    lineNumber: 2794,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: skipToFinish,
                                    disabled: loading,
                                    className: "w-full bg-white border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors",
                                    children: "Skip & Create Account"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                    lineNumber: 2809,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                            lineNumber: 2733,
                            columnNumber: 13
                        }, this),
                        currentStep === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-bold text-gray-900 mb-1",
                                            children: "Profile Photo"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                            lineNumber: 2823,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600",
                                            children: "Take a selfie or upload a photo (optional)"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                            lineNumber: 2826,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                    lineNumber: 2822,
                                    columnNumber: 15
                                }, this),
                                !formData.profilePhotoPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>profilePhotoRef.current?.click(),
                                        disabled: isUploading,
                                        className: "w-full h-64 border-4 border-dashed border-amber-300 rounded-xl hover:border-amber-500 transition-colors flex flex-col items-center justify-center gap-3 bg-amber-50 disabled:opacity-50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                                className: "w-16 h-16 text-amber-500"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                                lineNumber: 2838,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg font-semibold text-amber-700",
                                                children: isUploading ? "Uploading..." : "Tap to Take Photo"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                                lineNumber: 2839,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-gray-600",
                                                children: "Max 5MB"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                                lineNumber: 2842,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                        lineNumber: 2833,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                    lineNumber: 2832,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: formData.profilePhotoPreview,
                                            alt: "Profile",
                                            className: "w-full h-64 object-cover rounded-xl"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                            lineNumber: 2847,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setFormData({
                                                    ...formData,
                                                    profilePhotoUrl: null,
                                                    profilePhotoPreview: null
                                                }),
                                            className: "absolute top-3 right-3 bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600",
                                            children: "Change Photo"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                            lineNumber: 2852,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-3 left-3 bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-semibold",
                                            children: "✓ Uploaded"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                            lineNumber: 2864,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                    lineNumber: 2846,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    ref: profilePhotoRef,
                                    type: "file",
                                    accept: "image/*",
                                    capture: "user",
                                    onChange: handleProfilePhoto,
                                    disabled: isUploading,
                                    className: "hidden"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                    lineNumber: 2870,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setCurrentStep(2),
                                            className: "px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                                    lineNumber: 2885,
                                                    columnNumber: 19
                                                }, this),
                                                " Back"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                            lineNumber: 2881,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setCurrentStep(4),
                                            disabled: isUploading,
                                            className: "flex-1 bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
                                            children: [
                                                "Next: Portfolio ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                                    lineNumber: 2892,
                                                    columnNumber: 35
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                            lineNumber: 2887,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                    lineNumber: 2880,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: skipToFinish,
                                    disabled: loading || isUploading,
                                    className: "w-full bg-white border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors",
                                    children: "Skip & Create Account"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                    lineNumber: 2896,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                            lineNumber: 2821,
                            columnNumber: 13
                        }, this),
                        currentStep === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-bold text-gray-900 mb-1",
                                            children: "Portfolio"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                            lineNumber: 2910,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600",
                                            children: "Upload photos or videos of your work (optional, max 10 items)"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                            lineNumber: 2913,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                    lineNumber: 2909,
                                    columnNumber: 15
                                }, this),
                                formData.portfolioUrls.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: formData.portfolioUrls.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative group",
                                            children: [
                                                item.type === "video" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                    src: item.preview,
                                                    className: "w-full h-32 object-cover rounded-lg",
                                                    controls: true
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                                    lineNumber: 2923,
                                                    columnNumber: 25
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: item.preview,
                                                    alt: `Portfolio ${index + 1}`,
                                                    className: "w-full h-32 object-cover rounded-lg"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                                    lineNumber: 2929,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>removePortfolioItem(index),
                                                    className: "absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",
                                                    children: "×"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                                    lineNumber: 2935,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-xs",
                                                    children: item.type === "video" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                                        className: "w-3 h-3 inline"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                                        lineNumber: 2943,
                                                        columnNumber: 27
                                                    }, this) : "📷"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                                    lineNumber: 2941,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                            lineNumber: 2921,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                    lineNumber: 2919,
                                    columnNumber: 17
                                }, this),
                                formData.portfolioUrls.length < 10 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>portfolioRef.current?.click(),
                                    disabled: isUploading,
                                    className: "w-full h-32 border-4 border-dashed border-amber-300 rounded-xl hover:border-amber-500 transition-colors flex flex-col items-center justify-center gap-2 bg-amber-50 disabled:opacity-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                            className: "w-8 h-8 text-amber-500"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                            lineNumber: 2959,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-semibold text-amber-700",
                                            children: isUploading ? "Uploading..." : `Add ${formData.portfolioUrls.length > 0 ? "More" : "Portfolio"} Items`
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                            lineNumber: 2960,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-gray-600",
                                            children: "Images or Videos (Max 10MB each)"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                            lineNumber: 2969,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                    lineNumber: 2954,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    ref: portfolioRef,
                                    type: "file",
                                    accept: "image/*,video/*",
                                    multiple: true,
                                    onChange: handlePortfolioUpload,
                                    disabled: isUploading || formData.portfolioUrls.length >= 10,
                                    className: "hidden"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                    lineNumber: 2975,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setCurrentStep(3),
                                            className: "px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                                    lineNumber: 2990,
                                                    columnNumber: 19
                                                }, this),
                                                " Back"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                            lineNumber: 2986,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleSubmit,
                                            disabled: loading || isUploading,
                                            className: "flex-1 bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                            children: loading ? "Creating Account..." : "Complete Signup"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                            lineNumber: 2992,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                    lineNumber: 2985,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: skipToFinish,
                                    disabled: loading || isUploading,
                                    className: "w-full bg-white border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors",
                                    children: "Skip & Create Account"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                                    lineNumber: 3001,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                            lineNumber: 2908,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
                    lineNumber: 2440,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
            lineNumber: 2425,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/craft/craft-connect/app/sign-up/artisan/page.js",
        lineNumber: 2424,
        columnNumber: 5
    }, this);
}
_s(ArtisanSignUpPage, "Ejl0QQw1KXvGKRo6cpE654UomKE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$craft$2f$craft$2d$connect$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ArtisanSignUpPage;
var _c;
__turbopack_context__.k.register(_c, "ArtisanSignUpPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_craft_craft-connect_f8bb2d83._.js.map