// import React, { useState, useEffect } from 'react';  

// import { useNavigate } from 'react-router-dom';
// import { supabase } from '../lib/supabase';
// import { 
//   User, 
//   Briefcase, 
//   MessageSquare, 
//   Star, 
//   Wallet, 
//   BookOpen, 
//   Settings,
//   LogOut,
//   MapPin,
//   Clock,
//   DollarSign,
//   Plus,
//   X
// } from 'lucide-react';

// function DashboardPage() {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [profile, setProfile] = useState(null);
//   const [activeTab, setActiveTab] = useState('jobs');
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showJobModal, setShowJobModal] = useState(false);
//   const [newJob, setNewJob] = useState({
//     title: '',
//     description: '',
//     location: '',
//     budget: '',
//     category: ''
//   });

//   const categories = [
//     'Wood Working',
//     'Leather Craft',
//     'Metal Working',
//     'Pottery',
//     'Textiles',
//     'Jewelry',
//   ];

//   useEffect(() => {
//     checkUser();
//     fetchJobs();
//   }, []);

//   const checkUser = async () => {
//     const { data: { user } } = await supabase.auth.getUser();
    
//     if (!user) {
//       navigate('/sign-in');
//       return;
//     }

//     setUser(user);

//     const { data: profile } = await supabase
//       .from('profiles')
//       .select('*')
//       .eq('id', user.id)
//       .single();

//     setProfile(profile);
//     setLoading(false);
//   };

//   const fetchJobs = async () => {
//     const { data, error } = await supabase
//       .from('jobs')
//       .select('*')
//       .order('created_at', { ascending: false });

//     if (!error && data) {
//       setJobs(data);
//     }
//   };

//   const handleCreateJob = async (e) => {
//     e.preventDefault();
    
//     try {
//       const { data, error } = await supabase
//         .from('jobs')
//         .insert([{
//           ...newJob,
//           user_id: user.id,
//           status: 'open'
//         }])
//         .select();

//       if (error) throw error;

//       setJobs([data[0], ...jobs]);
//       setShowJobModal(false);
//       setNewJob({
//         title: '',
//         description: '',
//         location: '',
//         budget: '',
//         category: ''
//       });
//       alert('Job posted successfully!');
//     } catch (error) {
//       alert('Error posting job: ' + error.message);
//     }
//   };

//   const handleSignOut = async () => {
//     await supabase.auth.signOut();
//     navigate('/');
//   };

//   const menuItems = [
//     { id: 'profile', label: 'Profile', icon: User },
//     { id: 'jobs', label: 'Job Posting', icon: Briefcase },
//     { id: 'messages', label: 'Chat with Client', icon: MessageSquare },
//     { id: 'reviews', label: 'Reviews', icon: Star },
//     { id: 'wallet', label: 'Wallet Earning', icon: Wallet },
//     { id: 'learning', label: 'Learning', icon: BookOpen },
//     { id: 'settings', label: 'Settings', icon: Settings },
//   ];

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       {/* Sidebar */}
//       <aside className="w-64 bg-gradient-to-b from-green-600 to-green-700 text-white flex flex-col">
//         {/* Logo */}
//         <div className="p-6 border-b border-green-500">
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
//               <span className="text-green-600 font-bold text-xl">C</span>
//             </div>
//             <span className="font-bold text-xl">CraftConnect</span>
//           </div>
//         </div>

//         {/* Profile Info */}
//         <div className="p-6 border-b border-green-500">
//           <div className="flex items-center gap-3 mb-2">
//             <div className="w-12 h-12 rounded-full bg-white text-green-600 flex items-center justify-center font-bold text-lg">
//               {profile?.first_name?.charAt(0) || 'U'}
//             </div>
//             <div>
//               <div className="font-semibold">
//                 {profile?.first_name} {profile?.last_name?.charAt(0)}.
//               </div>
//               <div className="text-green-200 text-sm">{profile?.category}</div>
//             </div>
//           </div>
//         </div>

//         {/* Navigation */}
//         <nav className="flex-1 py-6">
//           {menuItems.map((item) => {
//             const Icon = item.icon;
//             return (
//               <button
//                 key={item.id}
//                 onClick={() => item.id === 'profile' ? navigate('/profile') : setActiveTab(item.id)}
//                 className={`w-full flex items-center gap-3 px-6 py-3 transition-colors ${
//                   activeTab === item.id
//                     ? 'bg-green-800 border-l-4 border-white'
//                     : 'hover:bg-green-600'
//                 }`}
//               >
//                 <Icon className="w-5 h-5" />
//                 <span>{item.label}</span>
//               </button>
//             );
//           })}
//         </nav>

