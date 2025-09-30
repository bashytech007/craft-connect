// // src/pages/SignUpPage.jsx

// import React from 'react';
// import { SignUp } from '@clerk/clerk-react';
// import { useNavigate } from 'react-router-dom';
// import { X } from 'lucide-react';

// function SignUpPage() {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
//       <div className="relative w-full max-w-md">
//         {/* Close button to go back to landing */}
//         <button
//           onClick={() => navigate('/')}
//           className="absolute -top-12 right-0 text-gray-600 hover:text-gray-900 transition-colors"
//         >
//           <X className="w-6 h-6" />
//         </button>
        
//         {/* Clerk's Sign Up Component */}
//         <SignUp
//           appearance={{
//             elements: {
//               formButtonPrimary: 'bg-amber-500 hover:bg-amber-600',
//               card: 'shadow-2xl',
//             },
//           }}
//           routing="path"
//           path="/sign-up"
//           signInUrl="/sign-in"
//           afterSignUpUrl="/dashboard"
//         />
//       </div>
//     </div>
//   );
// }

// export default SignUpPage;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { supabase } from '../lib/supabase';
// import { X, Mail, Phone, User, Lock, Eye, EyeOff } from 'lucide-react';

// function SignUpPage() {
//   const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phoneNumber: '',
//     password: '',
//     category: '',
//   });

//   const categories = [
//     'Wood Working',
//     'Leather Craft',
//     'Metal Working',
//     'Pottery',
//     'Textiles',
//     'Jewelry',
//   ];

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       // Sign up with Supabase
//       const { data, error } = await supabase.auth.signUp({
//         email: formData.email,
//         password: formData.password,
//         options: {
//           data: {
//             first_name: formData.firstName,
//             last_name: formData.lastName,
//             phone: formData.phoneNumber,
//             category: formData.category,
//           },
//         },
//       });

//       if (error) throw error;

//       // Success - redirect to sign in or dashboard
//       alert('Check your email to confirm your account!');
//       navigate('/sign-in');
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
//       <div className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden flex flex-col md:flex-row shadow-2xl">
//         {/* Left Side - Image */}
//         <div className="hidden md:block md:w-1/2 relative">
//           <img
//             src="https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=600&h=800&fit=crop"
//             alt="Artisan at work"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//         </div>

//         {/* Right Side - Form */}
//         <div className="md:w-1/2 p-8 overflow-y-auto relative">
//           <button
//             onClick={() => navigate('/')}
//             className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
//           >
//             <X className="w-6 h-6" />
//           </button>

//           <div className="mb-6">
//             <div className="flex items-center gap-2 mb-4">
//               <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
//                 <span className="text-white font-bold">C</span>
//               </div>
//               <span className="font-bold text-xl">CraftConnect</span>
//             </div>
//             <h2 className="text-2xl font-bold text-gray-900 mb-2">
//               Sign up as Artisan
//             </h2>
//             <p className="text-gray-600">
//               Craft your <span className="text-amber-500 font-semibold">Success</span>
//             </p>
//             <p className="text-sm text-gray-500">Start your artisan journey today</p>
//           </div>

//           {error && (
//             <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
//               {error}
//             </div>
//           )}

//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 First Name*
//               </label>
//               <div className="relative">
//                 <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   placeholder="Enter your first name"
//                   required
//                   className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Last Name*
//               </label>
//               <div className="relative">
//                 <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   placeholder="Enter your last name"
//                   required
//                   className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Email*
//               </label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="example@email.com"
//                   required
//                   className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Phone Number*
//               </label>
//               <div className="relative">
//                 <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//                 <input
//                   type="tel"
//                   name="phoneNumber"
//                   value={formData.phoneNumber}
//                   onChange={handleChange}
//                   placeholder="+234 800 000 0000"
//                   required
//                   className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Password*
//               </label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   placeholder="Enter your password"
//                   required
//                   className="w-full pl-10 pr-12 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                 >
//                   {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                 </button>
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Skill Category*
//               </label>
//               <select
//                 name="category"
//                 value={formData.category}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
//               >
//                 <option value="">Select your category</option>
//                 {categories.map((cat) => (
//                   <option key={cat} value={cat}>
//                     {cat}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div className="flex items-start">
//               <input
//                 type="checkbox"
//                 id="terms"
//                 required
//                 className="mt-1 w-4 h-4 text-amber-500 border-gray-300 rounded focus:ring-amber-500"
//               />
//               <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
//                 I agree to the Terms of Service and Privacy Policy
//               </label>
//             </div>

