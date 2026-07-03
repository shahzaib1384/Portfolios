import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-[#F1F5F9] selection:bg-[#4F8EF7]/30 selection:text-white">
      {/* Dynamic Global Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1E] via-[#0E1528] to-[#0A0F1E] pointer-events-none z-0"></div>
      
      {/* Floating Monogram Navbar */}
      <Navbar />

      {/* Main Container */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
