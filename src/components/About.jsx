import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView, useReducedMotion } from "framer-motion";
import { portfolioData } from "../data/portfolio";

// Helper component for animating numbers
const AnimatedNumber = ({ value }) => {
  const shouldReduceMotion = useReducedMotion();
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  // Extract numeric part and string suffix (e.g. "5+" -> 5 and "+")
  const numericPart = parseInt(value.replace(/[^0-9]/g, ''), 10) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (inView && !shouldReduceMotion) {
      animate(count, numericPart, { duration: 1.2, ease: "easeOut" });
    } else if (inView && shouldReduceMotion) {
      count.set(numericPart);
    }
  }, [inView, numericPart, count, shouldReduceMotion]);

  return (
    <span ref={ref} className="inline-flex">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

export default function About() {
  const { bio, stats } = portfolioData.personal;
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: shouldReduceMotion ? 0 : 0.1
      }
    }
  };

  const itemVariants = {
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

  const paragraphVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0A0F1E]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={headerVariants}
            className="flex items-center gap-3 mb-2"
          >
            <span className="w-8 h-[2px] bg-[#4F8EF7] rounded-full"></span>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#4F8EF7] font-mono">01 / Profile</span>
          </motion.div>
          
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={headerVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-sora text-white"
          >
            About Me
          </motion.h2>
        </div>

        {/* Two-Column Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Bio Text Description */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1, delayChildren: 0.1 } }
            }}
            className="lg:col-span-7 space-y-6"
          >
            <motion.h3 variants={paragraphVariants} className="text-2xl font-bold font-sora text-[#F1F5F9] leading-snug">
              Specialized in engineering <span className="bg-gradient-to-r from-[#4F8EF7] to-[#A855F7] bg-clip-text text-transparent">intelligent solutions</span> that bridge complex AI models with sleek frontend interfaces.
            </motion.h3>
            
            <motion.p variants={paragraphVariants} className="text-base sm:text-lg text-[#94A3B8] font-inter leading-relaxed">
              {bio}
            </motion.p>
            
            <motion.p variants={paragraphVariants} className="text-base text-[#94A3B8] font-inter leading-relaxed">
              My academic background at COMSATS University Islamabad, focusing on Data Science, has grounded me in predictive analytics, mathematical concepts, and neural architectures. When I build apps, I prioritize scalability, user experience, and visual excellence.
            </motion.p>

            {/* Profile Detail Bullet Points */}
            <motion.div variants={paragraphVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-[#4F8EF7] shadow-sm shadow-[#4F8EF7]/50"></span>
                <span className="text-sm font-semibold text-[#94A3B8] font-inter">Taxila, Pakistan</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-[#A855F7] shadow-sm shadow-[#A855F7]/50"></span>
                <span className="text-sm font-semibold text-[#94A3B8] font-inter">shahzaib1384@gmail.com</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Stats highlight box cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 grid grid-cols-2 gap-6 w-full"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="gradient-border-glow glass-card rounded-2xl p-6 text-center group flex flex-col justify-center items-center h-40"
              >
                <div className="relative z-10">
                  {/* Number Stat */}
                  <span className="block text-4xl md:text-5xl font-extrabold tracking-tight font-sora bg-gradient-to-br from-[#4F8EF7] to-[#A855F7] bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 mb-2">
                    <AnimatedNumber value={stat.value} />
                  </span>
                  {/* Label Description */}
                  <span className="block text-xs sm:text-sm font-medium tracking-wide text-[#94A3B8] font-inter">
                    {stat.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
