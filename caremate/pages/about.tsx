"use client"

import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import Navbar from "../components/Navbar"
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react"

export default function About() {
  const { theme } = useTheme()

  // Team members data
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Founder & CEO",
      bio: "Dr. Johnson founded MediTrack after witnessing medication adherence challenges in her clinical practice. With over 15 years of experience in healthcare technology, she leads our mission to improve health outcomes.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      bio: "Michael brings 12+ years of software development expertise to MediTrack. He previously led engineering teams at leading health tech companies and is passionate about creating intuitive healthcare solutions.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Priya Patel",
      role: "Head of Product",
      bio: "Priya oversees product strategy and user experience at MediTrack. Her background in healthcare UX design helps ensure our platform remains accessible and effective for users of all ages.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "James Wilson",
      role: "Medical Advisor",
      bio: "Dr. Wilson is a board-certified physician specializing in geriatric medicine. He provides clinical guidance to ensure MediTrack meets the complex medication management needs of our users.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  // Company values
  const companyValues = [
    {
      title: "User-Centered Design",
      description:
        "We design every feature with our users in mind, ensuring MediTrack is accessible and beneficial for people of all ages and technical abilities.",
    },
    {
      title: "Evidence-Based Approach",
      description:
        "Our features and recommendations are grounded in medical research and best practices for medication management and adherence.",
    },
    {
      title: "Privacy & Security",
      description:
        "We maintain the highest standards of data protection, ensuring your personal health information remains private and secure.",
    },
    {
      title: "Continuous Improvement",
      description:
        "We're constantly gathering user feedback and improving our platform to better serve the needs of our community.",
    },
  ]

  return (
    <>
      <Head>
        <title>About Us - MediTrack</title>
        <meta name="description" content="Learn about MediTrack's mission, team, and values" />
      </Head>

      <Navbar />

      <main className={`min-h-screen pt-16 ${theme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}>
        {/* Hero Section */}
        <section className={`py-16 ${theme === "dark" ? "bg-gray-800" : "bg-gradient-to-r from-blue-100 to-white"}`}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <h1
                  className={`text-3xl md:text-5xl font-bold mb-6 ${theme === "dark" ? "text-white" : "text-gray-800"}`}
                >
                  Our Mission is Your{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                    Health
                  </span>
                </h1>
                <p className={`text-lg mb-6 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                  At MediTrack, we're dedicated to improving medication adherence and health outcomes through technology
                  that's accessible, intuitive, and effective.
                </p>
                <p className={`text-lg ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                  Founded in 2020, we've helped thousands of users manage their medications more effectively and take
                  control of their health journey.
                </p>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md">
                  <div
                    className={`absolute inset-0 rounded-2xl ${
                      theme === "dark" ? "bg-purple-900/20" : "bg-purple-100"
                    } transform rotate-3`}
                  ></div>
                  <div
                    className={`relative p-6 rounded-2xl shadow-xl ${
                      theme === "dark" ? "bg-gray-800" : "bg-white"
                    } z-10`}
                  >
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="MediTrack team working"
                      width={600}
                      height={400}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className={`py-16 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2
                className={`text-3xl font-bold mb-6 text-center ${theme === "dark" ? "text-white" : "text-gray-800"}`}
              >
                Our Story
              </h2>
              <div className={`space-y-6 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                <p>
                  MediTrack was born from a simple observation: despite advances in medical treatments, many people
                  struggle to take their medications as prescribed, leading to poorer health outcomes and increased
                  healthcare costs.
                </p>
                <p>
                  Our founder, Dr. Sarah Johnson, witnessed this challenge firsthand in her clinical practice. She saw
                  patients with chronic conditions who were unable to manage complex medication regimens, leading to
                  preventable hospitalizations and complications.
                </p>
                <p>
                  In 2020, Dr. Johnson assembled a team of healthcare professionals, software engineers, and UX
                  designers to create a solution. The result was MediTrack - a platform designed to make medication
                  management simple, engaging, and effective.
                </p>
                <p>
                  Since our launch, we've grown from a small startup to a trusted health technology company serving
                  users across the country. We've expanded our features based on user feedback and research, always
                  keeping our core mission in focus: improving medication adherence and health outcomes through
                  accessible technology.
                </p>
                <p>
                  Today, MediTrack continues to innovate in the digital health space, partnering with healthcare
                  providers, pharmacies, and research institutions to develop new ways to support medication management
                  and improve patient outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className={`py-16 ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"}`}>
          <div className="container mx-auto px-4">
            <h2 className={`text-3xl font-bold mb-12 text-center ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {companyValues.map((value, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl ${theme === "dark" ? "bg-gray-700" : "bg-white"} shadow-sm`}
                >
                  <h3 className={`text-xl font-semibold mb-3 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                    {value.title}
                  </h3>
                  <p className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className={`py-16 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
          <div className="container mx-auto px-4">
            <h2 className={`text-3xl font-bold mb-12 text-center ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className={`rounded-xl overflow-hidden ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"} shadow-sm`}
                >
                  <div className="aspect-square relative">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className={`text-xl font-semibold mb-1 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                      {member.name}
                    </h3>
                    <p
                      className={`text-sm mb-3 ${theme === "dark" ? "text-purple-400" : "text-purple-600"} font-medium`}
                    >
                      {member.role}
                    </p>
                    <p className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className={`py-16 ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2
                className={`text-3xl font-bold mb-12 text-center ${theme === "dark" ? "text-white" : "text-gray-800"}`}
              >
                Get in Touch
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className={`text-xl font-semibold mb-6 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin
                        className={`w-5 h-5 mt-1 mr-3 ${theme === "dark" ? "text-purple-400" : "text-purple-600"}`}
                      />
                      <div>
                        <p className={theme === "dark" ? "text-white" : "text-gray-800"}>Our Office</p>
                        <p className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>
                          123 Health Avenue, Suite 500
                          <br />
                          San Francisco, CA 94107
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone
                        className={`w-5 h-5 mt-1 mr-3 ${theme === "dark" ? "text-purple-400" : "text-purple-600"}`}
                      />
                      <div>
                        <p className={theme === "dark" ? "text-white" : "text-gray-800"}>Phone</p>
                        <p className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail
                        className={`w-5 h-5 mt-1 mr-3 ${theme === "dark" ? "text-purple-400" : "text-purple-600"}`}
                      />
                      <div>
                        <p className={theme === "dark" ? "text-white" : "text-gray-800"}>Email</p>
                        <p className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>
                          contact@meditrack.example.com
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3
                    className={`text-xl font-semibold mt-8 mb-4 ${theme === "dark" ? "text-white" : "text-gray-800"}`}
                  >
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    {["Twitter", "Facebook", "LinkedIn", "Instagram"].map((platform, index) => (
                      <Link
                        key={index}
                        href="#"
                        className={`px-4 py-2 rounded-lg ${
                          theme === "dark"
                            ? "bg-gray-700 text-white hover:bg-gray-600"
                            : "bg-white text-gray-700 hover:bg-gray-100"
                        } border ${theme === "dark" ? "border-gray-600" : "border-gray-300"} transition-colors`}
                      >
                        {platform}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className={`p-6 rounded-xl ${theme === "dark" ? "bg-gray-700" : "bg-white"} shadow-sm`}>
                  <h3 className={`text-xl font-semibold mb-6 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                    Send Us a Message
                  </h3>
                  <form>
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className={`block mb-2 text-sm font-medium ${
                          theme === "dark" ? "text-gray-200" : "text-gray-700"
                        }`}
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className={`w-full px-4 py-2 rounded-lg border ${
                          theme === "dark"
                            ? "border-gray-600 bg-gray-600 text-white"
                            : "border-gray-300 bg-white text-gray-900"
                        } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className={`block mb-2 text-sm font-medium ${
                          theme === "dark" ? "text-gray-200" : "text-gray-700"
                        }`}
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className={`w-full px-4 py-2 rounded-lg border ${
                          theme === "dark"
                            ? "border-gray-600 bg-gray-600 text-white"
                            : "border-gray-300 bg-white text-gray-900"
                        } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="message"
                        className={`block mb-2 text-sm font-medium ${
                          theme === "dark" ? "text-gray-200" : "text-gray-700"
                        }`}
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className={`w-full px-4 py-2 rounded-lg border ${
                          theme === "dark"
                            ? "border-gray-600 bg-gray-600 text-white"
                            : "border-gray-300 bg-white text-gray-900"
                        } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className={`py-16 ${theme === "dark" ? "bg-gray-900" : "bg-gradient-to-r from-purple-500 to-pink-500"}`}
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Join Our Mission</h2>
            <p className="text-lg mb-8 text-white opacity-90 max-w-2xl mx-auto">
              Help us improve medication adherence and health outcomes for people everywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="px-8 py-3 bg-white text-purple-600 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/careers"
                className="px-8 py-3 bg-transparent text-white border border-white rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                Join Our Team
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
