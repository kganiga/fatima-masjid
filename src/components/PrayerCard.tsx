import React from "react";

interface PrayerCardProps {
  name: string;
  azan: string;
  zamat: string;
  icon: React.ReactNode;
}

export default function PrayerCard({
  name,
  azan,
  zamat,
  icon,
}: PrayerCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-2 flex flex-col items-center">
      <div className="text-blue-500 text-4xl mb-3">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-700">Azan: {azan}</p>
      <p className="text-gray-700">Zamat: {zamat}</p>
    </div>
  );
}
