
// "use client";

// import {
//   LayoutDashboard,
//   Briefcase,
//   Calendar,
//   MessageSquare,
//   Wallet,
//   Star,
//   Settings,
//   HelpCircle,
//   MessageCircle,
// } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";

// const navItems = [
//   { label: "Dashboard", icon: LayoutDashboard, href: "/", active: true },
//   { label: "My services", icon: Briefcase, href: "/services" },
//   { label: "Appointments", icon: Calendar, href: "/appointments" },
//   { label: "Messages", icon: MessageSquare, href: "/messages" },
//   { label: "Earnings", icon: Wallet, href: "/earnings" },
//   { label: "Reviews and feedback", icon: Star, href: "/reviews" },
// ];

// const secondaryItems = [
//   { label: "Settings", icon: Settings, href: "/settings" },
//   { label: "Help centre", icon: HelpCircle, href: "/help" },
//   { label: "Live chat", icon: MessageCircle, href: "/chat" },
// ];

// export default function Sidebar() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <aside className="min-h-screen w-full max-w-[260px] border-r border-gray-100 bg-white p-4 hidden sm:block z-50">
//       <div className="flex items-center justify-start mb-12 pl-2">
//         {/* Replace this with your logo */}
//         <Image src="/logo.svg" alt="Logo" width={100} height={40} />
//       </div>

//       <nav className="space-y-1">
//         {navItems.map((item, index) => (
//           <Link
//             key={item.label}
//             href={item.href}
//             onClick={() => setActiveIndex(index)}
//             className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
//               activeIndex === index
//                 ? "bg-blue-50 text-blue-600 font-medium"
//                 : "text-gray-800 hover:bg-gray-100"
//             }`}
//           >
//             <item.icon size={20} />
//             <span>{item.label}</span>
//           </Link>
//         ))}
//       </nav>

//       <div className="my-8 border-t border-gray-200" />

//       <nav className="space-y-1">
//         {secondaryItems.map((item) => (
//           <Link
//             key={item.label}
//             href={item.href}
//             className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-800 hover:bg-gray-100"
//           >
//             <item.icon size={20} />
//             <span>{item.label}</span>
//           </Link>
//         ))}
//       </nav>
//     </aside>
//   );
// }
// Sidebar.tsx
"use client";
import {
  LayoutDashboard,
  Briefcase,
  Calendar,
  MessageSquare,
  Wallet,
  Star,
  Settings,
  HelpCircle,
  MessageCircle,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/" },
  { label: "My services", icon: Briefcase, href: "/services" },
  { label: "Appointments", icon: Calendar, href: "/appointments" },
  { label: "Messages", icon: MessageSquare, href: "/messages" },
  { label: "Earnings", icon: Wallet, href: "/earnings" },
  { label: "Reviews and feedback", icon: Star, href: "/reviews" },
];

const secondaryItems = [
  { label: "Settings", icon: Settings, href: "/settings" },
  { label: "Help centre", icon: HelpCircle, href: "/help" },
  { label: "Live chat", icon: MessageCircle, href: "/chat" },
];

export default function Sidebar({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      {/* Mobile overlay */}
      {show && (
        <div
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`${
          show
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        } fixed top-0 left-0 z-40 w-[260px] min-h-screen bg-white border-r border-gray-100 p-4 transform transition-transform duration-300`}
      >
        <div className="flex items-center justify-between mb-6">
          <Image src="/logo.svg" alt="Logo" width={100} height={40} />
          <button
            onClick={onClose}
            className="lg:hidden text-gray-500 hover:text-gray-800"
          >
            <X />
          </button>
        </div>

        <nav className="space-y-1">
          {navItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setActiveIndex(index)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
                activeIndex === index
                  ? "bg-blue-50 text-blue-600 font-medium"
                  : "text-gray-800 hover:bg-gray-100"
              }`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="my-8 border-t border-gray-200" />

        <nav className="space-y-1">
          {secondaryItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-800 hover:bg-gray-100"
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
