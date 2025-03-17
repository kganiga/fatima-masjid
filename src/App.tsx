import { motion } from "framer-motion";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import PrayerTimesSection from "./components/PrayerTimes";
import RamadanTimings from "./components/RamadanTimings";
import DailyQuranVerse from "./components/DailyQuranVerse";
import Gallery from "./components/Gallery";
import ServicesSection from "./components/Services";
import LocationSection from "./components/Location";
import Footer from "./components/Footer";

function App() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
      <Header scrollToSection={scrollToSection} />

      {/* Full-Width Sections with Modern Titles */}
      {[
        { id: "hero", component: <HeroSection /> },
        { id: "about", component: <About />, title: "About Us" },
        {
          id: "prayer",
          component: (
            <>
              <PrayerTimesSection />
              <RamadanTimings />
            </>
          ),
          title: "Our Namaz Timings",
        },
        { id: "quran", component: <DailyQuranVerse />, title: "Quran Verse" },
        { id: "gallery", component: <Gallery />, title: "Gallery" },
        {
          id: "services",
          component: <ServicesSection />,
          title: "Our Services",
        },
        { id: "location", component: <LocationSection />, title: "Find Us" },
      ].map((section, index) => (
        <motion.section
          key={section.id}
          className={`w-full py-24 px-6 relative overflow-hidden transition-all duration-300 
          ${
            index % 2 === 0
              ? "bg-white dark:bg-gray-800"
              : "bg-gray-100 dark:bg-gray-900"
          }`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          {/* Elegant Section Title */}
          {section.title && (
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
              className="text-6xl font-extrabold text-center text-green-700 dark:text-green-400 mb-12 tracking-wide"
            >
              {section.title}
            </motion.h2>
          )}

          {/* Content */}
          <div className="max-w-6xl mx-auto">{section.component}</div>
        </motion.section>
      ))}

      {/* Footer */}
      <motion.section
        className="w-full bg-gray-900 text-gray-200 py-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <Footer />
      </motion.section>
    </div>
  );
}

export default App;
