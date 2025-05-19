"use client"

import Link from "next/link"
import { useTheme } from "next-themes"

const Footer = () => {
  const { theme } = useTheme()

  return (
    <footer className={`py-12 ${theme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-2"></div>
              <span className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                MediTrack
              </span>
            </div>
            <p className={`mb-4 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
              Your personal medication tracking solution for better health outcomes.
            </p>
          </div>

          <div>
            <h3 className={`text-lg font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
              Features
            </h3>
            <ul className={`space-y-2 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
              <li>
                <Link href="/features" className="hover:text-purple-500 transition-colors">
                  Medication Tracking
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-purple-500 transition-colors">
                  Reminders
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-purple-500 transition-colors">
                  Analytics
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-purple-500 transition-colors">
                  Health Insights
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={`text-lg font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
              Company
            </h3>
            <ul className={`space-y-2 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
              <li>
                <Link href="/about" className="hover:text-purple-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-purple-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-purple-500 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-purple-500 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={`text-lg font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>Legal</h3>
            <ul className={`space-y-2 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
              <li>
                <Link href="/privacy" className="hover:text-purple-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-purple-500 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-purple-500 transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`mt-12 pt-8 border-t ${theme === "dark" ? "border-gray-800 text-gray-400" : "border-gray-200 text-gray-600"}`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} MediTrack. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-purple-500 transition-colors">
                  Twitter
                </Link>
                <Link href="#" className="hover:text-purple-500 transition-colors">
                  Facebook
                </Link>
                <Link href="#" className="hover:text-purple-500 transition-colors">
                  Instagram
                </Link>
                <Link href="#" className="hover:text-purple-500 transition-colors">
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
