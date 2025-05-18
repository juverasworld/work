
// // // // "use client";

// // // // import { useState, useMemo, useEffect } from "react";
// // // // import { Star } from "lucide-react";
// // // // import { Menu, X, Bell, ChevronDown } from "lucide-react";
// // // // import Image from "next/image";
// // // // import Cookies from "universal-cookie";
// // // // import md5 from "crypto-js/md5"; // For Gravatar



// // // // const mockProfiles = [
// // // //   {
// // // //     id: 1,
// // // //     name: "Paul Volt",
// // // //     avatar: "https://i.pravatar.cc/150?img=7",

// // // //     distance: "30 miles away",
// // // //     price: 30,
// // // //     rating: 4.9,
// // // //     jobSuccess: "80%",
// // // //     description:
// // // //       "Experienced electrician with over 10 years in residential and commercial wiring, maintenance, and smart home installations.",
// // // //     skillsExperience:
// // // //       "Skilled in electrical systems, safety compliance, blueprint reading, and energy-efficient solutions. Proficient in diagnosing and repairing electrical issues efficiently.",
// // // //     projects: [
// // // //       "https://i.pravatar.cc/150?img=1",
// // // //       "https://i.pravatar.cc/150?img=2",
// // // //       "https://i.pravatar.cc/150?img=3",
// // // //       "https://i.pravatar.cc/150?img=4",
// // // //     ],
// // // //     reviews: [
// // // //       {
// // // //         id: 1,
// // // //         name: "John F.",
// // // //         date: "Mar 29, 2025",
// // // //         rating: 5,
// // // //         comment:
// // // //           "Paul did a fantastic job rewiring our entire kitchen. Very professional and quick service!",
// // // //       },
// // // //       {
// // // //         id: 2,
// // // //         name: "Sarah L.",
// // // //         date: "Feb 20, 2025",
// // // //         rating: 5,
// // // //         comment:
// // // //           "Highly recommend! He explained everything clearly and fixed our panel issue in no time.",
// // // //       },
// // // //     ],
// // // //   },
// // // //   {
// // // //     id: 2,
// // // //     name: "Anna Sparks",
// // // //     avatar: "https://i.pravatar.cc/150?img=7",

// // // //     distance: "15 miles away",
// // // //     price: 25,
// // // //     rating: 4.8,
// // // //     jobSuccess: "92%",
// // // //     description:
// // // //       "Licensed electrician with a strong focus on eco-friendly solutions and home automation systems.",
// // // //     skillsExperience:
// // // //       "Expert in solar installations, LED retrofits, EV charger setups, and smart home devices.",
// // // //     projects: [
// // // //       "https://i.pravatar.cc/150?img=1",
// // // //       "https://i.pravatar.cc/150?img=8",
// // // //       "https://i.pravatar.cc/150?img=9",
// // // //       "https://i.pravatar.cc/150?img=10",
// // // //     ],
// // // //     reviews: [
// // // //       {
// // // //         id: 1,
// // // //         name: "Carlos M.",
// // // //         date: "Jan 15, 2025",
// // // //         rating: 5,
// // // //         comment:
// // // //           "Anna installed our solar panels perfectly. Very knowledgeable.",
// // // //       },
// // // //     ],
// // // //   },
// // // //   {
// // // //     id: 3,
// // // //     name: "Mike Currents",
// // // //     avatar: "https://i.pravatar.cc/150?img=7",

// // // //     distance: "10 miles away",
// // // //     price: 40,
// // // //     rating: 5.0,
// // // //     jobSuccess: "100%",
// // // //     description:
// // // //       "Commercial electrician experienced in high-voltage systems and safety-critical environments.",
// // // //     skillsExperience:
// // // //       "Specialist in transformer installation, emergency lighting, and circuit protection systems.",
// // // //     projects: [
// // // //       "https://i.pravatar.cc/150?img=1",
// // // //       "https://i.pravatar.cc/150?img=13",
// // // //     ],
// // // //     reviews: [],
// // // //   },
// // // //   {
// // // //     id: 4,
// // // //     name: "Lisa Wires",
// // // //     avatar: "https://i.pravatar.cc/150?img=9",
// // // //     distance: "8 miles away",
// // // //     price: 28,
// // // //     rating: 4.7,
// // // //     jobSuccess: "85%",
// // // //     description:
// // // //       "Reliable residential electrician known for clean, timely, and tidy work.",
// // // //     skillsExperience:
// // // //       "Great with lighting upgrades, fuse box replacements, and outlet installation.",
// // // //     projects: [
// // // //       "https://i.pravatar.cc/150?img=15",
// // // //       "https://i.pravatar.cc/150?img=1",
// // // //       "https://i.pravatar.cc/150?img=5",
// // // //     ],
// // // //     reviews: [
// // // //       {
// // // //         id: 1,
// // // //         name: "Emily K.",
// // // //         date: "Dec 10, 2024",
// // // //         rating: 4.5,
// // // //         comment: "Lisa was friendly and fast. Clean install.",
// // // //       },
// // // //     ],
// // // //   },
// // // //   {
// // // //     id: 5,
// // // //     name: "Tom Charger",
// // // //     avatar: "https://i.pravatar.cc/150?img=7",

// // // //     distance: "22 miles away",
// // // //     price: 35,
// // // //     rating: 4.6,
// // // //     jobSuccess: "75%",
// // // //     description:
// // // //       "Focused on EV charger installations and energy upgrades for smart homes.",
// // // //     skillsExperience:
// // // //       "Capable of installing Level 2 chargers, smart thermostats, and energy meters.",
// // // //     projects: [],
// // // //     reviews: [],
// // // //   },
// // // //   {
// // // //     id: 6,
// // // //     name: "Nina Volt",
// // // //     avatar: "https://i.pravatar.cc/150?img=7",

// // // //     distance: "12 miles away",
// // // //     price: 32,
// // // //     rating: 4.9,
// // // //     jobSuccess: "95%",
// // // //     description:
// // // //       "Electrical engineer turned electrician delivering precision and neat wiring jobs.",
// // // //     skillsExperience:
// // // //       "Strong background in technical schematics, structured wiring, and cable management.",
// // // //     projects: ["https://i.pravatar.cc/150?img=1"],
// // // //     reviews: [
// // // //       {
// // // //         id: 1,
// // // //         name: "Mark Z.",
// // // //         date: "Nov 5, 2024",
// // // //         rating: 5,
// // // //         comment:
// // // //           "She solved a long-standing issue others couldn’t fix. Impressive.",
// // // //       },
// // // //     ],
// // // //   },
// // // //   {
// // // //     id: 7,
// // // //     name: "Leo Arc",
// // // //     avatar: "https://i.pravatar.cc/150?img=7",

// // // //     distance: "5 miles away",
// // // //     price: 26,
// // // //     rating: 4.4,
// // // //     jobSuccess: "70%",
// // // //     description:
// // // //       "Young and passionate, bringing energy and speed to basic electrical services.",
// // // //     skillsExperience:
// // // //       "Handles fixture replacements, appliance hookups, and quick diagnostics.",
// // // //     projects: [],
// // // //     reviews: [],
// // // //   },
// // // // ];
// // // // const levels = ["Beginner", "Intermediate", "Expert"];
// // // // const languages = ["English", "Estonian", "Russian"];

// // // // export default function ProfessionalProfilePage() {
// // // //     const cookies = new Cookies();
// // // //   const [currentUser, setCurrentUser] = useState<any>(null);
// // // //   const [priceFilter, setPriceFilter] = useState<number[]>([]);
// // // //   const [durationFilter, setDurationFilter] = useState<number[]>([]);
// // // //   const [languageFilter, setLanguageFilter] = useState<string[]>([]);
// // // //   const [levelFilter, setLevelFilter] = useState<string[]>([]);
// // // //   const [ratingFilter, setRatingFilter] = useState<number | null>(null);
// // // //   const [selectedProfile, setSelectedProfile] = useState<any>(null);


// // // //     useEffect(() => {
// // // //       const metadata = cookies.get("session_metadata");
// // // //       if (metadata) {
// // // //         setCurrentUser(metadata);
// // // //       } else {
// // // //         setCurrentUser(null);
// // // //       }
// // // //     }, []);
// // // //       // Generate Gravatar URL based on email
// // // //       const getGravatarUrl = (email: string) => {
// // // //         const trimmedEmail = email.trim().toLowerCase();
// // // //         const hash = md5(trimmedEmail).toString();
// // // //         return `https://www.gravatar.com/avatar/${hash}?s=24&d=mp`; // s=24 for size, d=mp for default mystery person
// // // //       };
// // // //   const filteredProfiles = useMemo(() => {
// // // //     return mockProfiles.filter((profile) => {
// // // //       return (
// // // //         (priceFilter.length === 0 || priceFilter.includes(profile.price)) &&
// // // //         (durationFilter.length === 0 ||
// // // //           durationFilter.length === 0) &&
// // // //         (languageFilter.length === 0 ||
// // // //           true) &&
// // // //         (levelFilter.length === 0) &&
// // // //         (ratingFilter === null || profile.rating >= ratingFilter)
// // // //       );
// // // //     });
// // // //   }, [priceFilter, durationFilter, languageFilter, levelFilter, ratingFilter]);

// // // //   const toggle = (value: any, setter: any, multiple = true) => {
// // // //     setter((prev: any[]) =>
// // // //       multiple
// // // //         ? prev.includes(value)
// // // //           ? prev.filter((v) => v !== value)
// // // //           : [...prev, value]
// // // //         : prev === value
// // // //         ? null
// // // //         : value
// // // //     );
// // // //   };

// // // //   const closeModal = () => setSelectedProfile(null);
// // // //   const [menuOpen, setMenuOpen] = useState(false);


// // // //   return (
// // // //     <>
// // // //       <header className="bg-[#f3f5f9] shadow-sm text-[#6D758F]">
// // // //         <div className="max-w-[1500px] mx-auto px-4 py-4 flex justify-between items-center">
// // // //           {/* Logo */}
// // // //           <div className="text-3xl font-bold text-gray-700">
// // // //             <Image
// // // //               src="/logo.svg"
// // // //               width={100}
// // // //               height={100}
// // // //               alt="logo"
// // // //               className="w-auto"
// // // //             />
// // // //           </div>

// // // //           {/* Desktop Menu */}
// // // //           <nav className="hidden md:flex items-center space-x-8 text-[#6D758F] font-medium">
// // // //             <a href="#" className="hover:text-[#6D758F] transition">
// // // //               Home
// // // //             </a>
// // // //             <a href="#" className="hover:text-[#6D758F] transition">
// // // //               About
// // // //             </a>
// // // //             <a href="#" className="hover:text-[#6D758F] transition">
// // // //               Services
// // // //             </a>
// // // //           </nav>

// // // //           {/* Right Side */}
// // // //           <div className="flex items-center space-x-4">
// // // //             {/* Profile */}
// // // //             <div className="hidden md:flex items-center space-x-2 bg-white rounded-full px-3 py-1 shadow-sm">
// // // //               {currentUser ? (
// // // //                 <>
// // // //                   <img
// // // //                     src={getGravatarUrl(currentUser.email)}
// // // //                     // width={24}
// // // //                     // height={24}
// // // //                     alt="Profile"
// // // //                     className="rounded-full"
// // // //                   />
// // // //                   <span className="text-sm font-medium text-gray-700">
// // // //                     {currentUser.email || currentUser.email.split("@")[0]}
// // // //                   </span>
// // // //                 </>
// // // //               ) : (
// // // //                 <>
// // // //                   <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
// // // //                     <span role="img" aria-label="user">
// // // //                       👤
// // // //                     </span>
// // // //                   </div>
// // // //                   <span className="text-sm font-medium text-gray-700">
// // // //                     Guest
// // // //                   </span>
// // // //                 </>
// // // //               )}
// // // //               <ChevronDown size={14} className="text-gray-500" />
// // // //             </div>

// // // //             {/* Notification Icon */}
// // // //             <div className="bg-white p-2 rounded-full shadow-sm hidden md:block">
// // // //               <Bell className="text-blue-600 relative" size={18} />
// // // //               <span className="absolute top-[10px] right-[90px] w-2 h-2 bg-red-500 rounded-full"></span>
// // // //             </div>

// // // //             {/* Hamburger Button */}
// // // //             <button
// // // //               onClick={() => setMenuOpen(!menuOpen)}
// // // //               className="bg-gray-200 p-2 rounded-full md:hidden"
// // // //             >
// // // //               {menuOpen ? <X size={20} /> : <Menu size={20} />}
// // // //             </button>
// // // //           </div>
// // // //         </div>

// // // //         {/* Mobile Menu */}
// // // //         {menuOpen && (
// // // //           <div className="md:hidden px-4 pb-4">
// // // //             <nav className="flex flex-col space-y-2 text-gray-700">
// // // //               <a href="#" className="hover:text-gray-900">
// // // //                 Home
// // // //               </a>
// // // //               <a href="#" className="hover:text-gray-900">
// // // //                 About
// // // //               </a>
// // // //               <a href="#" className="hover:text-gray-900">
// // // //                 Services
// // // //               </a>
// // // //             </nav>
// // // //           </div>
// // // //         )}
// // // //       </header>
// // // //       <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 text-[#6D758F]">
// // // //         {/* Sidebar */}
// // // //         {/* ... Filters remain unchanged ... */}
// // // //         <aside className="w-full md:w-72 border-r p-6 bg-white">
// // // //           <h2 className="text-lg font-bold mb-4">Filter</h2>

// // // //           <div className="mb-4">
// // // //             <h3 className="font-semibold mb-2">Price</h3>
// // // //             {[20, 25, 30, 35, 40].map((price) => (
// // // //               <label key={price} className="flex items-center mb-1">
// // // //                 <input
// // // //                   type="checkbox"
// // // //                   checked={priceFilter.includes(price)}
// // // //                   onChange={() => toggle(price, setPriceFilter)}
// // // //                   className="mr-2"
// // // //                 />
// // // //                 €{price}
// // // //               </label>
// // // //             ))}
// // // //           </div>

// // // //           <div className="mb-4">
// // // //             <h3 className="font-semibold mb-2">Duration</h3>
// // // //             {[1, 6, 17, 72].map((d) => (
// // // //               <label key={d} className="flex items-center mb-1">
// // // //                 <input
// // // //                   type="checkbox"
// // // //                   checked={durationFilter.includes(d)}
// // // //                   onChange={() => toggle(d, setDurationFilter)}
// // // //                   className="mr-2"
// // // //                 />
// // // //                 {d}+ Hours
// // // //               </label>
// // // //             ))}
// // // //           </div>

// // // //           <div className="mb-4">
// // // //             <h3 className="font-semibold mb-2">Language</h3>
// // // //             {languages.map((lang) => (
// // // //               <label key={lang} className="flex items-center mb-1">
// // // //                 <input
// // // //                   type="checkbox"
// // // //                   checked={languageFilter.includes(lang)}
// // // //                   onChange={() => toggle(lang, setLanguageFilter)}
// // // //                   className="mr-2"
// // // //                 />
// // // //                 {lang}
// // // //               </label>
// // // //             ))}
// // // //           </div>

// // // //           <div className="mb-4">
// // // //             <h3 className="font-semibold mb-2">Service level</h3>
// // // //             {levels.map((lvl) => (
// // // //               <label key={lvl} className="flex items-center mb-1">
// // // //                 <input
// // // //                   type="checkbox"
// // // //                   checked={levelFilter.includes(lvl)}
// // // //                   onChange={() => toggle(lvl, setLevelFilter)}
// // // //                   className="mr-2"
// // // //                 />
// // // //                 {lvl}
// // // //               </label>
// // // //             ))}
// // // //           </div>

// // // //           <div className="mb-4">
// // // //             <h3 className="font-semibold mb-2">Review Rating</h3>
// // // //             {[5, 4, 3].map((r) => (
// // // //               <label key={r} className="flex items-center mb-1">
// // // //                 <input
// // // //                   type="radio"
// // // //                   name="rating"
// // // //                   checked={ratingFilter === r}
// // // //                   onChange={() => setRatingFilter(r)}
// // // //                   className="mr-2"
// // // //                 />
// // // //                 {[...Array(5)].map((_, i) => (
// // // //                   <Star
// // // //                     key={i}
// // // //                     className={`h-4 w-4 ${
// // // //                       i < r ? "text-purple-500" : "text-gray-300"
// // // //                     }`}
// // // //                   />
// // // //                 ))}
// // // //               </label>
// // // //             ))}
// // // //           </div>
// // // //         </aside>
// // // //         {/* Main Content */}
// // // //         <main className="flex-1 p-6">
// // // //           <div className="flex justify-between items-center mb-6">
// // // //             <h2 className="text-xl font-bold">Professional picks for you</h2>
// // // //             <div>
// // // //               <label className="mr-2 font-medium">Sorted by:</label>
// // // //               <select className="border rounded px-3 py-1 text-sm">
// // // //                 <option>Recommended</option>
// // // //                 <option>Price</option>
// // // //                 <option>Rating</option>
// // // //               </select>
// // // //             </div>
// // // //           </div>

// // // //           {filteredProfiles.map((profile) => (
// // // //             <div
// // // //               key={profile.id}
// // // //               className="border rounded-lg p-4 mb-4 shadow-sm"
// // // //             >
// // // //               <div className="flex items-center justify-between md:flex-row flex-col">
// // // //                 <div className="flex items-start gap-4">
// // // //                   <img
// // // //                     src={profile.avatar}
// // // //                     alt={profile.name}
// // // //                     className="w-12 h-12 rounded-full object-cover"
// // // //                   />
// // // //                   <div>
// // // //                     <h3 className="font-semibold text-lg">{profile.name}</h3>
// // // //                     <div className="text-sm text-[#6D758F]">
// // // //                       {profile.distance}
// // // //                     </div>

// // // //                     <div className="flex items-center text-sm text-[#6D758F]">
// // // //                       {[...Array(5)].map((_, i) => (
// // // //                         <Star
// // // //                           key={i}
// // // //                           className={`h-4 w-4 ${
// // // //                             i < Math.round(profile.rating)
// // // //                               ? "text-yellow-400"
// // // //                               : "text-gray-300"
// // // //                           }`}
// // // //                         />
// // // //                       ))}
// // // //                       <span className="ml-2">
// // // //                         {profile.jobSuccess} Job Success
// // // //                       </span>
// // // //                     </div>
// // // //                     <div className="text-sm text-[#6D758F]">
// // // //                       {profile.description}
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //                 <div className="flex gap-4">
// // // //                   <button
// // // //                     onClick={() => setSelectedProfile(profile)}
// // // //                     className="bg-[#5188FF] text-white px-4 py-2 rounded-md text-sm"
// // // //                   >
// // // //                     Book Now
// // // //                   </button>
// // // //                   <button
// // // //                     onClick={() => setSelectedProfile(profile)}
// // // //                     className="border-[#5188FF] border-[1px] text-[#5188FF] px-4 py-2 rounded-md text-sm"
// // // //                   >
// // // //                     View Profile
// // // //                   </button>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           ))}

// // // //           {/* Modal */}
// // // //           {selectedProfile && (
// // // //             <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center px-4">
// // // //               <div className="bg-white rounded-2xl w-full max-w-4xl p-6 overflow-y-auto max-h-[90vh] relative shadow-lg ">
// // // //                 <button
// // // //                   onClick={closeModal}
// // // //                   className="absolute top-4 right-6 text-xl font-bold text-gray-500 hover:text-gray-700"
// // // //                 >
// // // //                   ×
// // // //                 </button>

