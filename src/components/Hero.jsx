import React, { useState, useEffect } from "react";
import { motion, useReducedMotion, useSpring, useMotionValue } from "framer-motion";
import { Github, Linkedin, ArrowDown, FileText, ArrowRight } from "lucide-react";
import { portfolioData } from "../data/portfolio";

const titles = ["AI Developer", "Full-Stack Engineer", "Data Analyst"];

export default function Hero() {
  const { name, bio, resume, github, linkedin } = portfolioData.personal;
  
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasPlayedEntrance, setHasPlayedEntrance] = useState(false);
  const [isHoveringWork, setIsHoveringWork] = useState(false);
  const [isHoveringCV, setIsHoveringCV] = useState(false);

  const shouldReduceMotion = useReducedMotion();

  // Cursor tracking
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check session storage to only play animation once per session
    const hasSeen = sessionStorage.getItem("hasSeenHeroEntrance");
    if (!hasSeen && !shouldReduceMotion) {
      setHasPlayedEntrance(true); // Flag that we need to play it
      // Don't set item immediately, let the animation play first
      setTimeout(() => sessionStorage.setItem("hasSeenHeroEntrance", "true"), 2000);
    } else {
      setHasPlayedEntrance(false);
    }

    // Cursor tracking listener
    const handleMouseMove = (e) => {
      // Only track if it's a mouse (not touch)
      if (e.pointerType === 'mouse' && !shouldReduceMotion) {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }
    };

    window.addEventListener("pointermove", handleMouseMove);
    return () => window.removeEventListener("pointermove", handleMouseMove);
  }, [mouseX, mouseY, shouldReduceMotion]);

  const [isTypingStarted, setIsTypingStarted] = useState(false);

  // Typewriter effect (starts after entrance sequence finishes)
  useEffect(() => {
    if (hasPlayedEntrance && !isTypingStarted) {
      // Wait for name reveal before typing starts (1.2s total delay)
      const initialDelay = setTimeout(() => {
        setIsTypingStarted(true);
      }, 1200);
      return () => clearTimeout(initialDelay);
    }

    if (!hasPlayedEntrance && !isTypingStarted) {
      setIsTypingStarted(true);
      return;
    }

    if (!isTypingStarted) return;

    let timer;
    const activeTitle = titles[titleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && currentText === activeTitle) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    } else {
      timer = setTimeout(() => {
        setCurrentText(
          isDeleting
            ? activeTitle.substring(0, currentText.length - 1)
            : activeTitle.substring(0, currentText.length + 1)
        );
      }, typingSpeed);
    }
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIndex, hasPlayedEntrance, titles, isTypingStarted]);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const target = document.querySelector("#projects");
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
  };

  // Entrance variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } }
  };
  
  const springScale = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 20, delay: 0.3 } 
    }
  };

  const wipeIn = {
    hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" },
    visible: { 
      opacity: 1, 
      clipPath: "inset(0 0% 0 0)",
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.7 }
    }
  };

  const slideUp = (delay) => ({
    hidden: { opacity: 0, y: 12 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay }
    }
  });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
    >
      {/* Cursor Reactive Glow */}
      {!shouldReduceMotion && (
        <motion.div
          className="fixed top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none z-0 hidden lg:block"
          style={{
            background: "radial-gradient(circle, rgba(79, 142, 247, 0.08) 0%, rgba(10, 15, 30, 0) 70%)",
            x: cursorX,
            y: cursorY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      )}

      {/* Animated Dot Grid Background */}
      <motion.div 
        initial={hasPlayedEntrance ? "hidden" : "visible"}
        animate="visible"
        variants={fadeIn}
        className="absolute inset-0 dot-grid z-0"
      ></motion.div>
      
      {/* Background Radial Glow */}
      <motion.div 
        initial={hasPlayedEntrance ? "hidden" : "visible"}
        animate="visible"
        variants={fadeIn}
        className={`absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-[#4F8EF7]/10 filter blur-[80px] z-0 ${shouldReduceMotion ? '' : 'animate-pulse-slow'}`}
      ></motion.div>
      <motion.div 
        initial={hasPlayedEntrance ? "hidden" : "visible"}
        animate="visible"
        variants={fadeIn}
        className={`absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-[#A855F7]/10 filter blur-[100px] z-0 ${shouldReduceMotion ? '' : 'animate-pulse-slow'}`}
      ></motion.div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10 flex flex-col items-center">
        {/* Intro Badge */}
        <motion.div
          initial={hasPlayedEntrance ? slideUp(0).hidden : slideUp(0).visible}
          animate={slideUp(0).visible}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111827]/80 border border-[#4F8EF7]/35 text-xs font-semibold tracking-wider text-[#4F8EF7] uppercase mb-6 shadow-sm shadow-[#4F8EF7]/10"
        >
          <span className={`w-2 h-2 rounded-full bg-[#4F8EF7] ${shouldReduceMotion ? '' : 'animate-pulse'}`}></span>
          Available for AI / Full-Stack / Data roles
        </motion.div>

        {/* Profile Monogram */}
        <motion.div
          initial={hasPlayedEntrance ? springScale.hidden : springScale.visible}
          animate={springScale.visible}
          className="mb-6 relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#111827] to-[#0A0F1E] border border-[#4F8EF7]/40 shadow-lg shadow-[#4F8EF7]/20"
        >
          <span className="text-xl font-extrabold font-sora gradient-text">SH</span>
        </motion.div>

        {/* Hero Name */}
        <motion.h1
          initial={hasPlayedEntrance ? wipeIn.hidden : wipeIn.visible}
          animate={wipeIn.visible}
          className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight font-sora mb-6"
        >
          Hi, I'm <span className="gradient-text">{name}</span>
        </motion.h1>

        {/* Typewriter Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: hasPlayedEntrance ? 1.2 : 0 }}
          className="h-10 sm:h-12 flex items-center justify-center mb-6"
        >
          <p className="text-xl sm:text-3xl font-medium tracking-wide text-[#F1F5F9] font-sora">
            I am a <span className={`text-[#A855F7] font-semibold ${shouldReduceMotion ? '' : 'cursor-blink'}`}>{currentText}</span>
          </p>
        </motion.div>

        {/* Bio text */}
        <motion.p
          initial={hasPlayedEntrance ? slideUp(1.3).hidden : slideUp(0).visible}
          animate={slideUp(1.3).visible}
          className="text-base sm:text-xl text-[#94A3B8] font-inter max-w-2xl leading-relaxed mb-10"
        >
          {bio}
        </motion.p>

        {/* Actions buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 w-full max-w-md sm:max-w-none">
          <motion.a
            initial={hasPlayedEntrance ? slideUp(1.4).hidden : slideUp(0).visible}
            animate={slideUp(1.4).visible}
            whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
            onHoverStart={() => setIsHoveringWork(true)}
            onHoverEnd={() => setIsHoveringWork(false)}
            href="#projects"
            onClick={handleScrollToProjects}
            className="w-full sm:w-auto px-8 py-4 text-sm font-semibold tracking-wider text-[#F1F5F9] bg-gradient-to-r from-[#4F8EF7] to-[#A855F7] rounded-xl transition-all duration-300 shadow-md shadow-[#4F8EF7]/10 flex items-center justify-center gap-2 overflow-hidden relative group"
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
          </motion.a>
          
          <motion.a
            initial={hasPlayedEntrance ? slideUp(1.48).hidden : slideUp(0).visible}
            animate={slideUp(1.48).visible}
            whileHover={shouldReduceMotion ? {} : { scale: 1.03, backgroundColor: "rgba(79, 142, 247, 0.1)", borderColor: "rgba(79, 142, 247, 0.5)" }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
            onHoverStart={() => setIsHoveringCV(true)}
            onHoverEnd={() => setIsHoveringCV(false)}
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 text-sm font-semibold tracking-wider text-[#F1F5F9] glass-card rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
          >
            <FileText className="w-4 h-4 text-[#4F8EF7]" />
            Download CV
            <motion.div
              animate={{ x: isHoveringCV && !shouldReduceMotion ? 3 : 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ArrowRight className="w-4 h-4 text-[#94A3B8] opacity-0 group-hover:opacity-100 hidden sm:block" style={{ opacity: isHoveringCV ? 1 : 0, width: isHoveringCV ? 16 : 0, overflow: 'hidden' }} />
            </motion.div>
          </motion.a>
        </div>

        {/* Social Icons Links */}
        <div className="flex items-center gap-6">
          <motion.a
            initial={hasPlayedEntrance ? slideUp(1.56).hidden : slideUp(0).visible}
            animate={slideUp(1.56).visible}
            whileHover={shouldReduceMotion ? {} : { scale: 1.1, borderColor: "rgba(79, 142, 247, 0.45)", color: "#4F8EF7" }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-[#111827]/80 border border-white/5 text-[#94A3B8] transition-colors duration-300 shadow-lg shadow-black/20"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </motion.a>
          <motion.a
            initial={hasPlayedEntrance ? slideUp(1.62).hidden : slideUp(0).visible}
            animate={slideUp(1.62).visible}
            whileHover={shouldReduceMotion ? {} : { scale: 1.1, borderColor: "rgba(168, 85, 247, 0.45)", color: "#A855F7" }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-[#111827]/80 border border-white/5 text-[#94A3B8] transition-colors duration-300 shadow-lg shadow-black/20"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </motion.a>
        </div>

        {/* Bouncing Scroll Arrow */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: hasPlayedEntrance ? 2 : 1, duration: 1 }}
          onClick={(e) => {
            e.preventDefault();
            const target = document.querySelector("#about");
            if (target) {
              window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
            }
          }}
          className="absolute bottom-6 flex flex-col items-center gap-2 cursor-pointer group text-[#94A3B8] hover:text-[#4F8EF7] transition-colors"
        >
          <span className="text-xs uppercase tracking-widest font-semibold opacity-70 group-hover:opacity-100 transition-opacity">Scroll Down</span>
          <motion.div
            animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}
