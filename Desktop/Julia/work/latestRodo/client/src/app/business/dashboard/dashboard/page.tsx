"use client"
// src/components/Dashboard.tsx
import React, { useState } from "react";
import {
  Menu,
  X,
  Bell,
  Calendar,
  BarChart2,
  Briefcase,
  Plus,
  Star,
} from "lucide-react";
import Sidebar from "@/component/Sidebar";
// import Sidebar from "./Sidebar";

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] font-sans">
      {/* Header */}
      <header className="bg-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <button onClick={toggleSidebar} className="md:hidden text-2xl mr-4">
            {isSidebarOpen ? <X /> : <Menu />}
          </button>
          <h1 className="text-2xl font-bold">rodo.</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Bell className="text-gray-600" />
          <img
            src="https://via.placeholder.com/40"
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <span className="hidden md:block text-gray-600">Paul</span>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Main Content */}
        <main className="flex-1 p-6 md:ml-64">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Welcome</h2>
          <p className="text-gray-600 mb-6">
            Manage your services, bookings, and profile from here
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg flex items-center">
              <Calendar className="text-gray-600 mr-4" />
              <div>
                <p className="text-gray-600 text-sm">Appointments Today</p>
                <p className="text-2xl font-bold text-gray-800">0</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg flex items-center">
              <BarChart2 className="text-gray-600 mr-4" />
              <div>
                <p className="text-gray-600 text-sm">Earnings This Month</p>
                <p className="text-2xl font-bold text-gray-800">€0</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg flex items-center">
              <Briefcase className="text-gray-600 mr-4" />
              <div>
                <p className="text-gray-600 text-sm">Total Services</p>
                <p className="text-2xl font-bold text-gray-800">0</p>
              </div>
            </div>
          </div>

          {/* Top Service Section */}
          <div className="bg-white p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Your Top Service This Week
            </h3>
            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/100"
                alt="No Service"
                className="mb-4"
              />
              <p className="text-gray-600 mb-4">
                You currently do not have any service posted
              </p>
              <button className="bg-[#3B82F6] text-white px-6 py-2 rounded-lg">
                Add a service
              </button>
            </div>
          </div>

          {/* Customer Reviews */}
          <div className="bg-white p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Customers Reviews
            </h3>
            <div className="grid grid-cols-7 gap-1 text-center">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="relative">
                  <p className="text-gray-600 text-sm mb-2">{day}</p>
                  <div className="h-32 relative">
                    {[...Array(5)].map((_, index) => (
                      <div
                        key={index}
                        className="absolute w-full h-[20%] border-t border-gray-200 flex items-center justify-center"
                        style={{ bottom: `${index * 20}%` }}
                      >
                        {index === 0 && (
                          <Star className="text-gray-400 w-4 h-4" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div className="absolute left-0 top-16 flex flex-col justify-between h-32">
                {[5, 4, 3, 2, 1].map((star) => (
                  <span key={star} className="text-gray-600 text-sm">
                    {star}★
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Services Posted */}
          <div className="bg-white p-6 rounded-lg relative">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Services Posted
            </h3>
            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/100"
                alt="No Service"
                className="mb-4"
              />
              <p className="text-gray-600 mb-4">
                You currently do not have any service posted
              </p>
              <button className="bg-[#3B82F6] text-white px-6 py-2 rounded-lg">
                Add a service
              </button>
            </div>
            <button className="absolute bottom-6 right-6 bg-[#3B82F6] text-white p-3 rounded-full">
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
