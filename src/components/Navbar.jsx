import { useState } from "react";
import portfolioData from "../data/portfolioData";
import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation items (edit here to change sections)
  const navItems = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  // Styling variables (edit for design changes)
  const navContainer =
    "fixed w-full z-50 bg-black bg-opacity-70 backdrop-blur-md border-b border-gray-800";
  const navContent =
    "max-w-6xl mx-auto px-6 py-4 flex justify-between items-center";
  const logoStyle = "text-xl font-bold text-primary cursor-pointer";
  const navLinks = "hidden md:flex space-x-8 text-gray-300";
  const mobileMenuBtn = "md:hidden text-white text-2xl";
  const mobileMenu =
    "md:hidden bg-black border-t border-gray-800 px-6 py-4 space-y-4";

  // Smooth scroll function
  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  }

  return (
    <div className={navContainer}>
      <div className={navContent}>
        {/* Logo */}
        <div
          className={logoStyle}
          onClick={function () {
            scrollToSection("hero");
          }}
        >
          {portfolioData.personal.name}
        </div>

        {/* Desktop Menu */}
        <div className={navLinks}>
          {navItems.map(function (item) {
            return (
              <div
                key={item.id}
                className="cursor-pointer hover:text-primary transition duration-300"
                onClick={function () {
                  scrollToSection(item.id);
                }}
              >
                {item.name}
              </div>
            );
          })}
        </div>

        {/* Mobile Button */}
        <div
          className={mobileMenuBtn}
          onClick={function () {
            setIsOpen(!isOpen);
          }}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={mobileMenu}
        >
          {navItems.map(function (item) {
            return (
              <div
                key={item.id}
                className="text-gray-300 cursor-pointer hover:text-primary"
                onClick={function () {
                  scrollToSection(item.id);
                }}
              >
                {item.name}
              </div>
            );
          })}
        </motion.div>
      )}
    </div>
  );
}

export default Navbar;