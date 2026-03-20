import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import portfolioData from "../data/portfolioData";

function Hero() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(e) {
      setPosition({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6">

      {/* Background Glow (reduced) */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full top-0 left-1/2 -translate-x-1/2"></div>

      {/* Mouse Glow */}
      <div
        className="absolute w-[250px] h-[250px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none"
        style={{
          top: position.y - 125,
          left: position.x - 125,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Hi, I'm{" "}
            <span className="gradient-text">
              {portfolioData.personal.name}
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl primary mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {portfolioData.personal.role}
          </motion.p>

          <motion.p
            className="text-gray-400 mb-8 max-w-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {portfolioData.personal.tagline}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="btn-primary"
            >
              View Projects
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="btn-outline"
            >
              Contact Me
            </button>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
       <motion.div
  className="flex justify-center"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
>
  <div className="relative group">

    {/* OUTER GLOW */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 blur-[50px] opacity-40 group-hover:opacity-70 transition duration-500"></div>

    {/* GRADIENT RING */}
    <div className="p-[3px] rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">

      {/* INNER FRAME */}
      <div className="w-[220px] h-[220px] md:w-[280px] md:h-[280px] rounded-full overflow-hidden bg-black border border-white/10 backdrop-blur-xl group-hover:scale-105 transition duration-300">

        <img
          src="/profile.jpg"
          alt="profile"
          className="w-full h-full object-cover"
        />

      </div>

    </div>

  </div>
</motion.div>

      </div>
    </section>
  );
}

export default Hero;