//             <button
//               onClick={handleSubmit}
//               disabled={loading}
//               className="w-full bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {loading ? 'Creating Account...' : 'Sign Up'}
//             </button>

//             <p className="text-center text-sm text-gray-600">
//               Already have an account?{' '}
//               <span 
//                 onClick={() => navigate('/sign-in')}
//                 className="text-amber-600 font-semibold cursor-pointer hover:underline"
//               >
//                 Sign In
//               </span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignUpPage;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { X, Mail, Phone } from 'lucide-react';

function SignUpPage() {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    category: '',
    location: '',
  });

  const categories = [
    'Wood Working',
    'Leather Craft',
    'Metal Working',
    'Pottery',
    'Textiles',
    'Jewelry',
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleGoogleSignIn = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/profile`,
        },
      });
      if (error) throw error;
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError('');

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            first_name: formData.firstName,
            last_name: formData.lastName,
            phone: formData.phoneNumber,
            category: formData.category,
            location: formData.location,
          },
        },
      });

      if (error) throw error;
      alert('Check your email to confirm your account!');
      navigate('/profile');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden flex flex-col md:flex-row shadow-2xl">
        {/* Left Side - Image */}
        <div className="hidden md:block md:w-1/2 relative">
          <img
            src="https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=600&h=800&fit=crop"
            alt="Artisan at work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>

        {/* Right Side - Form or Options */}
        <div className="md:w-1/2 p-8 overflow-y-auto relative">
          <button
            onClick={() => navigate('/')}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">C</span>
              </div>
              <span className="font-bold text-xl">CraftConnect</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Sign up as Artisan
            </h2>
            <p className="text-gray-600">
              Craft your <span className="text-amber-500 font-semibold">Success</span>
            </p>
            <p className="text-sm text-gray-500">Start your artisan journey today</p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          {!showForm ? (
            // Options Screen
            <div className="space-y-3">
              <button
                onClick={handleGoogleSignIn}
                className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-300 text-gray-700 py-3.5 rounded-lg font-medium hover:bg-gray-50"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </button>

              <button
                onClick={() => setShowForm(true)}
                className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-300 text-gray-700 py-3.5 rounded-lg font-medium hover:bg-gray-50"
              >
                <Mail className="w-5 h-5" />
                Continue with Email
              </button>

              <button className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-300 text-gray-700 py-3.5 rounded-lg font-medium hover:bg-gray-50">
                <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </button>

              <button className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-300 text-gray-700 py-3.5 rounded-lg font-medium hover:bg-gray-50">
                <Phone className="w-5 h-5" />
                Phone Number
              </button>

              <p className="text-xs text-gray-500 text-center mt-4 leading-relaxed">
                By signing up, you agree to the Terms of Service and Privacy Policy and to occasionally receive emails from us.
              </p>
            </div>
          ) : (
            // Full Form
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name*</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter Name Here"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name*</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter Name Here"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter Number"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Email"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password*</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter Password"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Trade Category*</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                >
                  <option value="">Select</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location*</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="City"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                />
              </div>

              <div className="flex items-start">
                <input type="checkbox" id="terms" className="mt-1 w-4 h-4 text-amber-500 rounded"/>
                <label htmlFor="terms" className="ml-2 text-xs text-gray-600">
                  By signing up, you agree to the Terms of Service and Privacy Policy
                </label>
              </div>

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-amber-600 disabled:opacity-50"
              >
                {loading ? 'Signing up...' : 'Sign up'}
              </button>

              <p className="text-center text-sm text-gray-600">
                Already have an account?{' '}
                <span onClick={() => navigate('/sign-in')} className="text-amber-600 font-semibold cursor-pointer hover:underline">
                  Sign in
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;