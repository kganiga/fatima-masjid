import React, { useState, useEffect } from "react";
import Papa from "papaparse";

interface PrayerTime {
  Prayer: string;
  Azan: string;
  Zamat: string;
}

const PRAYER_DATA_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQivjOOxc12rSHYN_FBEkrr5NBu_lUH1UpKmYe57cSBeExZSi2dZtX_ufZGk7HEdG23Hz8la-FHykme/pub?output=csv";

const PrayerTimes: React.FC = () => {
  const [prayerTimes, setPrayerTimes] = useState<PrayerTime[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        const response = await fetch(PRAYER_DATA_URL);
        if (!response.ok) throw new Error("Failed to fetch data");

        const csvData = await response.text();
        const parsed = Papa.parse(csvData, {
          header: true,
          skipEmptyLines: true,
        });

        const validPrayerTimes = (parsed.data as PrayerTime[]).filter(
          (prayer) => prayer.Prayer && prayer.Azan && prayer.Zamat
        );

        setPrayerTimes(validPrayerTimes);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPrayerTimes();
  }, []);

  return (
    <div className="py-16 px-4 bg-white text-center" >
      {/* Header */}
      {/* 
      <h1 className="text-5xl font-bold text-black my-4">
        Our <span className="text-yellow-600">Namaz</span> Timings
      </h1> */}

      {/* Loading and Error Handling */}
      {loading && <p className="text-gray-600">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Display Prayer Timings */}
      {!loading && !error && prayerTimes.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 max-w-5xl mx-auto mt-10">
          {prayerTimes.map((prayer, index) => (
            <div
              key={index}
              className="relative bg-[#FEF8E7] p-10 shadow-md flex flex-col items-center text-center 
                         transition-all transform hover:scale-105 hover:shadow-2xl hover:bg-green-600 
                         hover:text-white border border-yellow-400"
              style={{
                clipPath:
                  "polygon(50% 0%, 85% 10%, 100% 50%, 85% 90%, 50% 100%, 15% 90%, 0% 50%, 15% 10%)",
              }}
            >
              <h3 className="text-2xl font-bold mt-2">{prayer.Prayer}</h3>
              <p className="text-lg  mt-2">Azan: {prayer.Azan}</p>
              <p className="text-md font-semibold mt-1">
                Iqamah: {prayer.Zamat}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PrayerTimes;
