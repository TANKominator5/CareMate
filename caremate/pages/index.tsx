"use client"

import Head from "next/head"
import Link from "next/link"
import { useTheme } from "next-themes"
import Navbar from "../components/Navbar"
import { CheckCircle, Bell, BarChartIcon as ChartBar, Clock, ArrowRight } from "lucide-react"

export default function Index() {
  const { theme } = useTheme()

  return (
    <>
      <Head>
        <title>CareMate - Your Medication Tracking Solution</title>
        <meta name="description" content="Track your medications, get reminders, and view analytics with CareMate" />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section
        className={`pt-24 pb-16 ${theme === "dark" ? "bg-gray-900" : "bg-gradient-to-r from-blue-100 to-white"}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1
                className={`text-4xl md:text-5xl font-bold mb-6 ${theme === "dark" ? "text-white" : "text-gray-800"}`}
              >
                Never Miss a Dose{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                  Again
                </span>
              </h1>
              <p className={`text-lg mb-8 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                CareMate helps you stay on top of your medication schedule with timely reminders and comprehensive
                analytics to improve your health journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/signup"
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity text-center"
                >
                  Get Started
                </Link>
                <Link
                  href="/about"
                  className={`px-6 py-3 rounded-lg font-medium text-center ${
                    theme === "dark"
                      ? "bg-gray-800 text-white hover:bg-gray-700"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  } border ${theme === "dark" ? "border-gray-700" : "border-gray-300"}`}
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div
                  className={`absolute inset-0 rounded-2xl ${
                    theme === "dark" ? "bg-purple-900/20" : "bg-purple-100"
                  } transform rotate-3`}
                ></div>
                <div
                  className={`relative p-6 rounded-2xl shadow-xl ${theme === "dark" ? "bg-gray-800" : "bg-white"} z-10`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                      Today's Schedule
                    </h3>
                    <span
                      className={`text-sm px-3 py-1 rounded-full ${
                        theme === "dark" ? "bg-green-900/30 text-green-400" : "bg-green-100 text-green-800"
                      }`}
                    >
                      85% Complete
                    </span>
                  </div>
                  <div className="space-y-4">
                    {[
                      {
                        name: "Aspirin",
                        time: "8:00 AM",
                        status: "taken",
                        dosage: "100mg",
                      },
                      {
                        name: "Vitamin D",
                        time: "1:00 PM",
                        status: "upcoming",
                        dosage: "1000 IU",
                      },
                      {
                        name: "Metformin",
                        time: "8:00 PM",
                        status: "upcoming",
                        dosage: "500mg",
                      },
                    ].map((med, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg border ${
                          theme === "dark" ? "border-gray-700 bg-gray-700/50" : "border-gray-200 bg-gray-50"
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className={`font-medium ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                              {med.name}
                            </h4>
                            <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                              {med.dosage} • {med.time}
                            </p>
                          </div>
                          <div
                            className={`p-2 rounded-full ${
                              med.status === "taken"
                                ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                                : "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                            }`}
                          >
                            {med.status === "taken" ? (
                              <CheckCircle className="w-5 h-5" />
                            ) : (
                              <Clock className="w-5 h-5" />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/medications"
                    className={`mt-6 flex items-center justify-center w-full py-3 rounded-lg ${
                      theme === "dark"
                        ? "bg-gray-700 text-white hover:bg-gray-600"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <span>View All Medications</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-16 ${theme === "dark" ? "bg-gray-800" : "bg-gradient-to-r from-purple-100 to-pink-100"}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
              Key Features
            </h2>
            <p className={`max-w-2xl mx-auto ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
              CareMate offers everything you need to manage your medications effectively and improve your health
              outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Medication Tracking",
                description:
                  "Keep track of all your medications in one place, including dosage, frequency, and special instructions.",
                icon: (
                  <CheckCircle className={`w-10 h-10 ${theme === "dark" ? "text-purple-400" : "text-purple-600"}`} />
                ),
              },
              {
                title: "Timely Reminders",
                description:
                  "Receive notifications when it's time to take your medications, ensuring you never miss a dose.",
                icon: <Bell className={`w-10 h-10 ${theme === "dark" ? "text-pink-400" : "text-pink-600"}`} />,
              },
              {
                title: "Detailed Analytics",
                description:
                  "View comprehensive reports on your medication adherence and identify patterns to improve your health.",
                icon: <ChartBar className={`w-10 h-10 ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`} />,
              },
            ].map((feature, index) => (
              <div key={index} className={`p-6 rounded-xl ${theme === "dark" ? "bg-gray-700" : "bg-white"} shadow-sm`}>
                <div
                  className={`p-3 rounded-full inline-block mb-4 ${theme === "dark" ? "bg-gray-600" : "bg-gray-100"}`}
                >
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-3 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                  {feature.title}
                </h3>
                <p className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={`py-16 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
              How It Works
            </h2>
            <p className={`max-w-2xl mx-auto ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
              Getting started with CareMate is easy. Follow these simple steps to take control of your medication
              schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Create Your Account",
                description: "Sign up for a free account to get started with CareMate.",
              },
              {
                step: "2",
                title: "Add Your Medications",
                description: "Enter your medications, including dosage, frequency, and timing.",
              },
              {
                step: "3",
                title: "Stay on Track",
                description: "Receive reminders and track your progress with detailed analytics.",
              },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4 ${
                    theme === "dark"
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                      : "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                  }`}
                >
                  {item.step}
                </div>
                <h3 className={`text-xl font-semibold mb-3 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                  {item.title}
                </h3>
                <p className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 ${theme === "dark" ? "bg-gray-800" : "bg-gradient-to-r from-purple-500 to-pink-500"}`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Take Control?</h2>
          <p className="text-lg mb-8 text-white opacity-90 max-w-2xl mx-auto">
            Join thousands of users who have improved their medication adherence with CareMate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="px-8 py-3 bg-white text-purple-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Sign Up Free
            </Link>
            <Link
              href="/login"
              className="px-8 py-3 bg-transparent text-white border border-white rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              Log In
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 ${theme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-2"></div>
                <span className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                  CareMate
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
              <h3 className={`text-lg font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                Legal
              </h3>
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
              <p>&copy; {new Date().getFullYear()} CareMate. All rights reserved.</p>
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
    </>
  )
}