// // // //                 <div className="flex items-center justify-between mb-4">
// // // //                   <div className="flex items-center gap-4">
// // // //                     <img
// // // //                       // width={100}
// // // //                       // height={100}
// // // //                       src={selectedProfile.avatar}
// // // //                       alt="avatar"
// // // //                       className="w-14 h-14 rounded-full"
// // // //                     />
// // // //                     <div>
// // // //                       <h2 className="text-xl font-semibold text-[#6D758F]">
// // // //                         {selectedProfile.name}
// // // //                       </h2>
// // // //                       <div className="text-sm text-gray-500 flex gap-2 items-center">
// // // //                         <span>📍 {selectedProfile.distance}</span>
// // // //                         <span>⭐ {selectedProfile.rating}</span>
// // // //                         <span>{selectedProfile.jobSuccess} Job Success</span>
// // // //                       </div>
// // // //                     </div>
// // // //                   </div>
// // // //                   <div className="text-lg font-semibold text-blue-600">
// // // //                     €{selectedProfile.price}/hr
// // // //                   </div>
// // // //                 </div>
// // // //                 <div className="flex gap-4 my-5">
// // // //                   <p className="flex items-center justify-center border-[#5188FF] border-[1px] text-[#5188FF] lg:w-[170px] rounded-md px-3">
// // // //                     <svg
// // // //                       width="22"
// // // //                       height="21"
// // // //                       viewBox="0 0 22 21"
// // // //                       fill="none"
// // // //                       xmlns="http://www.w3.org/2000/svg"
// // // //                     >
// // // //                       <path
// // // //                         d="M11 9.5V9M15 9.5V9M7 9.5V9M2.464 15.328C1 14.157 1 13.271 1 9.5C1 5.729 1 3.843 2.464 2.672C3.93 1.5 6.286 1.5 11 1.5C15.714 1.5 18.071 1.5 19.535 2.672C20.999 3.844 21 5.729 21 9.5C21 13.271 21 14.157 19.535 15.328C18.072 16.5 15.714 16.5 11 16.5C8.49 16.5 7.2 18.238 5 19.5V16.288C3.906 16.125 3.101 15.838 2.464 15.328Z"
// // // //                         stroke="#5188FF"
// // // //                         stroke-width="1.5"
// // // //                         stroke-linecap="round"
// // // //                         stroke-linejoin="round"
// // // //                       />
// // // //                     </svg>
// // // //                     <button
// // // //                       // onClick={() => setSelectedProfile(profile)}
// // // //                       className=" px-4 py-2 rounded-md text-sm"
// // // //                     >
// // // //                       Book Now
// // // //                     </button>
// // // //                   </p>
// // // //                   <button
// // // //                     // onClick={() => setSelectedProfile(profile)}
// // // //                     className="bg-[#5188FF] px-3 lg:w-[170px] text-white text-[#5188FF] px-4 py-2 rounded-md text-sm"
// // // //                   >
// // // //                     View Profile
// // // //                   </button>
// // // //                 </div>
// // // //                 <div className="mb-6">
// // // //                   <h3 className="font-semibold text-gray-700 mb-1">
// // // //                     Description
// // // //                   </h3>
// // // //                   <p className="text-sm text-[#6D758F]">
// // // //                     {selectedProfile.description}
// // // //                   </p>
// // // //                 </div>

// // // //                 <div className="mb-6">
// // // //                   <h3 className="font-semibold text-gray-700 mb-1">
// // // //                     Skills & Experience
// // // //                   </h3>
// // // //                   <p className="text-sm text-[#6D758F]">
// // // //                     {selectedProfile.skillsExperience}
// // // //                   </p>
// // // //                 </div>

// // // //                 {Array.isArray(selectedProfile.projects) &&
// // // //                   selectedProfile.projects.length > 0 && (
// // // //                     <div className="mb-6">
// // // //                       <h3 className="font-semibold text-gray-700 mb-2">
// // // //                         Projects
// // // //                       </h3>
// // // //                       <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
// // // //                         {selectedProfile.projects.map(
// // // //                           (img: string, idx: number) => (
// // // //                             <img
// // // //                               key={idx}
// // // //                               src={img}
// // // //                               // width={100}
// // // //                               // height={100}
// // // //                               alt={`Project ${idx + 1}`}
// // // //                               className="rounded-lg w-full h-32 object-cover"
// // // //                             />
// // // //                           )
// // // //                         )}
// // // //                       </div>
// // // //                     </div>
// // // //                   )}

// // // //                 {Array.isArray(selectedProfile.reviews) &&
// // // //                   selectedProfile.reviews.length > 0 && (
// // // //                     <div>
// // // //                       <h3 className="font-semibold text-gray-700 mb-2">
// // // //                         Reviews
// // // //                       </h3>
// // // //                       <div className="space-y-4">
// // // //                         {selectedProfile.reviews.map((review: any) => (
// // // //                           <div
// // // //                             key={review.id}
// // // //                             className="border p-3 rounded-lg bg-gray-50"
// // // //                           >
// // // //                             <div className="flex justify-between text-sm text-[#6D758F]">
// // // //                               <span className="font-medium">{review.name}</span>
// // // //                               <span>{review.date}</span>
// // // //                             </div>
// // // //                             <div className="flex items-center mt-1 mb-2">
// // // //                               {[...Array(5)].map((_, i) => (
// // // //                                 <Star
// // // //                                   key={i}
// // // //                                   className={`h-4 w-4 ${
// // // //                                     i < review.rating
// // // //                                       ? "text-yellow-400"
// // // //                                       : "text-gray-300"
// // // //                                   }`}
// // // //                                 />
// // // //                               ))}
// // // //                             </div>
// // // //                             <p className="text-sm text-gray-700">
// // // //                               {review.comment}
// // // //                             </p>
// // // //                           </div>
// // // //                         ))}
// // // //                       </div>
// // // //                     </div>
// // // //                   )}
// // // //               </div>
// // // //             </div>
// // // //           )}
// // // //         </main>
// // // //       </div>
// // // //     </>
// // // //   );
// // // // }


// // // "use client";

// // // import { useState, useMemo, useEffect } from "react";
// // // import { Star, Menu, X, Bell, ChevronDown } from "lucide-react";
// // // import Image from "next/image";
// // // import Cookies from "universal-cookie";
// // // import md5 from "crypto-js/md5"; // For Gravatar
// // // import {
// // //   format,
// // //   startOfMonth,
// // //   endOfMonth,
// // //   eachDayOfInterval,
// // //   isSameDay,
// // //   addMonths,
// // //   subMonths,
// // // } from "date-fns"; // For calendar logic

// // // // Mock profiles data (removed availableDates)
// // // const mockProfiles = [
// // //   {
// // //     id: 1,
// // //     name: "Paul Volt",
// // //     avatar: "https://i.pravatar.cc/150?img=7",
// // //     distance: "30 miles away",
// // //     price: 30,
// // //     rating: 4.9,
// // //     jobSuccess: "80%",
// // //     description:
// // //       "Experienced electrician with over 10 years in residential and commercial wiring, maintenance, and smart home installations.",
// // //     skillsExperience:
// // //       "Skilled in electrical systems, safety compliance, blueprint reading, and energy-efficient solutions. Proficient in diagnosing and repairing electrical issues efficiently.",
// // //     projects: [
// // //       "https://i.pravatar.cc/150?img=1",
// // //       "https://i.pravatar.cc/150?img=2",
// // //       "https://i.pravatar.cc/150?img=3",
// // //       "https://i.pravatar.cc/150?img=4",
// // //     ],
// // //     reviews: [
// // //       {
// // //         id: 1,
// // //         name: "John F.",
// // //         date: "Mar 29, 2025",
// // //         rating: 5,
// // //         comment:
// // //           "Paul did a fantastic job rewiring our entire kitchen. Very professional and quick service!",
// // //       },
// // //       {
// // //         id: 2,
// // //         name: "Sarah L.",
// // //         date: "Feb 20, 2025",
// // //         rating: 5,
// // //         comment:
// // //           "Highly recommend! He explained everything clearly and fixed our panel issue in no time.",
// // //       },
// // //     ],
// // //   },
// // //   {
// // //     id: 2,
// // //     name: "Anna Sparks",
// // //     avatar: "https://i.pravatar.cc/150?img=7",
// // //     distance: "15 miles away",
// // //     price: 25,
// // //     rating: 4.8,
// // //     jobSuccess: "92%",
// // //     description:
// // //       "Licensed electrician with a strong focus on eco-friendly solutions and home automation systems.",
// // //     skillsExperience:
// // //       "Expert in solar installations, LED retrofits, EV charger setups, and smart home devices.",
// // //     projects: [
// // //       "https://i.pravatar.cc/150?img=1",
// // //       "https://i.pravatar.cc/150?img=8",
// // //       "https://i.pravatar.cc/150?img=9",
// // //       "https://i.pravatar.cc/150?img=10",
// // //     ],
// // //     reviews: [
// // //       {
// // //         id: 1,
// // //         name: "Carlos M.",
// // //         date: "Jan 15, 2025",
// // //         rating: 5,
// // //         comment:
// // //           "Anna installed our solar panels perfectly. Very knowledgeable.",
// // //       },
// // //     ],
// // //   },
// // //   {
// // //     id: 3,
// // //     name: "Mike Currents",
// // //     avatar: "https://i.pravatar.cc/150?img=7",
// // //     distance: "10 miles away",
// // //     price: 40,
// // //     rating: 5.0,
// // //     jobSuccess: "100%",
// // //     description:
// // //       "Commercial electrician experienced in high-voltage systems and safety-critical environments.",
// // //     skillsExperience:
// // //       "Specialist in transformer installation, emergency lighting, and circuit protection systems.",
// // //     projects: [
// // //       "https://i.pravatar.cc/150?img=1",
// // //       "https://i.pravatar.cc/150?img=13",
// // //     ],
// // //     reviews: [],
// // //   },
// // //   {
// // //     id: 4,
// // //     name: "Lisa Wires",
// // //     avatar: "https://i.pravatar.cc/150?img=9",
// // //     distance: "8 miles away",
// // //     price: 28,
// // //     rating: 4.7,
// // //     jobSuccess: "85%",
// // //     description:
// // //       "Reliable residential electrician known for clean, timely, and tidy work.",
// // //     skillsExperience:
// // //       "Great with lighting upgrades, fuse box replacements, and outlet installation.",
// // //     projects: [
// // //       "https://i.pravatar.cc/150?img=15",
// // //       "https://i.pravatar.cc/150?img=1",
// // //       "https://i.pravatar.cc/150?img=5",
// // //     ],
// // //     reviews: [
// // //       {
// // //         id: 1,
// // //         name: "Emily K.",
// // //         date: "Dec 10, 2024",
// // //         rating: 4.5,
// // //         comment: "Lisa was friendly and fast. Clean install.",
// // //       },
// // //     ],
// // //   },
// // //   {
// // //     id: 5,
// // //     name: "Tom Charger",
// // //     avatar: "https://i.pravatar.cc/150?img=7",
// // //     distance: "22 miles away",
// // //     price: 35,
// // //     rating: 4.6,
// // //     jobSuccess: "75%",
// // //     description:
// // //       "Focused on EV charger installations and energy upgrades for smart homes.",
// // //     skillsExperience:
// // //       "Capable of installing Level 2 chargers, smart thermostats, and energy meters.",
// // //     projects: [],
// // //     reviews: [],
// // //   },
// // //   {
// // //     id: 6,
// // //     name: "Nina Volt",
// // //     avatar: "https://i.pravatar.cc/150?img=7",
// // //     distance: "12 miles away",
// // //     price: 32,
// // //     rating: 4.9,
// // //     jobSuccess: "95%",
// // //     description:
// // //       "Electrical engineer turned electrician delivering precision and neat wiring jobs.",
// // //     skillsExperience:
// // //       "Strong background in technical schematics, structured wiring, and cable management.",
// // //     projects: ["https://i.pravatar.cc/150?img=1"],
// // //     reviews: [
// // //       {
// // //         id: 1,
// // //         name: "Mark Z.",
// // //         date: "Nov 5, 2024",
// // //         rating: 5,
// // //         comment:
// // //           "She solved a long-standing issue others couldn’t fix. Impressive.",
// // //       },
// // //     ],
// // //   },
// // //   {
// // //     id: 7,
// // //     name: "Leo Arc",
// // //     avatar: "https://i.pravatar.cc/150?img=7",
// // //     distance: "5 miles away",
// // //     price: 26,
// // //     rating: 4.4,
// // //     jobSuccess: "70%",
// // //     description:
// // //       "Young and passionate, bringing energy and speed to basic electrical services.",
// // //     skillsExperience:
// // //       "Handles fixture replacements, appliance hookups, and quick diagnostics.",
// // //     projects: [],
// // //     reviews: [],
// // //   },
// // // ];

// // // const levels = ["Beginner", "Intermediate", "Expert"];
// // // const languages = ["English", "Estonian", "Russian"];

// // // // Available time slots for the calendar
// // // const timeSlots = [
// // //   "11:00 am – 12:00 pm",
// // //   "12:00 pm – 1:00 pm",
// // //   "1:00 pm – 2:00 pm",
// // //   "2:00 pm – 3:00 pm",
// // //   "3:00 pm – 4:00 pm",
// // //   "4:00 pm – 5:00 pm",
// // //   "5:00 pm – 6:00 pm",
// // // ];

// // // export default function ProfessionalProfilePage() {
// // //   const cookies = new Cookies();
// // //   const [currentUser, setCurrentUser] = useState<any>(null);
// // //   const [priceFilter, setPriceFilter] = useState<number[]>([]);
// // //   const [durationFilter, setDurationFilter] = useState<number[]>([]);
// // //   const [languageFilter, setLanguageFilter] = useState<string[]>([]);
// // //   const [levelFilter, setLevelFilter] = useState<string[]>([]);
// // //   const [ratingFilter, setRatingFilter] = useState<number | null>(null);
// // //   const [selectedProfile, setSelectedProfile] = useState<any>(null);
// // //   const [menuOpen, setMenuOpen] = useState(false);

// // //   // Calendar modal states
// // //   const [showCalendarModal, setShowCalendarModal] = useState(false);
// // //   const [showConfirmationModal, setShowConfirmationModal] = useState(false);
// // //   const [currentMonth, setCurrentMonth] = useState(new Date(2025, 3, 1)); // Start with April 2025
// // //   const [selectedDate, setSelectedDate] = useState<Date | null>(null);
// // //   const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);

// // //   useEffect(() => {
// // //     const metadata = cookies.get("session_metadata");
// // //     if (metadata) {
// // //       setCurrentUser(metadata);
// // //     } else {
// // //       setCurrentUser(null);
// // //     }
// // //   }, []);

// // //   const getGravatarUrl = (email: string) => {
// // //     const trimmedEmail = email.trim().toLowerCase();
// // //     const hash = md5(trimmedEmail).toString();
// // //     return `https://www.gravatar.com/avatar/${hash}?s=24&d=mp`;
// // //   };

// // //   const filteredProfiles = useMemo(() => {
// // //     return mockProfiles.filter((profile) => {
// // //       return (
// // //         (priceFilter.length === 0 || priceFilter.includes(profile.price)) &&
// // //         (durationFilter.length === 0 || durationFilter.length === 0) &&
// // //         (languageFilter.length === 0 || true) &&
// // //         levelFilter.length === 0 &&
// // //         (ratingFilter === null || profile.rating >= ratingFilter)
// // //       );
// // //     });
// // //   }, [priceFilter, durationFilter, languageFilter, levelFilter, ratingFilter]);

// // //   const toggle = (value: any, setter: any, multiple = true) => {
// // //     setter((prev: any[]) =>
// // //       multiple
// // //         ? prev.includes(value)
// // //           ? prev.filter((v) => v !== value)
// // //           : [...prev, value]
// // //         : prev === value
// // //         ? null
// // //         : value
// // //     );
// // //   };

// // //   const closeModal = () => {
// // //     setSelectedProfile(null);
// // //     setShowCalendarModal(false);
// // //     setShowConfirmationModal(false);
// // //     setSelectedDate(null);
// // //     setSelectedTimeSlot(null);
// // //   };

// // //   // Calendar logic
// // //   const daysInMonth = eachDayOfInterval({
// // //     start: startOfMonth(currentMonth),
// // //     end: endOfMonth(currentMonth),
// // //   });

// // //   const handlePrevMonth = () => {
// // //     setCurrentMonth(subMonths(currentMonth, 1));
// // //   };

// // //   const handleNextMonth = () => {
// // //     setCurrentMonth(addMonths(currentMonth, 1));
// // //   };

// // //   const handleDateSelect = (date: Date) => {
// // //     setSelectedDate(date);
// // //   };

// // //   const handleTimeSlotSelect = (slot: string) => {
// // //     setSelectedTimeSlot(slot);
// // //   };

// // //   const handleBookingConfirm = () => {
// // //     if (selectedDate && selectedTimeSlot && selectedProfile) {
// // //       setShowCalendarModal(false);
// // //       setShowConfirmationModal(true);
// // //     } else {
// // //       alert("Please select a date and time slot to confirm your booking.");
// // //     }
// // //   };

