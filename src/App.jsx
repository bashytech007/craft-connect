// import React from 'react'
// import Header from './components/Header/Header'
// import HeroSection from './components/Hero/HeroSection'
// import SearchSection from './components/Search/SearchSection'
// import CategoriesSection from './components/Categories/CategoriesSection'
// import FeaturedArtisans from './components/Artisans/FeaturedArtisans'
// import Footer from './components/Footer/Footer'
// import WhyTrustSection from './components/CTA/WhyTrustSection'

// function App() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header />
//       <main>
//         <HeroSection />
//         <SearchSection />
//         <CategoriesSection />
//         <FeaturedArtisans />
//         <WhyTrustSection/>
//       </main>
//       <Footer />
//     </div>
//   )
// }

// export default App


// // src/App.js
// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// // import { ClerkProvider } from '@clerk/clerk-react';

// // Pages
// import LandingPage from './pages/LandingPage';
// import SignUpPage from './pages/SignUpPage';
// import SignInPage from './pages/SignInPage';

// // Get your Clerk publishable key from environment variables
// const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

// function App() {
//   return (
//     // <ClerkProvider publishableKey={clerkPubKey}>
//       <BrowserRouter>
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/" element={<LandingPage />} />
//           <Route path="/sign-up" element={<SignUpPage />} />
//           <Route path="/sign-in" element={<SignInPage />} />
          
//           {/* Add more routes as needed */}
//           {/* <Route path="/dashboard" element={<Dashboard />} /> */}
//         </Routes>
//       </BrowserRouter>
//     {/* </ClerkProvider> */}
//   );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import LandingPage from './pages/LandingPage';
// import SignUpPage from './pages/SignUpPage';
// import SignInPage from './pages/SignInPage';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/sign-up" element={<SignUpPage />} />
//         <Route path="/sign-in" element={<SignInPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import ProfilePage from './pages/ProfilePage';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;