// pages/verify-otp.tsx
"use client";

import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/router'; // For pages router
// import { useRouter } from 'next/navigation'; // For app router - CHOOSE ONE
import { useAuth } from '../../context/AuthContext'; // Adjust path
import Navbar from '../../components/Navbar'; // Adjust path
import Footer from '../../components/Footer'; // Adjust path
import Head from "next/head";
import { useTheme } from "next-themes";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export default function VerifyOtpPage() {
  const { theme } = useTheme();
  const [otp, setOtp] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const router = useRouter(); // Ensure this matches your Next.js router version
  const { verifyOtp: verifySupabaseOtp, user, updateUserFullName } = useAuth();

  useEffect(() => {
    let storedEmail: string | null = null;
    if (typeof window !== 'undefined') {
        storedEmail = localStorage.getItem('signupEmail');
    }
    if (storedEmail) {
      setEmail(storedEmail);
    } else {
      setError("Email not found for OTP verification. Please try signing up again or check your email for the link.");
    }

    if (user && user.email_confirmed_at) {
        if (typeof window !== 'undefined') localStorage.removeItem('signupEmail');
        router.push('/');
    }
  }, [user, router]);

  useEffect(() => {
    const checkEmailConfirmation = async () => {
        if (user && user.email_confirmed_at) {
            setMessage("Email already verified. Redirecting...");
            if (typeof window !== 'undefined') {
                localStorage.removeItem('signupEmail');
                const storedFullName = localStorage.getItem('signupFullName');
                if (storedFullName && user.user_metadata?.full_name !== storedFullName) {
                    try {
                        await updateUserFullName(storedFullName);
                        localStorage.removeItem('signupFullName');
                    } catch (updateError) {
                        console.error("Failed to update full name:", updateError);
                    }
                }
            }
            setTimeout(() => router.push('/'), 2000);
        }
    };
    checkEmailConfirmation();
  }, [user, router, updateUserFullName]);


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      setError("Email is missing. Cannot verify OTP.");
      return;
    }
    if (!otp.trim()) {
      setError("Please enter the token from your email.");
      return;
    }
    setLoading(true);
    setError('');
    setMessage('');

    try {
      const { data, error: otpError } = await verifySupabaseOtp({
        email,
        token: otp,
        type: 'signup',
      });

      if (otpError) {
        setError(otpError.message || "Invalid or expired token. Please try again or request a new one.");
      } else if (data.user && data.session) {
        setMessage("Email verified successfully! Redirecting...");
        if (typeof window !== 'undefined') {
            localStorage.removeItem('signupEmail');
            const storedFullName = localStorage.getItem('signupFullName');
            if (storedFullName) {
                await updateUserFullName(storedFullName); // AuthContext already checks for user
                localStorage.removeItem('signupFullName');
            }
        }
        setTimeout(() => router.push('/'), 2000);
      } else {
        setError("Token verification might be successful, but failed to log in. Please try logging in manually.");
      }
    } catch (err: any) {
        setError("An unexpected error occurred during token verification.");
    } finally {
        setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Verify Email - CareMate</title>
        <meta name="description" content="Verify your email with the token sent to you." />
      </Head>
      <Navbar />
      <main className={`min-h-screen pt-20 pb-12 ${theme === "dark" ? "bg-gray-900" : "bg-gradient-to-r from-blue-100 to-white"}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className={`rounded-xl shadow-lg overflow-hidden ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
              <div className="p-8">
                <h1 className={`text-2xl font-bold mb-6 text-center ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                  Verify Your Email
                </h1>
                <p className={`mb-4 text-center ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                  A confirmation link with a token has been sent to <strong>{email || "your email address"}</strong>.
                  Please click the link, or copy the token from the link/email and enter it below.
                </p>
                {error && (
                  <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg flex items-center">
                    <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" /> {error}
                  </div>
                )}
                {message && (
                  <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center">
                    <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0" /> {message}
                  </div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="otp"
                      className={`block mb-2 text-sm font-medium ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}
                    >
                      Verification Token
                    </label>
                    <input
                      type="text"
                      id="otp"
                      name="otp"
                      value={otp}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => setOtp(e.target.value)}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        theme === "dark"
                          ? "border-gray-600 bg-gray-700 text-white"
                          : "border-gray-300 bg-white text-gray-900"
                      } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                      placeholder="Enter token from email"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading || !email}
                    className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    {loading ? 'Verifying...' : 'Verify Email'}
                  </button>
                </form>
                 <div className="mt-4 text-center text-sm">
                    <p className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
                        Didn't receive an email? Check your spam folder or <Link href="/signup" className="text-purple-600 hover:underline">try signing up again</Link>.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}