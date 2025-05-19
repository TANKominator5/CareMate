"use client"

import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { useTheme } from "next-themes"
import Navbar from "../../components/Navbar"
import { ArrowLeft, Calendar, Download, Share2, ChevronDown } from "lucide-react"

// Mock data for analytics details
const mockMedicationData = {
  adherence: {
    title: "Adherence Details",
    description: "Detailed breakdown of your medication adherence",
    metrics: [
      { name: "Overall Adherence", value: "85%" },
      { name: "Morning Doses", value: "95%" },
      { name: "Afternoon Doses", value: "80%" },
      { name: "Evening Doses", value: "75%" },
    ],
    chart: {
      title: "Adherence by Time of Day",
      data: [
        { name: "Morning", value: 95 },
        { name: "Afternoon", value: 80 },
        { name: "Evening", value: 75 },
      ],
    },
    insights: [
      "Your evening medication adherence is lower than other times of day.",
      "Setting a consistent evening routine may help improve adherence.",
      "Your overall adherence has improved by 5% compared to last month.",
    ],
  },
  trends: {
    title: "Trend Analysis",
    description: "Long-term trends in your medication adherence",
    metrics: [
      { name: "Current Week", value: "85%" },
      { name: "Previous Week", value: "80%" },
      { name: "Monthly Average", value: "82%" },
      { name: "Best Day", value: "Monday" },
    ],
    chart: {
      title: "Weekly Adherence Trend",
      data: [
        { name: "Week 1", value: 75 },
        { name: "Week 2", value: 78 },
        { name: "Week 3", value: 80 },
        { name: "Week 4", value: 85 },
      ],
    },
    insights: [
      "Your adherence has been steadily improving over the past month.",
      "Mondays show the highest adherence rate, while weekends are lower.",
      "Setting weekend reminders may help maintain consistency.",
    ],
  },
  medications: {
    title: "Medication Analysis",
    description: "Detailed breakdown by medication",
    metrics: [
      { name: "Total Medications", value: "4" },
      { name: "Most Adherent", value: "Aspirin (95%)" },
      { name: "Least Adherent", value: "Metformin (76%)" },
      { name: "Recently Added", value: "Vitamin D" },
    ],
    chart: {
      title: "Adherence by Medication",
      data: [
        { name: "Aspirin", value: 95 },
        { name: "Vitamin D", value: 88 },
        { name: "Lisinopril", value: 92 },
        { name: "Metformin", value: 76 },
      ],
    },
    insights: [
      "Metformin has the lowest adherence rate at 76%.",
      "Consider adjusting the timing of Metformin to improve adherence.",
      "Aspirin has consistently high adherence at 95%.",
    ],
  },
}

export default function AnalyticsDetail() {
  const { theme } = useTheme()
  const router = useRouter()
  const { id } = router.query
  const [timeRange, setTimeRange] = useState("Last 30 Days")
  const [showTimeRangeDropdown, setShowTimeRangeDropdown] = useState(false)

  // Get the data for the current analytics type
  const analyticsData = id && typeof id === "string" ? mockMedicationData[id as keyof typeof mockMedicationData] : null

  if (!analyticsData) {
    return (
      <>
        <Head>
          <title>Analytics Details - MediTrack</title>
          <meta name="description" content="Detailed analytics for your medications" />
        </Head>

        <Navbar />

        <main className={`min-h-screen pt-16 ${theme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}>
          <div className="container mx-auto px-4 py-8">
            <div className="flex items-center mb-8">
              <Link
                href="/analytics"
                className={`flex items-center text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"} hover:text-purple-600`}
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                <span>Back to Analytics</span>
              </Link>
            </div>

            <div className={`p-8 rounded-xl ${theme === "dark" ? "bg-gray-800" : "bg-white"} shadow-sm text-center`}>
              <h2 className={`text-xl font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                Analytics Not Found
              </h2>
              <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                The requested analytics details could not be found.
              </p>
              <Link
                href="/analytics"
                className="mt-4 inline-block px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
              >
                Return to Analytics
              </Link>
            </div>
          </div>
        </main>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>{analyticsData.title} - MediTrack</title>
        <meta name="description" content={analyticsData.description} />
      </Head>

      <Navbar />

      <main className={`min-h-screen pt-16 ${theme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}>
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center mb-4">
            <Link
              href="/analytics"
              className={`flex items-center text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"} hover:text-purple-600`}
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              <span>Back to Analytics</span>
            </Link>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className={`text-2xl md:text-3xl font-bold ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                {analyticsData.title}
              </h1>
              <p className={`mt-1 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                {analyticsData.description}
              </p>
            </div>

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
                      {["Last 7 Days", "Last 30 Days", "Last 90 Days", "This Year", "All Time"].map((range) => (
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
                title="Download Report"
              >
                <Download className="w-5 h-5" />
              </button>

              <button
                className={`ml-2 p-2 rounded-lg ${
                  theme === "dark"
                    ? "bg-gray-800 text-white hover:bg-gray-700"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                } border ${theme === "dark" ? "border-gray-700" : "border-gray-300"}`}
                title="Share Report"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {analyticsData.metrics.map((metric, index) => (
              <div key={index} className={`p-6 rounded-xl ${theme === "dark" ? "bg-gray-800" : "bg-white"} shadow-sm`}>
                <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>{metric.name}</p>
                <h3 className={`text-2xl font-bold mt-1 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                  {metric.value}
                </h3>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className={`p-6 rounded-xl ${theme === "dark" ? "bg-gray-800" : "bg-white"} shadow-sm mb-8`}>
            <h2 className={`text-lg font-semibold mb-6 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
              {analyticsData.chart.title}
            </h2>

            <div className="h-64">
              {/* Bar Chart Visualization */}
              <div className="h-full flex items-end justify-around">
                {analyticsData.chart.data.map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div
                      className="w-16 bg-gradient-to-t from-purple-500 to-pink-500 rounded-t-md"
                      style={{ height: `${item.value}%` }}
                    ></div>
                    <div className="mt-2 text-center">
                      <p className={`text-sm font-medium ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                        {item.value}%
                      </p>
                      <p className={`text-xs ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>{item.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Insights */}
          <div className={`p-6 rounded-xl ${theme === "dark" ? "bg-gray-800" : "bg-white"} shadow-sm`}>
            <h2 className={`text-lg font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
              Key Insights
            </h2>

            <ul className="space-y-2">
              {analyticsData.insights.map((insight, index) => (
                <li key={index} className={`flex items-start ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                  <div className="min-w-[8px] h-2 w-2 rounded-full bg-purple-500 mt-2 mr-3"></div>
                  <p>{insight}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}
