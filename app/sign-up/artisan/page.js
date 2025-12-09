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

"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { api } from "../../../src/lib/api";
import {
  X,
  Mail,
  Check,
  Camera,
  Upload,
  ArrowRight,
  ArrowLeft,
  Video,
} from "lucide-react";
import carpenterImage from "../../../src/assets/categories/carpenter.svg";
import ccLogo from "../../../src/assets/cc-logo.svg";

export const dynamic = "force-dynamic";

// Trade category icon mapping
const TRADE_ICONS = {
  Carpenter: {
    emoji: "🔨",
    color: "bg-amber-100 border-amber-300 hover:border-amber-500",
  },
  Tailor: {
    emoji: "✂️",
    color: "bg-purple-100 border-purple-300 hover:border-purple-500",
  },
  "Fashion Designer": {
    emoji: "👗",
    color: "bg-fuchsia-100 border-fuchsia-300 hover:border-fuchsia-500",
  },
  Electrician: {
    emoji: "⚡",
    color: "bg-yellow-100 border-yellow-300 hover:border-yellow-500",
  },
  Plumber: {
    emoji: "🔧",
    color: "bg-blue-100 border-blue-300 hover:border-blue-500",
  },
  Painter: {
    emoji: "🎨",
    color: "bg-pink-100 border-pink-300 hover:border-pink-500",
  },
  Mason: {
    emoji: "🧱",
    color: "bg-orange-100 border-orange-300 hover:border-orange-500",
  },
  Bricklayer: {
    emoji: "🧱",
    color: "bg-orange-100 border-orange-300 hover:border-orange-500",
  },
  Barber: {
    emoji: "💇",
    color: "bg-cyan-100 border-cyan-300 hover:border-cyan-500",
  },
  Hairdresser: {
    emoji: "💇‍♀️",
    color: "bg-cyan-100 border-cyan-300 hover:border-cyan-500",
  },
  Mechanic: {
    emoji: "🔩",
    color: "bg-gray-100 border-gray-300 hover:border-gray-500",
  },
  Welder: {
    emoji: "🔥",
    color: "bg-red-100 border-red-300 hover:border-red-500",
  },
  Tiler: {
    emoji: "⬛",
    color: "bg-slate-100 border-slate-300 hover:border-slate-500",
  },
  "AC Technician": {
    emoji: "❄️",
    color: "bg-sky-100 border-sky-300 hover:border-sky-500",
  },
  Refrigeration: {
    emoji: "❄️",
    color: "bg-sky-100 border-sky-300 hover:border-sky-500",
  },
  "Event Decorator": {
    emoji: "🎉",
    color: "bg-rose-100 border-rose-300 hover:border-rose-500",
  },
  Photographer: {
    emoji: "📸",
    color: "bg-indigo-100 border-indigo-300 hover:border-indigo-500",
  },
  Videographer: {
    emoji: "🎥",
    color: "bg-indigo-100 border-indigo-300 hover:border-indigo-500",
  },
  default: {
    emoji: "🛠️",
    color: "bg-gray-100 border-gray-300 hover:border-gray-500",
  },
};

