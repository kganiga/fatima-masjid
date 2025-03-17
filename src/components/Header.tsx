import React, { useState } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false); // Close menu on mobile after clicking
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Click Scrolls to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 focus:outline-none"
        >
          {/* Mosque Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-green-700"
          >
            <path d="M12 2L9 5h6l-3-3z" />
            <path d="M5 8h14l-7-5-7 5z" />
            <path d="M5 8v12h14V8" />
            <path d="M9 22V12h6v10" />
          </svg>
          <span className="text-3xl font-extrabold text-green-700 tracking-wide font-serif">
            Masjid-E-Fatima
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {[
            { name: "Home", action: scrollToTop },
            { name: "About", id: "about" },
            { name: "Prayer Times", id: "prayer-times" },
            { name: "Gallery", id: "gallery" },
            { name: "Services", id: "services" },
            { name: "Location", id: "location" },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() =>
                item.id ? scrollToSection(item.id) : item.action?.()
              }
              className="text-gray-700 hover:text-green-700 font-medium transition duration-300"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 absolute top-full left-0 w-full">
          {[
            { name: "Home", action: scrollToTop },
            { name: "About", id: "about" },
            { name: "Prayer Times", id: "prayer-times" },
            { name: "Gallery", id: "gallery" },
            { name: "Services", id: "services" },
            { name: "Location", id: "location" },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => {
                item.id ? scrollToSection(item.id) : item.action?.();
                setMenuOpen(false);
              }}
              className="block text-gray-700 hover:text-green-700 py-2 text-center w-full font-medium transition duration-300"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