// // //   return (
// // //     <>
// // //       <header className="bg-[#f3f5f9] shadow-sm text-[#6D758F]">
// // //         <div className="max-w-[1500px] mx-auto px-4 py-4 flex justify-between items-center">
// // //           <div className="text-3xl font-bold text-gray-700">
// // //             <Image
// // //               src="/logo.svg"
// // //               width={100}
// // //               height={100}
// // //               alt="logo"
// // //               className="w-auto"
// // //             />
// // //           </div>
// // //           <nav className="hidden md:flex items-center space-x-8 text-[#6D758F] font-medium">
// // //             <a href="#" className="hover:text-[#6D758F] transition">
// // //               Home
// // //             </a>
// // //             <a href="#" className="hover:text-[#6D758F] transition">
// // //               About
// // //             </a>
// // //             <a href="#" className="hover:text-[#6D758F] transition">
// // //               Services
// // //             </a>
// // //           </nav>
// // //           <div className="flex items-center space-x-4">
// // //             <div className="hidden md:flex items-center space-x-2 bg-white rounded-full px-3 py-1 shadow-sm">
// // //               {currentUser ? (
// // //                 <>
// // //                   <img
// // //                     src={getGravatarUrl(currentUser.email)}
// // //                     alt="Profile"
// // //                     className="rounded-full"
// // //                   />
// // //                   <span className="text-sm font-medium text-gray-700">
// // //                     {currentUser.email || currentUser.email.split("@")[0]}
// // //                   </span>
// // //                 </>
// // //               ) : (
// // //                 <>
// // //                   <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
// // //                     <span role="img" aria-label="user">
// // //                       👤
// // //                     </span>
// // //                   </div>
// // //                   <span className="text-sm font-medium text-gray-700">
// // //                     Guest
// // //                   </span>
// // //                 </>
// // //               )}
// // //               <ChevronDown size={14} className="text-gray-500" />
// // //             </div>
// // //             <div className="bg-white p-2 rounded-full shadow-sm hidden md:block">
// // //               <Bell className="text-blue-600 relative" size={18} />
// // //               <span className="absolute top-[10px] right-[90px] w-2 h-2 bg-red-500 rounded-full"></span>
// // //             </div>
// // //             <button
// // //               onClick={() => setMenuOpen(!menuOpen)}
// // //               className="bg-gray-200 p-2 rounded-full md:hidden"
// // //             >
// // //               {menuOpen ? <X size={20} /> : <Menu size={20} />}
// // //             </button>
// // //           </div>
// // //         </div>
// // //         {menuOpen && (
// // //           <div className="md:hidden px-4 pb-4">
// // //             <nav className="flex flex-col space-y-2 text-gray-700">
// // //               <a href="#" className="hover:text-gray-900">
// // //                 Home
// // //               </a>
// // //               <a href="#" className="hover:text-gray-900">
// // //                 About
// // //               </a>
// // //               <a href="#" className="hover:text-gray-900">
// // //                 Services
// // //               </a>
// // //             </nav>
// // //           </div>
// // //         )}
// // //       </header>
// // //       <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 text-[#6D758F]">
// // //         <aside className="w-full md:w-72 border-r p-6 bg-white">
// // //           <h2 className="text-lg font-bold mb-4">Filter</h2>
// // //           <div className="mb-4">
// // //             <h3 className="font-semibold mb-2">Price</h3>
// // //             {[20, 25, 30, 35, 40].map((price) => (
// // //               <label key={price} className="flex items-center mb-1">
// // //                 <input
// // //                   type="checkbox"
// // //                   checked={priceFilter.includes(price)}
// // //                   onChange={() => toggle(price, setPriceFilter)}
// // //                   className="mr-2"
// // //                 />
// // //                 €{price}
// // //               </label>
// // //             ))}
// // //           </div>
// // //           <div className="mb-4">
// // //             <h3 className="font-semibold mb-2">Duration</h3>
// // //             {[1, 6, 17, 72].map((d) => (
// // //               <label key={d} className="flex items-center mb-1">
// // //                 <input
// // //                   type="checkbox"
// // //                   checked={durationFilter.includes(d)}
// // //                   onChange={() => toggle(d, setDurationFilter)}
// // //                   className="mr-2"
// // //                 />
// // //                 {d}+ Hours
// // //               </label>
// // //             ))}
// // //           </div>
// // //           <div className="mb-4">
// // //             <h3 className="font-semibold mb-2">Language</h3>
// // //             {languages.map((lang) => (
// // //               <label key={lang} className="flex items-center mb-1">
// // //                 <input
// // //                   type="checkbox"
// // //                   checked={languageFilter.includes(lang)}
// // //                   onChange={() => toggle(lang, setLanguageFilter)}
// // //                   className="mr-2"
// // //                 />
// // //                 {lang}
// // //               </label>
// // //             ))}
// // //           </div>
// // //           <div className="mb-4">
// // //             <h3 className="font-semibold mb-2">Service level</h3>
// // //             {levels.map((lvl) => (
// // //               <label key={lvl} className="flex items-center mb-1">
// // //                 <input
// // //                   type="checkbox"
// // //                   checked={levelFilter.includes(lvl)}
// // //                   onChange={() => toggle(lvl, setLevelFilter)}
// // //                   className="mr-2"
// // //                 />
// // //                 {lvl}
// // //               </label>
// // //             ))}
// // //           </div>
// // //           <div className="mb-4">
// // //             <h3 className="font-semibold mb-2">Review Rating</h3>
// // //             {[5, 4, 3].map((r) => (
// // //               <label key={r} className="flex items-center mb-1">
// // //                 <input
// // //                   type="radio"
// // //                   name="rating"
// // //                   checked={ratingFilter === r}
// // //                   onChange={() => setRatingFilter(r)}
// // //                   className="mr-2"
// // //                 />
// // //                 {[...Array(5)].map((_, i) => (
// // //                   <Star
// // //                     key={i}
// // //                     className={`h-4 w-4 ${
// // //                       i < r ? "text-purple-500" : "text-gray-300"
// // //                     }`}
// // //                   />
// // //                 ))}
// // //               </label>
// // //             ))}
// // //           </div>
// // //         </aside>
// // //         <main className="flex-1 p-6">
// // //           <div className="flex justify-between items-center mb-6">
// // //             <h2 className="text-xl font-bold">Professional picks for you</h2>
// // //             <div>
// // //               <label className="mr-2 font-medium">Sorted by:</label>
// // //               <select className="border rounded px-3 py-1 text-sm">
// // //                 <option>Recommended</option>
// // //                 <option>Price</option>
// // //                 <option>Rating</option>
// // //               </select>
// // //             </div>
// // //           </div>
// // //           {filteredProfiles.map((profile) => (
// // //             <div
// // //               key={profile.id}
// // //               className="border rounded-lg p-4 mb-4 shadow-sm"
// // //             >
// // //               <div className="flex items-center justify-between md:flex-row flex-col">
// // //                 <div className="flex items-start gap-4">
// // //                   <img
// // //                     src={profile.avatar}
// // //                     alt={profile.name}
// // //                     className="w-12 h-12 rounded-full object-cover"
// // //                   />
// // //                   <div>
// // //                     <h3 className="font-semibold text-lg">{profile.name}</h3>
// // //                     <div className="text-sm text-[#6D758F]">
// // //                       {profile.distance}
// // //                     </div>
// // //                     <div className="flex items-center text-sm text-[#6D758F]">
// // //                       {[...Array(5)].map((_, i) => (
// // //                         <Star
// // //                           key={i}
// // //                           className={`h-4 w-4 ${
// // //                             i < Math.round(profile.rating)
// // //                               ? "text-yellow-400"
// // //                               : "text-gray-300"
// // //                           }`}
// // //                         />
// // //                       ))}
// // //                       <span className="ml-2">
// // //                         {profile.jobSuccess} Job Success
// // //                       </span>
// // //                     </div>
// // //                     <div className="text-sm text-[#6D758F]">
// // //                       {profile.description}
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //                 <div className="flex gap-4">
// // //                   <button
// // //                     onClick={() => {
// // //                       setSelectedProfile(profile);
// // //                       setShowCalendarModal(true);
// // //                     }}
// // //                     className="bg-[#5188FF] text-white px-4 py-2 rounded-md text-sm"
// // //                   >
// // //                     Book Now
// // //                   </button>
// // //                   <button
// // //                     onClick={() => setSelectedProfile(profile)}
// // //                     className="border-[#5188FF] border-[1px] text-[#5188FF] px-4 py-2 rounded-md text-sm"
// // //                   >
// // //                     View Profile
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           ))}
// // //           {/* Profile Modal */}
// // //           {selectedProfile && !showCalendarModal && !showConfirmationModal && (
// // //             <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center px-4">
// // //               <div className="bg-white rounded-2xl w-full max-w-4xl p-6 overflow-y-auto max-h-[90vh] relative shadow-lg">
// // //                 <button
// // //                   onClick={closeModal}
// // //                   className="absolute top-4 right-6 text-xl font-bold text-gray-500 hover:text-gray-700"
// // //                 >
// // //                   ×
// // //                 </button>
// // //                 <div className="flex items-center justify-between mb-4">
// // //                   <div className="flex items-center gap-4">
// // //                     <img
// // //                       src={selectedProfile.avatar}
// // //                       alt="avatar"
// // //                       className="w-14 h-14 rounded-full"
// // //                     />
// // //                     <div>
// // //                       <h2 className="text-xl font-semibold text-[#6D758F]">
// // //                         {selectedProfile.name}
// // //                       </h2>
// // //                       <div className="text-sm text-gray-500 flex gap-2 items-center">
// // //                         <span>📍 {selectedProfile.distance}</span>
// // //                         <span>⭐ {selectedProfile.rating}</span>
// // //                         <span>{selectedProfile.jobSuccess} Job Success</span>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                   <div className="text-lg font-semibold text-blue-600">
// // //                     €{selectedProfile.price}/hr
// // //                   </div>
// // //                 </div>
// // //                 <div className="flex gap-4 my-5">
// // //                   <p className="flex items-center justify-center border-[#5188FF] border-[1px] text-[#5188FF] lg:w-[170px] rounded-md px-3">
// // //                     <svg
// // //                       width="22"
// // //                       height="21"
// // //                       viewBox="0 0 22 21"
// // //                       fill="none"
// // //                       xmlns="http://www.w3.org/2000/svg"
// // //                     >
// // //                       <path
// // //                         d="M11 9.5V9M15 9.5V9M7 9.5V9M2.464 15.328C1 14.157 1 13.271 1 9.5C1 5.729 1 3.843 2.464 2.672C3.93 1.5 6.286 1.5 11 1.5C15.714 1.5 18.071 1.5 19.535 2.672C20.999 3.844 21 5.729 21 9.5C21 13.271 21 14.157 19.535 15.328C18.072 16.5 15.714 16.5 11 16.5C8.49 16.5 7.2 18.238 5 19.5V16.288C3.906 16.125 3.101 15.838 2.464 15.328Z"
// // //                         stroke="#5188FF"
// // //                         strokeWidth="1.5"
// // //                         strokeLinecap="round"
// // //                         strokeLinejoin="round"
// // //                       />
// // //                     </svg>
// // //                     <button
// // //                       onClick={() => setShowCalendarModal(true)}
// // //                       className="px-4 py-2 rounded-md text-sm"
// // //                     >
// // //                       Book Now
// // //                     </button>
// // //                   </p>
// // //                   <button className="bg-[#5188FF] px-3 lg:w-[170px] text-white px-4 py-2 rounded-md text-sm">
// // //                     View Profile
// // //                   </button>
// // //                 </div>
// // //                 <div className="mb-6">
// // //                   <h3 className="font-semibold text-gray-700 mb-1">
// // //                     Description
// // //                   </h3>
// // //                   <p className="text-sm text-[#6D758F]">
// // //                     {selectedProfile.description}
// // //                   </p>
// // //                 </div>
// // //                 <div className="mb-6">
// // //                   <h3 className="font-semibold text-gray-700 mb-1">
// // //                     Skills & Experience
// // //                   </h3>
// // //                   <p className="text-sm text-[#6D758F]">
// // //                     {selectedProfile.skillsExperience}
// // //                   </p>
// // //                 </div>
// // //                 {Array.isArray(selectedProfile.projects) &&
// // //                   selectedProfile.projects.length > 0 && (
// // //                     <div className="mb-6">
// // //                       <h3 className="font-semibold text-gray-700 mb-2">
// // //                         Projects
// // //                       </h3>
// // //                       <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
// // //                         {selectedProfile.projects.map(
// // //                           (img: string, idx: number) => (
// // //                             <img
// // //                               key={idx}
// // //                               src={img}
// // //                               alt={`Project ${idx + 1}`}
// // //                               className="rounded-lg w-full h-32 object-cover"
// // //                             />
// // //                           )
// // //                         )}
// // //                       </div>
// // //                     </div>
// // //                   )}
// // //                 {Array.isArray(selectedProfile.reviews) &&
// // //                   selectedProfile.reviews.length > 0 && (
// // //                     <div>
// // //                       <h3 className="font-semibold text-gray-700 mb-2">
// // //                         Reviews
// // //                       </h3>
// // //                       <div className="space-y-4">
// // //                         {selectedProfile.reviews.map((review: any) => (
// // //                           <div
// // //                             key={review.id}
// // //                             className="border p-3 rounded-lg bg-gray-50"
// // //                           >
// // //                             <div className="flex justify-between text-sm text-[#6D758F]">
// // //                               <span className="font-medium">{review.name}</span>
// // //                               <span>{review.date}</span>
// // //                             </div>
// // //                             <div className="flex items-center mt-1 mb-2">
// // //                               {[...Array(5)].map((_, i) => (
// // //                                 <Star
// // //                                   key={i}
// // //                                   className={`h-4 w-4 ${
// // //                                     i < review.rating
// // //                                       ? "text-yellow-400"
// // //                                       : "text-gray-300"
// // //                                   }`}
// // //                                 />
// // //                               ))}
// // //                             </div>
// // //                             <p className="text-sm text-gray-700">
// // //                               {review.comment}
// // //                             </p>
// // //                           </div>
// // //                         ))}
// // //                       </div>
// // //                     </div>
// // //                   )}
// // //               </div>
// // //             </div>
// // //           )}
// // //           {/* Calendar Modal */}
// // //           {showCalendarModal && (
// // //             <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center px-4">
// // //               <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-lg">
// // //                 <div className="flex justify-between items-center mb-4">
// // //                   <h2 className="text-lg font-semibold">Book Appointment</h2>
// // //                   <button
// // //                     onClick={closeModal}
// // //                     className="text-xl font-bold text-gray-500 hover:text-gray-700"
// // //                   >
// // //                     ×
// // //                   </button>
// // //                 </div>
// // //                 <div className="flex justify-between items-center mb-4">
// // //                   <button
// // //                     onClick={handlePrevMonth}
// // //                     className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
// // //                   >
// // //                     &lt;
// // //                   </button>
// // //                   <span className="text-lg font-medium">
// // //                     {format(currentMonth, "MMMM yyyy")}
// // //                   </span>
// // //                   <button
// // //                     onClick={handleNextMonth}
// // //                     className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
// // //                   >
// // //                     &gt;
// // //                   </button>
// // //                 </div>
// // //                 <div className="grid grid-cols-7 gap-2 text-center mb-4">
// // //                   {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
// // //                     (day) => (
// // //                       <div
// // //                         key={day}
// // //                         className="text-sm font-medium text-gray-500"
// // //                       >
// // //                         {day}
// // //                       </div>
// // //                     )
// // //                   )}
// // //                   {daysInMonth.map((day) => (
// // //                     <button
// // //                       key={day.toString()}
// // //                       onClick={() => handleDateSelect(day)}
// // //                       className={`p-2 rounded-full text-sm ${
// // //                         selectedDate && isSameDay(day, selectedDate)
// // //                           ? "bg-[#404040] text-white"
// // //                           : "hover:bg-gray-200"
// // //                       } ${
// // //                         day.getMonth() !== currentMonth.getMonth()
// // //                           ? "text-gray-300"
// // //                           : ""
// // //                       }`}
// // //                     >
// // //                       {day.getDate()}
// // //                     </button>
// // //                   ))}
// // //                 </div>
// // //                 <div className="mb-4">
// // //                   <h3 className="text-sm font-medium mb-2">Available Time</h3>
// // //                   <div className="space-y-2">
// // //                     {timeSlots.map((slot) => (
// // //                       <button
// // //                         key={slot}
// // //                         onClick={() => handleTimeSlotSelect(slot)}
// // //                         className={`w-full text-left p-2 rounded-md border ${
// // //                           selectedTimeSlot === slot
// // //                             ? "bg-[#404040] text-white"
// // //                             : "border-gray-300 hover:bg-gray-100"
// // //                         }`}
// // //                       >
// // //                         {slot}
// // //                       </button>
// // //                     ))}
// // //                   </div>
// // //                 </div>
// // //                 <button
// // //                   onClick={handleBookingConfirm}
// // //                   className="w-full bg-[#404040] text-white py-2 rounded-md hover:bg-blue-600"
// // //                 >
// // //                   Book Now
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           )}
// // //           {/* Confirmation Modal */}
// // //           {showConfirmationModal && (
// // //             <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center px-4">
// // //               <div className="bg-white rounded-2xl w-full max-w-sm p-6 shadow-lg text-center">
// // //                 <h2 className="text-lg font-semibold mb-4">
// // //                   Booking Submitted
// // //                 </h2>
// // //                 <p className="text-sm text-gray-700 mb-6">
// // //                   Hey, we would get back to you.
// // //                 </p>
// // //                 <button
// // //                   onClick={closeModal}
// // //                   className="w-full bg-[#404040] text-white py-2 rounded-md hover:bg-blue-600"
// // //                 >
// // //                   OK
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           )}
// // //         </main>
// // //       </div>
// // //     </>
// // //   );
// // // }
// // // // "use client";

// // // // import { useState, useMemo, useEffect } from "react";
// // // // import { Star, Menu, X, Bell, ChevronDown } from "lucide-react";
// // // // import Image from "next/image";
// // // // import Cookies from "universal-cookie";
// // // // import md5 from "crypto-js/md5"; // For Gravatar
// // // // import {
// // // //   format,
// // // //   startOfMonth,
// // // //   endOfMonth,
// // // //   eachDayOfInterval,
// // // //   isSameDay,
// // // //   addMonths,
// // // //   subMonths,
// // // // } from "date-fns"; // For calendar logic

// // // // // Mock profiles data (unchanged)
// // // // const mockProfiles = [
// // // //   {
// // // //     id: 1,
// // // //     name: "Paul Volt",
// // // //     avatar: "https://i.pravatar.cc/150?img=7",
// // // //     distance: "30 miles away",
// // // //     price: 30,
// // // //     rating: 4.9,
// // // //     jobSuccess: "80%",
// // // //     description:
// // // //       "Experienced electrician with over 10 years in residential and commercial wiring, maintenance, and smart home installations.",
// // // //     skillsExperience:
// // // //       "Skilled in electrical systems, safety compliance, blueprint reading, and energy-efficient solutions. Proficient in diagnosing and repairing electrical issues efficiently.",
// // // //     projects: [
// // // //       "https://i.pravatar.cc/150?img=1",
// // // //       "https://i.pravatar.cc/150?img=2",
// // // //       "https://i.pravatar.cc/150?img=3",
// // // //       "https://i.pravatar.cc/150?img=4",
// // // //     ],
// // // //     reviews: [
// // // //       {
// // // //         id: 1,
// // // //         name: "John F.",
// // // //         date: "Mar 29, 2025",
// // // //         rating: 5,
// // // //         comment:
// // // //           "Paul did a fantastic job rewiring our entire kitchen. Very professional and quick service!",
// // // //       },
// // // //       {
// // // //         id: 2,
// // // //         name: "Sarah L.",
// // // //         date: "Feb 20, 2025",
// // // //         rating: 5,
// // // //         comment:
// // // //           "Highly recommend! He explained everything clearly and fixed our panel issue in no time.",
// // // //       },
// // // //     ],
// // // //   },
// // // //   // ... (rest of the mockProfiles data remains unchanged)
// // // // ];

// // // // const levels = ["Beginner", "Intermediate", "Expert"];
// // // // const languages = ["English", "Estonian", "Russian"];

// // // // // Available time slots for the calendar
// // // // const timeSlots = [
// // // //   "11:00 am – 12:00 pm",
// // // //   "12:00 pm – 1:00 pm",
// // // //   "1:00 pm – 2:00 pm",
// // // //   "2:00 pm – 3:00 pm",
// // // //   "3:00 pm – 4:00 pm",
// // // //   "4:00 pm – 5:00 pm",
// // // //   "5:00 pm – 6:00 pm",
// // // // ];

// // // // export default function ProfessionalProfilePage() {
// // // //   const cookies = new Cookies();
// // // //   const [currentUser, setCurrentUser] = useState<any>(null);
// // // //   const [priceFilter, setPriceFilter] = useState<number[]>([]);
// // // //   const [durationFilter, setDurationFilter] = useState<number[]>([]);
// // // //   const [languageFilter, setLanguageFilter] = useState<string[]>([]);
// // // //   const [levelFilter, setLevelFilter] = useState<string[]>([]);
// // // //   const [ratingFilter, setRatingFilter] = useState<number | null>(null);
// // // //   const [selectedProfile, setSelectedProfile] = useState<any>(null);
// // // //   const [menuOpen, setMenuOpen] = useState(false);

