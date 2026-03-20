import ParticlesBg from "./effect/ParticlesBg";
import Navbar from "./layout/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./layout/Footer";

import CursorGlow from "./effect/CursorGlow";

function App() {
  return (
    <div className="relative bg-[#020617] text-white overflow-x-hidden">

     
        <ParticlesBg />
      

      {/* Cursor Effect */}
      <CursorGlow />

      {/* Main Content */}
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 space-y-8 md:space-y-12">
        <section id="home" className="min-h-screen flex items-center">
          <Hero />
        </section>

        <section id="about" className="py-24">
          <About />
        </section>

        <section id="skills" className="py-24">
          <Skills />
        </section>

        <section id="experience" className="py-24">
          <Experience />
        </section>

        <section id="projects" className="py-24">
          <Projects />
        </section>

        <section id="contact" className="py-24">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;