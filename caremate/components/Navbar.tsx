"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Menu, X, Moon, Sun } from "lucide-react"

const Navbar = () => {
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  // After mounting, we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav
      className={`fixed w-full z-50 ${theme === "dark" ? "bg-gray-900/95" : "bg-gradient-to-r from-blue-100 to-white/95"} backdrop-blur-sm shadow-md`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-2"></div>
            <span className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-gray-800"}`}>MediTrack</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`${theme === "dark" ? "text-white" : "text-gray-700"} hover:text-purple-500 transition-colors`}
            >
              Home
            </Link>
            <Link
              href="/features"
              className={`${theme === "dark" ? "text-white" : "text-gray-700"} hover:text-purple-500 transition-colors`}
            >
              Features
            </Link>
            <Link
              href="/analytics"
              className={`${theme === "dark" ? "text-white" : "text-gray-700"} hover:text-purple-500 transition-colors`}
            >
              Analytics
            </Link>
            <Link
              href="/medications"
              className={`${theme === "dark" ? "text-white" : "text-gray-700"} hover:text-purple-500 transition-colors`}
            >
              Medications
            </Link>
            <Link
              href="/about"
              className={`${theme === "dark" ? "text-white" : "text-gray-700"} hover:text-purple-500 transition-colors`}
            >
              About
            </Link>
          </div>

          {/* Right Side - Auth & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={() => mounted && setTheme(theme === "dark" ? "light" : "dark")}
              className={`p-2 rounded-full ${theme === "dark" ? "bg-gray-800 text-yellow-300" : "bg-gray-200 text-gray-700"}`}
              aria-label="Toggle theme"
            >
              {mounted && theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Auth Buttons */}
            <Link
              href="/login"
              className={`px-4 py-2 rounded-lg ${theme === "dark" ? "text-white hover:bg-gray-800" : "text-gray-700 hover:bg-gray-100"} transition-colors`}
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={() => mounted && setTheme(theme === "dark" ? "light" : "dark")}
              className={`p-2 rounded-full ${theme === "dark" ? "bg-gray-800 text-yellow-300" : "bg-gray-200 text-gray-700"}`}
              aria-label="Toggle theme"
            >
              {mounted && theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={toggleMenu}
              className={`p-2 rounded-lg ${theme === "dark" ? "text-white" : "text-gray-700"}`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden ${theme === "dark" ? "bg-gray-900" : "bg-white"} shadow-lg`}>
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link
              href="/"
              className={`block py-2 px-4 rounded-lg ${theme === "dark" ? "text-white hover:bg-gray-800" : "text-gray-700 hover:bg-gray-100"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/features"
              className={`block py-2 px-4 rounded-lg ${theme === "dark" ? "text-white hover:bg-gray-800" : "text-gray-700 hover:bg-gray-100"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/analytics"
              className={`block py-2 px-4 rounded-lg ${theme === "dark" ? "text-white hover:bg-gray-800" : "text-gray-700 hover:bg-gray-100"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Analytics
            </Link>
            <Link
              href="/medications"
              className={`block py-2 px-4 rounded-lg ${theme === "dark" ? "text-white hover:bg-gray-800" : "text-gray-700 hover:bg-gray-100"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Medications
            </Link>
            <Link
              href="/about"
              className={`block py-2 px-4 rounded-lg ${theme === "dark" ? "text-white hover:bg-gray-800" : "text-gray-700 hover:bg-gray-100"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
              <Link
                href="/login"
                className={`block py-2 px-4 rounded-lg ${theme === "dark" ? "text-white hover:bg-gray-800" : "text-gray-700 hover:bg-gray-100"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className="block py-2 px-4 mt-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
