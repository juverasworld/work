
"use client";

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  Tooltip,
  Title,
  ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Image from "next/image";
import Sidebar from "@/component/Sidebar";
import Navbar from "@/component/Dashboard-Navbar";
import { useEffect, useState, FormEvent } from "react";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);



const Dashboard = () => {
  const reviewsData = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: Array.from({ length: 5 }, (_, i) => ({
      label: `${5 - i} Star`,
      data: Array(7).fill(0),
      backgroundColor: "#facc15",
      barThickness: 8,
      borderRadius: 4,
    })),
  };

const options: ChartOptions<"bar"> = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
      },
      ticks: {
        color: "#000",
      },
    },
    y: {
      stacked: true,
      grid: {
        // drawBorder: false,
      },
      ticks: {
        callback: (val: string | number) =>
          [5, 4, 3, 2, 1].includes(+val) ? `${+val} ★` : "",
        stepSize: 1,
        color: "#000",
      },
      suggestedMax: 5,
      suggestedMin: 1,
    },
  },
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false },
  },
};

  // State with TypeScript types
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [showCompleteProfileModal, setShowCompleteProfileModal] =
    useState<boolean>(true);
  const [showPersonalInfoModal, setShowPersonalInfoModal] =
    useState<boolean>(false);
  const [showServiceProviderModal, setShowServiceProviderModal] =
    useState<boolean>(false);
  const [showVerificationPendingModal, setShowVerificationPendingModal] =
    useState<boolean>(false);

  // State for file inputs (File or null)
  const [certificateOfPractice, setCertificateOfPractice] =
    useState<File | null>(null);
  const [certificateOfBusiness, setCertificateOfBusiness] =
    useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // useEffect to show the first modal on mount
  useEffect(() => {
    setShowCompleteProfileModal(true);
  }, []);

  // Handlers with TypeScript types
  const handleProceed = (): void => {
    setShowCompleteProfileModal(false);
    setShowPersonalInfoModal(true);
  };

  const handlePersonalInfoNext = (): void => {
    setShowPersonalInfoModal(false);
    setShowServiceProviderModal(true);
  };

  const handleCloseModal = (): void => {
    setShowCompleteProfileModal(false);
    setShowPersonalInfoModal(false);
    setShowServiceProviderModal(false);
    setShowVerificationPendingModal(false);
    // Reset file inputs and error state
    setCertificateOfPractice(null);
    setCertificateOfBusiness(null);
    setError(null);
  };

  const handleGoToDashboard = (): void => {
    setShowVerificationPendingModal(false);
  };

  // Handle file input changes with proper event typing
  const handleCertificateOfPracticeChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setCertificateOfPractice(file);
    }
  };

  const handleCertificateOfBusinessChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setCertificateOfBusiness(file);
    }
  };

  // Handle form submission with proper event typing
  const handleServiceProviderSubmit = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    // Validate that both files are selected
    if (!certificateOfPractice || !certificateOfBusiness) {
      setError("Please upload both certificates before submitting.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    // Create FormData object to send files
    const formData = new FormData();
    formData.append("certificateOfPractice", certificateOfPractice);
    formData.append("certificateOfBusiness", certificateOfBusiness);

    try {
      // Replace this URL with your actual backend endpoint
      const response = await fetch("/api/submit-verification", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit verification documents.");
      }

      // On successful submission, show the Verification Pending modal
      setShowServiceProviderModal(false);
      setShowVerificationPendingModal(true);
      // Reset file inputs
      setCertificateOfPractice(null);
      setCertificateOfBusiness(null);
    } catch (err: any) {
      setError(
        err.message || "An error occurred while submitting the documents."
      );
    } finally {
      setIsSubmitting(false);
    }
  };


 
  return (
    <div className="flex">
      <Navbar onToggleSidebar={() => setSidebarOpen(true)} />
      <Sidebar show={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="flex-1 mt-[110px] p-4 sm:p-6 lg:p-8 space-y-6 bg-[#F7F7F7] lg:ml-[240px]">
        {/* Top Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "Appointments Today", value: "0", icon: "📅" },
            { label: "Earnings This Month", value: "€0", icon: "💶" },
            { label: "Total Services", value: "0", icon: "💼" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white h-[150px] p-4 shadow-sm rounded-[8px]"
            >
              <p className="text-sm text-gray-500 mb-2 flex items-center gap-1">
                {stat.icon} {stat.label}
              </p>
              <p className="text-2xl text-[#5188FF] font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Top Service + Reviews */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-[8px] text-center space-y-4 shadow-sm h-[350px]">
            <h2 className="text-lg font-medium">Your Top Service This Week</h2>
            <div className="flex justify-center">
              <Image
                src="/empty-state.svg"
                alt="Empty"
                width={100}
                height={100}
              />
            </div>
            <p className="text-[#797979] text-sm">
              You currently do not have any service posted
            </p>
            <button className="bg-[#5188FF] text-white px-4 py-2 rounded-md font-medium lg:w-[300px]">
              Add a service
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm h-[350px] flex flex-col">
            <h2 className="text-lg font-medium mb-4">Customers’ Reviews</h2>
            <div className="flex-1">
              <Bar data={reviewsData} options={options} />
            </div>
          </div>
        </div>

        {/* Services Posted */}
        <div className="bg-white rounded-[8px] shadow-sm">
          <div className="p-6 text-left">
            <h2 className="text-lg font-medium mb-4">Services Posted</h2>
            <div className="flex flex-col items-center text-center space-y-4">
              <Image
                src="/empty-state.svg"
                alt="Empty"
                width={100}
                height={100}
              />
              <p className="text-[#797979] text-sm">
                You currently do not have any service posted
              </p>
              <button className="bg-[#5188FF] text-white px-4 py-2 rounded-md font-medium lg:w-[300px]">
                Add a service
              </button>
            </div>
          </div>
        </div>

        <button className="fixed bottom-6 right-6 w-14 h-14 bg-[#5188FF] text-white text-3xl rounded-full shadow-md">
          +
        </button>
      </main>

      {/* Complete Your Profile Modal */}
      {showCompleteProfileModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-[805px] w-full text-center">
            <div className="flex justify-end">
              <button onClick={handleCloseModal} className="text-gray-500">
                ✕
              </button>
            </div>
            <div className="mb-4">
              <div className="flex justify-center">
                <div className="rounded-full flex items-center justify-center">
                  <span className="text-white text-3xl">
                    <svg
                      width="121"
                      height="120"
                      viewBox="0 0 121 120"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M60.5 120C93.6371 120 120.5 93.1371 120.5 60C120.5 26.8629 93.6371 0 60.5 0C27.3629 0 0.5 26.8629 0.5 60C0.5 93.1371 27.3629 120 60.5 120ZM88.3033 50.3033C91.2322 47.3744 91.2322 42.6256 88.3033 39.6967C85.3744 36.7678 80.6256 36.7678 77.6967 39.6967L53 64.3934L43.3033 54.6967C40.3744 51.7678 35.6256 51.7678 32.6967 54.6967C29.7678 57.6256 29.7678 62.3744 32.6967 65.3033L47.6967 80.3033C50.6256 83.2322 55.3744 83.2322 58.3033 80.3033L88.3033 50.3033Z"
                        fill="url(#paint0_linear_1391_2809)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1391_2809"
                          x1="60.5"
                          y1="0"
                          x2="147.394"
                          y2="65.1275"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#5188FF" />
                          <stop offset="1" stopColor="#1E59DA" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </div>
              </div>
              <h2 className="text-xl font-semibold mt-4">
                Complete Your Profile
              </h2>
              <p className="text-[#797979] mt-2">
                We&apos;d love to get to know you better. Completing your
                profile helps us personalize your experience and connect you
                with the right tools and people. It only takes a minute,
                let&apos;s do it!
              </p>
            </div>
            <button
              onClick={handleProceed}
              className="bg-[#5188FF] text-white px-4 py-2 rounded-md w-full font-medium"
            >
              Proceed
            </button>
            <button
              onClick={handleCloseModal}
              className="text-blue-500 mt-4 block mx-auto"
            >
              Maybe Later
            </button>
            <p className="text-[#797979] text-sm mt-4">
              NOTE: If you skip this process you cannot accept orders till
              you&apos;re verified.
            </p>
          </div>
        </div>
      )}

      {/* Personal Information Modal */}
      {showPersonalInfoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-[805px] w-full">
            <div className="flex justify-end">
              <button onClick={handleCloseModal} className="text-gray-500">
                ✕
              </button>
            </div>
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-[#797979] my-3">
                  Full name
                </label>
                <input
                  type="text"
                  defaultValue=""
                  className="w-full p-2 border h-[54px] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border-[#EEEEEE]"
                />
              </div>
              <div>
                <label className="block text-sm text-[#797979] my-3">
                  Service offered
                </label>
                <select className="w-full p-2 border text-[#797979] h-[54px] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border-[#EEEEEE]">
                  <option>Select service</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-[#797979] my-3">
                  Service Level
                </label>
                <select className="w-full p-2 border text-[#797979] h-[54px] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border-[#EEEEEE]">
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Expert</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-[#797979] my-3">
                  Preferred language
                </label>
                <select className="w-full p-2 border text-[#797979] h-[54px] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border-[#EEEEEE]">
                  <option>English</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-[#797979] my-3">
                  Location
                </label>
                <select className="w-full p-2 border h-[54px] text-[#797979] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border-[#EEEEEE]">
                  <option>Talinn</option>
                </select>
              </div>
              <button
                type="button"
                onClick={handlePersonalInfoNext}
                className="bg-[#5188FF] text-white px-4 py-2 rounded-md w-full font-medium"
              >
                Next
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Service Provider Verification Modal */}
      {showServiceProviderModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-[805px] w-full">
            <div className="flex justify-end">
              <button onClick={handleCloseModal} className="text-gray-500">
                ✕
              </button>
            </div>
            <h2 className="text-xl font-semibold mb-4">
              Service Provider Verification
            </h2>
            <form onSubmit={handleServiceProviderSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-[#797979]">
                  Upload Certificate of Practice
                </label>
                <div className="flex items-center border border-[#EEEEEE] rounded-md p-2">
                  <label className="text-blue-500 flex items-center gap-1 cursor-pointer">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    Choose file
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleCertificateOfPracticeChange}
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
                  </label>
                  <span className="ml-2 text-gray-500">
                    {certificateOfPractice
                      ? certificateOfPractice.name
                      : "No file chosen"}
                  </span>
                </div>
              </div>
              <div>
                <label className="block text-sm text-[#797979]">
                  Upload Certificate of Business Registration
                </label>
                <div className="flex items-center border border-[#EEEEEE] rounded-md p-2">
                  <label className="text-blue-500 flex items-center gap-1 cursor-pointer">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    Choose file
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleCertificateOfBusinessChange}
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
                  </label>
                  <span className="ml-2 text-gray-500">
                    {certificateOfBusiness
                      ? certificateOfBusiness.name
                      : "No file chosen"}
                  </span>
                </div>
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-[#5188FF] text-white px-4 py-2 rounded-md w-full font-medium ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
              <button
                type="button"
                onClick={handleCloseModal}
                className="text-blue-500 mt-4 block mx-auto"
              >
                Complete later
              </button>
              <p className="text-[#797979] text-sm mt-4">
                NOTE: If you skip this process you cannot accept orders till
                you&apos;re verified.
              </p>
            </form>
          </div>
        </div>
      )}

      {/* Verification Pending Modal */}
      {showVerificationPendingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-[805px] w-full text-center">
            <div className="flex justify-end">
              <button onClick={handleCloseModal} className="text-gray-500">
                ✕
              </button>
            </div>
            <div className="mb-4">
              <div className="flex justify-center">
                <div className="rounded-full flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-[#5188FF]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
              </div>
              <h2 className="text-xl font-semibold mt-4">
                Verification Pending
              </h2>
              <p className="text-[#797979] mt-2">
                Your documents will be reviewed within a short period of time
              </p>
            </div>
            <button
              onClick={handleGoToDashboard}
              className="bg-[#5188FF] text-white px-4 py-2 rounded-md w-full font-medium"
            >
              Go to dashboard
            </button>
          </div>
        </div>
      )}
    </div>
  );

};

export default Dashboard;
