import React, { useState, useEffect } from "react";

interface QuranVerse {
  arabic: string;
  english: string;
  surah: string;
  verse: number;
}

const DailyQuranVerse: React.FC = () => {
  const [verse, setVerse] = useState<QuranVerse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVerse = async () => {
      try {
        const randomSurah = Math.floor(Math.random() * 114) + 1; // Random Surah (1-114)
        const randomVerse = Math.floor(Math.random() * 7) + 1; // First 7 verses (for simplicity)

        const arabicResponse = await fetch(
          `https://api.alquran.cloud/v1/ayah/${randomSurah}:${randomVerse}`
        );
        const englishResponse = await fetch(
          `https://api.alquran.cloud/v1/ayah/${randomSurah}:${randomVerse}/en.sahih`
        );

        if (!arabicResponse.ok || !englishResponse.ok)
          throw new Error("Failed to fetch Quran verse");

        const arabicData = await arabicResponse.json();
        const englishData = await englishResponse.json();

        setVerse({
          arabic: arabicData.data.text,
          english: englishData.data.text,
          surah: arabicData.data.surah.englishName,
          verse: arabicData.data.numberInSurah,
        });
      } catch (error) {
        setError("Could not fetch Quran verse.");
      } finally {
        setLoading(false);
      }
    };

    fetchVerse();
  }, []);

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 text-center border border-gray-200 mt-10">
      {loading && <p className="text-gray-600">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {verse && (
        <div>
          <p className="text-2xl font-semibold text-right arabic-font">
            {verse.arabic}
          </p>
          <p className="text-gray-700 italic mt-4">"{verse.english}"</p>
          <p className="text-sm text-gray-600 mt-2">
            — Surah {verse.surah} ({verse.verse})
          </p>
        </div>
      )}
    </div>
  );
};

export default DailyQuranVerse;
