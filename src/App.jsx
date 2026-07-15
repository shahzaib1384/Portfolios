import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "./components/Loader";
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasSeenLoader = sessionStorage.getItem("hasSeenLoader");
    if (hasSeenLoader) {
      setIsLoading(false);
    } else {
      sessionStorage.setItem("hasSeenLoader", "true");
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-[#F1F5F9] selection:bg-[#4F8EF7]/30 selection:text-white">
      <AnimatePresence>
        {isLoading && <Loader key="loader" onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: isLoading ? 0 : 1, scale: isLoading ? 0.98 : 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: isLoading ? 0 : 0.1 }}
        className="relative z-10 transition-layout flex flex-col min-h-screen"
      >
        {/* Dynamic Global Background Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1E] via-[#0E1528] to-[#0A0F1E] pointer-events-none z-0"></div>
        
        {/* Floating Monogram Navbar */}
        <Navbar />

        {/* Main Container */}
        <main className="relative z-10 flex-grow">
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
      </motion.div>
    </div>
  );
}
