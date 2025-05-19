"use client"

import type React from "react"

import Head from "next/head"
import Link from "next/link"
import { useState } from "react"
import { useTheme } from "next-themes"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Eye, EyeOff } from "lucide-react"

export default function Login() {
  const { theme } = useTheme()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
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

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      valid = false
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = "Password is required"
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      // Here you would typically authenticate with your backend
      console.log("Login attempt:", formData)

      // For demo purposes, let's simulate a successful login
      // In a real app, you would check credentials and handle errors
      if (formData.email === "demo@example.com" && formData.password === "password") {
        // Successful login
        alert("Login successful! Redirecting to dashboard...")
        // In a real app, you would redirect to the dashboard
      } else {
        // Failed login
        setErrors({
          ...errors,
          general: "Invalid email or password. Please try again.",
        })
      }
    }
  }

  return (
    <>
      <Head>
        <title>Log In - MediTrack</title>
        <meta name="description" content="Log in to your MediTrack account" />
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
                  Log In to Your Account
                </h1>

                {errors.general && (
                  <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    {errors.general}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
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
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <label
                        htmlFor="password"
                        className={`text-sm font-medium ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}
                      >
                        Password
                      </label>
                      <Link href="/forgot-password" className="text-sm text-purple-600 hover:underline">
                        Forgot password?
                      </Link>
                    </div>
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
                  </div>

                  {/* Remember Me */}
                  <div className="flex items-center mb-6">
                    <input
                      id="rememberMe"
                      name="rememberMe"
                      type="checkbox"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                    />
                    <label
                      htmlFor="rememberMe"
                      className={`ml-2 text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
                    >
                      Remember me
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Log In
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <p className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>
                    Don't have an account?{" "}
                    <Link href="/signup" className="text-purple-600 hover:underline">
                      Sign up
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
