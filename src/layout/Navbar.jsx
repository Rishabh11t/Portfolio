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

  function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  }

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center">

      <div className="w-[92%] max-w-6xl mt-4 px-6 py-3 rounded-full 
        bg-white/5 backdrop-blur-xl border border-white/10 
        shadow-[0_0_20px_rgba(6,182,212,0.2)]
        flex justify-between items-center">

        {/* LOGO */}
        <div
          onClick={() => scrollToSection("hero")}
          className="font-heading text-cyan-400 text-sm md:text-base cursor-pointer tracking-wider hover:scale-105 transition"
        >
          {portfolioData.personal.name}
        </div>

        {/* LINKS */}
        <div className="hidden md:flex items-center gap-6 relative">

          {navItems.map((item) => {
            const isActive = active === item.id;

            return (
              <div
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative cursor-pointer px-3 py-1 text-sm font-body"
              >
                {/* ACTIVE BACKGROUND PILL */}
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-cyan-400/20 border border-cyan-400/30"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}

                {/* TEXT */}
                <span
                  className={`relative z-10 transition ${
                    isActive
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.name}
                </span>
              </div>
            );
          })}

        </div>

      </div>
    </div>
  );
}

export default Navbar;