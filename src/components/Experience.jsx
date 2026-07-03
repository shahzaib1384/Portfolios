import React, { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Calendar, Github, Award, CheckCircle } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function Experience() {
  const experiences = portfolioData.experience;
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const headerVariants = {
    hidden: { opacity: 0, filter: "blur(4px)" },
    visible: { 
      opacity: 1, 
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -30, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const dotVariants = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1, 
      transition: { type: "spring", stiffness: 300, damping: 20, delay: 0.2 } 
    }
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#0A0F1E]">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <div className="mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={headerVariants}
            className="flex items-center gap-3 mb-2"
          >
            <span className="w-8 h-[2px] bg-[#4F8EF7] rounded-full"></span>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#4F8EF7] font-mono">04 / Journey</span>
          </motion.div>
          
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={headerVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-sora text-white"
          >
            Work Experience
          </motion.h2>
        </div>

        <div ref={containerRef} className="relative pl-8 ml-4 space-y-12">
          {/* Faded background line */}
          <div className="absolute top-0 bottom-0 left-[0.5px] w-px bg-white/5"></div>
          
          {/* Animated drawing line */}
          {!shouldReduceMotion && (
            <motion.div 
              style={{ height: lineHeight }}
              className="absolute top-0 left-0 w-[2px] bg-gradient-to-b from-[#4F8EF7] to-[#A855F7] origin-top"
            />
          )}
          {shouldReduceMotion && (
            <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-gradient-to-b from-[#4F8EF7] to-[#A855F7]"></div>
          )}

          {experiences.map((exp, idx) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={itemVariants}
              className="relative"
            >
              <motion.span 
                variants={shouldReduceMotion ? {} : dotVariants}
                className="absolute -left-[41px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#111827] border-2 border-[#4F8EF7] shadow-md shadow-[#4F8EF7]/30 z-10"
              >
                <span className={`h-2 w-2 rounded-full bg-[#A855F7] ${shouldReduceMotion ? '' : 'animate-pulse'}`}></span>
              </motion.span>

              <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 relative">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                  <div>
                    <h3 className="text-xl font-bold font-sora text-white tracking-wide">
                      {exp.role}
                    </h3>
                    <p className="text-base font-semibold text-[#4F8EF7] font-inter">
                      {exp.company}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#111827] border border-white/5 text-xs font-semibold text-[#94A3B8] font-mono shadow-sm self-start sm:self-center">
                    <Calendar className="w-3.5 h-3.5 text-[#A855F7]" />
                    {exp.duration}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {exp.responsibilities.map((task, i) => (
                    <li key={i} className="flex items-start gap-3.5 text-sm sm:text-base text-[#94A3B8] font-inter leading-relaxed">
                      <CheckCircle className="w-5 h-5 text-[#4F8EF7] mt-0.5 flex-shrink-0" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-4 pt-6 border-t border-white/5">
                  <motion.a
                    whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                    href={exp.githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[160px] py-3 text-xs sm:text-sm font-semibold tracking-wider text-center text-[#F1F5F9] bg-[#111827] border border-[#4F8EF7]/20 rounded-xl hover:bg-[#4F8EF7]/10 hover:border-[#4F8EF7]/50 transition-all duration-300 flex items-center justify-center gap-2 shadow-md shadow-black/20"
                  >
                    <Github className="w-4 h-4" />
                    View Internship Work
                  </motion.a>
                  <motion.a
                    whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                    href={exp.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[160px] py-3 text-xs sm:text-sm font-semibold tracking-wider text-center text-[#F1F5F9] bg-gradient-to-r from-[#4F8EF7] to-[#A855F7] rounded-xl hover:shadow-lg hover:shadow-[#4F8EF7]/25 transition-all duration-300 flex items-center justify-center gap-2 shadow-md"
                  >
                    <Award className="w-4 h-4" />
                    View Certificate
                  </motion.a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