// // // //   // Calendar modal states
// // // //   const [showCalendarModal, setShowCalendarModal] = useState(false);
// // // //   const [currentMonth, setCurrentMonth] = useState(new Date(2025, 3, 1)); // Start with April 2025
// // // //   const [selectedDate, setSelectedDate] = useState<Date | null>(null);
// // // //   const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);

// // // //   useEffect(() => {
// // // //     const metadata = cookies.get("session_metadata");
// // // //     if (metadata) {
// // // //       setCurrentUser(metadata);
// // // //     } else {
// // // //       setCurrentUser(null);
// // // //     }
// // // //   }, []);

// // // //   const getGravatarUrl = (email: string) => {
// // // //     const trimmedEmail = email.trim().toLowerCase();
// // // //     const hash = md5(trimmedEmail).toString();
// // // //     return `https://www.gravatar.com/avatar/${hash}?s=24&d=mp`;
// // // //   };

// // // //   const filteredProfiles = useMemo(() => {
// // // //     return mockProfiles.filter((profile) => {
// // // //       return (
// // // //         (priceFilter.length === 0 || priceFilter.includes(profile.price)) &&
// // // //         (durationFilter.length === 0 || durationFilter.length === 0) &&
// // // //         (languageFilter.length === 0 || true) &&
// // // //         levelFilter.length === 0 &&
// // // //         (ratingFilter === null || profile.rating >= ratingFilter)
// // // //       );
// // // //     });
// // // //   }, [priceFilter, durationFilter, languageFilter, levelFilter, ratingFilter]);

// // // //   const toggle = (value: any, setter: any, multiple = true) => {
// // // //     setter((prev: any[]) =>
// // // //       multiple
// // // //         ? prev.includes(value)
// // // //           ? prev.filter((v) => v !== value)
// // // //           : [...prev, value]
// // // //         : prev === value
// // // //         ? null
// // // //         : value
// // // //     );
// // // //   };

// // // //   const closeModal = () => {
// // // //     setSelectedProfile(null);
// // // //     setShowCalendarModal(false);
// // // //     setSelectedDate(null);
// // // //     setSelectedTimeSlot(null);
// // // //   };

// // // //   // Calendar logic
// // // //   const daysInMonth = eachDayOfInterval({
// // // //     start: startOfMonth(currentMonth),
// // // //     end: endOfMonth(currentMonth),
// // // //   });

// // // //   const handlePrevMonth = () => {
// // // //     setCurrentMonth(subMonths(currentMonth, 1));
// // // //   };

// // // //   const handleNextMonth = () => {
// // // //     setCurrentMonth(addMonths(currentMonth, 1));
// // // //   };

// // // //   const handleDateSelect = (date: Date) => {
// // // //     setSelectedDate(date);
// // // //   };

// // // //   const handleTimeSlotSelect = (slot: string) => {
// // // //     setSelectedTimeSlot(slot);
// // // //   };

// // // //   const handleBookingConfirm = () => {
// // // //     if (selectedDate && selectedTimeSlot && selectedProfile) {
// // // //       alert(
// // // //         `Booking confirmed with ${selectedProfile.name} on ${format(
// // // //           selectedDate,
// // // //           "MMMM d, yyyy"
// // // //         )} at ${selectedTimeSlot}`
// // // //       );
// // // //       closeModal();
// // // //     } else {
// // // //       alert("Please select a date and time slot to confirm your booking.");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <>
// // // //       <header className="bg-[#f3f5f9] shadow-sm text-[#6D758F]">
// // // //         <div className="max-w-[1500px] mx-auto px-4 py-4 flex justify-between items-center">
// // // //           <div className="text-3xl font-bold text-gray-700">
// // // //             <Image
// // // //               src="/logo.svg"
// // // //               width={100}
// // // //               height={100}
// // // //               alt="logo"
// // // //               className="w-auto"
// // // //             />
// // // //           </div>
// // // //           <nav className="hidden md:flex items-center space-x-8 text-[#6D758F] font-medium">
// // // //             <a href="#" className="hover:text-[#6D758F] transition">
// // // //               Home
// // // //             </a>
// // // //             <a href="#" className="hover:text-[#6D758F] transition">
// // // //               About
// // // //             </a>
// // // //             <a href="#" className="hover:text-[#6D758F] transition">
// // // //               Services
// // // //             </a>
// // // //           </nav>
// // // //           <div className="flex items-center space-x-4">
// // // //             <div className="hidden md:flex items-center space-x-2 bg-white rounded-full px-3 py-1 shadow-sm">
// // // //               {currentUser ? (
// // // //                 <>
// // // //                   <img
// // // //                     src={getGravatarUrl(currentUser.email)}
// // // //                     alt="Profile"
// // // //                     className="rounded-full"
// // // //                   />
// // // //                   <span className="text-sm font-medium text-gray-700">
// // // //                     {currentUser.email || currentUser.email.split("@")[0]}
// // // //                   </span>
// // // //                 </>
// // // //               ) : (
// // // //                 <>
// // // //                   <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
// // // //                     <span role="img" aria-label="user">
// // // //                       👤
// // // //                     </span>
// // // //                   </div>
// // // //                   <span className="text-sm font-medium text-gray-700">
// // // //                     Guest
// // // //                   </span>
// // // //                 </>
// // // //               )}
// // // //               <ChevronDown size={14} className="text-gray-500" />
// // // //             </div>
// // // //             <div className="bg-white p-2 rounded-full shadow-sm hidden md:block">
// // // //               <Bell className="text-blue-600 relative" size={18} />
// // // //               <span className="absolute top-[10px] right-[90px] w-2 h-2 bg-red-500 rounded-full"></span>
// // // //             </div>
// // // //             <button
// // // //               onClick={() => setMenuOpen(!menuOpen)}
// // // //               className="bg-gray-200 p-2 rounded-full md:hidden"
// // // //             >
// // // //               {menuOpen ? <X size={20} /> : <Menu size={20} />}
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //         {menuOpen && (
// // // //           <div className="md:hidden px-4 pb-4">
// // // //             <nav className="flex flex-col space-y-2 text-gray-700">
// // // //               <a href="#" className="hover:text-gray-900">
// // // //                 Home
// // // //               </a>
// // // //               <a href="#" className="hover:text-gray-900">
// // // //                 About
// // // //               </a>
// // // //               <a href="#" className="hover:text-gray-900">
// // // //                 Services
// // // //               </a>
// // // //             </nav>
// // // //           </div>
// // // //         )}
// // // //       </header>
// // // //       <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 text-[#6D758F]">
// // // //         <aside className="w-full md:w-72 border-r p-6 bg-white">
// // // //           <h2 className="text-lg font-bold mb-4">Filter</h2>
// // // //           <div className="mb-4">
// // // //             <h3 className="font-semibold mb-2">Price</h3>
// // // //             {[20, 25, 30, 35, 40].map((price) => (
// // // //               <label key={price} className="flex items-center mb-1">
// // // //                 <input
// // // //                   type="checkbox"
// // // //                   checked={priceFilter.includes(price)}
// // // //                   onChange={() => toggle(price, setPriceFilter)}
// // // //                   className="mr-2"
// // // //                 />
// // // //                 €{price}
// // // //               </label>
// // // //             ))}
// // // //           </div>
// // // //           <div className="mb-4">
// // // //             <h3 className="font-semibold mb-2">Duration</h3>
// // // //             {[1, 6, 17, 72].map((d) => (
// // // //               <label key={d} className="flex items-center mb-1">
// // // //                 <input
// // // //                   type="checkbox"
// // // //                   checked={durationFilter.includes(d)}
// // // //                   onChange={() => toggle(d, setDurationFilter)}
// // // //                   className="mr-2"
// // // //                 />
// // // //                 {d}+ Hours
// // // //               </label>
// // // //             ))}
// // // //           </div>
// // // //           <div className="mb-4">
// // // //             <h3 className="font-semibold mb-2">Language</h3>
// // // //             {languages.map((lang) => (
// // // //               <label key={lang} className="flex items-center mb-1">
// // // //                 <input
// // // //                   type="checkbox"
// // // //                   checked={languageFilter.includes(lang)}
// // // //                   onChange={() => toggle(lang, setLanguageFilter)}
// // // //                   className="mr-2"
// // // //                 />
// // // //                 {lang}
// // // //               </label>
// // // //             ))}
// // // //           </div>
// // // //           <div className="mb-4">
// // // //             <h3 className="font-semibold mb-2">Service level</h3>
// // // //             {levels.map((lvl) => (
// // // //               <label key={lvl} className="flex items-center mb-1">
// // // //                 <input
// // // //                   type="checkbox"
// // // //                   checked={levelFilter.includes(lvl)}
// // // //                   onChange={() => toggle(lvl, setLevelFilter)}
// // // //                   className="mr-2"
// // // //                 />
// // // //                 {lvl}
// // // //               </label>
// // // //             ))}
// // // //           </div>
// // // //           <div className="mb-4">
// // // //             <h3 className="font-semibold mb-2">Review Rating</h3>
// // // //             {[5, 4, 3].map((r) => (
// // // //               <label key={r} className="flex items-center mb-1">
// // // //                 <input
// // // //                   type="radio"
// // // //                   name="rating"
// // // //                   checked={ratingFilter === r}
// // // //                   onChange={() => setRatingFilter(r)}
// // // //                   className="mr-2"
// // // //                 />
// // // //                 {[...Array(5)].map((_, i) => (
// // // //                   <Star
// // // //                     key={i}
// // // //                     className={`h-4 w-4 ${
// // // //                       i < r ? "text-purple-500" : "text-gray-300"
// // // //                     }`}
// // // //                   />
// // // //                 ))}
// // // //               </label>
// // // //             ))}
// // // //           </div>
// // // //         </aside>
// // // //         <main className="flex-1 p-6">
// // // //           <div className="flex justify-between items-center mb-6">
// // // //             <h2 className="text-xl font-bold">Professional picks for you</h2>
// // // //             <div>
// // // //               <label className="mr-2 font-medium">Sorted by:</label>
// // // //               <select className="border rounded px-3 py-1 text-sm">
// // // //                 <option>Recommended</option>
// // // //                 <option>Price</option>
// // // //                 <option>Rating</option>
// // // //               </select>
// // // //             </div>
// // // //           </div>
// // // //           {filteredProfiles.map((profile) => (
// // // //             <div
// // // //               key={profile.id}
// // // //               className="border rounded-lg p-4 mb-4 shadow-sm"
// // // //             >
// // // //               <div className="flex items-center justify-between md:flex-row flex-col">
// // // //                 <div className="flex items-start gap-4">
// // // //                   <img
// // // //                     src={profile.avatar}
// // // //                     alt={profile.name}
// // // //                     className="w-12 h-12 rounded-full object-cover"
// // // //                   />
// // // //                   <div>
// // // //                     <h3 className="font-semibold text-lg">{profile.name}</h3>
// // // //                     <div className="text-sm text-[#6D758F]">
// // // //                       {profile.distance}
// // // //                     </div>
// // // //                     <div className="flex items-center text-sm text-[#6D758F]">
// // // //                       {[...Array(5)].map((_, i) => (
// // // //                         <Star
// // // //                           key={i}
// // // //                           className={`h-4 w-4 ${
// // // //                             i < Math.round(profile.rating)
// // // //                               ? "text-yellow-400"
// // // //                               : "text-gray-300"
// // // //                           }`}
// // // //                         />
// // // //                       ))}
// // // //                       <span className="ml-2">
// // // //                         {profile.jobSuccess} Job Success
// // // //                       </span>
// // // //                     </div>
// // // //                     <div className="text-sm text-[#6D758F]">
// // // //                       {profile.description}
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //                 <div className="flex gap-4">
// // // //                   <button
// // // //                     onClick={() => {
// // // //                       setSelectedProfile(profile);
// // // //                       setShowCalendarModal(true);
// // // //                     }}
// // // //                     className="bg-[#5188FF] text-white px-4 py-2 rounded-md text-sm"
// // // //                   >
// // // //                     Book Now
// // // //                   </button>
// // // //                   <button
// // // //                     onClick={() => setSelectedProfile(profile)}
// // // //                     className="border-[#5188FF] border-[1px] text-[#5188FF] px-4 py-2 rounded-md text-sm"
// // // //                   >
// // // //                     View Profile
// // // //                   </button>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //           {/* Profile Modal (unchanged) */}
// // // //           {selectedProfile && !showCalendarModal && (
// // // //             <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center px-4">
// // // //               <div className="bg-white rounded-2xl w-full max-w-4xl p-6 overflow-y-auto max-h-[90vh] relative shadow-lg">
// // // //                 <button
// // // //                   onClick={closeModal}
// // // //                   className="absolute top-4 right-6 text-xl font-bold text-gray-500 hover:text-gray-700"
// // // //                 >
// // // //                   ×
// // // //                 </button>
// // // //                 <div className="flex items-center justify-between mb-4">
// // // //                   <div className="flex items-center gap-4">
// // // //                     <img
// // // //                       src={selectedProfile.avatar}
// // // //                       alt="avatar"
// // // //                       className="w-14 h-14 rounded-full"
// // // //                     />
// // // //                     <div>
// // // //                       <h2 className="text-xl font-semibold text-[#6D758F]">
// // // //                         {selectedProfile.name}
// // // //                       </h2>
// // // //                       <div className="text-sm text-gray-500 flex gap-2 items-center">
// // // //                         <span>📍 {selectedProfile.distance}</span>
// // // //                         <span>⭐ {selectedProfile.rating}</span>
// // // //                         <span>{selectedProfile.jobSuccess} Job Success</span>
// // // //                       </div>
// // // //                     </div>
// // // //                   </div>
// // // //                   <div className="text-lg font-semibold text-blue-600">
// // // //                     €{selectedProfile.price}/hr
// // // //                   </div>
// // // //                 </div>
// // // //                 <div className="flex gap-4 my-5">
// // // //                   <p className="flex items-center justify-center border-[#5188FF] border-[1px] text-[#5188FF] lg:w-[170px] rounded-md px-3">
// // // //                     <svg
// // // //                       width="22"
// // // //                       height="21"
// // // //                       viewBox="0 0 22 21"
// // // //                       fill="none"
// // // //                       xmlns="http://www.w3.org/2000/svg"
// // // //                     >
// // // //                       <path
// // // //                         d="M11 9.5V9M15 9.5V9M7 9.5V9M2.464 15.328C1 14.157 1 13.271 1 9.5C1 5.729 1 3.843 2.464 2.672C3.93 1.5 6.286 1.5 11 1.5C15.714 1.5 18.071 1.5 19.535 2.672C20.999 3.844 21 5.729 21 9.5C21 13.271 21 14.157 19.535 15.328C18.072 16.5 15.714 16.5 11 16.5C8.49 16.5 7.2 18.238 5 19.5V16.288C3.906 16.125 3.101 15.838 2.464 15.328Z"
// // // //                         stroke="#5188FF"
// // // //                         strokeWidth="1.5"
// // // //                         strokeLinecap="round"
// // // //                         strokeLinejoin="round"
// // // //                       />
// // // //                     </svg>
// // // //                     <button
// // // //                       onClick={() => setShowCalendarModal(true)}
// // // //                       className="px-4 py-2 rounded-md text-sm"
// // // //                     >
// // // //                       Book Now
// // // //                     </button>
// // // //                   </p>
// // // //                   <button className="bg-[#5188FF] px-3 lg:w-[170px] text-white px-4 py-2 rounded-md text-sm">
// // // //                     View Profile
// // // //                   </button>
// // // //                 </div>
// // // //                 <div className="mb-6">
// // // //                   <h3 className="font-semibold text-gray-700 mb-1">
// // // //                     Description
// // // //                   </h3>
// // // //                   <p className="text-sm text-[#6D758F]">
// // // //                     {selectedProfile.description}
// // // //                   </p>
// // // //                 </div>
// // // //                 <div className="mb-6">
// // // //                   <h3 className="font-semibold text-gray-700 mb-1">
// // // //                     Skills & Experience
// // // //                   </h3>
// // // //                   <p className="text-sm text-[#6D758F]">
// // // //                     {selectedProfile.skillsExperience}
// // // //                   </p>
// // // //                 </div>
// // // //                 {Array.isArray(selectedProfile.projects) &&
// // // //                   selectedProfile.projects.length > 0 && (
// // // //                     <div className="mb-6">
// // // //                       <h3 className="font-semibold text-gray-700 mb-2">
// // // //                         Projects
// // // //                       </h3>
// // // //                       <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
// // // //                         {selectedProfile.projects.map(
// // // //                           (img: string, idx: number) => (
// // // //                             <img
// // // //                               key={idx}
// // // //                               src={img}
// // // //                               alt={`Project ${idx + 1}`}
// // // //                               className="rounded-lg w-full h-32 object-cover"
// // // //                             />
// // // //                           )
// // // //                         )}
// // // //                       </div>
// // // //                     </div>
// // // //                   )}
// // // //                 {Array.isArray(selectedProfile.reviews) &&
// // // //                   selectedProfile.reviews.length > 0 && (
// // // //                     <div>
// // // //                       <h3 className="font-semibold text-gray-700 mb-2">
// // // //                         Reviews
// // // //                       </h3>
// // // //                       <div className="space-y-4">
// // // //                         {selectedProfile.reviews.map((review: any) => (
// // // //                           <div
// // // //                             key={review.id}
// // // //                             className="border p-3 rounded-lg bg-gray-50"
// // // //                           >
// // // //                             <div className="flex justify-between text-sm text-[#6D758F]">
// // // //                               <span className="font-medium">{review.name}</span>
// // // //                               <span>{review.date}</span>
// // // //                             </div>
// // // //                             <div className="flex items-center mt-1 mb-2">
// // // //                               {[...Array(5)].map((_, i) => (
// // // //                                 <Star
// // // //                                   key={i}
// // // //                                   className={`h-4 w-4 ${
// // // //                                     i < review.rating
// // // //                                       ? "text-yellow-400"
// // // //                                       : "text-gray-300"
// // // //                                   }`}
// // // //                                 />
// // // //                               ))}
// // // //                             </div>
// // // //                             <p className="text-sm text-gray-700">
// // // //                               {review.comment}
// // // //                             </p>
// // // //                           </div>
// // // //                         ))}
// // // //                       </div>
// // // //                     </div>
// // // //                   )}
// // // //               </div>
// // // //             </div>
// // // //           )}
// // // //           {/* Calendar Modal */}
// // // //           {showCalendarModal && (
// // // //             <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center px-4">
// // // //               <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-lg">
// // // //                 <div className="flex justify-between items-center mb-4">
// // // //                   <h2 className="text-lg font-semibold">Book Appointment</h2>
// // // //                   <button
// // // //                     onClick={closeModal}
// // // //                     className="text-xl font-bold text-gray-500 hover:text-gray-700"
// // // //                   >
// // // //                     ×
// // // //                   </button>
// // // //                 </div>
// // // //                 <div className="flex justify-between items-center mb-4">
// // // //                   <button
// // // //                     onClick={handlePrevMonth}
// // // //                     className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
// // // //                   >
// // // //                     &lt;
// // // //                   </button>
// // // //                   <span className="text-lg font-medium">
// // // //                     {format(currentMonth, "MMMM yyyy")}
// // // //                   </span>
// // // //                   <button
// // // //                     onClick={handleNextMonth}
// // // //                     className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
// // // //                   >
// // // //                     &gt;
// // // //                   </button>
// // // //                 </div>
// // // //                 <div className="grid grid-cols-7 gap-2 text-center mb-4">
// // // //                   {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
// // // //                     (day) => (
// // // //                       <div
// // // //                         key={day}
// // // //                         className="text-sm font-medium text-gray-500"
// // // //                       >
// // // //                         {day}
// // // //                       </div>
// // // //                     )
// // // //                   )}
// // // //                   {daysInMonth.map((day) => (
// // // //                     <button
// // // //                       key={day.toString()}
// // // //                       onClick={() => handleDateSelect(day)}
// // // //                       className={`p-2 rounded-full text-sm ${
// // // //                         selectedDate && isSameDay(day, selectedDate)
// // // //                           ? "bg-[#404040] text-white"
// // // //                           : "hover:bg-gray-200"
// // // //                       } ${
// // // //                         day.getMonth() !== currentMonth.getMonth()
// // // //                           ? "text-gray-300"
// // // //                           : ""
// // // //                       }`}
// // // //                     >
// // // //                       {day.getDate()}
// // // //                     </button>
// // // //                   ))}
// // // //                 </div>
// // // //                 <div className="mb-4">
// // // //                   <h3 className="text-sm font-medium mb-2">Available Time</h3>
// // // //                   <div className="space-y-2">
// // // //                     {timeSlots.map((slot) => (
// // // //                       <button
// // // //                         key={slot}
// // // //                         onClick={() => handleTimeSlotSelect(slot)}
// // // //                         className={`w-full text-left p-2 rounded-md border ${
// // // //                           selectedTimeSlot === slot
// // // //                             ? "bg-[#404040] text-white"
// // // //                             : "border-gray-300 hover:bg-gray-100"
// // // //                         }`}
// // // //                       >
// // // //                         {slot}
// // // //                       </button>
// // // //                     ))}
// // // //                   </div>
// // // //                 </div>
// // // //                 <button
// // // //                   onClick={handleBookingConfirm}
// // // //                   className="w-full bg-[#404040] text-white py-2 rounded-md hover:bg-blue-600"
// // // //                 >
// // // //                   Book Now
// // // //                 </button>
// // // //               </div>
// // // //             </div>
// // // //           )}
// // // //         </main>
// // // //       </div>
// // // //     </>
// // // //   );
// // // // }












