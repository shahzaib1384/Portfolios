import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function Certifications() {
  const certifications = portfolioData.certifications;
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.15, delayChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30, filter: "blur(4px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
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
    <section id="certifications" className="py-24 relative overflow-hidden bg-[#0A0F1E]">
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
            <span className="text-xs uppercase tracking-widest font-semibold text-[#4F8EF7] font-mono">06 / Credentials</span>
          </motion.div>
          
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={headerVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-sora text-white"
          >
            Certifications
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.name}
              variants={itemVariants}
              className="rounded-3xl gradient-border-glow overflow-hidden"
            >
              <div className="glass-card p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
                
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="p-4 rounded-2xl bg-[#111827] border border-[#4F8EF7]/20 text-[#A855F7] shadow-inner shadow-black/40">
                    <Award className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-sora text-white mb-1.5 tracking-wide">
                      {cert.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#94A3B8] font-inter">
                      <ShieldCheck className="w-4 h-4 text-[#4F8EF7]" />
                      <span>Issued by <strong className="text-[#F1F5F9] font-medium">{cert.issuer}</strong></span>
                    </div>
                  </div>
                </div>

                <motion.a
                  whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-semibold tracking-wider text-center text-[#F1F5F9] bg-gradient-to-r from-[#4F8EF7] to-[#A855F7] rounded-xl hover:shadow-lg hover:shadow-[#4F8EF7]/25 transition-all duration-300 flex items-center justify-center gap-2 shadow-md"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Certificate
                </motion.a>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
