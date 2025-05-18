// "use client";

// import Link from "next/link";
// import {
//   LayoutDashboard,
//   FileText,
//   Calendar,
//   MessageSquare,
//   PoundSterling,
//   FileText as ReviewIcon,
//   Settings,
//   HelpCircle,
// } from "lucide-react";

// const navItems = [
//   { name: "Dashboard", icon: LayoutDashboard, path: "/" },
//   { name: "My services", icon: FileText, path: "/services" },
//   { name: "Appointment", icon: Calendar, path: "/appointment" },
//   { name: "Messages", icon: MessageSquare, path: "/messages" },
//   { name: "Earnings", icon: PoundSterling, path: "/earnings" },
//   { name: "Reviews and feedback", icon: ReviewIcon, path: "/reviews" },
//   { name: "Settings", icon: Settings, path: "/settings" },
//   { name: "Help centre", icon: HelpCircle, path: "/help" },
// ];

// const Sidebar: React.FC = () => {
//   return (
//     <div className="hidden md:flex flex-col w-64 h-screen bg-gray-50 border-r">
//       <div className="p-6">
//         <h1 className="text-2xl font-semibold text-gray-800">rodo.</h1>
//       </div>
//       <nav className="flex-1 px-4">
//         {navItems.map((item) => (
//           <Link
//             key={item.name}
//             href={item.path}
//             className="flex items-center p-3 mb-2 text-gray-600 hover:bg-gray-100 rounded-lg"
//           >
//             <item.icon className="h-5 w-5 mr-3" />
//             {item.name}
//           </Link>
//         ))}
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;
// src/components/Sidebar.tsx
import React from "react";
import { Briefcase, Calendar, MessageSquare, BarChart2, AlertCircle, Settings, HelpCircle, MessagesSquare } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <aside
      className={`bg-white shadow-sm w-64 p-4 fixed inset-y-0 left-0 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 transition-transform duration-300 ease-in-out z-50`}
    >
      <nav className="mt-8">
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="flex items-center p-2 bg-blue-100 text-blue-600 rounded-md"
            >
              <Briefcase className="w-5 h-5 mr-3" /> Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              <Briefcase className="w-5 h-5 mr-3" /> My services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              <Calendar className="w-5 h-5 mr-3" /> Appointments
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              <MessageSquare className="w-5 h-5 mr-3" /> Messages
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              <BarChart2 className="w-5 h-5 mr-3" /> Earnings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              <AlertCircle className="w-5 h-5 mr-3" /> Reviews and feedback
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              <Settings className="w-5 h-5 mr-3" /> Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              <HelpCircle className="w-5 h-5 mr-3" /> Help centre
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              <MessagesSquare className="w-5 h-5 mr-3" /> Live chat
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;