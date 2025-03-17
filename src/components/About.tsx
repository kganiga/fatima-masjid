export default function About() {
  return (
    <div className="py-20 px-6 bg-gray-50" id="about">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Side - Mosque Image */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="resources\image0.jpg"
            alt="Mosque"
            className="rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="md:w-1/2 text-center md:text-left px-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Our Mosque
            <span className="block w-20 h-1 bg-green-500 mt-2"></span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our mosque is a sacred place for prayer, reflection, and unity. We
            welcome everyone to join us in worship and find peace in the
            presence of Allah.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Daily prayers, Friday sermons, and community gatherings bring us
            closer to our faith and strengthen our bonds as an ummah.
          </p>

          {/* Decorative Elements */}
          <div className="mt-6 flex justify-center md:justify-start">
            <a
              href="#location"
              className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md transition-all hover:bg-green-700 hover:shadow-lg"
            >
              Visit Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
