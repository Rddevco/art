// import Image from 'next/image'
// import Link from 'next/link'

// const LandingPage = () => {
//   const companies = [
//     { name: 'Google', logo: '/google-logo.png' },
//     { name: 'Disney+', logo: '/disney-logo.png' },
//     { name: 'Netflix', logo: '/netflix-logo.png' },
//     { name: 'Dropbox', logo: '/dropbox-logo.png' },
//     { name: 'Slack', logo: '/slack-logo.png' },
//     { name: 'Spotify', logo: '/spotify-logo.png' },
//   ]

//   return (
//     <div className="min-h-screen bg-white">
//       <nav className="bg-[#8D00F9] px-4 py-4">
//         <div className="max-w-7xl mx-auto flex justify-between items-center">
//           <div className="flex items-center">
//             <span className="text-white text-xl font-bold">NexGap AI</span>
//             <span className="text-yellow-300 text-xl">✨</span>
//           </div>
//           <div className="flex space-x-6">
//             <Link href="/resume-builder" className="text-white hover:text-gray-200">
//               Free Resume Builder
//             </Link>
//             <Link href="/skill-gap" className="text-white hover:text-gray-200">
//               Skill Gap Analysis
//             </Link>
//             <Link href="/interviews" className="text-white hover:text-gray-200">
//               AI-Powered Interviews
//             </Link>
//             <Link href="/account" className="text-white hover:text-gray-200">
//               My Account
//             </Link>
//             <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900">
//               Build my resume
//             </button>
//           </div>
//         </div>
//       </nav>

//       <main className="max-w-7xl mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           <div>
//             <h1 className="text-4xl font-bold mb-4">
//               Unlock Your Dream Career with NexGap AI
//             </h1>
//             <h2 className="text-2xl mb-6">
//               Empowering You with Tools for Success:
//             </h2>
//             <p className="text-gray-600 mb-8">
//               Get Personalized results today and receive tailored insights in under 3 minutes. 
//               Discover the essential skills that will help you secure your dream job and advance your career.
//             </p>
//             <div className="flex space-x-4 mb-12">
//               <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-900">
//                 Create my Resume
//               </button>
//               <button className="border border-black text-black px-6 py-3 rounded-md hover:bg-gray-100">
//                 Import Resume
//               </button>
//             </div>
            
//             <div className="flex space-x-12 mb-12">
//               <div className="text-center">
//                 <p className="text-purple-600 font-bold text-2xl">↑ 38%</p>
//                 <p className="text-sm text-gray-600">more interviews</p>
//               </div>
//               <div className="text-center">
//                 <p className="text-purple-600 font-bold text-2xl">↑ 23%</p>
//                 <p className="text-sm text-gray-600">more likely to get a job offer</p>
//               </div>
//             </div>
//           </div>
          
//           <div className="relative">
//             <div className="rounded-lg overflow-hidden shadow-xl">
//               <img 
//                 src="/api/placeholder/600/400"
//                 alt="Professional using laptop"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="mt-16">
//           <p className="text-center text-gray-600 mb-8">Subscribers have hired by:</p>
//           <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
//             {companies.map((company) => (
//               <div key={company.name} className="flex justify-center">
//                 <img
//                   src="/api/placeholder/120/40"
//                   alt={`${company.name} logo`}
//                   className="h-8 object-contain"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }

// export default LandingPage