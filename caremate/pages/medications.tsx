"use client"

import Head from "next/head"
import Link from "next/link"
import { useState } from "react"
import { useTheme } from "next-themes"
import Navbar from "../components/Navbar"
import { Plus, Search, Filter, MoreVertical, Edit, Trash2, Clock, CheckCircle, AlertCircle } from "lucide-react"

// Mock data for medications
const mockMedications = [
  {
    id: 1,
    name: "Aspirin",
    dosage: "100mg",
    frequency: "Once daily",
    time: "8:00 AM",
    status: "taken",
    nextDose: "Tomorrow, 8:00 AM",
  },
  {
    id: 2,
    name: "Vitamin D",
    dosage: "1000 IU",
    frequency: "Once daily",
    time: "1:00 PM",
    status: "upcoming",
    nextDose: "Today, 1:00 PM",
  },
  {
    id: 3,
    name: "Metformin",
    dosage: "500mg",
    frequency: "Twice daily",
    time: "8:00 AM, 8:00 PM",
    status: "upcoming",
    nextDose: "Today, 8:00 PM",
  },
  {
    id: 4,
    name: "Lisinopril",
    dosage: "10mg",
    frequency: "Once daily",
    time: "9:00 AM",
    status: "taken",
    nextDose: "Tomorrow, 9:00 AM",
  },
  {
    id: 5,
    name: "Atorvastatin",
    dosage: "20mg",
    frequency: "Once daily",
    time: "9:00 PM",
    status: "missed",
    nextDose: "Today, 9:00 PM",
  },
]

export default function Medications() {
  const { theme } = useTheme()
  const [searchTerm, setSearchTerm] = useState("")
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null)

  // Filter medications based on search term
  const filteredMedications = mockMedications.filter(
    (med) =>
      med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      med.dosage.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const toggleDropdown = (id: number) => {
    if (activeDropdown === id) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(id)
    }
  }

  return (
    <>
      <Head>
        <title>Medications - MediTrack</title>
        <meta name="description" content="Manage your medications" />
      </Head>

      <Navbar />

      <main className={`min-h-screen pt-16 ${theme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}>
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h1 className={`text-2xl md:text-3xl font-bold ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
              My Medications
            </h1>

            <Link
              href="/medications/add"
              className="mt-4 md:mt-0 flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              <Plus className="w-5 h-5 mr-2" />
              <span>Add Medication</span>
            </Link>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className={`h-5 w-5 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`} />
              </div>
              <input
                type="text"
                placeholder="Search medications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                  theme === "dark" ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-300 text-gray-900"
                } focus:outline-none focus:ring-2 focus:ring-purple-500`}
              />
            </div>

            <button
              className={`px-4 py-2 rounded-lg flex items-center ${
                theme === "dark"
                  ? "bg-gray-800 text-white hover:bg-gray-700"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              } border ${theme === "dark" ? "border-gray-700" : "border-gray-300"}`}
            >
              <Filter className="w-5 h-5 mr-2" />
              <span>Filter</span>
            </button>
          </div>

          {/* Medications List */}
          <div className="space-y-4">
            {filteredMedications.length > 0 ? (
              filteredMedications.map((medication) => (
                <div
                  key={medication.id}
                  className={`p-4 rounded-xl ${theme === "dark" ? "bg-gray-800" : "bg-white"} shadow-sm`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex items-start">
                      <div
                        className={`p-2 rounded-full mr-4 ${
                          medication.status === "taken"
                            ? "bg-green-100 dark:bg-green-900/30"
                            : medication.status === "upcoming"
                              ? "bg-blue-100 dark:bg-blue-900/30"
                              : "bg-red-100 dark:bg-red-900/30"
                        }`}
                      >
                        {medication.status === "taken" ? (
                          <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                        ) : medication.status === "upcoming" ? (
                          <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        ) : (
                          <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                        )}
                      </div>

                      <div>
                        <h2 className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                          {medication.name}
                        </h2>
                        <p className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                          {medication.dosage} • {medication.frequency}
                        </p>
                        <p className={`text-xs mt-1 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                          {medication.time}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center mt-4 md:mt-0">
                      <div className={`mr-4 text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                        <span className="block">Next dose:</span>
                        <span
                          className={`font-medium ${
                            medication.status === "upcoming"
                              ? "text-blue-500 dark:text-blue-400"
                              : theme === "dark"
                                ? "text-white"
                                : "text-gray-800"
                          }`}
                        >
                          {medication.nextDose}
                        </span>
                      </div>

                      <div className="relative">
                        <button
                          onClick={() => toggleDropdown(medication.id)}
                          className={`p-2 rounded-full ${theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
                        >
                          <MoreVertical className={`w-5 h-5 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`} />
                        </button>

                        {activeDropdown === medication.id && (
                          <div
                            className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg z-10 ${
                              theme === "dark" ? "bg-gray-800" : "bg-white"
                            } border ${theme === "dark" ? "border-gray-700" : "border-gray-300"}`}
                          >
                            <div className="py-1">
                              <Link
                                href={`/medications/edit/${medication.id}`}
                                className={`flex items-center px-4 py-2 text-sm ${
                                  theme === "dark"
                                    ? "text-gray-300 hover:bg-gray-700"
                                    : "text-gray-700 hover:bg-gray-100"
                                }`}
                              >
                                <Edit className="w-4 h-4 mr-2" />
                                <span>Edit</span>
                              </Link>
                              <button
                                className={`w-full flex items-center px-4 py-2 text-sm text-left ${
                                  theme === "dark" ? "text-red-400 hover:bg-gray-700" : "text-red-600 hover:bg-gray-100"
                                }`}
                              >
                                <Trash2 className="w-4 h-4 mr-2" />
                                <span>Delete</span>
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className={`p-8 rounded-xl ${theme === "dark" ? "bg-gray-800" : "bg-white"} shadow-sm text-center`}>
                <p className={`mb-4 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                  No medications found matching your search.
                </p>
                <button
                  onClick={() => setSearchTerm("")}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}
