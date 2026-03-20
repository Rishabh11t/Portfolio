import portfolioData from "../data/portfolioData";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  const personal = portfolioData.personal;

  return (
    <section id="contact" >
      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-heading font-bold  gradient-text text-center mb-16 tracking-wider flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Let's Connect 🚀
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="text-gray-400 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Open to internships, collaborations, and exciting opportunities
        </motion.p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Email */}
          <motion.a
  href={`mailto:${personal.email}`}
  className="glass glass-hover p-6 flex flex-col items-center cursor-pointer"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.05 }}
>
  <FaEnvelope className="text-3xl text-cyan-400 mb-3" />
  <p className="text-sm text-gray-400 mb-1">Email</p>
  <p className="text-white text-sm break-all">
    {personal.email}
  </p>
</motion.a>
          {/* LinkedIn */}
          <motion.a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="glass glass-hover p-6 flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <FaLinkedin className="text-3xl text-blue-400 mb-3" />
            <p className="text-sm text-gray-400 mb-1">LinkedIn</p>
            <p className="text-white text-sm">View Profile</p>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="glass glass-hover p-6 flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <FaGithub className="text-3xl text-white mb-3" />
            <p className="text-sm text-gray-400 mb-1">GitHub</p>
            <p className="text-white text-sm">View Projects</p>
          </motion.a>

        </div>

       

      </div>
    </section>
  );
}

export default Contact;