"use client"

import type React from "react"

import Head from "next/head"
import Link from "next/link"
import { useState } from "react"
import { useTheme } from "next-themes"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Eye, EyeOff } from "lucide-react"

export default function SignUp() {
  const { theme } = useTheme()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  })
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  const validateForm = () => {
    let valid = true
    const newErrors = { ...errors }

    // Validate full name
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
      valid = false
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      valid = false
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
      valid = false
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = "Password is required"
      valid = false
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
      valid = false
    }

    // Validate confirm password
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
      valid = false
    }

    // Validate terms agreement
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "You must agree to the terms and conditions"
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      // Here you would typically send the data to your backend
      console.log("Form submitted:", formData)
      // For demo purposes, let's simulate a successful signup
      alert("Account created successfully! Redirecting to login...")
      // In a real app, you would redirect to login or dashboard
    }
  }

  return (
    <>
      <Head>
        <title>Sign Up - MediTrack</title>
        <meta name="description" content="Create your MediTrack account" />
      </Head>

      <Navbar />

      <main className={`min-h-screen pt-16 ${theme === "dark" ? "bg-gray-900" : "gradient-blue-white"}`}>
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-md mx-auto">
            <div className={`rounded-xl shadow-lg overflow-hidden ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
              <div className="p-8">
                <h1
                  className={`text-2xl font-bold mb-6 text-center ${theme === "dark" ? "text-white" : "text-gray-800"}`}
                >
                  Create Your Account
                </h1>

                <form onSubmit={handleSubmit}>
                  {/* Full Name */}
                  <div className="mb-4">
                    <label
                      htmlFor="fullName"
                      className={`block mb-2 text-sm font-medium ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        errors.fullName
                          ? "border-red-500"
                          : theme === "dark"
                            ? "border-gray-600 bg-gray-700 text-white"
                            : "border-gray-300 bg-white text-gray-900"
                      } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                      placeholder="John Doe"
                    />
                    {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
                  </div>

                  {/* Email */}
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className={`block mb-2 text-sm font-medium ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        errors.email
                          ? "border-red-500"
                          : theme === "dark"
                            ? "border-gray-600 bg-gray-700 text-white"
                            : "border-gray-300 bg-white text-gray-900"
                      } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                      placeholder="john.doe@example.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>

                  {/* Password */}
                  <div className="mb-4">
                    <label
                      htmlFor="password"
                      className={`block mb-2 text-sm font-medium ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}
                    >
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg border ${
                          errors.password
                            ? "border-red-500"
                            : theme === "dark"
                              ? "border-gray-600 bg-gray-700 text-white"
                              : "border-gray-300 bg-white text-gray-900"
                        } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className={`h-5 w-5 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`} />
                        ) : (
                          <Eye className={`h-5 w-5 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`} />
                        )}
                      </button>
                    </div>
                    {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
                    <p className={`mt-1 text-xs ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                      Password must be at least 8 characters long
                    </p>
                  </div>

                  {/* Confirm Password */}
                  <div className="mb-6">
                    <label
                      htmlFor="confirmPassword"
                      className={`block mb-2 text-sm font-medium ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        errors.confirmPassword
                          ? "border-red-500"
                          : theme === "dark"
                            ? "border-gray-600 bg-gray-700 text-white"
                            : "border-gray-300 bg-white text-gray-900"
                      } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                      placeholder="••••••••"
                    />
                    {errors.confirmPassword && <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>}
                  </div>

                  {/* Terms and Conditions */}
                  <div className="mb-6">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="agreeTerms"
                          name="agreeTerms"
                          type="checkbox"
                          checked={formData.agreeTerms}
                          onChange={handleChange}
                          className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                        />
                      </div>
                      <div className="ml-3">
                        <label
                          htmlFor="agreeTerms"
                          className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
                        >
                          I agree to the{" "}
                          <Link href="/terms" className="text-purple-600 hover:underline">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link href="/privacy" className="text-purple-600 hover:underline">
                            Privacy Policy
                          </Link>
                        </label>
                        {errors.agreeTerms && <p className="mt-1 text-sm text-red-500">{errors.agreeTerms}</p>}
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Create Account
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <p className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>
                    Already have an account?{" "}
                    <Link href="/login" className="text-purple-600 hover:underline">
                      Log in
                    </Link>
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
