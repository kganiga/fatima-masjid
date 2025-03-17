import React from "react";

const LocationSection: React.FC = () => {
  return (
    <div className="py-16 px-4 bg-gray-100" id="location">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-lg text-gray-600 mb-6">
          Visit us at our masjid for prayers and community events.
        </p>

        {/* Google Maps Embed */}
        <div className="relative h-96 w-full">
          <iframe
            className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.1934381051587!2d78.54085417470091!3d14.758129285747168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb478bd57e9921d%3A0x78208baefda4b903!2sFathima%20Masid%2C%20Muslim%20Street%2C%20Buddaya%20Pally%2C%20Proddatur!5e0!3m2!1sen!2sin!4v1741867665505!5m2!1sen!2sin"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
