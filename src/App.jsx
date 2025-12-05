import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="px-6 md:px-24">
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Certifications />
      <Contact />
    </div>
  );
}