// // "use client";

// // import { useState, useMemo, useEffect } from "react";
// // import { Star, Menu, X, Bell, ChevronDown } from "lucide-react";
// // import Image from "next/image";
// // import Cookies from "universal-cookie";
// // import md5 from "crypto-js/md5"; // For Gravatar
// // import {
// //   format,
// //   startOfMonth,
// //   endOfMonth,
// //   eachDayOfInterval,
// //   isSameDay,
// //   addMonths,
// //   subMonths,
// // } from "date-fns"; // For calendar logic

// // // Mock profiles data
// // const mockProfiles = [
// //   {
// //     id: 1,
// //     name: "Paul Volt",
// //     avatar: "https://i.pravatar.cc/150?img=7",
// //     distance: "30 miles away",
// //     price: 30,
// //     rating: 4.9,
// //     jobSuccess: "80%",
// //     description:
// //       "Experienced electrician with over 10 years in residential and commercial wiring, maintenance, and smart home installations.",
// //     skillsExperience:
// //       "Skilled in electrical systems, safety compliance, blueprint reading, and energy-efficient solutions. Proficient in diagnosing and repairing electrical issues efficiently.",
// //     projects: [
// //       "https://i.pravatar.cc/150?img=1",
// //       "https://i.pravatar.cc/150?img=2",
// //       "https://i.pravatar.cc/150?img=3",
// //       "https://i.pravatar.cc/150?img=4",
// //     ],
// //     reviews: [
// //       {
// //         id: 1,
// //         name: "John F.",
// //         date: "Mar 29, 2025",
// //         rating: 5,
// //         comment:
// //           "Paul did a fantastic job rewiring our entire kitchen. Very professional and quick service!",
// //       },
// //       {
// //         id: 2,
// //         name: "Sarah L.",
// //         date: "Feb 20, 2025",
// //         rating: 5,
// //         comment:
// //           "Highly recommend! He explained everything clearly and fixed our panel issue in no time.",
// //       },
// //     ],
// //   },
// //   {
// //     id: 2,
// //     name: "Anna Sparks",
// //     avatar: "https://i.pravatar.cc/150?img=7",
// //     distance: "15 miles away",
// //     price: 25,
// //     rating: 4.8,
// //     jobSuccess: "92%",
// //     description:
// //       "Licensed electrician with a strong focus on eco-friendly solutions and home automation systems.",
// //     skillsExperience:
// //       "Expert in solar installations, LED retrofits, EV charger setups, and smart home devices.",
// //     projects: [
// //       "https://i.pravatar.cc/150?img=1",
// //       "https://i.pravatar.cc/150?img=8",
// //       "https://i.pravatar.cc/150?img=9",
// //       "https://i.pravatar.cc/150?img=10",
// //     ],
// //     reviews: [
// //       {
// //         id: 1,
// //         name: "Carlos M.",
// //         date: "Jan 15, 2025",
// //         rating: 5,
// //         comment: "Anna installed our solar panels perfectly. Very knowledgeable.",
// //       },
// //     ],
// //   },
// //   {
// //     id: 3,
// //     name: "Mike Currents",
// //     avatar: "https://i.pravatar.cc/150?img=7",
// //     distance: "10 miles away",
// //     price: 40,
// //     rating: 5.0,
// //     jobSuccess: "100%",
// //     description:
// //       "Commercial electrician experienced in high-voltage systems and safety-critical environments.",
// //     skillsExperience:
// //       "Specialist in transformer installation, emergency lighting, and circuit protection systems.",
// //     projects: ["https://i.pravatar.cc/150?img=1", "https://i.pravatar.cc/150?img=13"],
// //     reviews: [],
// //   },
// //   {
// //     id: 4,
// //     name: "Lisa Wires",
// //     avatar: "https://i.pravatar.cc/150?img=9",
// //     distance: "8 miles away",
// //     price: 28,
// //     rating: 4.7,
// //     jobSuccess: "85%",
// //     description: "Reliable residential electrician known for clean, timely, and tidy work.",
// //     skillsExperience:
// //       "Great with lighting upgrades, fuse box replacements, and outlet installation.",
// //     projects: [
// //       "https://i.pravatar.cc/150?img=15",
// //       "https://i.pravatar.cc/150?img=1",
// //       "https://i.pravatar.cc/150?img=5",
// //     ],
// //     reviews: [
// //       {
// //         id: 1,
// //         name: "Emily K.",
// //         date: "Dec 10, 2024",
// //         rating: 4.5,
// //         comment: "Lisa was friendly and fast. Clean install.",
// //       },
// //     ],
// //   },
// //   {
// //     id: 5,
// //     name: "Tom Charger",
// //     avatar: "https://i.pravatar.cc/150?img=7",
// //     distance: "22 miles away",
// //     price: 35,
// //     rating: 4.6,
// //     jobSuccess: "75%",
// //     description: "Focused on EV charger installations and energy upgrades for smart homes.",
// //     skillsExperience:
// //       "Capable of installing Level 2 chargers, smart thermostats, and energy meters.",
// //     projects: [],
// //     reviews: [],
// //   },
// //   {
// //     id: 6,
// //     name: "Nina Volt",
// //     avatar: "https://i.pravatar.cc/150?img=7",
// //     distance: "12 miles away",
// //     price: 32,
// //     rating: 4.9,
// //     jobSuccess: "95%",
// //     description:
// //       "Electrical engineer turned electrician delivering precision and neat wiring jobs.",
// //     skillsExperience:
// //       "Strong background in technical schematics, structured wiring, and cable management.",
// //     projects: ["https://i.pravatar.cc/150?img=1"],
// //     reviews: [
// //       {
// //         id: 1,
// //         name: "Mark Z.",
// //         date: "Nov 5, 2024",
// //         rating: 5,
// //         comment: "She solved a long-standing issue others couldn’t fix. Impressive.",
// //       },
// //     ],
// //   },
// //   {
// //     id: 7,
// //     name: "Leo Arc",
// //     avatar: "https://i.pravatar.cc/150?img=7",
// //     distance: "5 miles away",
// //     price: 26,
// //     rating: 4.4,
// //     jobSuccess: "70%",
// //     description:
// //       "Young and passionate, bringing energy and speed to basic electrical services.",
// //     skillsExperience:
// //       "Handles fixture replacements, appliance hookups, and quick diagnostics.",
// //     projects: [],
// //     reviews: [],
// //   },
// // ];

// // const levels = ["Beginner", "Intermediate", "Expert"];
// // const languages = ["English", "Estonian", "Russian"];

// // // Available time slots for the calendar
// // const timeSlots = [
// //   "11:00 am – 12:00 pm",
// //   "12:00 pm – 1:00 pm",
// //   "1:00 pm – 2:00 pm",
// //   "2:00 pm – 3:00 pm",
// //   "3:00 pm – 4:00 pm",
// //   "4:00 pm – 5:00 pm",
// //   "5:00 pm – 6:00 pm",
// // ];

// // export default function ProfessionalProfilePage() {
// //   const cookies = new Cookies();
// //   const [currentUser, setCurrentUser] = useState<any>(null);
// //   const [priceFilter, setPriceFilter] = useState<number[]>([]);
// //   const [durationFilter, setDurationFilter] = useState<number[]>([]);
// //   const [languageFilter, setLanguageFilter] = useState<string[]>([]);
// //   const [levelFilter, setLevelFilter] = useState<string[]>([]);
// //   const [ratingFilter, setRatingFilter] = useState<number | null>(null);
// //   const [selectedProfile, setSelectedProfile] = useState<any>(null);
// //   const [menuOpen, setMenuOpen] = useState(false);

// //   // Calendar modal states
// //   const [showCalendarModal, setShowCalendarModal] = useState(false);
// //   const [showConfirmationModal, setShowConfirmationModal] = useState(false);
// //   const [currentMonth, setCurrentMonth] = useState(new Date(2025, 3, 1)); // Start with April 2025
// //   const [selectedDate, setSelectedDate] = useState<Date | null>(null);
// //   const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);

// //   useEffect(() => {
// //     const metadata = cookies.get("session_metadata");
// //     if (metadata) {
// //       setCurrentUser(metadata);
// //     } else {
// //       setCurrentUser(null);
// //     }
// //   }, []);

// //   const getGravatarUrl = (email: string) => {
// //     const trimmedEmail = email.trim().toLowerCase();
// //     const hash = md5(trimmedEmail).toString();
// //     return `https://www.gravatar.com/avatar/${hash}?s=24&d=mp`;
// //   };

// //   const filteredProfiles = useMemo(() => {
// //     return mockProfiles.filter((profile) => {
// //       return (
// //         (priceFilter.length === 0 || priceFilter.includes(profile.price)) &&
// //         (durationFilter.length === 0 || durationFilter.length === 0) &&
// //         (languageFilter.length === 0 || true) &&
// //         (levelFilter.length === 0) &&
// //         (ratingFilter === null || profile.rating >= ratingFilter)
// //       );
// //     });
// //   }, [priceFilter, durationFilter, languageFilter, levelFilter, ratingFilter]);

// //   const toggle = (value: any, setter: any, multiple = true) => {
// //     setter((prev: any[]) =>
// //       multiple
// //         ? prev.includes(value)
// //           ? prev.filter((v) => v !== value)
// //           : [...prev, value]
// //         : prev === value
// //         ? null
// //         : value
// //     );
// //   };

// //   const closeModal = () => {
// //     setSelectedProfile(null);
// //     setShowCalendarModal(false);
// //     setShowConfirmationModal(false);
// //     setSelectedDate(null);
// //     setSelectedTimeSlot(null);
// //   };

// //   // Calendar logic
// //   const daysInMonth = eachDayOfInterval({
// //     start: startOfMonth(currentMonth),
// //     end: endOfMonth(currentMonth),
// //   });

// //   const handlePrevMonth = () => {
// //     setCurrentMonth(subMonths(currentMonth, 1));
// //   };

// //   const handleNextMonth = () => {
// //     setCurrentMonth(addMonths(currentMonth, 1));
// //   };

// //   const handleDateSelect = (date: Date) => {
// //     setSelectedDate(date);
// //   };

// //   const handleTimeSlotSelect = (slot: string) => {
// //     setSelectedTimeSlot(slot);
// //   };

// //   const handleBookingConfirm = () => {
// //     if (selectedProfile) {
// //       setShowCalendarModal(false);
// //       setShowConfirmationModal(true);
// //     } else {
// //       alert("Please select a professional to book an appointment.");
// //     }
// //   };

