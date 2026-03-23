import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStrip from "@/components/TechStrip";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TechStrip />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
