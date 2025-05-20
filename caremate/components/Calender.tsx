"use client";

import React, { useState } from "react";
import dayjs from "dayjs";

type CalendarDay = {
  date: dayjs.Dayjs;
  hasMedicine: boolean;
  hasAppointment: boolean;
};

const generateCalendar = (year: number, month: number): CalendarDay[] => {
  const daysInMonth = dayjs().year(year).month(month).daysInMonth();
  const startDate = dayjs().year(year).month(month).startOf("month");

  return Array.from({ length: daysInMonth }, (_, i) => {
    const date = startDate.add(i, "day");
    const hasMedicine = [
      1, 2, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17,
      18, 19, 21, 22, 23, 24, 25, 26, 27, 29, 30, 31,
    ].includes(date.date());
    const hasAppointment = [3, 10, 20, 28].includes(date.date());

    return { date, hasMedicine, hasAppointment };
  });
};

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const days = generateCalendar(currentDate.year(), currentDate.month());

  const prevMonth = () => {
    setCurrentDate(currentDate.subtract(1, "month"));
  };

  const nextMonth = () => {
    setCurrentDate(currentDate.add(1, "month"));
  };

  return (
    <div className="flex flex-col gap-12 items-center w-full max-w-5xl mx-auto px-4">
      {/* Calendar */}
      <div className="bg-gradient-to-r from-pink-100 to-blue-100 p-10 rounded-3xl shadow-2xl w-full transition-all">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={prevMonth}
            className="text-white bg-blue-500 px-4 py-2 rounded-full shadow hover:bg-blue-600 transition"
          >
            &larr; Prev
          </button>
          <h2 className="text-3xl font-extrabold text-black tracking-wide">
            {currentDate.format("MMMM YYYY")}
          </h2>
          <button
            onClick={nextMonth}
            className="text-white bg-blue-500 px-4 py-2 rounded-full shadow hover:bg-blue-600 transition"
          >
            Next &rarr;
          </button>
        </div>

        <div className="grid grid-cols-7 gap-4 text-center font-semibold text-gray-700 mb-2">
          {["S", "M", "T", "W", "Th", "F", "Sa"].map((d) => (
            <div key={d} className="uppercase">{d}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-4 text-center">
          {Array.from({ length: days[0].date.day() }).map((_, i) => (
            <div key={`blank-${i}`} />
          ))}

          {days.map((day) => {
            const today = dayjs();
            const isPast = day.date.isBefore(today, "day");
            const isToday = day.date.isSame(today, "day");

            return (
              <div key={day.date.toString()} className="relative group">
                <div
                  className={`
                    w-14 h-14 flex items-center justify-center 
                    text-base font-semibold rounded-xl border-2
                    ${isPast ? "text-gray-400 bg-gray-100 border-gray-200" : ""}
                    ${isToday ? "text-white bg-blue-500 border-blue-700" : ""}
                    ${!isPast && !isToday ? "text-gray-800 bg-white border-gray-300 hover:scale-105 " : ""}
                    ${day.hasMedicine && !isPast ? "border-blue-500" : ""}
                    ${day.hasAppointment && !isPast ? "border-pink-500 border-4 rounded-2xl" : ""}
                  `}
                >
                  {day.date.date()}
                </div>

                {(day.hasMedicine || day.hasAppointment) && !isPast && (
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-700 bg-white px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition">
                    {day.hasMedicine && "💊 Medicine"}
                    {day.hasMedicine && day.hasAppointment && " & "}
                    {day.hasAppointment && "📅 Appointment"}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex justify-around text-sm font-medium text-gray-800">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-white border-2 border-blue-500" />
            Medicine Day
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-lg bg-white border-4 border-pink-500" />
            Appointment Day
          </div>
        </div>
      </div>

      {/* Enhanced Inputs */}
      <div className="w-full flex flex-col gap-8">
        {/* Next Important Date */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-400 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
          <label className="block mb-3 text-xl font-semibold text-blue-900 select-none">
            🗓️ Next Important Date
          </label>
          <input
            type="text"
            className="w-full p-4 border border-blue-300 rounded-lg 
              focus:outline-none focus:ring-4 focus:ring-blue-400
              transition duration-300 placeholder-blue-400 text-blue-900
              shadow-sm hover:shadow-md bg-white"
            placeholder="e.g., Appointment on May 22"
          />
        </div>

        {/* Personal Notes or Reminders */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-l-4 border-purple-400 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
          <label className="block mb-3 text-xl font-semibold text-purple-900 select-none">
            ✍️ Personal Notes or Reminders
          </label>
          <textarea
            rows={5}
            className="w-full p-4 border border-purple-300 rounded-lg 
              focus:outline-none focus:ring-4 focus:ring-purple-400
              transition duration-300 placeholder-purple-400 text-purple-900
              shadow-sm hover:shadow-md resize-none bg-white"
            placeholder="Write your thoughts or reminders..."
          />
        </div>
      </div>
    </div>
  );
}
