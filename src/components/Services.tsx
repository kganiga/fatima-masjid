import React from "react";
import ServiceCard from "./ServiceCard";

const ServicesSection: React.FC = () => {
  return (
    <div className="py-16 px-4 bg-white" id="services">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="Daily Prayers"
            description="Join us for the five daily prayers in congregation."
          />
          <ServiceCard
            title="Islamic Education"
            description="Weekly Quran classes and Islamic studies for all ages."
          />
          <ServiceCard
            title="Community Events"
            description="Regular community gatherings, lectures, and special events."
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
