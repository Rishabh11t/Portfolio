import { useState } from "react";
import portfolioData from "../data/portfolioData";
import { motion } from "framer-motion";

function Navbar() {
  const [active, setActive] = useState("hero");

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  // Styles (edit here for design tweaks)
  const container =
  "fixed top-0 left-0 w-full z-50 flex justify-center";

 const navWrapper =
  "w-[90%] max-w-6xl flex justify-between items-center px-6 py-3 mt-4 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-glow";

  const logoStyle =
    "text-primary font-bold text-sm md:text-base cursor-pointer glow-text";

  const linkBase =
    "relative text-gray-300 text-sm cursor-pointer transition";

  const activeLink =
    "text-primary";

  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setActive(id);
  }

  return (
    <div className={container}>
     <div className={navWrapper}>
  {/* LEFT: Name */}
  <div
    className={logoStyle}
    onClick={function () {
      scrollToSection("hero");
    }}
  >
    {portfolioData.personal.name}
  </div>

  {/* RIGHT: Links */}
  <div className="hidden md:flex items-center gap-8"></div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map(function (item) {
            const isActive = active === item.id;

            return (
              <div
                key={item.id}
                className={
                  linkBase + " " + (isActive ? activeLink : "")
                }
                onClick={function () {
                  scrollToSection(item.id);
                }}
              >
                {item.name}

                {/* Animated underline */}
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 w-full h-[2px] bg-primary"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Navbar;