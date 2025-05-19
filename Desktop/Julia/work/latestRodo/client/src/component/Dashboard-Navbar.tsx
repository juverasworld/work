
import React from "react";

import { useState, useEffect } from "react";
import { Bell, Menu } from "lucide-react";
import Cookies from "universal-cookie";
import md5 from "md5";
import { Menu as HeadlessMenu } from "@headlessui/react";

// Mock notification type (replace with your actual type)
interface Notification {
  id: string;
  message: string;
  read: boolean;
}

// User type (aligned with ExpertSearchSection)
interface User {
  email: string;
  name?: string;
}

const Navbar = ({ onToggleSidebar }: { onToggleSidebar: () => void }) => {
  const cookies = new Cookies();
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: "1", message: "New booking received!", read: false },
    { id: "2", message: "Profile updated.", read: true },
  ]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const hasUnreadNotifications = notifications.some((n) => !n.read);

  // Retrieve user data from cookie on mount
  useEffect(() => {
    const metadata = cookies.get("session_metadata");
    if (metadata) {
      setCurrentUser(metadata);
    } else {
      // Mock default user for demo (replace with actual logic)
      const defaultUser: User = { email: "paul@example.com", name: "Paul" };
      cookies.set("session_metadata", defaultUser, {
        path: "/",
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      });
      setCurrentUser(defaultUser);
    }
  }, []);

  // Generate Gravatar URL based on email
  const getGravatarUrl = (email: string) => {
    const trimmedEmail = email.trim().toLowerCase();
    const hash = md5(trimmedEmail);
    return `https://www.gravatar.com/avatar/${hash}?s=40&d=mp`;
  };

  // Mark notification as read
  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 z-20 h-[100px]">
      {/* Desktop Navbar */}
      <div className="hidden lg:flex justify-between items-center px-[30px] py-5 w-[1120px] mx-auto">
        <div className="flex flex-col gap-1">
          <h1 className="text-[24px] font-semibold text-[#2A2A2A]">Welcome</h1>
          <p className="text-[16px] text-[#797979] font-medium">
            Manage your services, bookings, and profile from here
          </p>
        </div>

        <div className="flex items-center gap-5">
          {/* Notification Bell with Dropdown */}
          <HeadlessMenu as="div" className="relative">
            <HeadlessMenu.Button className="relative w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md">
              <Bell className="w-5 h-5 text-[#2A2A2A]" />
              {hasUnreadNotifications && (
                <span className="absolute top-2 right-2 w-[6.4px] h-[6.4px] bg-[#5188FF] rounded-full" />
              )}
            </HeadlessMenu.Button>
            <HeadlessMenu.Items className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-30">
              {notifications.length === 0 ? (
                <div className="px-4 py-2 text-sm text-[#797979]">
                  No notifications available
                </div>
              ) : (
                notifications.map((notification) => (
                  <HeadlessMenu.Item key={notification.id}>
                    {({ active }) => (
                      <div
                        className={`px-4 py-2 text-sm ${
                          active ? "bg-[#F5F5F5]" : ""
                        } ${
                          notification.read
                            ? "text-[#797979]"
                            : "text-[#2A2A2A] font-medium"
                        }`}
                        onClick={() => markAsRead(notification.id)}
                      >
                        {notification.message}
                      </div>
                    )}
                  </HeadlessMenu.Item>
                ))
              )}
            </HeadlessMenu.Items>
          </HeadlessMenu>

          {/* Profile */}
          <div className="flex items-center gap-2">
            {currentUser ? (
              <>
                <img
                  src={getGravatarUrl(currentUser.email)}
                  alt="Profile"
                  className="w-10 h-10 rounded-full shadow-[0_4px_26.2px_rgba(222,222,222,0.25),-2px_-2px_19.3px_rgba(224,224,224,0.41)]"
                />
                <div className="flex flex-col">
                  <span className="text-xs text-[#797979]">
                    {currentUser.email}
                  </span>
                  <span className="text-sm font-semibold text-[#2A2A2A]">
                    {currentUser.name || currentUser.email.split("@")[0]}
                  </span>
                </div>
              </>
            ) : (
              <>
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center shadow-[0_4px_26.2px_rgba(222,222,222,0.25),-2px_-2px_19.3px_rgba(224,224,224,0.41)]">
                  <span role="img" aria-label="user">
                    👤
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#797979]">Guest</span>
                  <span className="text-sm font-semibold text-[#2A2A2A]">
                    Guest
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden w-full px-4 pt-4 pb-2  bg-white">
        <div className="flex justify-between items-center">
          {/* Left: Hamburger + Logo */}
          <div className="flex items-center gap-4">
            <button onClick={onToggleSidebar} className="text-[#2A2A2A]">
              <Menu className="w-6 h-6" />
            </button>
            <img src="/logo.svg" alt="Logo" className="h-6" />
          </div>

          {/* Right: Notification + Profile */}
          <div className="flex items-center gap-4">
            <HeadlessMenu as="div" className="relative">
              <HeadlessMenu.Button className="relative w-9 h-9 flex items-center justify-center bg-white rounded-full shadow-md">
                <Bell className="w-4 h-4 text-[#2A2A2A]" />
                {hasUnreadNotifications && (
                  <span className="absolute top-2 right-2 w-[6.4px] h-[6.4px] bg-[#5188FF] rounded-full" />
                )}
              </HeadlessMenu.Button>
              <HeadlessMenu.Items className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-30">
                {notifications.length === 0 ? (
                  <div className="px-4 py-2 text-sm text-[#797979]">
                    No notifications available
                  </div>
                ) : (
                  notifications.map((notification) => (
                    <HeadlessMenu.Item key={notification.id}>
                      {({ active }) => (
                        <div
                          className={`px-4 py-2 text-sm ${
                            active ? "bg-[#F5F5F5]" : ""
                          } ${
                            notification.read
                              ? "text-[#797979]"
                              : "text-[#2A2A2A] font-medium"
                          }`}
                          onClick={() => markAsRead(notification.id)}
                        >
                          {notification.message}
                        </div>
                      )}
                    </HeadlessMenu.Item>
                  ))
                )}
              </HeadlessMenu.Items>
            </HeadlessMenu>

            {currentUser ? (
              <img
                src={getGravatarUrl(currentUser.email)}
                alt="Profile"
                className="w-9 h-9 rounded-full shadow"
              />
            ) : (
              <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center shadow">
                <span role="img" aria-label="user">
                  👤
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;