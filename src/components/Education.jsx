import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, Landmark, Calendar, BookOpen } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function Education() {
  const educations = portfolioData.education;
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: 0.1
      } 
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30, scale: shouldReduceMotion ? 1 : 0.96 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, filter: "blur(4px)" },
    visible: { 
      opacity: 1, 
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#0A0F1E]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={headerVariants}
            className="flex items-center gap-3 mb-2"
          >
            <span className="w-8 h-[2px] bg-[#4F8EF7] rounded-full"></span>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#4F8EF7] font-mono">05 / Education</span>
          </motion.div>
          
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={headerVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-sora text-white"
          >
            Academic History
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {educations.map((edu) => (
            <motion.div
              key={edu.degree}
              variants={cardVariants}
              className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_-10px_rgba(79,142,247,0.15)]"
            >
              <div>
                <div className="inline-flex p-3 rounded-xl bg-[#111827] border border-[#4F8EF7]/15 mb-6 text-[#4F8EF7] shadow-inner shadow-black/40">
                  <GraduationCap className="w-6 h-6" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-sora text-white mb-2 leading-snug">
                  {edu.degree}
                </h3>
                
                <div className="flex items-center gap-2 text-sm text-[#94A3B8] font-inter mb-4">
                  <Landmark className="w-4 h-4 text-[#A855F7]" />
                  <span>{edu.institution}</span>
                </div>

                {edu.specialization && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#4F8EF7]/10 border border-[#4F8EF7]/20 text-[11px] font-semibold text-[#4F8EF7] font-mono tracking-wide mb-6">
                    <BookOpen className="w-3 h-3" />
                    {edu.specialization}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-white/5 text-xs text-[#94A3B8] font-mono mt-auto">
                <Calendar className="w-3.5 h-3.5 text-[#4F8EF7]" />
                <span>{edu.duration}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
