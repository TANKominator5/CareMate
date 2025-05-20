// pages/signup.tsx
"use client";

import Head from "next/head";
import Link from "next/link";
import { useState, ChangeEvent, FormEvent } from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router"; // For pages router
// import { useRouter } from 'next/navigation'; // For app router - CHOOSE ONE
import Navbar from "../components/Navbar"; // Adjust path
import Footer from "../components/Footer";   // Adjust path
import { Eye, EyeOff, Mail, KeyRound, User, AlertCircle, CheckCircle2 } from "lucide-react";
import { useAuth } from '../context/AuthContext'; // Adjust path

// Simple Google Icon SVG
const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    <path fill="none" d="M1 1h22v22H1z" />
  </svg>
);

interface SignUpFormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeTerms: boolean;
}

interface SignUpErrors {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  agreeTerms?: string;
  general?: string;
}


export default function SignUp() {
  const { theme } = useTheme();
  const router = useRouter(); // Ensure this matches your Next.js router version
  const { signUpWithEmailPassword, signInWithGoogle } = useAuth();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<SignUpFormData>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });
  const [errors, setErrors] = useState<SignUpErrors>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name as keyof SignUpErrors] || errors.general) {
      setErrors(prev => ({ ...prev, [name]: "", general: "" }));
    }
    setMessage("");
  };

  const validateForm = (): boolean => {
    let valid = true;
    const newErrors: SignUpErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
      valid = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
      valid = false;
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      valid = false;
    }
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "You must agree to the terms and conditions";
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleEmailSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");
    setErrors(prev => ({ ...prev, general: "" }));

    if (!validateForm()) {
      return;
    }
    setLoading(true);
    try {
      const { data, error } = await signUpWithEmailPassword({
        email: formData.email,
        password: formData.password,
        options: {
          data: { full_name: formData.fullName },
        }
      });

      if (error) {
        setErrors(prev => ({ ...prev, general: error.message }));
      } else if (data.user) {
        if (typeof window !== 'undefined') {
          localStorage.setItem('signupEmail', formData.email);
          localStorage.setItem('signupFullName', formData.fullName); // Store full name
        }
        setMessage("Sign up successful! A confirmation link has been sent to your email. Please verify.");
        router.push('/verify-otp');
      } else {
         setErrors(prev => ({ ...prev, general: "An unexpected error occurred. Please try again." }));
      }
    } catch (err: any) {
      setErrors(prev => ({ ...prev, general: err.message || "Sign up failed. Please try again." }));
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setLoading(true);
    setErrors(prev => ({ ...prev, general: "" }));
    setMessage("");
    try {
      const { error } = await signInWithGoogle();
      if (error) {
        setErrors(prev => ({ ...prev, general: error.message }));
      }
      // Redirection handled by Supabase and AuthContext
    } catch (err: any) {
      setErrors(prev => ({ ...prev, general: err.message || "Google Sign up failed." }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Sign Up - MediTrack</title>
        <meta name="description" content="Create your MediTrack account" />
      </Head>
      <Navbar />
      <main className={`min-h-screen pt-20 pb-12 ${theme === "dark" ? "bg-gray-900" : "bg-gradient-to-r from-blue-100 to-white"}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className={`rounded-xl shadow-lg overflow-hidden ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
              <div className="p-8">
                <h1 className={`text-2xl font-bold mb-6 text-center ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                  Create Your Account
                </h1>

                {errors.general && (
                  <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg flex items-center">
                    <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" /> {errors.general}
                  </div>
                )}
                {message && (
                  <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center">
                    <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0" /> {message}
                  </div>
                )}

                <form onSubmit={handleEmailSignUp}>
                  <div className="mb-4">
                    <label htmlFor="fullName" className={`block mb-2 text-sm font-medium ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}>
                      Full Name
                    </label>
                    <div className="relative">
                        <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`} />
                        <input
                        type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-2 rounded-lg border ${ errors.fullName ? "border-red-500" : theme === "dark" ? "border-gray-600 bg-gray-700 text-white" : "border-gray-300 bg-white text-gray-900" } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                        placeholder="John Doe"
                        />
                    </div>
                    {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className={`block mb-2 text-sm font-medium ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}>
                      Email Address
                    </label>
                     <div className="relative">
                        <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`} />
                        <input
                        type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-2 rounded-lg border ${ errors.email ? "border-red-500" : theme === "dark" ? "border-gray-600 bg-gray-700 text-white" : "border-gray-300 bg-white text-gray-900" } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                        placeholder="john.doe@example.com"
                        />
                    </div>
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="password" className={`block mb-2 text-sm font-medium ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}>
                      Password
                    </label>
                    <div className="relative">
                       <KeyRound className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`} />
                      <input
                        type={showPassword ? "text" : "password"} id="password" name="password" value={formData.password} onChange={handleChange}
                        className={`w-full pl-10 pr-10 py-2 rounded-lg border ${ errors.password ? "border-red-500" : theme === "dark" ? "border-gray-600 bg-gray-700 text-white" : "border-gray-300 bg-white text-gray-900" } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                        placeholder="••••••••"
                      />
                      <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <EyeOff className={`h-5 w-5 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`} /> : <Eye className={`h-5 w-5 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`} />}
                      </button>
                    </div>
                    {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
                    <p className={`mt-1 text-xs ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>Password must be at least 8 characters long</p>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="confirmPassword" className={`block mb-2 text-sm font-medium ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}>
                      Confirm Password
                    </label>
                     <div className="relative">
                        <KeyRound className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`} />
                        <input
                        type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-2 rounded-lg border ${ errors.confirmPassword ? "border-red-500" : theme === "dark" ? "border-gray-600 bg-gray-700 text-white" : "border-gray-300 bg-white text-gray-900" } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                        placeholder="••••••••"
                        />
                    </div>
                    {errors.confirmPassword && <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>}
                  </div>

                  <div className="mb-6">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="agreeTerms" name="agreeTerms" type="checkbox" checked={formData.agreeTerms} onChange={handleChange}
                          className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                        />
                      </div>
                      <div className="ml-3">
                        <label htmlFor="agreeTerms" className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                          I agree to the{" "}
                          <Link href="/terms" className="text-purple-600 hover:underline">Terms of Service</Link>{" "}
                          and{" "}
                          <Link href="/privacy" className="text-purple-600 hover:underline">Privacy Policy</Link>
                        </label>
                        {errors.agreeTerms && <p className="mt-1 text-sm text-red-500">{errors.agreeTerms}</p>}
                      </div>
                    </div>
                  </div>

                  <button type="submit" disabled={loading}
                    className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50">
                    {loading ? 'Creating Account...' : 'Create Account & Verify Email'}
                  </button>
                </form>

                <div className="my-6 flex items-center">
                  <div className={`flex-grow border-t ${theme === "dark" ? "border-gray-600" : "border-gray-300"}`}></div>
                  <span className={`px-4 text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>OR</span>
                  <div className={`flex-grow border-t ${theme === "dark" ? "border-gray-600" : "border-gray-300"}`}></div>
                </div>

                <button
                  onClick={handleGoogleSignUp}
                  disabled={loading}
                  className={`w-full py-3 px-4 flex items-center justify-center gap-2 rounded-lg font-medium border transition-colors disabled:opacity-50 ${
                    theme === "dark"
                      ? "bg-gray-700 text-white hover:bg-gray-600 border-gray-600"
                      : "bg-white text-gray-700 hover:bg-gray-50 border-gray-300"
                  }`}
                >
                  <GoogleIcon />
                  Sign Up with Google
                </button>

                <div className="mt-6 text-center">
                  <p className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>
                    Already have an account?{" "}
                    <Link href="/login" className="text-purple-600 hover:underline">Log in</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}