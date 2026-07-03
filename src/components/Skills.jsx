import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Code2, Cpu, Database, Wrench } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function Skills() {
  const { languages, frameworks, aiMlData, toolsConcepts } = portfolioData.skills;
  const shouldReduceMotion = useReducedMotion();

  const categories = [
    {
      title: "Languages",
      skills: languages,
      icon: <Code2 className="w-5 h-5 text-[#4F8EF7]" />,
      gradient: "from-[#4F8EF7] to-[#3B82F6]"
    },
    {
      title: "Frameworks & APIs",
      skills: frameworks,
      icon: <Cpu className="w-5 h-5 text-[#A855F7]" />,
      gradient: "from-[#A855F7] to-[#8B5CF6]"
    },
    {
      title: "AI/ML & Data",
      skills: aiMlData,
      icon: <Database className="w-5 h-5 text-[#4F8EF7]" />,
      gradient: "from-[#4F8EF7] to-[#A855F7]"
    },
    {
      title: "Tools & Concepts",
      skills: toolsConcepts,
      icon: <Wrench className="w-5 h-5 text-[#A855F7]" />,
      gradient: "from-[#F59E0B] to-[#EF4444]"
    }
  ];

  const headerVariants = {
    hidden: { opacity: 0, filter: "blur(4px)" },
    visible: { 
      opacity: 1, 
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20, scale: shouldReduceMotion ? 1 : 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const badgeContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: shouldReduceMotion ? 0 : 0.05,
        delayChildren: 0.2
      }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#0A0F1E]">
      {/* Background Radial Glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#4F8EF7]/5 filter blur-[120px] pointer-events-none z-0`}></div>

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
            <span className="text-xs uppercase tracking-widest font-semibold text-[#4F8EF7] font-mono">02 / Technical Stack</span>
          </motion.div>
          
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={headerVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-sora text-white"
          >
            Skills & Abilities
          </motion.h2>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {categories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="glass-card glass-card-hover rounded-2xl p-8 relative flex flex-col justify-between"
            >
              <div>
                {/* Header block */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-[#111827] border border-[#4F8EF7]/15">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold font-sora text-[#F1F5F9] tracking-wide">
                    {category.title}
                  </h3>
                </div>

                {/* Badges block */}
                <motion.div 
                  variants={badgeContainerVariants}
                  className="flex flex-wrap gap-3"
                >
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={badgeVariants}
                      whileHover={shouldReduceMotion ? {} : { 
                        scale: 1.05, 
                        rotate: 2,
                        backgroundColor: "transparent",
                        backgroundImage: "linear-gradient(to right, rgba(79, 142, 247, 0.8), rgba(168, 85, 247, 0.8))",
                        borderColor: "rgba(168, 85, 247, 0.5)",
                        color: "#ffffff",
                        boxShadow: "0 0 12px rgba(79, 142, 247, 0.3)",
                        transition: { duration: 0.2 }
                      }}
                      className="px-4 py-2 text-xs font-medium font-mono tracking-wide text-[#F1F5F9] bg-[#111827] border border-[#4F8EF7]/15 rounded-lg cursor-default select-none shadow-sm shadow-black/10 transition-colors duration-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
              
              {/* Card visual accent bar */}
              <div className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r ${category.gradient} rounded-b-2xl opacity-70`}></div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
