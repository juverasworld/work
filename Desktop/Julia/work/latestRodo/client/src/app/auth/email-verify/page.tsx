
"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import Cookies from "universal-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface User {
  id: string;
  email: string;
  role: "professional" | "client";
  name?: string;
  isEmailVerified?: boolean;
}

export default function EmailVerification() {
  const CODE_LENGTH = 4;
  const router = useRouter();
  const searchParams = useSearchParams();
  const cookies = new Cookies();
  const queryEmail = searchParams.get("email") || "";
  const [email, setEmail] = useState("");
  const [code, setCode] = useState<string[]>(Array(CODE_LENGTH).fill(""));
  const [timer, setTimer] = useState(90);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const inputRefs = useRef<HTMLInputElement[]>([]);

  // Initialize email from cookie or query
  useEffect(() => {
    const metadata: User | undefined = cookies.get("session_metadata");
    console.log("Session metadata:", metadata); // Debug cookie
    if (metadata?.email) {
      setEmail(metadata.email);
    } else if (queryEmail && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(queryEmail)) {
      setEmail(queryEmail);
    } else {
      toast.warn(
        "No email found. Please enter your email to receive a verification code.",
        {
          position: "top-right",
          autoClose: 5000,
        }
      );
    }
  }, [queryEmail, cookies]);

  // Timer for resend button
  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(countdown);
    } else {
      setIsResendDisabled(false);
    }
  }, [timer]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    if (value && index < CODE_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async () => {
    const fullCode = code.join("");
    if (fullCode.length !== CODE_LENGTH) {
      toast.error("Please enter all 4 digits.", {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }

    try {
      const response = await axios.post(
        "https://api.myrodo.com/auth/verify-email",
        { token: fullCode },
        { headers: { "Content-Type": "application/json" } }
      );

      toast.success(response.data.message || "Email verified successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
      // Update cookie to mark email as verified
      const metadata: User | undefined = cookies.get("session_metadata");
      if (metadata) {
        cookies.set(
          "session_metadata",
          { ...metadata, isEmailVerified: true },
          {
            path: "/",
            maxAge: 86400,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
          }
        );
      }
      router.push("/auth/sign-in");
    } catch (error: any) {
      console.error("Verification failed:", error);
      let errorMessage = "An unexpected error occurred. Please try again.";

      if (error.code === "ERR_NETWORK") {
        errorMessage =
          "Unable to connect to the server. Please check your internet connection.";
      } else if (error.response) {
        const { message, error: apiError } = error.response.data || {};
        errorMessage =
          message ||
          apiError ||
          `Verification failed with status ${error.response.status}.`;
      }

      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };

  const handleResend = async () => {
    if (!email) {
      toast.error("Please enter a valid email address.", {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Invalid email format. Please enter a valid email.", {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }

    try {
      const response = await axios.post(
        "https://api.myrodo.com/auth/send-verification-email",
        { email },
        { headers: { "Content-Type": "application/json" } }
      );

      setTimer(90);
      setIsResendDisabled(true);
      setCode(Array(CODE_LENGTH).fill(""));
      inputRefs.current[0]?.focus();

      toast.success(response.data.message || "Verification code resent!", {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (error: any) {
      console.error("Resend failed:", error);
      let errorMessage =
        "Failed to resend verification code. Please try again.";

      if (error.code === "ERR_NETWORK") {
        errorMessage =
          "Unable to connect to the server. Please check your internet connection.";
      } else if (error.response) {
        const { message, error: apiError } = error.response.data || {};
        errorMessage =
          message ||
          apiError ||
          `Resend failed with status ${error.response.status}.`;
      }

      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 outfit-font">
      <div className="max-w-md w-full space-y-6 text-center">
        <h1 className="text-4xl font-bold text-[#6D758F] tracking-tight flex items-center justify-center">
          <Link href="/">
            <Image
              src="/logo.svg"
              width={100}
              height={100}
              alt="logo"
              className="w-auto"
            />
          </Link>
        </h1>
        <div>
          <h2 className="text-[32px] font-semibold text-[#6D758F]">
            Verification Code Sent!
          </h2>
          <p className="text-[#6D758F] text-sm mt-1">
            {email
              ? `We've sent a verification code to ${email}. Enter the code to proceed.`
              : "Please enter your email to receive a verification code."}
          </p>
        </div>

        {/* Email Input (if no email provided) */}
        {!email && (
          <div className="space-y-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-md border border-[#6D758F] p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#6D758F]"
              aria-label="Email address"
            />
          </div>
        )}

        {/* Input Boxes */}
        <div className="flex justify-center gap-3">
          {code.map((digit, i) => (
            <input
              key={i}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              ref={(el) => {
                if (el) inputRefs.current[i] = el;
              }}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              className="w-14 h-14 border-2 border-[#6D758F] rounded-md text-2xl text-center focus:outline-none focus:border-gray-600"
              aria-label={`Verification code digit ${i + 1}`}
            />
          ))}
        </div>

        {/* Verify Button */}
        <button
          onClick={handleVerify}
          disabled={!email}
          className={`w-full py-3 rounded-md font-medium text-white ${
            email
              ? "bg-[#6D758F] hover:bg-gray-600"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Verify Now
        </button>

        {/* Resend & Timer */}
        <div className="text-sm text-[#6D758F]">
          <p>
            Didn&apos;t receive the code?{" "}
            <button
              onClick={handleResend}
              disabled={isResendDisabled || !email}
              className={`${
                isResendDisabled || !email
                  ? "text-gray-400"
                  : "text-blue-600 underline"
              }`}
            >
              Resend code
            </button>
          </p>
          <p className="mt-2">{`${Math.floor(timer / 60)}:${String(
            timer % 60
          ).padStart(2, "0")} secs. left`}</p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}