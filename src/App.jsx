import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticlesBg from "./components/ParticlesBg";
import CursorGlow from "./components/CursorGlow";

function App() {
  return (
    <div>
       <ParticlesBg />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <CursorGlow />
    </div>
  );
}

export default App;