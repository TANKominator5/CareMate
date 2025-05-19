"use client"

import Head from "next/head"
import Link from "next/link"
import { useTheme } from "next-themes"
import Navbar from "../components/Navbar"
import { Bell, CheckCircle, BarChart, Clock, Calendar, LineChart, Smartphone, Share2, Shield, CloudOff, Users, Zap } from 'lucide-react'

export default function Features() {
  const { theme } = useTheme()

  // Feature categories with their details
  const featureCategories = [
    {
      title: "Medication Management",
      description: "Comprehensive tools to manage all your medications in one place.",
      features: [
        {
          title: "Medication Tracking",
          description:
            "Keep track of all your medications, including dosage, frequency, and special instructions. Never forget what you're taking or why.",
          icon: <CheckCircle className={`w-6 h-6 ${theme === "dark" ? "text-purple-400" : "text-purple-600"}`} />,
        },
        {
          title: "Smart Reminders",
          description:
            "Receive timely notifications when it's time to take your medications. Customize reminder times and frequency based on your schedule.",
          icon: <Bell className={`w-6 h-6 ${theme === "dark" ? "text-purple-400" : "text-purple-600"}`} />,
        },
        {
          title: "Medication Schedule",
          description:
            "View your daily, weekly, or monthly medication schedule at a glance. Plan ahead and stay organized.",
          icon: <Calendar className={`w-6 h-6 ${theme === "dark" ? "text-purple-400" : "text-purple-600"}`} />,
        },
        {
          title: "Refill Alerts",
          description:
            "Get notified when your medications are running low. Set up automatic refill reminders to ensure you never run out.",
          icon: <Clock className={`w-6 h-6 ${theme === "dark" ? "text-purple-400" : "text-purple-600"}`} />,
        },
      ],
    },
    {
      title: "Analytics & Insights",
      description: "Gain valuable insights into your medication adherence and health patterns.",
      features: [
        {
          title: "Adherence Tracking",
          description:
            "Monitor how consistently you take your medications with detailed adherence metrics and visualizations.",
          icon: <BarChart className={`w-6 h-6 ${theme === "dark" ? "text-pink-400" : "text-pink-600"}`} />,
        },
        {
          title: "Health Trends",
          description:
            "Identify patterns and trends in your medication usage and health outcomes over time.",
          icon: <LineChart className={`w-6 h-6 ${theme === "dark" ? "text-pink-400" : "text-pink-600"}`} />,
        },
        {
          title: "Progress Reports",
          description:
            "Generate comprehensive reports to share with your healthcare providers for more informed discussions.",
          icon: <Share2 className={`w-6 h-6 ${theme === "dark" ? "text-pink-400" : "text-pink-600"}`} />,
        },
        {
          title: "Personalized Insights",
          description:
            "Receive tailored recommendations to improve your medication adherence based on your unique patterns.",
          icon: <Users className={`w-6 h-6 ${theme === "dark" ? "text-pink-400" : "text-pink-600"}`} />,
        },
      ],
    },
    {
      title: "User Experience",
      description: "Designed with simplicity and accessibility in mind.",
      features: [
        {
          title: "Mobile Friendly",
          description:
            "Access MediTrack from any device - desktop, tablet, or smartphone. Your data syncs seamlessly across all platforms.",
          icon: <Smartphone className={`w-6 h-6 ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`} />,
        },
        {
          title: "Offline Access",
          description:
            "View your medication schedule even without an internet connection. Your data is always available when you need it.",
          icon: <CloudOff className={`w-6 h-6 ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`} />,
        },
        {
          title: "Data Security",
          description:
            "Your health information is encrypted and secure. We prioritize your privacy and adhere to strict data protection standards.",
          icon: <Shield className={`w-6 h-6 ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`} />,
        },
        {
          title: "Fast Performance",
          description:
            "Enjoy a smooth, responsive experience with minimal loading times. MediTrack is optimized for speed and efficiency.",
          icon: <Zap className={`w-6 h-6 ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`} />,
        },
      ],
    },
  ]

  return (
    <>
      <Head>
        <title>Features - MediTrack</title>
        <meta name="description" content="Explore the features of MediTrack - your medication tracking solution" />
      </Head>

      <Navbar />

      <main className={`min-h-screen pt-16 ${theme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}>
        {/* Hero Section */}
        <section
          className={`py-16 ${theme === "dark" ? "bg-gray-800" : "bg-gradient-to-r from-purple-100 to-pink-100"}`}
        >
          <div className="container mx-auto px-4 text-center">
            <h1 className={`text-3xl md:text-5xl font-bold mb-6 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
              Powerful Features for Better{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                Medication Management
              </span>
            </h1>
            <p
              className={`text-lg max-w-3xl mx-auto mb-8 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
            >
              MediTrack combines intuitive design with powerful functionality to help you manage your medications
              effectively and improve your health outcomes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/signup"
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Get Started
              </Link>
              <a
                href="#features"
                className={`px-6 py-3 rounded-lg font-medium ${
                  theme === "dark"
                    ? "bg-gray-700 text-white hover:bg-gray-600"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                } border ${theme === "dark" ? "border-gray-600" : "border-gray-300"}`}
              >
                Explore Features
              </a>
            </div>
          </div>
        </section>

        {/* Feature Categories */}
        <section id="features" className={`py-16 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
          <div className="container mx-auto px-4">
            {featureCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-20 last:mb-0">
                <div className="text-center mb-12">
                  <h2
                    className={`text-3xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-800"}`}
                  >
                    {category.title}
                  </h2>
                  <p className={`max-w-2xl mx-auto ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className={`p-6 rounded-xl ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"} shadow-sm`}
                    >
                      <div className="flex items-start">
                        <div
                          className={`p-3 rounded-full mr-4 ${
                            theme === "dark" ? "bg-gray-700" : "bg-white"
                          } shadow-sm`}
                        >
                          {feature.icon}
                        </div>
                        <div>
                          <h3
                            className={`text-xl font-semibold mb-2 ${theme === "dark" ? "text-white" : "text-gray-800"}`}
                          >
                            {feature.title}
                          </h3>
                          <p className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className={`py-16 ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"}`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className={`text-3xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                What Our Users Say
              </h2>
              <p className={`max-w-2xl mx-auto ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                Thousands of people use MediTrack to manage their medications and improve their health outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "MediTrack has completely transformed how I manage my medications. The reminders are a lifesaver!",
                  author: "Sarah J.",
                  role: "Living with Diabetes",
                },
                {
                  quote:
                    "As a caregiver for my elderly mother, MediTrack helps me ensure she takes the right medications at the right time.",
                  author: "Michael T.",
                  role: "Family Caregiver",
                },
                {
                  quote:
                    "The analytics feature has helped me identify patterns and discuss them with my doctor. It's made a real difference.",
                  author: "Elena R.",
                  role: "Heart Patient",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl ${theme === "dark" ? "bg-gray-700" : "bg-white"} shadow-sm`}
                >
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <svg
                        className={`w-8 h-8 ${theme === "dark" ? "text-purple-400" : "text-purple-500"}`}
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10 8c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm12-14c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" />
                      </svg>
                    </div>
                    <p className={`flex-1 mb-4 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                      {testimonial.quote}
                    </p>
                    <div>
                      <p className={`font-semibold ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                        {testimonial.author}
                      </p>
                      <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={`py-16 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className={`text-3xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                Frequently Asked Questions
              </h2>
              <p className={`max-w-2xl mx-auto ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                Find answers to common questions about MediTrack and its features.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {[
                  {
                    question: "Is MediTrack free to use?",
                    answer:
                      "MediTrack offers a free basic plan with limited features. Premium plans are available for users who need advanced analytics, unlimited medications, and family sharing capabilities.",
                  },
                  {
                    question: "How secure is my health information?",
                    answer:
                      "We take security seriously. All your data is encrypted both in transit and at rest. We comply with healthcare privacy standards and never share your personal information with third parties without your explicit consent.",
                  },
                  {
                    question: "Can I use MediTrack for my family members?",
                    answer:
                      "Yes! With our family plan, you can manage medications for multiple family members from a single account, making it perfect for caregivers and parents.",
                  },
                  {
                    question: "Does MediTrack work offline?",
                    answer:
                      "Yes, MediTrack has offline capabilities. You can view your medication schedule and mark medications as taken even without an internet connection. Data will sync once you're back online.",
                  },
                  {
                    question: "Can I export my medication data?",
                    answer:
                      "Absolutely. You can export your medication history and adherence reports as PDF or CSV files to share with your healthcare providers or for your personal records.",
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-xl ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"} shadow-sm`}
                  >
                    <h3 className={`text-lg font-semibold mb-2 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                      {faq.question}
                    </h3>
                    <p className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className={`py-16 ${theme === "dark" ? "bg-gray-800" : "bg-gradient-to-r from-purple-500 to-pink-500"}`}
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Take Control of Your Medications?</h2>
            <p className="text-lg mb-8 text-white opacity-90 max-w-2xl mx-auto">
              Join thousands of users who have improved their medication adherence with MediTrack.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="px-8 py-3 bg-white text-purple-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Get Started Free
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 bg-transparent text-white border border-white rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
    </>
  )
}