// //   return (
// //     <>
// //       <header className="bg-[#f3f5f9] shadow-sm text-[#6D758F]">
// //         <div className="max-w-[1500px] mx-auto px-4 py-4 flex justify-between items-center">
// //           <div className="text-3xl font-bold text-gray-700">
// //             <Image
// //               src="/logo.svg"
// //               width={100}
// //               height={100}
// //               alt="logo"
// //               className="w-auto"
// //             />
// //           </div>
// //           <nav className="hidden md:flex items-center space-x-8 text-[#6D758F] font-medium">
// //             <a href="#" className="hover:text-[#6D758F] transition">
// //               Home
// //             </a>
// //             <a href="#" className="hover:text-[#6D758F] transition">
// //               About
// //             </a>
// //             <a href="#" className="hover:text-[#6D758F] transition">
// //               Services
// //             </a>
// //           </nav>
// //           <div className="flex items-center space-x-4">
// //             <div className="hidden md:flex items-center space-x-2 bg-white rounded-full px-3 py-1 shadow-sm">
// //               {currentUser ? (
// //                 <>
// //                   <img
// //                     src={getGravatarUrl(currentUser.email)}
// //                     alt="Profile"
// //                     className="rounded-full"
// //                   />
// //                   <span className="text-sm font-medium text-gray-700">
// //                     {currentUser.email || currentUser.email.split("@")[0]}
// //                   </span>
// //                 </>
// //               ) : (
// //                 <>
// //                   <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
// //                     <span role="img" aria-label="user">
// //                       👤
// //                     </span>
// //                   </div>
// //                   <span className="text-sm font-medium text-gray-700">
// //                     Guest
// //                   </span>
// //                 </>
// //               )}
// //               <ChevronDown size={14} className="text-gray-500" />
// //             </div>
// //             <div className="bg-white p-2 rounded-full shadow-sm hidden md:block">
// //               <Bell className="text-blue-600 relative" size={18} />
// //               <span className="absolute top-[10px] right-[90px] w-2 h-2 bg-red-500 rounded-full"></span>
// //             </div>
// //             <button
// //               onClick={() => setMenuOpen(!menuOpen)}
// //               className="bg-gray-200 p-2 rounded-full md:hidden"
// //             >
// //               {menuOpen ? <X size={20} /> : <Menu size={20} />}
// //             </button>
// //           </div>
// //         </div>
// //         {menuOpen && (
// //           <div className="md:hidden px-4 pb-4">
// //             <nav className="flex flex-col space-y-2 text-gray-700">
// //               <a href="#" className="hover:text-gray-900">
// //                 Home
// //               </a>
// //               <a href="#" className="hover:text-gray-900">
// //                 About
// //               </a>
// //               <a href="#" className="hover:text-gray-900">
// //                 Services
// //               </a>
// //             </nav>
// //           </div>
// //         )}
// //       </header>
// //       <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 text-[#6D758F]">
// //         <aside className="w-full md:w-72 border-r p-6 bg-white">
// //           <h2 className="text-lg font-bold mb-4">Filter</h2>
// //           <div className="mb-4">
// //             <h3 className="font-semibold mb-2">Price</h3>
// //             {[20, 25, 30, 35, 40].map((price) => (
// //               <label key={price} className="flex items-center mb-1">
// //                 <input
// //                   type="checkbox"
// //                   checked={priceFilter.includes(price)}
// //                   onChange={() => toggle(price, setPriceFilter)}
// //                   className="mr-2"
// //                 />
// //                 €{price}
// //               </label>
// //             ))}
// //           </div>
// //           <div className="mb-4">
// //             <h3 className="font-semibold mb-2">Duration</h3>
// //             {[1, 6, 17, 72].map((d) => (
// //               <label key={d} className="flex items-center mb-1">
// //                 <input
// //                   type="checkbox"
// //                   checked={durationFilter.includes(d)}
// //                   onChange={() => toggle(d, setDurationFilter)}
// //                   className="mr-2"
// //                 />
// //                 {d}+ Hours
// //               </label>
// //             ))}
// //           </div>
// //           <div className="mb-4">
// //             <h3 className="font-semibold mb-2">Language</h3>
// //             {languages.map((lang) => (
// //               <label key={lang} className="flex items-center mb-1">
// //                 <input
// //                   type="checkbox"
// //                   checked={languageFilter.includes(lang)}
// //                   onChange={() => toggle(lang, setLanguageFilter)}
// //                   className="mr-2"
// //                 />
// //                 {lang}
// //               </label>
// //             ))}
// //           </div>
// //           <div className="mb-4">
// //             <h3 className="font-semibold mb-2">Service level</h3>
// //             {levels.map((lvl) => (
// //               <label key={lvl} className="flex items-center mb-1">
// //                 <input
// //                   type="checkbox"
// //                   checked={levelFilter.includes(lvl)}
// //                   onChange={() => toggle(lvl, setLevelFilter)}
// //                   className="mr-2"
// //                 />
// //                 {lvl}
// //               </label>
// //             ))}
// //           </div>
// //           <div className="mb-4">
// //             <h3 className="font-semibold mb-2">Review Rating</h3>
// //             {[5, 4, 3].map((r) => (
// //               <label key={r} className="flex items-center mb-1">
// //                 <input
// //                   type="radio"
// //                   name="rating"
// //                   checked={ratingFilter === r}
// //                   onChange={() => setRatingFilter(r)}
// //                   className="mr-2"
// //                 />
// //                 {[...Array(5)].map((_, i) => (
// //                   <Star
// //                     key={i}
// //                     className={`h-4 w-4 ${
// //                       i < r ? "text-purple-500" : "text-gray-300"
// //                     }`}
// //                   />
// //                 ))}
// //               </label>
// //             ))}
// //           </div>
// //         </aside>
// //         <main className="flex-1 p-6">
// //           <div className="flex justify-between items-center mb-6">
// //             <h2 className="text-xl font-bold">Professional picks for you</h2>
// //             <div>
// //               <label className="mr-2 font-medium">Sorted by:</label>
// //               <select className="border rounded px-3 py-1 text-sm">
// //                 <option>Recommended</option>
// //                 <option>Price</option>
// //                 <option>Rating</option>
// //               </select>
// //             </div>
// //           </div>
// //           {filteredProfiles.map((profile) => (
// //             <div
// //               key={profile.id}
// //               className="border rounded-lg p-4 mb-4 shadow-sm"
// //             >
// //               <div className="flex items-center justify-between md:flex-row flex-col">
// //                 <div className="flex items-start gap-4">
// //                   <img
// //                     src={profile.avatar}
// //                     alt={profile.name}
// //                     className="w-12 h-12 rounded-full object-cover"
// //                   />
// //                   <div>
// //                     <h3 className="font-semibold text-lg">{profile.name}</h3>
// //                     <div className="text-sm text-[#6D758F]">
// //                       {profile.distance}
// //                     </div>
// //                     <div className="flex items-center text-sm text-[#6D758F]">
// //                       {[...Array(5)].map((_, i) => (
// //                         <Star
// //                           key={i}
// //                           className={`h-4 w-4 ${
// //                             i < Math.round(profile.rating)
// //                               ? "text-yellow-400"
// //                               : "text-gray-300"
// //                           }`}
// //                         />
// //                       ))}
// //                       <span className="ml-2">
// //                         {profile.jobSuccess} Job Success
// //                       </span>
// //                     </div>
// //                     <div className="text-sm text-[#6D758F]">
// //                       {profile.description}
// //                     </div>
// //                   </div>
// //                 </div>
// //                 <div className="flex gap-4">
// //                   <button
// //                     onClick={() => {
// //                       setSelectedProfile(profile);
// //                       setShowCalendarModal(true);
// //                     }}
// //                     className="bg-[#5188FF] text-white px-4 py-2 rounded-md text-sm"
// //                   >
// //                     Book Now
// //                   </button>
// //                   <button
// //                     onClick={() => setSelectedProfile(profile)}
// //                     className="border-[#5188FF] border-[1px] text-[#5188FF] px-4 py-2 rounded-md text-sm"
// //                   >
// //                     View Profile
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //           {/* Profile Modal */}
// //           {selectedProfile && !showCalendarModal && !showConfirmationModal && (
// //             <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center px-4">
// //               <div className="bg-white rounded-2xl w-full max-w-4xl p-6 overflow-y-auto max-h-[90vh] relative shadow-lg">
// //                 <button
// //                   onClick={closeModal}
// //                   className="absolute top-4 right-6 text-xl font-bold text-gray-500 hover:text-gray-700"
// //                 >
// //                   ×
// //                 </button>
// //                 <div className="flex items-center justify-between mb-4">
// //                   <div className="flex items-center gap-4">
// //                     <img
// //                       src={selectedProfile.avatar}
// //                       alt="avatar"
// //                       className="w-14 h-14 rounded-full"
// //                     />
// //                     <div>
// //                       <h2 className="text-xl font-semibold text-[#6D758F]">
// //                         {selectedProfile.name}
// //                       </h2>
// //                       <div className="text-sm text-gray-500 flex gap-2 items-center">
// //                         <span>📍 {selectedProfile.distance}</span>
// //                         <span>⭐ {selectedProfile.rating}</span>
// //                         <span>{selectedProfile.jobSuccess} Job Success</span>
// //                       </div>
// //                     </div>
// //                   </div>
// //                   <div className="text-lg font-semibold text-blue-600">
// //                     €{selectedProfile.price}/hr
// //                   </div>
// //                 </div>
// //                 <div className="flex gap-4 my-5">
// //                   <p className="flex items-center justify-center border-[#5188FF] border-[1px] text-[#5188FF] lg:w-[170px] rounded-md px-3">
// //                     <svg
// //                       width="22"
// //                       height="21"
// //                       viewBox="0 0 22 21"
// //                       fill="none"
// //                       xmlns="http://www.w3.org/2000/svg"
// //                     >
// //                       <path
// //                         d="M11 9.5V9M15 9.5V9M7 9.5V9M2.464 15.328C1 14.157 1 13.271 1 9.5C1 5.729 1 3.843 2.464 2.672C3.93 1.5 6.286 1.5 11 1.5C15.714 1.5 18.071 1.5 19.535 2.672C20.999 3.844 21 5.729 21 9.5C21 13.271 21 14.157 19.535 15.328C18.072 16.5 15.714 16.5 11 16.5C8.49 16.5 7.2 18.238 5 19.5V16.288C3.906 16.125 3.101 15.838 2.464 15.328Z"
// //                         stroke="#5188FF"
// //                         strokeWidth="1.5"
// //                         strokeLinecap="round"
// //                         strokeLinejoin="round"
// //                       />
// //                     </svg>
// //                     <button
// //                       onClick={() => setShowCalendarModal(true)}
// //                       className="px-4 py-2 rounded-md text-sm"
// //                     >
// //                       Book Now
// //                     </button>
// //                   </p>
// //                   <button className="bg-[#5188FF] px-3 lg:w-[170px] text-white px-4 py-2 rounded-md text-sm">
// //                     View Profile
// //                   </button>
// //                 </div>
// //                 <div className="mb-6">
// //                   <h3 className="font-semibold text-gray-700 mb-1">
// //                     Description
// //                   </h3>
// //                   <p className="text-sm text-[#6D758F]">
// //                     {selectedProfile.description}
// //                   </p>
// //                 </div>
// //                 <div className="mb-6">
// //                   <h3 className="font-semibold text-gray-700 mb-1">
// //                     Skills & Experience
// //                   </h3>
// //                   <p className="text-sm text-[#6D758F]">
// //                     {selectedProfile.skillsExperience}
// //                   </p>
// //                 </div>
// //                 {Array.isArray(selectedProfile.projects) &&
// //                   selectedProfile.projects.length > 0 && (
// //                     <div className="mb-6">
// //                       <h3 className="font-semibold text-gray-700 mb-2">
// //                         Projects
// //                       </h3>
// //                       <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
// //                         {selectedProfile.projects.map(
// //                           (img: string, idx: number) => (
// //                             <img
// //                               key={idx}
// //                               src={img}
// //                               alt={`Project ${idx + 1}`}
// //                               className="rounded-lg w-full h-32 object-cover"
// //                             />
// //                           )
// //                         )}
// //                       </div>
// //                     </div>
// //                   )}
// //                 {Array.isArray(selectedProfile.reviews) &&
// //                   selectedProfile.reviews.length > 0 && (
// //                     <div>
// //                       <h3 className="font-semibold text-gray-700 mb-2">
// //                         Reviews
// //                       </h3>
// //                       <div className="space-y-4">
// //                         {selectedProfile.reviews.map((review: any) => (
// //                           <div
// //                             key={review.id}
// //                             className="border p-3 rounded-lg bg-gray-50"
// //                           >
// //                             <div className="flex justify-between text-sm text-[#6D758F]">
// //                               <span className="font-medium">{review.name}</span>
// //                               <span>{review.date}</span>
// //                             </div>
// //                             <div className="flex items-center mt-1 mb-2">
// //                               {[...Array(5)].map((_, i) => (
// //                                 <Star
// //                                   key={i}
// //                                   className={`h-4 w-4 ${
// //                                     i < review.rating
// //                                       ? "text-yellow-400"
// //                                       : "text-gray-300"
// //                                   }`}
// //                                 />
// //                               ))}
// //                             </div>
// //                             <p className="text-sm text-gray-700">
// //                               {review.comment}
// //                             </p>
// //                           </div>
// //                         ))}
// //                       </div>
// //                     </div>
// //                   )}
// //               </div>
// //             </div>
// //           )}
// //           {/* Calendar Modal */}
// //           {showCalendarModal && (
// //             <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center px-4">
// //               <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-lg">
// //                 <div className="flex justify-between items-center mb-4">
// //                   <h2 className="text-lg font-semibold">Book Appointment</h2>
// //                   <button
// //                     onClick={closeModal}
// //                     className="text-xl font-bold text-gray-500 hover:text-gray-700"
// //                   >
// //                     ×
// //                   </button>
// //                 </div>
// //                 <div className="flex justify-between items-center mb-4">
// //                   <button
// //                     onClick={handlePrevMonth}
// //                     className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
// //                   >
// //                     &gt;
// //                   </button>
// //                   <span className="text-lg font-medium">
// //                     {format(currentMonth, "MMMM yyyy")}
// //                   </span>
// //                   <button
// //                     onClick={handleNextMonth}
// //                     className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
// //                   >
// //                     &gt;
// //                   </button>
// //                 </div>
// //                 <div className="grid grid-cols-7 gap-2 text-center mb-4">
// //                   {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
// //                     (day) => (
// //                       <div
// //                         key={day}
// //                         className="text-sm font-medium text-gray-500"
// //                       >
// //                         {day}
// //                       </div>
// //                     )
// //                   )}
// //                   {daysInMonth.map((day) => (
// //                     <button
// //                       key={day.toString()}
// //                       onClick={() => handleDateSelect(day)}
// //                       className={`p-2 rounded-full text-sm ${
// //                         selectedDate && isSameDay(day, selectedDate)
// //                           ? "bg-[#5188FF] text-white"
// //                           : "hover:bg-gray-200"
// //                       } ${
// //                         day.getMonth() !== currentMonth.getMonth()
// //                           ? "text-gray-300"
// //                           : ""
// //                       }`}
// //                     >
// //                       {day.getDate()}
// //                     </button>
// //                   ))}
// //                 </div>
// //                 <div className="mb-4">
// //                   <h3 className="text-sm font-medium mb-2">Available Time</h3>
// //                   <div className="space-y-2">
// //                     {timeSlots.map((slot) => (
// //                       <button
// //                         key={slot}
// //                         onClick={() => handleTimeSlotSelect(slot)}
// //                         className={`w-full text-left p-2 rounded-md border ${
// //                           selectedTimeSlot === slot
// //                             ? "bg-[#5188FF] text-white"
// //                             : "border-gray-300 hover:bg-gray-100"
// //                         }`}
// //                       >
// //                         {slot}
// //                       </button>
// //                     ))}
// //                   </div>
// //                 </div>
// //                 <button
// //                   onClick={handleBookingConfirm}
// //                   className="w-full bg-[#5188FF] text-white py-2 rounded-md hover:bg-blue-600"
// //                 >
// //                   Book Now
// //                 </button>
// //               </div>
// //             </div>
// //           )}
// //           {/* Confirmation Modal */}
// //           {showConfirmationModal && (
// //             <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center px-4">
// //               <div className="bg-white rounded-2xl w-full max-w-sm p-6 shadow-lg text-center">
// //                 <h2 className="text-lg font-semibold mb-4">
// //                   Booking Submitted
// //                 </h2>
// //                 <p className="text-sm text-gray-700 mb-6">
// //                   Hey, we would get back to you.
// //                 </p>
// //                 <button
// //                   onClick={closeModal}
// //                   className="w-full bg-[#5188FF] text-white py-2 rounded-md hover:bg-blue-600"
// //                 >
// //                   OK
// //                 </button>
// //               </div>
// //             </div>
// //           )}
// //         </main>
// //       </div>
// //     </>
// //   );
// // }

// "use client";

// import { useState, useMemo, useEffect } from "react";
// import { Star, Menu, X, Bell, ChevronDown } from "lucide-react";
// import Image from "next/image";
// import Cookies from "universal-cookie";
// import md5 from "crypto-js/md5"; // For Gravatar
// import {
//   format,
//   startOfMonth,
//   endOfMonth,
//   eachDayOfInterval,
//   isSameDay,
//   addMonths,
//   subMonths,
//   parse,
// } from "date-fns"; // For calendar logic

// // Mock profiles data with availableDates
// const mockProfiles = [
//   {
//     id: 1,
//     name: "Paul Volt",
//     avatar: "https://i.pravatar.cc/150?img=7",
//     distance: "30 miles away",
//     price: 30,
//     rating: 4.9,
//     jobSuccess: "80%",
//     description:
//       "Experienced electrician with over 10 years in residential and commercial wiring, maintenance, and smart home installations.",
//     skillsExperience:
//       "Skilled in electrical systems, safety compliance, blueprint reading, and energy-efficient solutions. Proficient in diagnosing and repairing electrical issues efficiently.",
//     projects: [
//       "https://i.pravatar.cc/150?img=1",
//       "https://i.pravatar.cc/150?img=2",
//       "https://i.pravatar.cc/150?img=3",
//       "https://i.pravatar.cc/150?img=4",
//     ],
//     reviews: [
//       {
//         id: 1,
//         name: "John F.",
//         date: "Mar 29, 2025",
//         rating: 5,
//         comment:
//           "Paul did a fantastic job rewiring our entire kitchen. Very professional and quick service!",
//       },
//       {
//         id: 2,
//         name: "Sarah L.",
//         date: "Feb 20, 2025",
//         rating: 5,
//         comment:
//           "Highly recommend! He explained everything clearly and fixed our panel issue in no time.",
//       },
//     ],
//     availableDates: ["2025-04-10", "2025-04-15", "2025-04-20"], // Example available dates from backend
//   },
//   {
//     id: 2,
//     name: "Anna Sparks",
//     avatar: "https://i.pravatar.cc/150?img=7",
//     distance: "15 miles away",
//     price: 25,
//     rating: 4.8,
//     jobSuccess: "92%",
//     description:
//       "Licensed electrician with a strong focus on eco-friendly solutions and home automation systems.",
//     skillsExperience:
//       "Expert in solar installations, LED retrofits, EV charger setups, and smart home devices.",
//     projects: [
//       "https://i.pravatar.cc/150?img=1",
//       "https://i.pravatar.cc/150?img=8",
//       "https://i.pravatar.cc/150?img=9",
//       "https://i.pravatar.cc/150?img=10",
//     ],
//     reviews: [
//       {
//         id: 1,
//         name: "Carlos M.",
//         date: "Jan 15, 2025",
//         rating: 5,
//         comment:
//           "Anna installed our solar panels perfectly. Very knowledgeable.",
//       },
//     ],
//     availableDates: ["2025-04-12", "2025-04-18", "2025-04-25"], // Example available dates
//   },
//   // Add availableDates to other profiles as well
//   {
//     id: 3,
//     name: "Mike Currents",
//     avatar: "https://i.pravatar.cc/150?img=7",
//     distance: "10 miles away",
//     price: 40,
//     rating: 5.0,
//     jobSuccess: "100%",
//     description:
//       "Commercial electrician experienced in high-voltage systems and safety-critical environments.",
//     skillsExperience:
//       "Specialist in transformer installation, emergency lighting, and circuit protection systems.",
//     projects: [
//       "https://i.pravatar.cc/150?img=1",
//       "https://i.pravatar.cc/150?img=13",
//     ],
//     reviews: [],
//     availableDates: ["2025-04-11", "2025-04-16"],
//   },
//   {
//     id: 4,
//     name: "Lisa Wires",
//     avatar: "https://i.pravatar.cc/150?img=9",
//     distance: "8 miles away",
//     price: 28,
//     rating: 4.7,
//     jobSuccess: "85%",
//     description:
//       "Reliable residential electrician known for clean, timely, and tidy work.",
//     skillsExperience:
//       "Great with lighting upgrades, fuse box replacements, and outlet installation.",
//     projects: [
//       "https://i.pravatar.cc/150?img=15",
//       "https://i.pravatar.cc/150?img=1",
//       "https://i.pravatar.cc/150?img=5",
//     ],
//     reviews: [
//       {
//         id: 1,
//         name: "Emily K.",
//         date: "Dec 10, 2024",
//         rating: 4.5,
//         comment: "Lisa was friendly and fast. Clean install.",
//       },
//     ],
//     availableDates: ["2025-04-13", "2025-04-19"],
//   },
//   {
//     id: 5,
//     name: "Tom Charger",
//     avatar: "https://i.pravatar.cc/150?img=7",
//     distance: "22 miles away",
//     price: 35,
//     rating: 4.6,
//     jobSuccess: "75%",
//     description:
//       "Focused on EV charger installations and energy upgrades for smart homes.",
//     skillsExperience:
//       "Capable of installing Level 2 chargers, smart thermostats, and energy meters.",
//     projects: [],
//     reviews: [],
//     availableDates: ["2025-04-14", "2025-04-21"],
//   },
//   {
//     id: 6,
//     name: "Nina Volt",
//     avatar: "https://i.pravatar.cc/150?img=7",
//     distance: "12 miles away",
//     price: 32,
//     rating: 4.9,
//     jobSuccess: "95%",
//     description:
//       "Electrical engineer turned electrician delivering precision and neat wiring jobs.",
//     skillsExperience:
//       "Strong background in technical schematics, structured wiring, and cable management.",
//     projects: ["https://i.pravatar.cc/150?img=1"],
//     reviews: [
//       {
//         id: 1,
//         name: "Mark Z.",
//         date: "Nov 5, 2024",
//         rating: 5,
//         comment:
//           "She solved a long-standing issue others couldn’t fix. Impressive.",
//       },
//     ],
//     availableDates: ["2025-04-17", "2025-04-22"],
//   },
//   {
//     id: 7,
//     name: "Leo Arc",
//     avatar: "https://i.pravatar.cc/150?img=7",
//     distance: "5 miles away",
//     price: 26,
//     rating: 4.4,
//     jobSuccess: "70%",
//     description:
//       "Young and passionate, bringing energy and speed to basic electrical services.",
//     skillsExperience:
//       "Handles fixture replacements, appliance hookups, and quick diagnostics.",
//     projects: [],
//     reviews: [],
//     availableDates: ["2025-04-23", "2025-04-28"],
//   },
// ];

// const levels = ["Beginner", "Intermediate", "Expert"];
// const languages = ["English", "Estonian", "Russian"];

// // Available time slots for the calendar
// const timeSlots = [
//   "11:00 am – 12:00 pm",
//   "12:00 pm – 1:00 pm",
//   "1:00 pm – 2:00 pm",
//   "2:00 pm – 3:00 pm",
//   "3:00 pm – 4:00 pm",
//   "4:00 pm – 5:00 pm",
//   "5:00 pm – 6:00 pm",
// ];

// export default function ProfessionalProfilePage() {
//   const cookies = new Cookies();
//   const [currentUser, setCurrentUser] = useState<any>(null);
//   const [priceFilter, setPriceFilter] = useState<number[]>([]);
//   const [durationFilter, setDurationFilter] = useState<number[]>([]);
//   const [languageFilter, setLanguageFilter] = useState<string[]>([]);
//   const [levelFilter, setLevelFilter] = useState<string[]>([]);
//   const [ratingFilter, setRatingFilter] = useState<number | null>(null);
//   const [selectedProfile, setSelectedProfile] = useState<any>(null);
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Calendar modal states
//   const [showCalendarModal, setShowCalendarModal] = useState(false);
//   const [showConfirmationModal, setShowConfirmationModal] = useState(false);
//   const [currentMonth, setCurrentMonth] = useState(new Date(2025, 3, 1)); // Start with April 2025
//   const [selectedDate, setSelectedDate] = useState<Date | null>(null);
//   const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);

//   useEffect(() => {
//     const metadata = cookies.get("session_metadata");
//     if (metadata) {
//       setCurrentUser(metadata);
//     } else {
//       setCurrentUser(null);
//     }
//   }, []);

//   const getGravatarUrl = (email: string) => {
//     const trimmedEmail = email.trim().toLowerCase();
//     const hash = md5(trimmedEmail).toString();
//     return `https://www.gravatar.com/avatar/${hash}?s=24&d=mp`;
//   };

//   const filteredProfiles = useMemo(() => {
//     return mockProfiles.filter((profile) => {
//       return (
//         (priceFilter.length === 0 || priceFilter.includes(profile.price)) &&
//         (durationFilter.length === 0 || durationFilter.length === 0) &&
//         (languageFilter.length === 0 || true) &&
//         levelFilter.length === 0 &&
//         (ratingFilter === null || profile.rating >= ratingFilter)
//       );
//     });
//   }, [priceFilter, durationFilter, languageFilter, levelFilter, ratingFilter]);

