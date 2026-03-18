import portfolioData from "../data/portfolioData";
import { motion } from "framer-motion";

function Hero() {
  const personal = portfolioData.personal;

  const container =
    "relative min-h-screen flex items-center justify-center bg-background px-6 overflow-hidden";

  const nameStyle =
    "text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]";

  const roleStyle =
    "text-xl md:text-2xl text-primary mb-6";

  const taglineStyle =
    "text-gray-400 mb-8";

  const buttonContainer =
    "flex flex-col md:flex-row justify-center gap-4";

  const primaryBtn =
    "px-6 py-3 bg-primary text-black rounded-lg shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:opacity-80 transition";

  const secondaryBtn =
    "px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-black transition";

  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div id="hero" className={container}>
      {/* Glow background */}
      <div className="absolute w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full top-[-100px] left-1/2 -translate-x-1/2"></div>

      <div className="text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={nameStyle}
        >
          {personal.name}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={roleStyle}
        >
          {personal.role}
        </motion.div>

        <div className={taglineStyle}>
          {personal.tagline}
        </div>

        <div className={buttonContainer}>
          <button
            className={primaryBtn}
            onClick={function () {
              scrollToSection("projects");
            }}
          >
            View Projects
          </button>

          <button
            className={secondaryBtn}
            onClick={function () {
              scrollToSection("contact");
            }}
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;