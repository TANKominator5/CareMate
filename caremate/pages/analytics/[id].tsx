"use client"

import Head from "next/head"
import Link from "next/link"
import { useState } from "react"
import { useTheme } from "next-themes"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { Calendar, PieChart, BarChart, TrendingUp, Filter, ChevronDown, ChevronRight } from "lucide-react"

// Mock data for analytics
const mockAdherenceData = [
  { name: "Taken", value: 85 },
  { name: "Missed", value: 15 },
]

const mockWeeklyData = [
  { day: "Mon", adherence: 100 },
  { day: "Tue", adherence: 100 },
  { day: "Wed", adherence: 75 },
  { day: "Thu", adherence: 100 },
  { day: "Fri", adherence: 50 },
  { day: "Sat", adherence: 100 },
  { day: "Sun", adherence: 75 },
]

const mockMedicationData = [
  { name: "Aspirin", adherence: 95 },
  { name: "Vitamin D", adherence: 88 },
  { name: "Metformin", adherence: 76 },
  { name: "Lisinopril", adherence: 92 },
]

export default function Analytics() {
  const { theme } = useTheme()
  const [timeRange, setTimeRange] = useState("This Week")
  const [showTimeRangeDropdown, setShowTimeRangeDropdown] = useState(false)

  return (
    <>
      <Head>
        <title>Analytics - MediTrack</title>
        <meta name="description" content="View your medication analytics and insights" />
      </Head>

      <Navbar />

      <main className={`min-h-screen pt-16 ${theme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}>
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h1 className={`text-2xl md:text-3xl font-bold ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
              Analytics Dashboard
            </h1>

            <div className="mt-4 md:mt-0 flex items-center">
              <div className="relative">
                <button
                  onClick={() => setShowTimeRangeDropdown(!showTimeRangeDropdown)}
                  className={`flex items-center px-4 py-2 rounded-lg ${
                    theme === "dark"
                      ? "bg-gray-800 text-white hover:bg-gray-700"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  } border ${theme === "dark" ? "border-gray-700" : "border-gray-300"}`}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{timeRange}</span>
                  <ChevronDown className="w-4 h-4 ml-2" />
                </button>

                {showTimeRangeDropdown && (
                  <div
                    className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg z-10 ${
                      theme === "dark" ? "bg-gray-800" : "bg-white"
                    } border ${theme === "dark" ? "border-gray-700" : "border-gray-200"}`}
                  >
                    <div className="py-1">
                      {["Today", "This Week", "This Month", "Last 3 Months", "This Year"].map((range) => (
                        <button
                          key={range}
                          onClick={() => {
                            setTimeRange(range)
                            setShowTimeRangeDropdown(false)
                          }}
                          className={`block w-full text-left px-4 py-2 text-sm ${
                            timeRange === range
                              ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
                              : theme === "dark"
                                ? "text-gray-300 hover:bg-gray-700"
                                : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <button
                className={`ml-2 p-2 rounded-lg ${
                  theme === "dark"
                    ? "bg-gray-800 text-white hover:bg-gray-700"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                } border ${theme === "dark" ? "border-gray-700" : "border-gray-300"}`}
              >
                <Filter className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "Overall Adherence",
                value: "85%",
                change: "+5%",
                positive: true,
                icon: <PieChart className={`w-6 h-6 ${theme === "dark" ? "text-purple-400" : "text-purple-600"}`} />,
              },
              {
                title: "Medications Tracked",
                value: "4",
                change: "+1",
                positive: true,
                icon: <BarChart className={`w-6 h-6 ${theme === "dark" ? "text-pink-400" : "text-pink-600"}`} />,
              },
              {
                title: "Streak",
                value: "12 days",
                change: "+3",
                positive: true,
                icon: <TrendingUp className={`w-6 h-6 ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`} />,
              },
            ].map((card, index) => (
              <div key={index} className={`p-6 rounded-xl ${theme === "dark" ? "bg-gray-800" : "bg-white"} shadow-sm`}>
                <div className="flex justify-between items-start">
                  <div>
                    <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>{card.title}</p>
                    <h3 className={`text-2xl font-bold mt-1 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                      {card.value}
                    </h3>
                    <div className="flex items-center mt-1">
                      <span className={`text-xs font-medium ${card.positive ? "text-green-500" : "text-red-500"}`}>
                        {card.change}
                      </span>
                      <span className={`text-xs ml-1 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                        vs previous period
                      </span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-full ${theme === "dark" ? "bg-gray-700" : "bg-gray-100"}`}>
                    {card.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Adherence Chart */}
            <div className={`p-6 rounded-xl ${theme === "dark" ? "bg-gray-800" : "bg-white"} shadow-sm`}>
              <div className="flex justify-between items-center mb-6">
                <h2 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                  Medication Adherence
                </h2>
                <Link href="/analytics/adherence" className="flex items-center text-sm text-purple-600 hover:underline">
                  <span>View Details</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              <div className="flex flex-col md:flex-row items-center">
                {/* Pie Chart Placeholder */}
                <div className="w-48 h-48 relative mb-4 md:mb-0">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full border-8 border-purple-500 flex items-center justify-center">
                      <span className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                        85%
                      </span>
                    </div>
                    <div
                      className="absolute top-0 right-0 w-32 h-32 rounded-full border-8 border-transparent border-t-pink-500 border-r-pink-500"
                      style={{ transform: "rotate(54deg)" }}
                    ></div>
                  </div>
                </div>

                {/* Legend */}
                <div className="md:ml-8">
                  <div className="space-y-4">
                    {mockAdherenceData.map((item, index) => (
                      <div key={index} className="flex items-center">
                        <div
                          className={`w-4 h-4 rounded-full ${index === 0 ? "bg-purple-500" : "bg-pink-500"} mr-3`}
                        ></div>
                        <div>
                          <p className={`text-sm font-medium ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                            {item.name}
                          </p>
                          <p className={`text-xs ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                            {item.value}%
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <p className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                      You've taken 85% of your medications on time this week. Keep up the good work!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Weekly Trend Chart */}
            <div className={`p-6 rounded-xl ${theme === "dark" ? "bg-gray-800" : "bg-white"} shadow-sm`}>
              <div className="flex justify-between items-center mb-6">
                <h2 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                  Weekly Trend
                </h2>
                <Link href="/analytics/trends" className="flex items-center text-sm text-purple-600 hover:underline">
                  <span>View Details</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              <div className="h-64 flex items-end justify-between">
                {mockWeeklyData.map((day, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div
                      className="w-10 bg-gradient-to-t from-purple-500 to-pink-500 rounded-t-md"
                      style={{ height: `${day.adherence}%` }}
                    ></div>
                    <p className={`mt-2 text-xs ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>{day.day}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Medication Breakdown */}
          <div className={`p-6 rounded-xl ${theme === "dark" ? "bg-gray-800" : "bg-white"} shadow-sm mb-8`}>
            <div className="flex justify-between items-center mb-6">
              <h2 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                Medication Breakdown
              </h2>
              <Link href="/analytics/medications" className="flex items-center text-sm text-purple-600 hover:underline">
                <span>View All</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className={`border-b ${theme === "dark" ? "border-gray-700" : "border-gray-200"}`}>
                    <th
                      className={`py-3 text-left text-xs font-medium ${theme === "dark" ? "text-gray-400" : "text-gray-500"} uppercase tracking-wider`}
                    >
                      Medication
                    </th>
                    <th
                      className={`py-3 text-left text-xs font-medium ${theme === "dark" ? "text-gray-400" : "text-gray-500"} uppercase tracking-wider`}
                    >
                      Adherence
                    </th>
                    <th
                      className={`py-3 text-left text-xs font-medium ${theme === "dark" ? "text-gray-400" : "text-gray-500"} uppercase tracking-wider`}
                    >
                      Progress
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {mockMedicationData.map((med, index) => (
                    <tr
                      key={index}
                      className={`${index !== mockMedicationData.length - 1 ? `border-b ${theme === "dark" ? "border-gray-700" : "border-gray-200"}` : ""}`}
                    >
                      <td className={`py-4 text-sm font-medium ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                        {med.name}
                      </td>
                      <td className={`py-4 text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                        {med.adherence}%
                      </td>
                      <td className="py-4">
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                          <div
                            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full"
                            style={{ width: `${med.adherence}%` }}
                          ></div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Insights */}
          <div className={`p-6 rounded-xl ${theme === "dark" ? "bg-gray-800" : "bg-white"} shadow-sm`}>
            <h2 className={`text-lg font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
              Insights
            </h2>

            <div className="space-y-4">
              {[
                {
                  title: "Improved Adherence",
                  description: "Your medication adherence has improved by 5% compared to last week.",
                  type: "positive",
                },
                {
                  title: "Missed Doses",
                  description: "You missed Metformin most frequently. Consider setting additional reminders.",
                  type: "warning",
                },
                {
                  title: "Best Time",
                  description: "You're most consistent with morning medications (95% adherence).",
                  type: "info",
                },
              ].map((insight, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg ${
                    insight.type === "positive"
                      ? "bg-green-100 dark:bg-green-900/30 border-l-4 border-green-500"
                      : insight.type === "warning"
                        ? "bg-yellow-100 dark:bg-yellow-900/30 border-l-4 border-yellow-500"
                        : "bg-blue-100 dark:bg-blue-900/30 border-l-4 border-blue-500"
                  }`}
                >
                  <h3
                    className={`text-sm font-medium mb-1 ${
                      insight.type === "positive"
                        ? "text-green-800 dark:text-green-300"
                        : insight.type === "warning"
                          ? "text-yellow-800 dark:text-yellow-300"
                          : "text-blue-800 dark:text-blue-300"
                    }`}
                  >
                    {insight.title}
                  </h3>
                  <p
                    className={`text-xs ${
                      insight.type === "positive"
                        ? "text-green-700 dark:text-green-200"
                        : insight.type === "warning"
                          ? "text-yellow-700 dark:text-yellow-200"
                          : "text-blue-700 dark:text-blue-200"
                    }`}
                  >
                    {insight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
