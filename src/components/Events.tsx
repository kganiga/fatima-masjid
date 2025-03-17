import React, { useState, useEffect } from "react";
import axios from "axios";
import { CalendarDays } from "lucide-react";

interface Event {
  date: string;
  hijriDate: string;
  name: string;
  description: string;
}

export default function Events() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchIslamicEvents = async () => {
      try {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1; // Months are 0-indexed

        const response = await axios.get(
          `https://api.aladhan.com/v1/gToHCalendar/${year}/${month}`
        );

        if (response.data && response.data.data) {
          const islamicEvents: Event[] = [];

          response.data.data.forEach((day: any) => {
            if (day.hijri.holidays.length > 0) {
              islamicEvents.push({
                date: day.gregorian.date, // Gregorian date
                hijriDate: day.hijri.date, // Hijri date
                name: day.hijri.holidays[0], // Event name
                description: `A significant day in the Islamic calendar: ${day.hijri.holidays[0]}.`,
              });
            }
          });

          // Sort events by upcoming dates
          islamicEvents.sort(
            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
          );

          setEvents(islamicEvents);
        }
      } catch (error) {
        setError("Failed to fetch Islamic events.");
      } finally {
        setLoading(false);
      }
    };

    fetchIslamicEvents();
  }, []);

  return (
    <div className="py-16 px-6 bg-[#f3f4f6]" id="events">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6 flex items-center justify-center gap-3">
          <CalendarDays className="text-gray-700" />
          Upcoming Islamic Events
        </h2>
        <p className="text-lg text-gray-600 text-center mb-8">
          Stay updated with important dates in the Islamic calendar.
        </p>

        {loading && (
          <p className="text-center text-gray-500 animate-pulse">
            Loading events...
          </p>
        )}
        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && !error && events.length > 0 && (
          <div className="relative">
            {/* Vertical Timeline Connector */}
            <div className="hidden md:block absolute left-1/2 top-0 w-1 h-full bg-gray-300 transform -translate-x-1/2"></div>

            <div className="flex flex-col gap-10">
              {events.map((event, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Circular Indicator */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-gray-500 rounded-full md:hidden"></div>

                  <div
                    className={`bg-gray-100 shadow-md rounded-lg p-6 w-full max-w-md md:max-w-lg lg:max-w-xl ${
                      index % 2 === 0 ? "md:ml-10" : "md:mr-10"
                    }`}
                  >
                    <h3 className="text-2xl font-semibold text-gray-700">
                      {event.name}
                    </h3>
                    <p className="text-gray-600 mt-2">{event.description}</p>
                    <p className="mt-3 text-gray-500 font-medium">
                      📅 {event.date} | 🕌 {event.hijriDate}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {!loading && !error && events.length === 0 && (
          <p className="text-center text-gray-500">
            No upcoming Islamic events found.
          </p>
        )}
      </div>
    </div>
  );
}