//         {/* Logout */}
//         <button
//           onClick={handleSignOut}
//           className="flex items-center gap-3 px-6 py-4 border-t border-green-500 hover:bg-green-600 transition-colors"
//         >
//           <LogOut className="w-5 h-5" />
//           <span>Logout</span>
//         </button>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 overflow-auto">
//         {/* Header */}
//         <header className="bg-white border-b border-gray-200 px-8 py-4">
//           <div className="flex justify-between items-center">
//             <div>
//               <h1 className="text-2xl font-bold text-gray-900">
//                 {activeTab === 'jobs' ? 'Job Posting' : 'Dashboard'}
//               </h1>
//               <p className="text-gray-600 text-sm">
//                 {activeTab === 'jobs' ? 'Browse and manage job opportunities' : 'Manage your account'}
//               </p>
//             </div>
            
//             {activeTab === 'jobs' && (
//               <button
//                 onClick={() => setShowJobModal(true)}
//                 className="flex items-center gap-2 bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700 transition-colors font-semibold"
//               >
//                 <Plus className="w-5 h-5" />
//                 Post a Job
//               </button>
//             )}
//           </div>
//         </header>

//         {/* Content Area */}
//         <div className="p-8">
//           {activeTab === 'jobs' ? (
//             // Job Listing
//             <div className="space-y-4">
//               {jobs.length === 0 ? (
//                 <div className="bg-white rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
//                   <Briefcase className="w-12 h-12 text-gray-400 mx-auto mb-4" />
//                   <h3 className="text-lg font-semibold text-gray-900 mb-2">No jobs posted yet</h3>
//                   <p className="text-gray-600 mb-4">Start by posting your first job opportunity</p>
//                   <button
//                     onClick={() => setShowJobModal(true)}
//                     className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
//                   >
//                     Post Your First Job
//                   </button>
//                 </div>
//               ) : (
//                 jobs.map((job) => (
//                   <div key={job.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
//                     <div className="flex justify-between items-start mb-4">
//                       <div className="flex-1">
//                         <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
//                         <p className="text-gray-600 mb-4">{job.description}</p>
                        
//                         <div className="flex flex-wrap gap-4 text-sm text-gray-600">
//                           {job.location && (
//                             <div className="flex items-center gap-1">
//                               <MapPin className="w-4 h-4" />
//                               <span>{job.location}</span>
//                             </div>
//                           )}
//                           {job.budget && (
//                             <div className="flex items-center gap-1">
//                               <DollarSign className="w-4 h-4" />
//                               <span>${job.budget}</span>
//                             </div>
//                           )}
//                           <div className="flex items-center gap-1">
//                             <Clock className="w-4 h-4" />
//                             <span>{new Date(job.created_at).toLocaleDateString()}</span>
//                           </div>
//                         </div>
//                       </div>
                      
//                       {job.category && (
//                         <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
//                           {job.category}
//                         </span>
//                       )}
//                     </div>
                    
//                     <div className="flex gap-2 pt-4 border-t border-gray-100">
//                       <button className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
//                         View Details
//                       </button>
//                       <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
//                         Edit
//                       </button>
//                     </div>
//                   </div>
//                 ))
//               )}
//             </div>
//           ) : (
//             // Other tabs placeholder
//             <div className="bg-white rounded-lg shadow-md p-12 text-center">
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                 {menuItems.find(item => item.id === activeTab)?.label}
//               </h3>
//               <p className="text-gray-600">This section is coming soon!</p>
//             </div>
//           )}
//         </div>
//       </main>

//       {/* Job Posting Modal */}
//       {showJobModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-auto">
//             <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
//               <h2 className="text-2xl font-bold text-gray-900">Post a New Job</h2>
//               <button
//                 onClick={() => setShowJobModal(false)}
//                 className="text-gray-400 hover:text-gray-600"
//               >
//                 <X className="w-6 h-6" />
//               </button>
//             </div>

