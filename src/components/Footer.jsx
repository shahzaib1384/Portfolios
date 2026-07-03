import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin, Heart } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function Footer() {
  const { name, github, linkedin } = portfolioData.personal;
  const currentYear = new Date().getFullYear();
  const shouldReduceMotion = useReducedMotion();

  const footerVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <footer className="border-t border-[#4F8EF7]/10 bg-[#0A0F1E] py-12 relative overflow-hidden">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px" }}
        variants={footerVariants}
        className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 text-center md:text-left"
      >
        
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#111827] border border-[#4F8EF7]/20 text-xs font-bold text-[#F1F5F9] shadow-sm">
            <span className="gradient-text font-sora">SH</span>
          </span>
          <p className="text-sm text-[#94A3B8] font-inter">
            &copy; {currentYear} <strong className="text-[#F1F5F9] font-medium">{name}</strong>. All rights reserved.
          </p>
        </div>

        <p className="text-xs sm:text-sm text-[#94A3B8] font-inter flex items-center gap-1.5 justify-center">
          Built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> using React &amp; Tailwind CSS
        </p>

        <div className="flex items-center gap-4">
          <motion.a 
            whileHover={shouldReduceMotion ? {} : { scale: 1.1, borderColor: "rgba(79, 142, 247, 0.45)", color: "#4F8EF7" }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
            href={github} target="_blank" rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-[#111827] border border-white/5 text-[#94A3B8] transition-colors duration-300 shadow-sm shadow-black/10"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </motion.a>
          <motion.a 
            whileHover={shouldReduceMotion ? {} : { scale: 1.1, borderColor: "rgba(168, 85, 247, 0.45)", color: "#A855F7" }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
            href={linkedin} target="_blank" rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-[#111827] border border-white/5 text-[#94A3B8] transition-colors duration-300 shadow-sm shadow-black/10"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </motion.a>
        </div>

      </motion.div>
    </footer>
  );
}
