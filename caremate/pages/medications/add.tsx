"use client"

import type React from "react"

import Head from "next/head"
import Link from "next/link"
import { useState } from "react"
import { useTheme } from "next-themes"
import Navbar from "../../components/Navbar"
import { ArrowLeft, Plus, X } from "lucide-react"

export default function AddMedication() {
  const { theme } = useTheme()
  const [formData, setFormData] = useState({
    name: "",
    dosage: "",
    dosageUnit: "mg",
    frequency: "daily",
    customFrequency: "",
    times: ["08:00"],
    startDate: new Date().toISOString().split("T")[0],
    endDate: "",
    withFood: "no",
    notes: "",
    reminders: true,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    })

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  const handleTimeChange = (index: number, value: string) => {
    const newTimes = [...formData.times]
    newTimes[index] = value
    setFormData({
      ...formData,
      times: newTimes,
    })
  }

  const addTimeSlot = () => {
    setFormData({
      ...formData,
      times: [...formData.times, "12:00"],
    })
  }

  const removeTimeSlot = (index: number) => {
    const newTimes = [...formData.times]
    newTimes.splice(index, 1)
    setFormData({
      ...formData,
      times: newTimes,
    })
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Medication name is required"
    }

    if (!formData.dosage.trim()) {
      newErrors.dosage = "Dosage is required"
    } else if (isNaN(Number(formData.dosage))) {
      newErrors.dosage = "Dosage must be a number"
    }

    if (formData.frequency === "custom" && !formData.customFrequency.trim()) {
      newErrors.customFrequency = "Please specify the custom frequency"
    }

    if (formData.times.length === 0) {
      newErrors.times = "At least one time is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      // Here you would typically send the data to your backend
      console.log("Form submitted:", formData)
      // For demo purposes, let's simulate a successful submission
      alert("Medication added successfully!")
      // In a real app, you would redirect to the medications list
    }
  }

  return (
    <>
      <Head>
        <title>Add Medication - CareMate</title>
        <meta name="description" content="Add a new medication to track" />
      </Head>

      <Navbar />

      <main className={`min-h-screen pt-16 ${theme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}>
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center mb-6">
            <Link
              href="/medications"
              className={`flex items-center text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"} hover:text-purple-600`}
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              <span>Back to Medications</span>
            </Link>
          </div>

          <div className="max-w-2xl mx-auto">
            <h1 className={`text-2xl font-bold mb-6 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
              Add New Medication
            </h1>

            <div className={`p-6 rounded-xl ${theme === "dark" ? "bg-gray-800" : "bg-white"} shadow-sm`}>
              <form onSubmit={handleSubmit}>
                {/* Medication Name */}
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className={`block mb-2 text-sm font-medium ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}
                  >
                    Medication Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.name
                        ? "border-red-500"
                        : theme === "dark"
                          ? "border-gray-600 bg-gray-700 text-white"
                          : "border-gray-300 bg-white text-gray-900"
                    } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                    placeholder="e.g., Aspirin"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>

                {/* Dosage */}
                <div className="mb-4">
                  <label
                    htmlFor="dosage"
                    className={`block mb-2 text-sm font-medium ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}
                  >
                    Dosage*
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      id="dosage"
                      name="dosage"
                      value={formData.dosage}
                      onChange={handleChange}
                      className={`w-2/3 px-4 py-2 rounded-l-lg border-y border-l ${
                        errors.dosage
                          ? "border-red-500"
                          : theme === "dark"
                            ? "border-gray-600 bg-gray-700 text-white"
                            : "border-gray-300 bg-white text-gray-900"
                      } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                      placeholder="e.g., 100"
                    />
                    <select
                      id="dosageUnit"
                      name="dosageUnit"
                      value={formData.dosageUnit}
                      onChange={handleChange}
                      className={`w-1/3 px-4 py-2 rounded-r-lg border-y border-r ${
                        theme === "dark"
                          ? "border-gray-600 bg-gray-700 text-white"
                          : "border-gray-300 bg-white text-gray-900"
                      } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                    >
                      <option value="mg">mg</option>
                      <option value="g">g</option>
                      <option value="mcg">mcg</option>
                      <option value="mL">mL</option>
                      <option value="IU">IU</option>
                      <option value="tablet">tablet(s)</option>
                      <option value="capsule">capsule(s)</option>
                    </select>
                  </div>
                  {errors.dosage && <p className="mt-1 text-sm text-red-500">{errors.dosage}</p>}
                </div>

                {/* Frequency */}
                <div className="mb-4">
                  <label
                    htmlFor="frequency"
                    className={`block mb-2 text-sm font-medium ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}
                  >
                    Frequency*
                  </label>
                  <select
                    id="frequency"
                    name="frequency"
                    value={formData.frequency}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      theme === "dark"
                        ? "border-gray-600 bg-gray-700 text-white"
                        : "border-gray-300 bg-white text-gray-900"
                    } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                  >
                    <option value="daily">Once daily</option>
                    <option value="twice">Twice daily</option>
                    <option value="three">Three times daily</option>
                    <option value="weekly">Once weekly</option>
                    <option value="monthly">Once monthly</option>
                    <option value="as_needed">As needed</option>
                    <option value="custom">Custom</option>
                  </select>
                </div>

                {/* Custom Frequency */}
                {formData.frequency === "custom" && (
                  <div className="mb-4">
                    <label
                      htmlFor="customFrequency"
                      className={`block mb-2 text-sm font-medium ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}
                    >
                      Custom Frequency*
                    </label>
                    <input
                      type="text"
                      id="customFrequency"
                      name="customFrequency"
                      value={formData.customFrequency}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        errors.customFrequency
                          ? "border-red-500"
                          : theme === "dark"
                            ? "border-gray-600 bg-gray-700 text-white"
                            : "border-gray-300 bg-white text-gray-900"
                      } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                      placeholder="e.g., Every other day"
                    />
                    {errors.customFrequency && <p className="mt-1 text-sm text-red-500">{errors.customFrequency}</p>}
                  </div>
                )}

                {/* Time(s) */}
                <div className="mb-4">
                  <label
                    className={`block mb-2 text-sm font-medium ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}
                  >
                    Time(s)*
                  </label>
                  {formData.times.map((time, index) => (
                    <div key={index} className="flex items-center mb-2">
                      <input
                        type="time"
                        value={time}
                        onChange={(e) => handleTimeChange(index, e.target.value)}
                        className={`flex-1 px-4 py-2 rounded-lg border ${
                          theme === "dark"
                            ? "border-gray-600 bg-gray-700 text-white"
                            : "border-gray-300 bg-white text-gray-900"
                        } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                      />
                      {formData.times.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeTimeSlot(index)}
                          className="ml-2 p-2 text-red-500 hover:text-red-700 rounded-full hover:bg-red-100 dark:hover:bg-red-900/30"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  ))}
                  {errors.times && <p className="mt-1 text-sm text-red-500">{errors.times}</p>}
                  <button
                    type="button"
                    onClick={addTimeSlot}
                    className={`mt-2 flex items-center text-sm ${theme === "dark" ? "text-purple-400" : "text-purple-600"} hover:underline`}
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    <span>Add another time</span>
                  </button>
                </div>

                {/* Start Date */}
                <div className="mb-4">
                  <label
                    htmlFor="startDate"
                    className={`block mb-2 text-sm font-medium ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}
                  >
                    Start Date*
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      theme === "dark"
                        ? "border-gray-600 bg-gray-700 text-white"
                        : "border-gray-300 bg-white text-gray-900"
                    } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                  />
                </div>

                {/* End Date */}
                <div className="mb-4">
                  <label
                    htmlFor="endDate"
                    className={`block mb-2 text-sm font-medium ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}
                  >
                    End Date (Optional)
                  </label>
                  <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      theme === "dark"
                        ? "border-gray-600 bg-gray-700 text-white"
                        : "border-gray-300 bg-white text-gray-900"
                    } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                  />
                </div>

                {/* With Food */}
                <div className="mb-4">
                  <label
                    htmlFor="withFood"
                    className={`block mb-2 text-sm font-medium ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}
                  >
                    Take With Food
                  </label>
                  <select
                    id="withFood"
                    name="withFood"
                    value={formData.withFood}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      theme === "dark"
                        ? "border-gray-600 bg-gray-700 text-white"
                        : "border-gray-300 bg-white text-gray-900"
                    } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                  >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                    <option value="before">Before food</option>
                    <option value="after">After food</option>
                  </select>
                </div>

                {/* Notes */}
                <div className="mb-6">
                  <label
                    htmlFor="notes"
                    className={`block mb-2 text-sm font-medium ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}
                  >
                    Notes (Optional)
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={3}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      theme === "dark"
                        ? "border-gray-600 bg-gray-700 text-white"
                        : "border-gray-300 bg-white text-gray-900"
                    } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                    placeholder="Any additional information about this medication..."
                  ></textarea>
                </div>

                {/* Reminders */}
                <div className="mb-6">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="reminders"
                      name="reminders"
                      checked={formData.reminders}
                      onChange={handleChange}
                      className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                    />
                    <label
                      htmlFor="reminders"
                      className={`ml-2 text-sm ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}
                    >
                      Enable reminders for this medication
                    </label>
                  </div>
                </div>

                {/* Submit Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                  >
                    Add Medication
                  </button>
                  <Link
                    href="/medications"
                    className={`px-6 py-3 rounded-lg font-medium text-center ${
                      theme === "dark"
                        ? "bg-gray-700 text-white hover:bg-gray-600"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    } transition-colors`}
                  >
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