//             <form onSubmit={handleCreateJob} className="p-6 space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Job Title*
//                 </label>
//                 <input
//                   type="text"
//                   value={newJob.title}
//                   onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
//                   placeholder="e.g., Custom Wooden Table"
//                   required
//                   className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Description*
//                 </label>
//                 <textarea
//                   value={newJob.description}
//                   onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
//                   placeholder="Describe the job in detail..."
//                   required
//                   rows={4}
//                   className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none resize-none"
//                 />
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Category*
//                   </label>
//                   <select
//                     value={newJob.category}
//                     onChange={(e) => setNewJob({ ...newJob, category: e.target.value })}
//                     required
//                     className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
//                   >
//                     <option value="">Select Category</option>
//                     {categories.map((cat) => (
//                       <option key={cat} value={cat}>{cat}</option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Budget
//                   </label>
//                   <input
//                     type="number"
//                     value={newJob.budget}
//                     onChange={(e) => setNewJob({ ...newJob, budget: e.target.value })}
//                     placeholder="Enter budget"
//                     className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Location
//                 </label>
//                 <input
//                   type="text"
//                   value={newJob.location}
//                   onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
//                   placeholder="City, State"
//                   className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
//                 />
//               </div>

//               <div className="flex gap-3 pt-4">
//                 <button
//                   type="button"
//                   onClick={() => setShowJobModal(false)}
//                   className="flex-1 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
//                 >
//                   Post Job
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default DashboardPage;



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { 
  User, 
  Briefcase, 
  MessageSquare, 
  Star, 
  Wallet, 
  BookOpen, 
  Settings,
  LogOut,
  MapPin,
  Clock,
  DollarSign,
  Plus,
  X,
  Menu,
  ChevronLeft
} from 'lucide-react';

function DashboardPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [activeTab, setActiveTab] = useState('jobs');
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showJobModal, setShowJobModal] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [newJob, setNewJob] = useState({
    title: '',
    description: '',
    location: '',
    budget: '',
    category: ''
  });

  const categories = [
    'Wood Working',
    'Leather Craft',
    'Metal Working',
    'Pottery',
    'Textiles',
    'Jewelry',
  ];

  useEffect(() => {
    checkUser();
    fetchJobs();
    
    // Set sidebar closed on mobile by default
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      navigate('/sign-in');
      return;
    }

    setUser(user);

    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();

    setProfile(profile);
    setLoading(false);
  };

  const fetchJobs = async () => {
    const { data, error } = await supabase
      .from('jobs')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setJobs(data);
    }
  };

  const handleCreateJob = async (e) => {
    e.preventDefault();
    
    try {
      const { data, error } = await supabase
        .from('jobs')
        .insert([{
          ...newJob,
          user_id: user.id,
          status: 'open'
        }])
        .select();

      if (error) throw error;

      setJobs([data[0], ...jobs]);
      setShowJobModal(false);
      setNewJob({
        title: '',
        description: '',
        location: '',
        budget: '',
        category: ''
      });
      alert('Job posted successfully!');
    } catch (error) {
      alert('Error posting job: ' + error.message);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  const menuItems = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'jobs', label: 'Job Posting', icon: Briefcase },
    { id: 'messages', label: 'Chat with Client', icon: MessageSquare },
    { id: 'reviews', label: 'Reviews', icon: Star },
    { id: 'wallet', label: 'Wallet Earning', icon: Wallet },
    { id: 'learning', label: 'Learning', icon: BookOpen },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex relative">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-0 lg:w-20'} bg-gradient-to-b from-green-600 to-green-700 text-white flex flex-col transition-all duration-300 fixed lg:relative h-screen z-30 overflow-hidden`}>
        {/* Toggle Button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className={`absolute ${sidebarOpen ? '-right-3' : 'right-3'} top-6 bg-white text-green-600 rounded-full p-1 shadow-lg hover:bg-gray-100 transition-all z-10`}
        >
          {sidebarOpen ? <ChevronLeft className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Logo */}
        <div className="p-6 border-b border-green-500">
          <div className={`flex items-center ${sidebarOpen ? 'gap-3' : 'justify-center'}`}>
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-green-600 font-bold text-xl">C</span>
            </div>
            {sidebarOpen && <span className="font-bold text-xl">CraftConnect</span>}
          </div>
        </div>

        {/* Profile Info */}
        <div className={`p-6 border-b border-green-500 ${!sidebarOpen && 'px-2'}`}>
          <div className={`flex items-center ${sidebarOpen ? 'gap-3' : 'justify-center'} mb-2`}>
            <div className="w-12 h-12 rounded-full bg-white text-green-600 flex items-center justify-center font-bold text-lg flex-shrink-0">
              {profile?.first_name?.charAt(0) || 'U'}
            </div>
            {sidebarOpen && (
              <div>
                <div className="font-semibold">
                  {profile?.first_name} {profile?.last_name?.charAt(0)}.
                </div>
                <div className="text-green-200 text-sm">{profile?.category}</div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => item.id === 'profile' ? navigate('/profile') : setActiveTab(item.id)}
                className={`w-full flex items-center ${sidebarOpen ? 'gap-3 px-6' : 'justify-center px-4'} py-3 transition-colors ${
                  activeTab === item.id
                    ? 'bg-green-800 border-l-4 border-white'
                    : 'hover:bg-green-600'
                }`}
                title={!sidebarOpen ? item.label : ''}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {sidebarOpen && <span>{item.label}</span>}
              </button>
            );
          })}
        </nav>

        {/* Logout */}
        <button
          onClick={handleSignOut}
          className={`flex items-center ${sidebarOpen ? 'gap-3 px-6' : 'justify-center px-4'} py-4 border-t border-green-500 hover:bg-green-600 transition-colors`}
          title={!sidebarOpen ? 'Logout' : ''}
        >
          <LogOut className="w-5 h-5 flex-shrink-0" />
          {sidebarOpen && <span>Logout</span>}
        </button>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 overflow-auto transition-all duration-300 ${!sidebarOpen ? 'lg:ml-0' : ''}`}>
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-4 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden text-gray-600 hover:text-gray-900"
              >
                <Menu className="w-6 h-6" />
              </button>
              
              <div>
                <h1 className="text-xl lg:text-2xl font-bold text-gray-900">
                  {activeTab === 'jobs' ? 'Job Posting' : 'Dashboard'}
                </h1>
                <p className="text-gray-600 text-xs lg:text-sm">
                  {activeTab === 'jobs' ? 'Browse and manage job opportunities' : 'Manage your account'}
                </p>
              </div>
            </div>
            
            {activeTab === 'jobs' && (
              <button
                onClick={() => setShowJobModal(true)}
                className="flex items-center gap-2 bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                <Plus className="w-5 h-5" />
                Post a Job
              </button>
            )}
          </div>
        </header>

        {/* Content Area */}
        <div className="p-8">
          {activeTab === 'jobs' ? (
            // Job Listing
            <div className="space-y-4">
              {jobs.length === 0 ? (
                <div className="bg-white rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
                  <Briefcase className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No jobs posted yet</h3>
                  <p className="text-gray-600 mb-4">Start by posting your first job opportunity</p>
                  <button
                    onClick={() => setShowJobModal(true)}
                    className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Post Your First Job
                  </button>
                </div>
              ) : (
                jobs.map((job) => (
                  <div key={job.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                        <p className="text-gray-600 mb-4">{job.description}</p>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          {job.location && (
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{job.location}</span>
                            </div>
                          )}
                          {job.budget && (
                            <div className="flex items-center gap-1">
                              <DollarSign className="w-4 h-4" />
                              <span>${job.budget}</span>
                            </div>
                          )}
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{new Date(job.created_at).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                      
                      {job.category && (
                        <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                          {job.category}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex gap-2 pt-4 border-t border-gray-100">
                      <button className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                        View Details
                      </button>
                      <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        Edit
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          ) : (
            // Other tabs placeholder
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {menuItems.find(item => item.id === activeTab)?.label}
              </h3>
              <p className="text-gray-600">This section is coming soon!</p>
            </div>
          )}
        </div>
      </main>

      {/* Job Posting Modal */}
      {showJobModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Post a New Job</h2>
              <button
                onClick={() => setShowJobModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleCreateJob} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Title*
                </label>
                <input
                  type="text"
                  value={newJob.title}
                  onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                  placeholder="e.g., Custom Wooden Table"
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description*
                </label>
                <textarea
                  value={newJob.description}
                  onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
                  placeholder="Describe the job in detail..."
                  required
                  rows={4}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none resize-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category*
                  </label>
                  <select
                    value={newJob.category}
                    onChange={(e) => setNewJob({ ...newJob, category: e.target.value })}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                  >
                    <option value="">Select Category</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget
                  </label>
                  <input
                    type="number"
                    value={newJob.budget}
                    onChange={(e) => setNewJob({ ...newJob, budget: e.target.value })}
                    placeholder="Enter budget"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  value={newJob.location}
                  onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
                  placeholder="City, State"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowJobModal(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
                >
                  Post Job
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default DashboardPage;