//   const toggle = (value: any, setter: any, multiple = true) => {
//     setter((prev: any[]) =>
//       multiple
//         ? prev.includes(value)
//           ? prev.filter((v) => v !== value)
//           : [...prev, value]
//         : prev === value
//         ? null
//         : value
//     );
//   };

//   const closeModal = () => {
//     setSelectedProfile(null);
//     setShowCalendarModal(false);
//     setShowConfirmationModal(false);
//     setSelectedDate(null);
//     setSelectedTimeSlot(null);
//   };

//   // Calendar logic
//   const daysInMonth = eachDayOfInterval({
//     start: startOfMonth(currentMonth),
//     end: endOfMonth(currentMonth),
//   });

//   const handlePrevMonth = () => {
//     setCurrentMonth(subMonths(currentMonth, 1));
//   };

//   const handleNextMonth = () => {
//     setCurrentMonth(addMonths(currentMonth, 1));
//   };

//   const isDateAvailable = (date: Date) => {
//     if (!selectedProfile || !selectedProfile.availableDates) return false;
//     const formattedDate = format(date, "yyyy-MM-dd");
//     return selectedProfile.availableDates.includes(formattedDate);
//   };

//   const handleDateSelect = (date: Date) => {
//     if (isDateAvailable(date)) {
//       setSelectedDate(date);
//     }
//   };

//   const handleTimeSlotSelect = (slot: string) => {
//     setSelectedTimeSlot(slot);
//   };

//   const handleBookingConfirm = () => {
//     if (selectedDate && selectedTimeSlot && selectedProfile) {
//       setShowCalendarModal(false);
//       setShowConfirmationModal(true);
//     } else {
//       alert("Please select a date and time slot to confirm your booking.");
//     }
//   };

//   return (
//     <>
//       <header className="bg-[#f3f5f9] shadow-sm text-[#6D758F]">
//         <div className="max-w-[1500px] mx-auto px-4 py-4 flex justify-between items-center">
//           <div className="text-3xl font-bold text-gray-700">
//             <Image
//               src="/logo.svg"
//               width={100}
//               height={100}
//               alt="logo"
//               className="w-auto"
//             />
//           </div>
//           <nav className="hidden md:flex items-center space-x-8 text-[#6D758F] font-medium">
//             <a href="#" className="hover:text-[#6D758F] transition">
//               Home
//             </a>
//             <a href="#" className="hover:text-[#6D758F] transition">
//               About
//             </a>
//             <a href="#" className="hover:text-[#6D758F] transition">
//               Services
//             </a>
//           </nav>
//           <div className="flex items-center space-x-4">
//             <div className="hidden md:flex items-center space-x-2 bg-white rounded-full px-3 py-1 shadow-sm">
//               {currentUser ? (
//                 <>
//                   <img
//                     src={getGravatarUrl(currentUser.email)}
//                     alt="Profile"
//                     className="rounded-full"
//                   />
//                   <span className="text-sm font-medium text-gray-700">
//                     {currentUser.email || currentUser.email.split("@")[0]}
//                   </span>
//                 </>
//               ) : (
//                 <>
//                   <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
//                     <span role="img" aria-label="user">
//                       👤
//                     </span>
//                   </div>
//                   <span className="text-sm font-medium text-gray-700">
//                     Guest
//                   </span>
//                 </>
//               )}
//               <ChevronDown size={14} className="text-gray-500" />
//             </div>
//             <div className="bg-white p-2 rounded-full shadow-sm hidden md:block">
//               <Bell className="text-blue-600 relative" size={18} />
//               <span className="absolute top-[10px] right-[90px] w-2 h-2 bg-red-500 rounded-full"></span>
//             </div>
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="bg-gray-200 p-2 rounded-full md:hidden"
//             >
//               {menuOpen ? <X size={20} /> : <Menu size={20} />}
//             </button>
//           </div>
//         </div>
//         {menuOpen && (
//           <div className="md:hidden px-4 pb-4">
//             <nav className="flex flex-col space-y-2 text-gray-700">
//               <a href="#" className="hover:text-gray-900">
//                 Home
//               </a>
//               <a href="#" className="hover:text-gray-900">
//                 About
//               </a>
//               <a href="#" className="hover:text-gray-900">
//                 Services
//               </a>
//             </nav>
//           </div>
//         )}
//       </header>
//       <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 text-[#6D758F]">
//         <aside className="w-full md:w-72 border-r p-6 bg-white">
//           <h2 className="text-lg font-bold mb-4">Filter</h2>
//           <div className="mb-4">
//             <h3 className="font-semibold mb-2">Price</h3>
//             {[20, 25, 30, 35, 40].map((price) => (
//               <label key={price} className="flex items-center mb-1">
//                 <input
//                   type="checkbox"
//                   checked={priceFilter.includes(price)}
//                   onChange={() => toggle(price, setPriceFilter)}
//                   className="mr-2"
//                 />
//                 €{price}
//               </label>
//             ))}
//           </div>
//           <div className="mb-4">
//             <h3 className="font-semibold mb-2">Duration</h3>
//             {[1, 6, 17, 72].map((d) => (
//               <label key={d} className="flex items-center mb-1">
//                 <input
//                   type="checkbox"
//                   checked={durationFilter.includes(d)}
//                   onChange={() => toggle(d, setDurationFilter)}
//                   className="mr-2"
//                 />
//                 {d}+ Hours
//               </label>
//             ))}
//           </div>
//           <div className="mb-4">
//             <h3 className="font-semibold mb-2">Language</h3>
//             {languages.map((lang) => (
//               <label key={lang} className="flex items-center mb-1">
//                 <input
//                   type="checkbox"
//                   checked={languageFilter.includes(lang)}
//                   onChange={() => toggle(lang, setLanguageFilter)}
//                   className="mr-2"
//                 />
//                 {lang}
//               </label>
//             ))}
//           </div>
//           <div className="mb-4">
//             <h3 className="font-semibold mb-2">Service level</h3>
//             {levels.map((lvl) => (
//               <label key={lvl} className="flex items-center mb-1">
//                 <input
//                   type="checkbox"
//                   checked={levelFilter.includes(lvl)}
//                   onChange={() => toggle(lvl, setLevelFilter)}
//                   className="mr-2"
//                 />
//                 {lvl}
//               </label>
//             ))}
//           </div>
//           <div className="mb-4">
//             <h3 className="font-semibold mb-2">Review Rating</h3>
//             {[5, 4, 3].map((r) => (
//               <label key={r} className="flex items-center mb-1">
//                 <input
//                   type="radio"
//                   name="rating"
//                   checked={ratingFilter === r}
//                   onChange={() => setRatingFilter(r)}
//                   className="mr-2"
//                 />
//                 {[...Array(5)].map((_, i) => (
//                   <Star
//                     key={i}
//                     className={`h-4 w-4 ${
//                       i < r ? "text-purple-500" : "text-gray-300"
//                     }`}
//                   />
//                 ))}
//               </label>
//             ))}
//           </div>
//         </aside>
//         <main className="flex-1 p-6">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-xl font-bold">Professional picks for you</h2>
//             <div>
//               <label className="mr-2 font-medium">Sorted by:</label>
//               <select className="border rounded px-3 py-1 text-sm">
//                 <option>Recommended</option>
//                 <option>Price</option>
//                 <option>Rating</option>
//               </select>
//             </div>
//           </div>
//           {filteredProfiles.map((profile) => (
//             <div
//               key={profile.id}
//               className="border rounded-lg p-4 mb-4 shadow-sm"
//             >
//               <div className="flex items-center justify-between md:flex-row flex-col">
//                 <div className="flex items-start gap-4">
//                   <img
//                     src={profile.avatar}
//                     alt={profile.name}
//                     className="w-12 h-12 rounded-full object-cover"
//                   />
//                   <div>
//                     <h3 className="font-semibold text-lg">{profile.name}</h3>
//                     <div className="text-sm text-[#6D758F]">
//                       {profile.distance}
//                     </div>
//                     <div className="flex items-center text-sm text-[#6D758F]">
//                       {[...Array(5)].map((_, i) => (
//                         <Star
//                           key={i}
//                           className={`h-4 w-4 ${
//                             i < Math.round(profile.rating)
//                               ? "text-yellow-400"
//                               : "text-gray-300"
//                           }`}
//                         />
//                       ))}
//                       <span className="ml-2">
//                         {profile.jobSuccess} Job Success
//                       </span>
//                     </div>
//                     <div className="text-sm text-[#6D758F]">
//                       {profile.description}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex gap-4">
//                   <button
//                     onClick={() => {
//                       setSelectedProfile(profile);
//                       setShowCalendarModal(true);
//                     }}
//                     className="bg-[#5188FF] text-white px-4 py-2 rounded-md text-sm"
//                   >
//                     Book Now
//                   </button>
//                   <button
//                     onClick={() => setSelectedProfile(profile)}
//                     className="border-[#5188FF] border-[1px] text-[#5188FF] px-4 py-2 rounded-md text-sm"
//                   >
//                     View Profile
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//           {/* Profile Modal */}
//           {selectedProfile && !showCalendarModal && !showConfirmationModal && (
//             <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center px-4">
//               <div className="bg-white rounded-2xl w-full max-w-4xl p-6 overflow-y-auto max-h-[90vh] relative shadow-lg">
//                 <button
//                   onClick={closeModal}
//                   className="absolute top-4 right-6 text-xl font-bold text-gray-500 hover:text-gray-700"
//                 >
//                   ×
//                 </button>
//                 <div className="flex items-center justify-between mb-4">
//                   <div className="flex items-center gap-4">
//                     <img
//                       src={selectedProfile.avatar}
//                       alt="avatar"
//                       className="w-14 h-14 rounded-full"
//                     />
//                     <div>
//                       <h2 className="text-xl font-semibold text-[#6D758F]">
//                         {selectedProfile.name}
//                       </h2>
//                       <div className="text-sm text-gray-500 flex gap-2 items-center">
//                         <span>📍 {selectedProfile.distance}</span>
//                         <span>⭐ {selectedProfile.rating}</span>
//                         <span>{selectedProfile.jobSuccess} Job Success</span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="text-lg font-semibold text-blue-600">
//                     €{selectedProfile.price}/hr
//                   </div>
//                 </div>
//                 <div className="flex gap-4 my-5">
//                   <p className="flex items-center justify-center border-[#5188FF] border-[1px] text-[#5188FF] lg:w-[170px] rounded-md px-3">
//                     <svg
//                       width="22"
//                       height="21"
//                       viewBox="0 0 22 21"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M11 9.5V9M15 9.5V9M7 9.5V9M2.464 15.328C1 14.157 1 13.271 1 9.5C1 5.729 1 3.843 2.464 2.672C3.93 1.5 6.286 1.5 11 1.5C15.714 1.5 18.071 1.5 19.535 2.672C20.999 3.844 21 5.729 21 9.5C21 13.271 21 14.157 19.535 15.328C18.072 16.5 15.714 16.5 11 16.5C8.49 16.5 7.2 18.238 5 19.5V16.288C3.906 16.125 3.101 15.838 2.464 15.328Z"
//                         stroke="#5188FF"
//                         strokeWidth="1.5"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                     <button
//                       onClick={() => setShowCalendarModal(true)}
//                       className="px-4 py-2 rounded-md text-sm"
//                     >
//                       Book Now
//                     </button>
//                   </p>
//                   <button className="bg-[#5188FF] px-3 lg:w-[170px] text-white px-4 py-2 rounded-md text-sm">
//                     View Profile
//                   </button>
//                 </div>
//                 <div className="mb-6">
//                   <h3 className="font-semibold text-gray-700 mb-1">
//                     Description
//                   </h3>
//                   <p className="text-sm text-[#6D758F]">
//                     {selectedProfile.description}
//                   </p>
//                 </div>
//                 <div className="mb-6">
//                   <h3 className="font-semibold text-gray-700 mb-1">
//                     Skills & Experience
//                   </h3>
//                   <p className="text-sm text-[#6D758F]">
//                     {selectedProfile.skillsExperience}
//                   </p>
//                 </div>
//                 {Array.isArray(selectedProfile.projects) &&
//                   selectedProfile.projects.length > 0 && (
//                     <div className="mb-6">
//                       <h3 className="font-semibold text-gray-700 mb-2">
//                         Projects
//                       </h3>
//                       <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                         {selectedProfile.projects.map(
//                           (img: string, idx: number) => (
//                             <img
//                               key={idx}
//                               src={img}
//                               alt={`Project ${idx + 1}`}
//                               className="rounded-lg w-full h-32 object-cover"
//                             />
//                           )
//                         )}
//                       </div>
//                     </div>
//                   )}
//                 {Array.isArray(selectedProfile.reviews) &&
//                   selectedProfile.reviews.length > 0 && (
//                     <div>
//                       <h3 className="font-semibold text-gray-700 mb-2">
//                         Reviews
//                       </h3>
//                       <div className="space-y-4">
//                         {selectedProfile.reviews.map((review: any) => (
//                           <div
//                             key={review.id}
//                             className="border p-3 rounded-lg bg-gray-50"
//                           >
//                             <div className="flex justify-between text-sm text-[#6D758F]">
//                               <span className="font-medium">{review.name}</span>
//                               <span>{review.date}</span>
//                             </div>
//                             <div className="flex items-center mt-1 mb-2">
//                               {[...Array(5)].map((_, i) => (
//                                 <Star
//                                   key={i}
//                                   className={`h-4 w-4 ${
//                                     i < review.rating
//                                       ? "text-yellow-400"
//                                       : "text-gray-300"
//                                   }`}
//                                 />
//                               ))}
//                             </div>
//                             <p className="text-sm text-gray-700">
//                               {review.comment}
//                             </p>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//               </div>
//             </div>
//           )}
//           {/* Calendar Modal */}
//           {showCalendarModal && (
//             <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center px-4">
//               <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-lg">
//                 <div className="flex justify-between items-center mb-4">
//                   <h2 className="text-lg font-semibold">Book Appointment</h2>
//                   <button
//                     onClick={closeModal}
//                     className="text-xl font-bold text-gray-500 hover:text-gray-700"
//                   >
//                     ×
//                   </button>
//                 </div>
//                 <div className="flex justify-between items-center mb-4">
//                   <button
//                     onClick={handlePrevMonth}
//                     className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
//                   >
//                     &lt;
//                   </button>
//                   <span className="text-lg font-medium">
//                     {format(currentMonth, "MMMM yyyy")}
//                   </span>
//                   <button
//                     onClick={handleNextMonth}
//                     className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
//                   >
//                     &gt;
//                   </button>
//                 </div>
//                 <div className="grid grid-cols-7 gap-2 text-center mb-4">
//                   {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
//                     (day) => (
//                       <div
//                         key={day}
//                         className="text-sm font-medium text-gray-500"
//                       >
//                         {day}
//                       </div>
//                     )
//                   )}
//                   {daysInMonth.map((day) => (
//                     <button
//                       key={day.toString()}
//                       onClick={() => handleDateSelect(day)}
//                       disabled={!isDateAvailable(day)}
//                       className={`p-2 rounded-full text-sm ${
//                         selectedDate && isSameDay(day, selectedDate)
//                           ? "bg-[#5188FF] text-white"
//                           : isDateAvailable(day)
//                           ? "hover:bg-gray-200"
//                           : "text-gray-300 cursor-not-allowed"
//                       } ${
//                         day.getMonth() !== currentMonth.getMonth()
//                           ? "text-gray-300"
//                           : ""
//                       }`}
//                     >
//                       {day.getDate()}
//                     </button>
//                   ))}
//                 </div>
//                 <div className="mb-4">
//                   <h3 className="text-sm font-medium mb-2">Available Time</h3>
//                   <div className="space-y-2">
//                     {timeSlots.map((slot) => (
//                       <button
//                         key={slot}
//                         onClick={() => handleTimeSlotSelect(slot)}
//                         className={`w-full text-left p-2 rounded-md border ${
//                           selectedTimeSlot === slot
//                             ? "bg-[#5188FF] text-white"
//                             : "border-gray-300 hover:bg-gray-100"
//                         }`}
//                       >
//                         {slot}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//                 <button
//                   onClick={handleBookingConfirm}
//                   className="w-full bg-[#5188FF] text-white py-2 rounded-md hover:bg-blue-600"
//                 >
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           )}
//           {/* Confirmation Modal */}
//           {showConfirmationModal && (
//             <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center px-4">
//               <div className="bg-white rounded-2xl w-full max-w-sm p-6 shadow-lg text-center">
//                 <h2 className="text-lg font-semibold mb-4">
//                   Booking Submitted
//                 </h2>
//                 <p className="text-sm text-gray-700 mb-6">
//                   Hey, we would get back to you.
//                 </p>
//                 <button
//                   onClick={closeModal}
//                   className="w-full bg-[#5188FF] text-white py-2 rounded-md hover:bg-blue-600"
//                 >
//                   OK
//                 </button>
//               </div>
//             </div>
//           )}
//         </main>
//       </div>
//     </>
//   );
// }

"use client";

import { useState, useMemo, useEffect } from "react";
import { Star, Menu, X, Bell, ChevronDown } from "lucide-react";
import Image from "next/image";
import Cookies from "universal-cookie";
import md5 from "crypto-js/md5"; // For Gravatar
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameDay,
  addMonths,
  subMonths,
} from "date-fns"; // For calendar logic

