"use client"

import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import Navbar from "../components/Navbar"
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react"
import Footer from "../components/Footer"

export default function About() {
  const { theme } = useTheme()

  // Company values
  const companyValues = [
    {
      title: "User-Centered Design",
      description:
        "We design every feature with our users in mind, ensuring CareMate is accessible and beneficial for people of all ages and technical abilities.",
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
        <title>About Us - CareMate</title>
        <meta name="description" content="Learn about CareMate's mission, team, and values" />
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
                  At CareMate, we're dedicated to improving medication adherence and health outcomes through technology
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
                  CareMate was born from a simple observation: despite advances in medical treatments, many people
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
                  designers to create a solution. The result was CareMate - a platform designed to make medication
                  management simple, engaging, and effective.
                </p>
                <p>
                  Since our launch, we've grown from a small startup to a trusted health technology company serving
                  users across the country. We've expanded our features based on user feedback and research, always
                  keeping our core mission in focus: improving medication adherence and health outcomes through
                  accessible technology.
                </p>
                <p>
                  Today, CareMate continues to innovate in the digital health space, partnering with healthcare
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
            <div className={`max-w-4xl mx-auto rounded-3xl shadow-2xl p-10 md:p-14 ${theme === "dark" ? "bg-gradient-to-br from-purple-900/80 to-gray-900 border border-purple-800" : "bg-gradient-to-br from-purple-100 to-pink-100 border border-purple-200"}`}> 
              <h2 className={`text-3xl font-bold mb-6 text-center ${theme === "dark" ? "text-white" : "text-gray-800"}`}>Meet Our Team</h2>
              <div className="max-w-2xl mx-auto text-center mb-10">
                <p className={`text-xl md:text-2xl font-semibold tracking-wide ${theme === "dark" ? "text-purple-200" : "text-purple-700"} drop-shadow-sm`}>
                  We are a passionate group of healthcare professionals, technologists, and designers dedicated to making medication management simple, effective, and accessible for everyone. Our combined expertise in medicine, software engineering, and user experience powers CareMate's mission.
                </p>
              </div>
              <div className="flex flex-col md:flex-row justify-center gap-8">
                <div className={`flex-1 flex flex-col items-center p-8 rounded-2xl shadow-lg transition-transform hover:scale-105 min-w-[260px] ${theme === "dark" ? "bg-gradient-to-br from-purple-900/80 to-gray-800 text-white" : "bg-gradient-to-br from-purple-100 to-pink-100 text-gray-800"}`}
                  style={{maxWidth: 400}}>
                  <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-4 shadow-lg">
                    <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/></svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">A Diverse & Expert Team</h3>
                  <p className="text-base opacity-90 text-center">We are clinicians, engineers, and designers working together to empower you on your health journey. Our shared vision is to make medication adherence effortless and stress-free for all.</p>
                </div>
                <div className={`flex-1 flex flex-col items-center p-8 rounded-2xl shadow-lg transition-transform hover:scale-105 min-w-[260px] ${theme === "dark" ? "bg-gradient-to-br from-pink-900/80 to-gray-800 text-white" : "bg-gradient-to-br from-pink-100 to-purple-100 text-gray-800"}`}
                  style={{maxWidth: 400}}>
                  <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500 mb-4 shadow-lg">
                    <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><path d="M17 10.5V7c0-2.21-1.79-4-4-4s-4 1.79-4 4v3.5M12 17v2m-6-2v2m12-2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Driven by Compassion</h3>
                  <p className="text-base opacity-90 text-center">We care deeply about our users. Every feature is built with empathy, inspired by real stories and real needs. Your well-being is at the heart of everything we do.</p>
                </div>
              </div>
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
                          9 Devolper More, 11 Avenue,
                          <br />
                          IT Chawk, Kolkata 700010
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone
                        className={`w-5 h-5 mt-1 mr-3 ${theme === "dark" ? "text-purple-400" : "text-purple-600"}`}
                      />
                      <div>
                        <p className={theme === "dark" ? "text-white" : "text-gray-800"}>Phone</p>
                        <p className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>+91 70448 95961</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail
                        className={`w-5 h-5 mt-1 mr-3 ${theme === "dark" ? "text-purple-400" : "text-purple-600"}`}
                      />
                      <div>
                        <p className={theme === "dark" ? "text-white" : "text-gray-800"}>Email</p>
                        <p className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>
                          contact@caremate.co.in
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

      <Footer />
    </>
  )
}