export default function ArtisanSignUpPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadingCategories, setLoadingCategories] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [uploadProgress, setUploadProgress] = useState({});
  const [mounted, setMounted] = useState(false);

  const profilePhotoRef = useRef(null);
  const portfolioRef = useRef(null);
  const ninFrontRef = useRef(null);
  const ninBackRef = useRef(null);
  const selfieRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [formData, setFormData] = useState({
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
    portfolioUrls: [],
    // KYC Fields
    ninType: "National ID",
    ninFrontUrl: null,
    ninBackUrl: null,
    selfieUrl: null,
    ninFrontPreview: null,
    ninBackPreview: null,
    selfiePreview: null,
  });

  const [categories, setCategories] = useState([]);
  const [tempUserId, setTempUserId] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoadingCategories(true);
      try {
        const data = await api.getTradeCategories();
        // Handle different response formats: array, { results: [...] }, or { data: [...] }
        let categoriesList = [];
        if (Array.isArray(data)) {
          categoriesList = data;
        } else if (data?.results && Array.isArray(data.results)) {
          categoriesList = data.results;
        } else if (data?.data && Array.isArray(data.data)) {
          categoriesList = data.data;
        } else if (data && typeof data === "object") {
          // Try to find any array property
          const arrayKeys = Object.keys(data).filter((key) =>
            Array.isArray(data[key])
          );
          if (arrayKeys.length > 0) {
            categoriesList = data[arrayKeys[0]];
          }
        }
        setCategories(categoriesList);
        if (categoriesList.length === 0) {
          console.warn("No trade categories returned from API");
        }
      } catch (err) {
        console.error("Failed to load trade categories:", err);
        console.error("Error details:", {
          message: err.message,
          status: err.status,
          data: err.data,
        });
        setCategories([]);
      } finally {
        setLoadingCategories(false);
      }
    };
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const selectTradeCategory = (categoryId) => {
    setFormData({
      ...formData,
      tradeCategory: formData.tradeCategory === categoryId ? null : categoryId,
    });
  };

  const getTradeIcon = (categoryName) => {
    return TRADE_ICONS[categoryName] || TRADE_ICONS["default"];
  };

  // File upload handler - Server-side upload (no CORS issues!)
  const handleFileUpload = async (file, entityId, intent = "profile") => {
    try {
      console.log("Starting file upload...", {
        file: file.name,
        entityId,
        intent,
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
        body: formData, // Don't set Content-Type header - browser sets it automatically
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
        filename: data.filename,
      };
    } catch (error) {
      console.error("Upload error:", error);
      throw error;
    }
  };

  // Upload profile photo to R2
  const handleProfilePhoto = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      setError("Profile photo must be less than 5MB");
      return;
    }

    setError("");
    setUploadProgress({ profile: 0 });

    try {
      const userId = tempUserId || "temp_" + Date.now();
      if (!tempUserId) setTempUserId(userId);

      setUploadProgress({ profile: 10 });

      const result = await handleFileUpload(file, userId, "profile");

      setUploadProgress({ profile: 100 });

      setFormData({
        ...formData,
        profilePhotoUrl: result.url,
        profilePhotoPreview: URL.createObjectURL(file),
      });

      setUploadProgress({});
    } catch (err) {
      setError(err.message || "Failed to upload profile photo");
      setUploadProgress({});
    }
  };

  // Upload portfolio items
  const handlePortfolioUpload = async (e) => {
    const files = Array.from(e.target.files);

    for (const file of files) {
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

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const isVideo = file.type.startsWith("video/");

        setUploadProgress({ [`portfolio_${i}`]: 0 });

        const result = await handleFileUpload(file, userId, "portfolio");

        setUploadProgress({ [`portfolio_${i}`]: 100 });

        uploadedItems.push({
          url: result.url,
          preview: URL.createObjectURL(file),
          type: isVideo ? "video" : "image",
          key: result.key,
        });
      }

      setFormData({
        ...formData,
        portfolioUrls: [...formData.portfolioUrls, ...uploadedItems],
      });
      setUploadProgress({});
    } catch (err) {
      setError(err.message || "Failed to upload portfolio");
      setUploadProgress({});
    }
  };

  const removePortfolioItem = (index) => {
    const newPortfolio = formData.portfolioUrls.filter((_, i) => i !== index);
    setFormData({ ...formData, portfolioUrls: newPortfolio });
  };

  // Upload NIN Document (Front/Back)
  const handleNinUpload = async (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      setError("Document image must be less than 5MB");
      return;
    }

    setError("");
    const key = type === "front" ? "nin_front" : "nin_back";
    setUploadProgress({ [key]: 10 });

    try {
      const userId = tempUserId || "temp_" + Date.now();
      if (!tempUserId) setTempUserId(userId);

      const result = await handleFileUpload(file, userId, "kyc_document");
      setUploadProgress({ [key]: 100 });

      setFormData({
        ...formData,
        [type === "front" ? "ninFrontUrl" : "ninBackUrl"]: result.url,
        [type === "front" ? "ninFrontPreview" : "ninBackPreview"]:
          URL.createObjectURL(file),
      });

      setUploadProgress({});
    } catch (err) {
      setError(err.message || "Failed to upload document");
      setUploadProgress({});
    }
  };

  // Upload Selfie
  const handleSelfieUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      setError("Selfie must be less than 5MB");
      return;
    }

    setError("");
    setUploadProgress({ selfie: 10 });

    try {
      const userId = tempUserId || "temp_" + Date.now();
      if (!tempUserId) setTempUserId(userId);

      const result = await handleFileUpload(file, userId, "kyc_selfie");
      setUploadProgress({ selfie: 100 });

      setFormData({
        ...formData,
        selfieUrl: result.url,
        selfiePreview: URL.createObjectURL(file),
      });

      setUploadProgress({});
    } catch (err) {
      setError(err.message || "Failed to upload selfie");
      setUploadProgress({});
    }
  };

  // Validation
  const canProceedStep1 =
    formData.firstName &&
    formData.lastName &&
    formData.email &&
    formData.phoneNumber &&
    formData.password.length >= 6 &&
    formData.location;

  // ✅ FIXED: Submit to backend WITHOUT automatic redirect
  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await api.registerArtisan({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        password: formData.password,
        location: formData.location,
        language: formData.language,
        tradeCategory: formData.tradeCategory,
        profilePhotoUrl: formData.profilePhotoUrl,
        portfolioUrls: formData.portfolioUrls.map((item) => item.url),
        // KYC Data
        ninType: formData.ninType,
        ninFrontUrl: formData.ninFrontUrl,
        ninBackUrl: formData.ninBackUrl,
        selfieUrl: formData.selfieUrl,
      });

      // Store user identifiers from response (check multiple possible field names)
      const userId =
        response?.user_id ||
        response?.userId ||
        response?.id ||
        response?.user?.id ||
        response?.user?.user_id;
      const userType =
        response?.user_type ||
        response?.userType ||
        response?.user?.user_type ||
        "artisan";

      // Store in localStorage in both formats for compatibility
      if (userId) {
        localStorage.setItem("user_id", userId);
        localStorage.setItem("userId", userId);
      }
      if (userType) {
        localStorage.setItem("user_type", userType);
        localStorage.setItem("userType", userType);
      }

      // Check if backend returns auth token (for auto-login)
      if (response?.token || response?.access_token) {
        const token = response.token || response.access_token;
        localStorage.setItem("token", token);
        localStorage.setItem("auth_token", token); // Also store as auth_token for compatibility

        setSuccess("🎉 Account created! Taking you to your dashboard...");
        setTimeout(() => {
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
  const skipToFinish = async () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phoneNumber ||
      !formData.password ||
      formData.password.length < 6 ||
      !formData.location
    ) {
      setError("Please complete Step 1 (Basic Info) before creating account.");
      if (currentStep === 0) setCurrentStep(1);
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await api.registerArtisan({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        password: formData.password,
        location: formData.location,
        language: formData.language,
        tradeCategory: formData.tradeCategory || null,
        profilePhotoUrl: formData.profilePhotoUrl || null,
        portfolioUrls:
          formData.portfolioUrls.length > 0
            ? formData.portfolioUrls.map((item) => item.url)
            : [],
      });

      // Store user identifiers from response (check multiple possible field names)
      const userId =
        response?.user_id ||
        response?.userId ||
        response?.id ||
        response?.user?.id ||
        response?.user?.user_id;
      const userType =
        response?.user_type ||
        response?.userType ||
        response?.user?.user_type ||
        "artisan";

      // Store in localStorage in both formats for compatibility
      if (userId) {
        localStorage.setItem("user_id", userId);
        localStorage.setItem("userId", userId);
      }
      if (userType) {
        localStorage.setItem("user_type", userType);
        localStorage.setItem("userType", userType);
      }

      // Check if backend returns auth token
      if (response?.token || response?.access_token) {
        const token = response.token || response.access_token;
        localStorage.setItem("token", token);
        localStorage.setItem("auth_token", token); // Also store as auth_token for compatibility

        setSuccess("🎉 Account created! Taking you to your dashboard...");
        setTimeout(() => {
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

  const selectedCategory = categories.find(
    (cat) => cat.id === formData.tradeCategory
  );
  const isUploading = Object.keys(uploadProgress).length > 0;

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Loading signup form...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden flex flex-col md:flex-row shadow-2xl">
        {/* Left Side - Image */}
        <div className="hidden md:block md:w-1/2 relative">
          <Image
            src={carpenterImage}
            alt="Artisan at work"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 0vw, 50vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>

        {/* Right Side - Content */}
        <div className="md:w-1/2 p-8 overflow-y-auto relative max-h-screen">
          <button
            onClick={() => router.push("/")}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src={ccLogo}
                alt="CraftConnect"
                width={32}
                height={32}
                className="w-8 h-8"
                unoptimized
              />
              <span className="font-bold text-xl">CraftConnect</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Sign up as Artisan
            </h2>
            <p className="text-gray-600">
              Craft your{" "}
              <span className="text-amber-500 font-semibold">Success</span>
            </p>
          </div>

          {/* Progress */}
          {currentStep > 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">
                  Step {currentStep} of 6
                </span>
                <span className="text-xs text-gray-500">
                  {Math.round((currentStep / 6) * 100)}% complete
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-amber-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / 6) * 100}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Messages */}
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* ✅ FIXED: Custom success message with manual sign-in button */}
          {success === "account_created" ? (
            <div className="mb-4 p-4 bg-green-50 border-2 border-green-400 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-green-900 mb-2">
                    🎉 Account Created Successfully!
                  </h3>
                  <p className="text-sm text-green-800 mb-4">
                    Your artisan account has been created. You can now sign in
                    with your email and password to start connecting with
                    clients.
                  </p>
                  <button
                    onClick={() => router.push("/sign-in")}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    Go to Sign In <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ) : success ? (
            <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm">
              {success}
            </div>
          ) : null}

          {/* Upload Progress */}
          {isUploading && (
            <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="text-sm font-semibold text-blue-800 mb-2">
                Uploading...
              </div>
              {Object.entries(uploadProgress).map(([key, progress]) => (
                <div key={key} className="mb-2">
                  <div className="flex justify-between text-xs text-blue-700 mb-1">
                    <span>{key.replace("_", " ")}</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="w-full bg-blue-200 rounded-full h-1.5">
                    <div
                      className="bg-blue-600 h-1.5 rounded-full transition-all"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* STEP 0: Initial Screen */}
          {currentStep === 0 && (
            <div className="space-y-3">
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Get Started
                </h3>
                <p className="text-sm text-gray-600">
                  Create your artisan account in just a few steps
                </p>
              </div>

              <button
                onClick={() => setCurrentStep(1)}
                className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-300 text-gray-700 py-3.5 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Continue with Email
              </button>

              <p className="text-xs text-gray-500 text-center mt-4 leading-relaxed">
                By signing up, you agree to the Terms of Service and Privacy
                Policy
              </p>

              <p className="text-center text-sm text-gray-600 mt-4">
                Already have an account?{" "}
                <span
                  onClick={() => router.push("/sign-in")}
                  className="text-amber-600 font-semibold cursor-pointer hover:underline"
                >
                  Sign in
                </span>
              </p>
            </div>
          )}

          {/* STEP 1: Basic Info */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name*
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter Name"
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter Name"
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="08012345678"
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Email"
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password*
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Min 6 characters"
                  required
                  minLength={6}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location*
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g., Lagos, Abuja"
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Language*
                </label>
                <select
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                >
                  <option>English</option>
                  <option>Pidgin</option>
                  <option>Yoruba</option>
                  <option>Hausa</option>
                  <option>Igbo</option>
                </select>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setCurrentStep(0)}
                  className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 flex items-center gap-2"
                >
                  <ArrowLeft className="w-5 h-5" /> Back
                </button>
                <button
                  type="button"
                  onClick={() => canProceedStep1 && setCurrentStep(2)}
                  disabled={!canProceedStep1}
                  className="flex-1 bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  Next: Trade <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <button
                type="button"
                onClick={skipToFinish}
                disabled={loading || !canProceedStep1}
                className="w-full bg-white border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors disabled:opacity-50"
              >
                Skip & Create Account
              </button>
            </div>
          )}

          {/* STEP 2: Trade Selection */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  Select Your Trade
                </h3>
                <p className="text-sm text-gray-600">
                  Choose your trade category (optional)
                </p>
              </div>

              {loadingCategories ? (
                <div className="text-center py-8 text-gray-500">
                  Loading trades...
                </div>
              ) : categories.length === 0 ? (
                <div className="text-center py-8 text-gray-500 bg-gray-50 rounded-lg">
                  <p className="mb-2">No trades available</p>
                  <p className="text-xs text-gray-400">
                    You can skip this step and add your trade category later
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-3 max-h-96 overflow-y-auto p-2 bg-gray-50 rounded-lg">
                  {categories.map((category) => {
                    const icon = getTradeIcon(category.name);
                    const isSelected = formData.tradeCategory === category.id;

                    return (
                      <button
                        key={category.id}
                        type="button"
                        onClick={() => selectTradeCategory(category.id)}
                        className={`relative p-4 rounded-xl border-2 transition-all ${
                          icon.color
                        } ${
                          isSelected
                            ? "border-amber-500 shadow-lg scale-105 ring-2 ring-amber-200"
                            : "border-transparent"
                        }`}
                      >
                        {isSelected && (
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                        )}
                        <div className="text-3xl mb-2">{icon.emoji}</div>
                        <div className="text-xs font-semibold text-gray-800 text-center leading-tight">
                          {category.name}
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}

              {selectedCategory && (
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-sm text-amber-800">
                    <span className="font-semibold">Selected:</span>{" "}
                    {selectedCategory.name}
                  </p>
                </div>
              )}

              <div className="flex gap-3">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 flex items-center gap-2"
                >
                  <ArrowLeft className="w-5 h-5" /> Back
                </button>
                <button
                  onClick={() => setCurrentStep(3)}
                  className="flex-1 bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors flex items-center justify-center gap-2"
                >
                  Next: Profile Photo <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <button
                onClick={skipToFinish}
                disabled={loading}
                className="w-full bg-white border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Skip & Create Account
              </button>
            </div>
          )}

          {/* STEP 3: Profile Photo */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  Profile Photo
                </h3>
                <p className="text-sm text-gray-600">
                  Take a selfie or upload a photo (optional)
                </p>
              </div>

              {!formData.profilePhotoPreview ? (
                <div className="space-y-3">
                  <button
                    onClick={() => profilePhotoRef.current?.click()}
                    disabled={isUploading}
                    className="w-full h-64 border-4 border-dashed border-amber-300 rounded-xl hover:border-amber-500 transition-colors flex flex-col items-center justify-center gap-3 bg-amber-50 disabled:opacity-50"
                  >
                    <Camera className="w-16 h-16 text-amber-500" />
                    <span className="text-lg font-semibold text-amber-700">
                      {isUploading ? "Uploading..." : "Tap to Take Photo"}
                    </span>
                    <span className="text-sm text-gray-600">Max 5MB</span>
                  </button>
                </div>
              ) : (
                <div className="relative">
                  <img
                    src={formData.profilePhotoPreview}
                    alt="Profile"
                    className="w-full h-64 object-cover rounded-xl"
                  />
                  <button
                    onClick={() =>
                      setFormData({
                        ...formData,
                        profilePhotoUrl: null,
                        profilePhotoPreview: null,
                      })
                    }
                    className="absolute top-3 right-3 bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600"
                  >
                    Change Photo
                  </button>
                  <div className="absolute bottom-3 left-3 bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                    ✓ Uploaded
                  </div>
                </div>
              )}

              <input
                ref={profilePhotoRef}
                type="file"
                accept="image/*"
                capture="user"
                onChange={handleProfilePhoto}
                disabled={isUploading}
                className="hidden"
              />

              <div className="flex gap-3">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 flex items-center gap-2"
                >
                  <ArrowLeft className="w-5 h-5" /> Back
                </button>
                <button
                  onClick={() => setCurrentStep(4)}
                  disabled={isUploading}
                  className="flex-1 bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  Next: Portfolio <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <button
                onClick={skipToFinish}
                disabled={loading || isUploading}
                className="w-full bg-white border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Skip & Create Account
              </button>
            </div>
          )}

          {/* STEP 4: Portfolio Upload */}
          {currentStep === 4 && (
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  Portfolio
                </h3>
                <p className="text-sm text-gray-600">
                  Upload photos or videos of your work (optional, max 10 items)
                </p>
              </div>

              {formData.portfolioUrls.length > 0 && (
                <div className="grid grid-cols-2 gap-3">
                  {formData.portfolioUrls.map((item, index) => (
                    <div key={index} className="relative group">
                      {item.type === "video" ? (
                        <video
                          src={item.preview}
                          className="w-full h-32 object-cover rounded-lg"
                          controls
                        />
                      ) : (
                        <img
                          src={item.preview}
                          alt={`Portfolio ${index + 1}`}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                      )}
                      <button
                        onClick={() => removePortfolioItem(index)}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        ×
                      </button>
                      <div className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
                        {item.type === "video" ? (
                          <Video className="w-3 h-3 inline" />
                        ) : (
                          "📷"
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {formData.portfolioUrls.length < 10 && (
                <button
                  onClick={() => portfolioRef.current?.click()}
                  disabled={isUploading}
                  className="w-full h-32 border-4 border-dashed border-amber-300 rounded-xl hover:border-amber-500 transition-colors flex flex-col items-center justify-center gap-2 bg-amber-50 disabled:opacity-50"
                >
                  <Upload className="w-8 h-8 text-amber-500" />
                  <span className="text-sm font-semibold text-amber-700">
                    {isUploading
                      ? "Uploading..."
                      : `Add ${
                          formData.portfolioUrls.length > 0
                            ? "More"
                            : "Portfolio"
                        } Items`}
                  </span>
                  <span className="text-xs text-gray-600">
                    Images or Videos (Max 10MB each)
                  </span>
                </button>
              )}

              <input
                ref={portfolioRef}
                type="file"
                accept="image/*,video/*"
                multiple
                onChange={handlePortfolioUpload}
                disabled={isUploading || formData.portfolioUrls.length >= 10}
                className="hidden"
              />

              <div className="flex gap-3">
                <button
                  onClick={() => setCurrentStep(3)}
                  className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 flex items-center gap-2"
                >
                  <ArrowLeft className="w-5 h-5" /> Back
                </button>
                <button
                  onClick={() => setCurrentStep(5)}
                  disabled={loading || isUploading}
                  className="flex-1 bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next: Identity Verification
                </button>
              </div>

              {formData.portfolioUrls.length === 0 && (
                <button
                  onClick={() => setCurrentStep(5)}
                  disabled={loading || isUploading}
                  className="w-full bg-white border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Skip & Verify Identity
                </button>
              )}
            </div>
          )}

          {/* STEP 5: Identity Verification (Documents) */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg text-green-800">
                    Identity Verification
                  </h3>
                  <span className="text-sm font-medium text-green-700">
                    Step 1/2
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Upload Identity Document
                </h3>
                <p className="text-gray-600 text-sm">
                  Please upload clear, readable image of your Government-issued
                  identity document. This helps us keep craft connect secure for
                  everyone.
                </p>
              </div>

              {/* ID Type Selection */}
              <div className="flex p-1 bg-gray-100 rounded-lg">
                {["National ID", "Licence", "Voter's Card"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setFormData({ ...formData, ninType: type })}
                    className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${
                      formData.ninType === type
                        ? "bg-green-500 text-white shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                {/* Front of Document */}
                <div className="border rounded-xl p-4 flex items-center justify-between bg-white shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                      <Upload className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Front of Document
                      </h4>
                      <p className="text-xs text-gray-500">
                        Take a photo or upload file
                      </p>
                    </div>
                  </div>

                  {formData.ninFrontPreview ? (
                    <div className="relative w-16 h-10">
                      <img
                        src={formData.ninFrontPreview}
                        alt="Front ID"
                        className="w-full h-full object-cover rounded"
                      />
                      <button
                        onClick={() => {
                          setFormData({
                            ...formData,
                            ninFrontUrl: null,
                            ninFrontPreview: null,
                          });
                          if (ninFrontRef.current)
                            ninFrontRef.current.value = "";
                        }}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center"
                      >
                        ×
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => ninFrontRef.current?.click()}
                      className="px-4 py-2 bg-green-50 text-green-600 text-sm font-semibold rounded-lg hover:bg-green-100 transition-colors"
                    >
                      Upload
                    </button>
                  )}
                  <input
                    ref={ninFrontRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleNinUpload(e, "front")}
                  />
                </div>

                {/* Back of Document */}
                <div className="border rounded-xl p-4 flex items-center justify-between bg-white shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                      <Upload className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Back of Document
                      </h4>
                      <p className="text-xs text-gray-500">
                        Take a photo or upload file
                      </p>
                    </div>
                  </div>

                  {formData.ninBackPreview ? (
                    <div className="relative w-16 h-10">
                      <img
                        src={formData.ninBackPreview}
                        alt="Back ID"
                        className="w-full h-full object-cover rounded"
                      />
                      <button
                        onClick={() => {
                          setFormData({
                            ...formData,
                            ninBackUrl: null,
                            ninBackPreview: null,
                          });
                          if (ninBackRef.current) ninBackRef.current.value = "";
                        }}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center"
                      >
                        ×
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => ninBackRef.current?.click()}
                      className="px-4 py-2 bg-green-50 text-green-600 text-sm font-semibold rounded-lg hover:bg-green-100 transition-colors"
                    >
                      Upload
                    </button>
                  )}
                  <input
                    ref={ninBackRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleNinUpload(e, "back")}
                  />
                </div>
              </div>

              <div className="flex gap-3 mt-8">
                <button
                  onClick={() => setCurrentStep(4)}
                  className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 flex items-center gap-2"
                >
                  <ArrowLeft className="w-5 h-5" /> Back
                </button>
                <button
                  onClick={() => setCurrentStep(6)}
                  disabled={!formData.ninFrontUrl || !formData.ninBackUrl}
                  className="flex-1 bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next: Selfie Verification
                </button>
              </div>

              <div className="text-center text-xs text-gray-400 flex items-center justify-center gap-1">
                🔒 Your information is safe and securely stored
              </div>
            </div>
          )}

          {/* STEP 6: Identity Verification (Selfie) */}
          {currentStep === 6 && (
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg text-green-800">
                    Identity Verification
                  </h3>
                  <span className="text-sm font-medium text-green-700">
                    Step 2/2
                  </span>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Take a Selfie
                </h3>
                <p className="text-gray-600 text-sm">
                  Position your face in the oval frame below
                </p>
              </div>

              <div className="relative w-64 h-80 mx-auto bg-gray-100 rounded-3xl overflow-hidden border-4 border-white shadow-lg">
                {formData.selfiePreview ? (
                  <img
                    src={formData.selfiePreview}
                    alt="Selfie"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gray-800">
                    <div className="w-48 h-64 border-4 border-green-500/50 rounded-[50%] absolute top-8"></div>
                    <span className="text-white/50 text-sm mt-auto mb-4">
                      No image captured
                    </span>
                  </div>
                )}

                {/* Camera Overlay/Button */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                  <button
                    onClick={() => selfieRef.current?.click()}
                    className="bg-green-500 text-white p-4 rounded-full hover:bg-green-600 transition-transform hover:scale-105 shadow-lg"
                  >
                    <Camera className="w-8 h-8" />
                  </button>
                </div>

                <input
                  ref={selfieRef}
                  type="file"
                  accept="image/*"
                  capture="user"
                  className="hidden"
                  onChange={handleSelfieUpload}
                />
              </div>

              <div className="flex gap-3 mt-8">
                <button
                  onClick={() => setCurrentStep(5)}
                  className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 flex items-center gap-2"
                >
                  <ArrowLeft className="w-5 h-5" /> Back
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={loading || !formData.selfieUrl}
                  className="flex-1 bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Verifying..." : "Submit for Verification"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