// Mock profiles data with availability (date-to-time-slots mapping)
const mockProfiles = [
  {
    id: 1,
    name: "Paul Volt",
    avatar: "https://i.pravatar.cc/150?img=7",
    distance: "30 miles away",
    price: 30,
    rating: 4.9,
    jobSuccess: "80%",
    description:
      "Experienced electrician with over 10 years in residential and commercial wiring, maintenance, and smart home installations.",
    skillsExperience:
      "Skilled in electrical systems, safety compliance, blueprint reading, and energy-efficient solutions. Proficient in diagnosing and repairing electrical issues efficiently.",
    projects: [
      "https://i.pravatar.cc/150?img=1",
      "https://i.pravatar.cc/150?img=2",
      "https://i.pravatar.cc/150?img=3",
      "https://i.pravatar.cc/150?img=4",
    ],
    reviews: [
      {
        id: 1,
        name: "John F.",
        date: "Mar 29, 2025",
        rating: 5,
        comment:
          "Paul did a fantastic job rewiring our entire kitchen. Very professional and quick service!",
      },
      {
        id: 2,
        name: "Sarah L.",
        date: "Feb 20, 2025",
        rating: 5,
        comment:
          "Highly recommend! He explained everything clearly and fixed our panel issue in no time.",
      },
    ],
    availability: {
      "2025-04-10": [
        "11:00 am – 12:00 pm",
        "2:00 pm – 3:00 pm",
        "4:00 pm – 5:00 pm",
      ],
      "2025-04-15": ["12:00 pm – 1:00 pm", "3:00 pm – 4:00 pm"],
      "2025-04-20": ["1:00 pm – 2:00 pm", "5:00 pm – 6:00 pm"],
    },
  },
  {
    id: 2,
    name: "Anna Sparks",
    avatar: "https://i.pravatar.cc/150?img=7",
    distance: "15 miles away",
    price: 25,
    rating: 4.8,
    jobSuccess: "92%",
    description:
      "Licensed electrician with a strong focus on eco-friendly solutions and home automation systems.",
    skillsExperience:
      "Expert in solar installations, LED retrofits, EV charger setups, and smart home devices.",
    projects: [
      "https://i.pravatar.cc/150?img=1",
      "https://i.pravatar.cc/150?img=8",
      "https://i.pravatar.cc/150?img=9",
      "https://i.pravatar.cc/150?img=10",
    ],
    reviews: [
      {
        id: 1,
        name: "Carlos M.",
        date: "Jan 15, 2025",
        rating: 5,
        comment:
          "Anna installed our solar panels perfectly. Very knowledgeable.",
      },
    ],
    availability: {
      "2025-04-12": ["11:00 am – 12:00 pm", "1:00 pm – 2:00 pm"],
      "2025-04-18": ["2:00 pm – 3:00 pm", "4:00 pm – 5:00 pm"],
      "2025-04-25": ["12:00 pm – 1:00 pm", "3:00 pm – 4:00 pm"],
    },
  },
  {
    id: 3,
    name: "Mike Currents",
    avatar: "https://i.pravatar.cc/150?img=7",
    distance: "10 miles away",
    price: 40,
    rating: 5.0,
    jobSuccess: "100%",
    description:
      "Commercial electrician experienced in high-voltage systems and safety-critical environments.",
    skillsExperience:
      "Specialist in transformer installation, emergency lighting, and circuit protection systems.",
    projects: [
      "https://i.pravatar.cc/150?img=1",
      "https://i.pravatar.cc/150?img=13",
    ],
    reviews: [],
    availability: {
      "2025-04-11": ["11:00 am – 12:00 pm", "5:00 pm – 6:00 pm"],
      "2025-04-16": ["1:00 pm – 2:00 pm", "3:00 pm – 4:00 pm"],
    },
  },
  {
    id: 4,
    name: "Lisa Wires",
    avatar: "https://i.pravatar.cc/150?img=9",
    distance: "8 miles away",
    price: 28,
    rating: 4.7,
    jobSuccess: "85%",
    description:
      "Reliable residential electrician known for clean, timely, and tidy work.",
    skillsExperience:
      "Great with lighting upgrades, fuse box replacements, and outlet installation.",
    projects: [
      "https://i.pravatar.cc/150?img=15",
      "https://i.pravatar.cc/150?img=1",
      "https://i.pravatar.cc/150?img=5",
    ],
    reviews: [
      {
        id: 1,
        name: "Emily K.",
        date: "Dec 10, 2024",
        rating: 4.5,
        comment: "Lisa was friendly and fast. Clean install.",
      },
    ],
    availability: {
      "2025-04-13": ["12:00 pm – 1:00 pm", "4:00 pm – 5:00 pm"],
      "2025-04-19": ["11:00 am – 12:00 pm", "2:00 pm – 3:00 pm"],
    },
  },
  {
    id: 5,
    name: "Tom Charger",
    avatar: "https://i.pravatar.cc/150?img=7",
    distance: "22 miles away",
    price: 35,
    rating: 4.6,
    jobSuccess: "75%",
    description:
      "Focused on EV charger installations and energy upgrades for smart homes.",
    skillsExperience:
      "Capable of installing Level 2 chargers, smart thermostats, and energy meters.",
    projects: [],
    reviews: [],
    availability: {
      "2025-04-14": ["1:00 pm – 2:00 pm", "3:00 pm – 4:00 pm"],
      "2025-04-21": ["11:00 am – 12:00 pm", "5:00 pm – 6:00 pm"],
    },
  },
  {
    id: 6,
    name: "Nina Volt",
    avatar: "https://i.pravatar.cc/150?img=7",
    distance: "12 miles away",
    price: 32,
    rating: 4.9,
    jobSuccess: "95%",
    description:
      "Electrical engineer turned electrician delivering precision and neat wiring jobs.",
    skillsExperience:
      "Strong background in technical schematics, structured wiring, and cable management.",
    projects: ["https://i.pravatar.cc/150?img=1"],
    reviews: [
      {
        id: 1,
        name: "Mark Z.",
        date: "Nov 5, 2024",
        rating: 5,
        comment:
          "She solved a long-standing issue others couldn’t fix. Impressive.",
      },
    ],
    availability: {
      "2025-04-17": ["12:00 pm – 1:00 pm", "4:00 pm – 5:00 pm"],
      "2025-04-22": ["11:00 am – 12:00 pm", "2:00 pm – 3:00 pm"],
    },
  },
  {
    id: 7,
    name: "Leo Arc",
    avatar: "https://i.pravatar.cc/150?img=7",
    distance: "5 miles away",
    price: 26,
    rating: 4.4,
    jobSuccess: "70%",
    description:
      "Young and passionate, bringing energy and speed to basic electrical services.",
    skillsExperience:
      "Handles fixture replacements, appliance hookups, and quick diagnostics.",
    projects: [],
    reviews: [],
    availability: {
      "2025-04-23": ["1:00 pm – 2:00 pm", "3:00 pm – 4:00 pm"],
      "2025-04-28": ["11:00 am – 12:00 pm", "5:00 pm – 6:00 pm"],
    },
  },
];

const levels = ["Beginner", "Intermediate", "Expert"];
const languages = ["English", "Estonian", "Russian"];

export default function ProfessionalProfilePage() {
  const cookies = new Cookies();
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [priceFilter, setPriceFilter] = useState<number[]>([]);
  const [durationFilter, setDurationFilter] = useState<number[]>([]);
  const [languageFilter, setLanguageFilter] = useState<string[]>([]);
  const [levelFilter, setLevelFilter] = useState<string[]>([]);
  const [ratingFilter, setRatingFilter] = useState<number | null>(null);
  const [selectedProfile, setSelectedProfile] = useState<any>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Calendar modal states
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 3, 1)); // Start with April 2025
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);

  useEffect(() => {
    const metadata = cookies.get("session_metadata");
    if (metadata) {
      setCurrentUser(metadata);
    } else {
      setCurrentUser(null);
    }
  }, []);

  const getGravatarUrl = (email: string) => {
    const trimmedEmail = email.trim().toLowerCase();
    const hash = md5(trimmedEmail).toString();
    return `https://www.gravatar.com/avatar/${hash}?s=24&d=mp`;
  };

  const filteredProfiles = useMemo(() => {
    return mockProfiles.filter((profile) => {
      return (
        (priceFilter.length === 0 || priceFilter.includes(profile.price)) &&
        (durationFilter.length === 0 || durationFilter.length === 0) &&
        (languageFilter.length === 0 || true) &&
        levelFilter.length === 0 &&
        (ratingFilter === null || profile.rating >= ratingFilter)
      );
    });
  }, [priceFilter, durationFilter, languageFilter, levelFilter, ratingFilter]);

  const toggle = (value: any, setter: any, multiple = true) => {
    setter((prev: any[]) =>
      multiple
        ? prev.includes(value)
          ? prev.filter((v) => v !== value)
          : [...prev, value]
        : prev === value
        ? null
        : value
    );
  };

  const closeModal = () => {
    setSelectedProfile(null);
    setShowCalendarModal(false);
    setShowConfirmationModal(false);
    setSelectedDate(null);
    setSelectedTimeSlot(null);
  };

  // Calendar logic
  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });

  const handlePrevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedTimeSlot(null); // Reset time slot when a new date is selected
  };

  const handleTimeSlotSelect = (slot: string) => {
    setSelectedTimeSlot(slot);
  };

  const handleBookingConfirm = () => {
    if (selectedProfile) {
      setShowCalendarModal(false);
      setShowConfirmationModal(true);
    } else {
      alert("Please select a professional to book an appointment.");
    }
  };

  // Get available time slots for the selected date
  const getAvailableTimeSlots = () => {
    if (!selectedDate || !selectedProfile || !selectedProfile.availability) {
      return [];
    }
    const formattedDate = format(selectedDate, "yyyy-MM-dd");
    return selectedProfile.availability[formattedDate] || [];
  };

  const availableTimeSlots = getAvailableTimeSlots();

  return (
    <>
      <header className="bg-[#f3f5f9] shadow-sm text-[#6D758F]">
        <div className="max-w-[1500px] mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-3xl font-bold text-gray-700">
            <Image
              src="/logo.svg"
              width={100}
              height={100}
              alt="logo"
              className="w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-[#6D758F] font-medium">
            <a href="#" className="hover:text-[#6D758F] transition">
              Home
            </a>
            <a href="#" className="hover:text-[#6D758F] transition">
              About
            </a>
            <a href="#" className="hover:text-[#6D758F] transition">
              Services
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 bg-white rounded-full px-3 py-1 shadow-sm">
              {currentUser ? (
                <>
                  <img
                    src={getGravatarUrl(currentUser.email)}
                    alt="Profile"
                    className="rounded-full"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {currentUser.email || currentUser.email.split("@")[0]}
                  </span>
                </>
              ) : (
                <>
                  <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
                    <span role="img" aria-label="user">
                      👤
                    </span>
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    Guest
                  </span>
                </>
              )}
              <ChevronDown size={14} className="text-gray-500" />
            </div>
            <div className="bg-white p-2 rounded-full shadow-sm hidden md:block">
              <Bell className="text-blue-600 relative" size={18} />
              <span className="absolute top-[10px] right-[90px] w-2 h-2 bg-red-500 rounded-full"></span>
            </div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="bg-gray-200 p-2 rounded-full md:hidden"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden px-4 pb-4">
            <nav className="flex flex-col space-y-2 text-gray-700">
              <a href="#" className="hover:text-gray-900">
                Home
              </a>
              <a href="#" className="hover:text-gray-900">
                About
              </a>
              <a href="#" className="hover:text-gray-900">
                Services
              </a>
            </nav>
          </div>
        )}
      </header>
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 text-[#6D758F]">
        <aside className="w-full md:w-72 border-r p-6 bg-white">
          <h2 className="text-lg font-bold mb-4">Filter</h2>
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Price</h3>
            {[20, 25, 30, 35, 40].map((price) => (
              <label key={price} className="flex items-center mb-1">
                <input
                  type="checkbox"
                  checked={priceFilter.includes(price)}
                  onChange={() => toggle(price, setPriceFilter)}
                  className="mr-2"
                />
                €{price}
              </label>
            ))}
          </div>
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Duration</h3>
            {[1, 6, 17, 72].map((d) => (
              <label key={d} className="flex items-center mb-1">
                <input
                  type="checkbox"
                  checked={durationFilter.includes(d)}
                  onChange={() => toggle(d, setDurationFilter)}
                  className="mr-2"
                />
                {d}+ Hours
              </label>
            ))}
          </div>
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Language</h3>
            {languages.map((lang) => (
              <label key={lang} className="flex items-center mb-1">
                <input
                  type="checkbox"
                  checked={languageFilter.includes(lang)}
                  onChange={() => toggle(lang, setLanguageFilter)}
                  className="mr-2"
                />
                {lang}
              </label>
            ))}
          </div>
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Service level</h3>
            {levels.map((lvl) => (
              <label key={lvl} className="flex items-center mb-1">
                <input
                  type="checkbox"
                  checked={levelFilter.includes(lvl)}
                  onChange={() => toggle(lvl, setLevelFilter)}
                  className="mr-2"
                />
                {lvl}
              </label>
            ))}
          </div>
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Review Rating</h3>
            {[5, 4, 3].map((r) => (
              <label key={r} className="flex items-center mb-1">
                <input
                  type="radio"
                  name="rating"
                  checked={ratingFilter === r}
                  onChange={() => setRatingFilter(r)}
                  className="mr-2"
                />
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < r ? "text-purple-500" : "text-gray-300"
                    }`}
                  />
                ))}
              </label>
            ))}
          </div>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Professional picks for you</h2>
            <div>
              <label className="mr-2 font-medium">Sorted by:</label>
              <select className="border rounded px-3 py-1 text-sm">
                <option>Recommended</option>
                <option>Price</option>
                <option>Rating</option>
              </select>
            </div>
          </div>
          {filteredProfiles.map((profile) => (
            <div
              key={profile.id}
              className="border rounded-lg p-4 mb-4 shadow-sm"
            >
              <div className="flex items-center justify-between md:flex-row flex-col">
                <div className="flex items-start gap-4">
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{profile.name}</h3>
                    <div className="text-sm text-[#6D758F]">
                      {profile.distance}
                    </div>
                    <div className="flex items-center text-sm text-[#6D758F]">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.round(profile.rating)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="ml-2">
                        {profile.jobSuccess} Job Success
                      </span>
                    </div>
                    <div className="text-sm text-[#6D758F]">
                      {profile.description}
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      setSelectedProfile(profile);
                      setShowCalendarModal(true);
                    }}
                    className="bg-[#5188FF] text-white px-4 py-2 rounded-md text-sm"
                  >
                    Book Now
                  </button>
                  <button
                    onClick={() => setSelectedProfile(profile)}
                    className="border-[#5188FF] border-[1px] text-[#5188FF] px-4 py-2 rounded-md text-sm"
                  >
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
          {/* Profile Modal */}
          {selectedProfile && !showCalendarModal && !showConfirmationModal && (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center px-4">
              <div className="bg-white rounded-2xl w-full max-w-4xl p-6 overflow-y-auto max-h-[90vh] relative shadow-lg">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-6 text-xl font-bold text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={selectedProfile.avatar}
                      alt="avatar"
                      className="w-14 h-14 rounded-full"
                    />
                    <div>
                      <h2 className="text-xl font-semibold text-[#6D758F]">
                        {selectedProfile.name}
                      </h2>
                      <div className="text-sm text-gray-500 flex gap-2 items-center">
                        <span>📍 {selectedProfile.distance}</span>
                        <span>⭐ {selectedProfile.rating}</span>
                        <span>{selectedProfile.jobSuccess} Job Success</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-lg font-semibold text-blue-600">
                    €{selectedProfile.price}/hr
                  </div>
                </div>
                <div className="flex gap-4 my-5">
                  <p className="flex items-center justify-center border-[#5188FF] border-[1px] text-[#5188FF] lg:w-[170px] rounded-md px-3">
                    <svg
                      width="22"
                      height="21"
                      viewBox="0 0 22 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 9.5V9M15 9.5V9M7 9.5V9M2.464 15.328C1 14.157 1 13.271 1 9.5C1 5.729 1 3.843 2.464 2.672C3.93 1.5 6.286 1.5 11 1.5C15.714 1.5 18.071 1.5 19.535 2.672C20.999 3.844 21 5.729 21 9.5C21 13.271 21 14.157 19.535 15.328C18.072 16.5 15.714 16.5 11 16.5C8.49 16.5 7.2 18.238 5 19.5V16.288C3.906 16.125 3.101 15.838 2.464 15.328Z"
                        stroke="#5188FF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <button
                      onClick={() => setShowCalendarModal(true)}
                      className="px-4 py-2 rounded-md text-sm"
                    >
                      Book Now
                    </button>
                  </p>
                  <button className="bg-[#5188FF] px-3 lg:w-[170px] text-white px-4 py-2 rounded-md text-sm">
                    Send Message
                  </button>
                </div>
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-700 mb-1">
                    Description
                  </h3>
                  <p className="text-sm text-[#6D758F]">
                    {selectedProfile.description}
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-700 mb-1">
                    Skills & Experience
                  </h3>
                  <p className="text-sm text-[#6D758F]">
                    {selectedProfile.skillsExperience}
                  </p>
                </div>
                {Array.isArray(selectedProfile.projects) &&
                  selectedProfile.projects.length > 0 && (
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-700 mb-2">
                        Projects
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {selectedProfile.projects.map(
                          (img: string, idx: number) => (
                            <img
                              key={idx}
                              src={img}
                              alt={`Project ${idx + 1}`}
                              className="rounded-lg w-full h-32 object-cover"
                            />
                          )
                        )}
                      </div>
                    </div>
                  )}
                {Array.isArray(selectedProfile.reviews) &&
                  selectedProfile.reviews.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-gray-700 mb-2">
                        Reviews
                      </h3>
                      <div className="space-y-4">
                        {selectedProfile.reviews.map((review: any) => (
                          <div
                            key={review.id}
                            className="border p-3 rounded-lg bg-gray-50"
                          >
                            <div className="flex justify-between text-sm text-[#6D758F]">
                              <span className="font-medium">{review.name}</span>
                              <span>{review.date}</span>
                            </div>
                            <div className="flex items-center mt-1 mb-2">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating
                                      ? "text-yellow-400"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <p className="text-sm text-gray-700">
                              {review.comment}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
              </div>
            </div>
          )}
          {/* Calendar Modal */}
          {showCalendarModal && (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center px-4">
              <div className="bg-white rounded-2xl w-full max-w-[800px] p-6 shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Book Appointment</h2>
                  <button
                    onClick={closeModal}
                    className="text-xl font-bold text-gray-500 hover:text-gray-700"
                  >
                    ×
                  </button>
                </div>
                <div className="flex w-full gap-4 lg:flex-row flex-col">

                <div className="w-full">

                <div className="flex justify-between items-center mb-4">
                  <button
                    onClick={handlePrevMonth}
                    className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
                  >
                    &lt;
                  </button>
                  <span className="text-lg font-medium">
                    {format(currentMonth, "MMMM yyyy")}
                  </span>
                  <button
                    onClick={handleNextMonth}
                    className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
                  >
                    &gt;
                  </button>
                </div>
                <div className="grid grid-cols-7 gap-2 text-center mb-4">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                    (day) => (
                      <div
                        key={day}
                        className="text-sm font-medium text-gray-500"
                      >
                        {day}
                      </div>
                    )
                  )}
                  {daysInMonth.map((day) => (
                    <button
                      key={day.toString()}
                      onClick={() => handleDateSelect(day)}
                      className={`p-2 rounded-full text-sm ${
                        selectedDate && isSameDay(day, selectedDate)
                          ? "bg-[#5188FF] text-white"
                          : "hover:bg-gray-200"
                      } ${
                        day.getMonth() !== currentMonth.getMonth()
                          ? "text-gray-300"
                          : ""
                      }`}
                    >
                      {day.getDate()}
                    </button>
                  ))}
                </div>
                </div>
                <div className="mb-4">
                  <h3 className="text-sm font-medium mb-2">Available Time</h3>
                  {selectedDate ? (
                    availableTimeSlots.length > 0 ? (
                      <div className="space-y-2">
                        {availableTimeSlots.map((slot: string) => (
                          <button
                            key={slot}
                            onClick={() => handleTimeSlotSelect(slot)}
                            className={`w-full text-left p-2 rounded-md border ${
                              selectedTimeSlot === slot
                                ? "bg-[#5188FF] text-white"
                                : "border-gray-300 hover:bg-gray-100"
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500">
                        No available time slots for this date.
                      </p>
                    )
                  ) : (
                    <p className="text-sm text-gray-500">
                      Please select a date to see available times.
                    </p>
                  )}
                </div>
                </div>
                <button
                  onClick={handleBookingConfirm}
                  className="w-full bg-[#5188FF] text-white py-2 rounded-md hover:bg-blue-600"
                >
                  Book Now
                </button>
              </div>
            </div>
          )}
          {/* Confirmation Modal */}
          {showConfirmationModal && (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center px-4">
              <div className="bg-white rounded-2xl w-full max-w-sm p-6 shadow-lg text-center">
                <h2 className="text-lg font-semibold mb-4">
                  Booking Submitted
                </h2>
                <p className="text-sm text-gray-700 mb-6">
                  Hey, we would get back to you.
                </p>
                <button
                  onClick={closeModal}
                  className="w-full bg-[#5188FF] text-white py-2 rounded-md hover:bg-blue-600"
                >
                  OK
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
}