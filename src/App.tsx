import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import SEO from "./components/SEO";
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
  const defaultTitle = "Fatima Masjid - Proddatur";
  const defaultDescription = "Fatima Masjid, Proddatur - A place of peace and worship.";

  const [currentTitle, setCurrentTitle] = useState(defaultTitle);
  const [currentDescription, setCurrentDescription] = useState(defaultDescription);

  // Section Data
  const sections = [
    { id: "hero", component: <HeroSection />, seoDescription: "" },
    {
      id: "about",
      component: <About />, 
      title: "About Us",
      seoDescription: "Learn more about Fatima Masjid and its history."
    },
    {
      id: "prayer-times",
      component: (
        <>
          <PrayerTimesSection />
          <RamadanTimings />
        </>
      ),
      title: "Our Namaz Timings",
      seoDescription: "Check the daily prayer times and Ramadan schedule at Fatima Masjid."
    },
    {
      id: "quran",
      component: <DailyQuranVerse />, 
      title: "Quran Verse",
      seoDescription: "Daily inspirational Quran verses for reflection and guidance."
    },
    {
      id: "gallery",
      component: <Gallery />, 
      title: "Gallery",
      seoDescription: "Explore the beautiful moments captured at Fatima Masjid."
    },
    {
      id: "services",
      component: <ServicesSection />, 
      title: "Our Services",
      seoDescription: "Discover the various services offered by Fatima Masjid."
    },
    {
      id: "location",
      component: <LocationSection />, 
      title: "Find Us",
      seoDescription: "Find Fatima Masjid's location and get directions."
    }
  ];

  // Smooth Scroll Navigation
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: "smooth" });
    }
  };

  // Update Title (Ignore Hero Section)
  useEffect(() => {
    const handleScroll = () => {
      let activeSection = sections[1]; // Default to "About Us"

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.3) {
            activeSection = section;
          }
        }
      });

      if (window.scrollY < 100) {
        setCurrentTitle(defaultTitle);
        setCurrentDescription(defaultDescription);
      } else if (activeSection.title) {
        setCurrentTitle(activeSection.title);
        setCurrentDescription(activeSection.seoDescription);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
        <SEO title={currentTitle} description={currentDescription} />
        <Header scrollToSection={scrollToSection} />

        {sections.map((section, index) => (
          <motion.section
            key={section.id}
            id={section.id}
            className={`w-full py-24 px-6 relative overflow-hidden transition-all duration-300 
              ${index % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-100 dark:bg-gray-900"}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
          >
            {section.title && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
                className="text-6xl font-extrabold text-center text-green-700 dark:text-green-400 mb-12 tracking-wide"
              >
                {section.title}
              </motion.h2>
            )}
            <div className="max-w-6xl mx-auto">{section.component}</div>
          </motion.section>
        ))}

        <motion.section
          className="w-full bg-gray-900 text-gray-200 py-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
        >
          <Footer />
        </motion.section>
      </div>
    </HelmetProvider>
  );
}

export default App;
