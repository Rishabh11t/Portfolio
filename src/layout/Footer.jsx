import portfolioData from "../data/portfolioData";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  const personal = portfolioData.personal;

  return (
    <footer className="relative bg-black border-t border-white/10 px-6 py-12 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full top-0 left-1/2 -translate-x-1/2 -z-10"></div>

      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-6">

        {/* Name + Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-xl font-semibold gradient-text">
            {personal.name}
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            Building modern web & AI solutions 🚀
          </p>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-white text-xl transition hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
          >
            <FaGithub />
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-blue-400 text-xl transition hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]"
          >
            <FaLinkedin />
          </a>

          <a
            href={`mailto:${personal.email}`}
            className="text-gray-400 hover:text-cyan-400 text-xl transition hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]"
          >
            <FaEnvelope />
          </a>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/10"></div>

        {/* Bottom Row */}
        <motion.div
          className="flex flex-col items-center justify-center w-full text-xs text-gray-500 gap-2 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <p>© 2026 {personal.name}. All rights reserved.</p>

          
        </motion.div>

      </div>
    </footer>
  );
}

export default Footer;