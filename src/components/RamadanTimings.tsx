import React, { useState, useEffect } from "react";
import Papa from "papaparse";

interface RamadanTiming {
  Day: string;
  March: string;
  Roza: string;
  Sehri: string;
  Iftar: string;
}

export default function RamadanTimings() {
  const [ramadanTimings, setRamadanTimings] = useState<RamadanTiming[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRamadanTimings = async () => {
      try {
        const response = await fetch(
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vS68vC4VI3PdOE1sL5AejGl8EVZ5wEUZqDGfBZ7fqOt4YNJKpeHR-TeHfgRZj_7UA/pub?output=csv"
        );
        if (!response.ok) throw new Error("Failed to fetch Ramadan data");

        const csvData = await response.text();
        const parsed = Papa.parse(csvData, {
          header: true,
          skipEmptyLines: true,
        });

        const validTimings = parsed.data as RamadanTiming[];
        setRamadanTimings(validTimings);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchRamadanTimings();
  }, []);

  const today = new Date().getDate();
  const currentRoza = ramadanTimings.find(
    (day) => parseInt(day.March) === today
  );

  return (
    <section className="py-16 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-12">
        Ramadan Timings
      </h2>
      {loading && <p className="text-center text-gray-600">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {!loading && !error && ramadanTimings.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-3/4 mx-auto border-collapse border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-green-700 text-white">
                <th className="py-3 px-4 border border-gray-300">Day</th>
                <th className="py-3 px-4 border border-gray-300">Roza</th>
                <th className="py-3 px-4 border border-gray-300">Sehri</th>
                <th className="py-3 px-4 border border-gray-300">Iftar</th>
              </tr>
            </thead>
            <tbody>
              {ramadanTimings.map((day, index) => (
                <tr
                  key={index}
                  className={`text-center ${
                    currentRoza?.Roza === day.Roza
                      ? "bg-green-700 text-white font-bold"
                      : "bg-gray-100"
                  }`}
                >
                  <td className="py-3 px-4 border border-gray-300">
                    {day.Day}
                  </td>
                  <td className="py-3 px-4 border border-gray-300">
                    {day.Roza}
                  </td>
                  <td className="py-3 px-4 border border-gray-300">
                    {day.Sehri}
                  </td>
                  <td className="py-3 px-4 border border-gray-300">
                    {day.Iftar}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
