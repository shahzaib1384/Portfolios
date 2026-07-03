import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Github, ExternalLink, Sparkles, Layers, CheckCircle2, Play, ArrowRight } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function Projects() {
  const allProjects = portfolioData.projects;
  const featuredProject = allProjects.find((p) => p.isFeatured);
  const regularProjects = allProjects.filter((p) => !p.isFeatured);
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1, delayChildren: 0.1 }
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

  const flowContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.15 }
    }
  };

  const flowStepVariants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  const drawLineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1, transition: { duration: 0.4, ease: "easeInOut" } }
  };

  const ArchitecturePipeline = ({ flow }) => (
    <div className="mt-4 pt-3 border-t border-[#4F8EF7]/10">
      <h5 className="text-[11px] uppercase tracking-wider font-semibold text-[#4F8EF7] mb-2.5 font-sora">
        Architecture Pipeline
      </h5>
      <motion.div 
        variants={flowContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-wrap items-center gap-1.5 py-2.5 px-3 bg-[#0A0F1E]/80 rounded-xl border border-[#4F8EF7]/10 shadow-inner"
      >
        {flow.map((step, idx) => (
          <React.Fragment key={step}>
            <motion.div variants={flowStepVariants} className="text-[10px] font-mono font-medium text-[#F1F5F9] bg-[#111827] px-2 py-1 rounded-md border border-[#4F8EF7]/10 flex items-center gap-1.5 shadow-sm relative z-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7]"></span>
              {step}
            </motion.div>
            {idx < flow.length - 1 && (
              <motion.div variants={flowStepVariants} className="flex items-center justify-center w-4 h-4 text-[#4F8EF7]/60 relative z-0">
                <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <motion.path 
                    d="M0 4H14M14 4L11 1M14 4L11 7" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    variants={drawLineVariants}
                  />
                </svg>
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );

  const TechBadges = ({ techStack }) => {
    const badgeStyle = "px-2.5 py-1 text-[10px] font-semibold font-mono tracking-wide rounded-md border shadow-sm transition-all duration-300";
    
    return (
      <div className="flex flex-wrap gap-1.5 mt-4">
        {techStack.languages.map((tech) => (
          <motion.span whileHover={shouldReduceMotion ? {} : { scale: 1.05 }} key={tech} className={`${badgeStyle} text-[#4F8EF7] bg-[#4F8EF7]/10 border-[#4F8EF7]/20`}>{tech}</motion.span>
        ))}
        {techStack.frameworks.map((tech) => (
          <motion.span whileHover={shouldReduceMotion ? {} : { scale: 1.05 }} key={tech} className={`${badgeStyle} text-[#A855F7] bg-[#A855F7]/10 border-[#A855F7]/20`}>{tech}</motion.span>
        ))}
        {techStack.aiMlData.map((tech) => (
          <motion.span whileHover={shouldReduceMotion ? {} : { scale: 1.05 }} key={tech} className={`${badgeStyle} text-[#14B8A6] bg-[#14B8A6]/10 border-[#14B8A6]/20`}>{tech}</motion.span>
        ))}
        {techStack.toolsConcepts.map((tech) => (
          <motion.span whileHover={shouldReduceMotion ? {} : { scale: 1.05 }} key={tech} className={`${badgeStyle} text-[#F59E0B] bg-[#F59E0B]/10 border-[#F59E0B]/20`}>{tech}</motion.span>
        ))}
      </div>
    );
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#0A0F1E]">
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
            <span className="text-xs uppercase tracking-widest font-semibold text-[#4F8EF7] font-mono">03 / Works</span>
          </motion.div>
          
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={headerVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-sora text-white"
          >
            Featured Projects
          </motion.h2>
        </div>

        {/* FEATURED PROJECT CARD */}
        {featuredProject && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 40 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 rounded-3xl overflow-hidden relative group"
          >
            {/* Continuous Pulse Glow (Disabled on Reduced Motion) */}
            {!shouldReduceMotion && (
              <motion.div 
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-r from-[#4F8EF7]/30 via-[#A855F7]/30 to-[#4F8EF7]/30"
                style={{ WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude" }}
              />
            )}
            {/* Hover Glow Border */}
            <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-r from-[#4F8EF7] to-[#A855F7] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude" }} />

            <div className="glass-card p-8 sm:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12 relative z-10 transition-transform duration-300 group-hover:-translate-y-[6px] group-hover:shadow-[0_20px_40px_-15px_rgba(79,142,247,0.15)]">
              
              <div className="lg:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#A855F7]/15 border border-[#A855F7]/40 text-xs font-bold text-[#A855F7] tracking-wider uppercase font-mono shadow-sm">
                      <Sparkles className="w-3.5 h-3.5" />
                      Featured
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#4F8EF7]/15 border border-[#4F8EF7]/40 text-xs font-bold text-[#4F8EF7] tracking-wider uppercase font-mono shadow-sm">
                      <Layers className="w-3.5 h-3.5" />
                      FYP
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#111827] border border-white/5 text-[11px] font-semibold text-[#94A3B8] font-mono shadow-sm">
                      {featuredProject.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold font-sora text-white mb-4">
                    {featuredProject.title}
                  </h3>

                  <div className="space-y-4 text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                    <p>
                      <strong className="text-rose-400 font-semibold uppercase tracking-wider text-xs block mb-1">Problem:</strong>
                      {featuredProject.problem}
                    </p>
                    <p>
                      <strong className="text-emerald-400 font-semibold uppercase tracking-wider text-xs block mb-1">Solution:</strong>
                      {featuredProject.solution}
                    </p>
                  </div>
                </div>

                <TechBadges techStack={featuredProject.techStack} />
              </div>

              <div className="lg:w-1/2 flex flex-col justify-between pt-6 lg:pt-0 lg:border-l lg:border-white/5 lg:pl-10">
                <div>
                  <h4 className="text-sm uppercase tracking-widest font-semibold text-[#F1F5F9] mb-4 font-sora">
                    Key Achievements
                  </h4>
                  <ul className="space-y-3.5 mb-6">
                    {featuredProject.keyAchievements.map((achievement) => (
                      <li key={achievement} className="flex items-start gap-3 text-sm text-[#94A3B8] font-inter">
                        <CheckCircle2 className="w-4 h-4 text-[#A855F7] mt-0.5 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <ArchitecturePipeline flow={featuredProject.architectureFlow} />
                </div>

                <div className="flex flex-wrap gap-4 mt-8 pt-4 border-t border-white/5">
                  <motion.a
                    whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                    href={featuredProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[120px] py-3 text-xs sm:text-sm font-semibold tracking-wider text-center text-[#F1F5F9] bg-[#111827] border border-[#4F8EF7]/20 rounded-xl hover:bg-[#4F8EF7]/10 hover:border-[#4F8EF7]/50 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                    <ArrowRight className="w-4 h-4 text-[#4F8EF7] opacity-0 -ml-4 group-hover/btn:opacity-100 group-hover/btn:ml-0 transition-all duration-300" />
                  </motion.a>
                  {featuredProject.liveDemoUrl && (
                    <motion.a
                      whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                      whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                      href={featuredProject.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[120px] py-3 text-xs sm:text-sm font-semibold tracking-wider text-center text-[#F1F5F9] bg-gradient-to-r from-[#4F8EF7] to-[#A855F7] rounded-xl hover:shadow-lg hover:shadow-[#4F8EF7]/25 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                  )}
                  {featuredProject.demoVideoUrl && (
                    <motion.a
                      whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                      whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                      href={featuredProject.demoVideoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[120px] py-3 text-xs sm:text-sm font-semibold tracking-wider text-center text-[#F1F5F9] bg-[#111827] border border-rose-500/30 rounded-xl hover:bg-rose-500/10 hover:border-rose-500/60 transition-all duration-300 flex items-center justify-center gap-2 text-rose-100 group/btn"
                    >
                      <Play className="w-4 h-4 text-rose-400" />
                      Watch Demo
                    </motion.a>
                  )}
                </div>
              </div>

            </div>
          </motion.div>
        )}

        {/* REGULAR PROJECTS GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {regularProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group transition-transform duration-300 hover:-translate-y-[6px] hover:shadow-[0_15px_30px_-10px_rgba(79,142,247,0.15)]"
            >
              <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-[#4F8EF7] to-[#A855F7] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude" }} />
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <span className="px-2.5 py-1 rounded-full bg-[#111827] border border-white/5 text-[10px] font-semibold text-[#94A3B8] font-mono shadow-sm">
                      {project.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-sora text-white mb-4 tracking-wide">
                    {project.title}
                  </h3>

                  <div className="space-y-4 text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
                    <p>
                      <strong className="text-rose-400 font-semibold uppercase tracking-wider text-[10px] block mb-1">Problem:</strong>
                      {project.problem}
                    </p>
                    <p>
                      <strong className="text-emerald-400 font-semibold uppercase tracking-wider text-[10px] block mb-1">Solution:</strong>
                      {project.solution}
                    </p>
                  </div>

                  <ArchitecturePipeline flow={project.architectureFlow} />
                  <TechBadges techStack={project.techStack} />
                </div>

                <div className="flex flex-wrap gap-3 mt-6 pt-4 border-t border-white/5 w-full">
                  <motion.a
                    whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[100px] py-2.5 text-xs font-semibold tracking-wider text-center text-[#F1F5F9] bg-[#111827] border border-[#4F8EF7]/15 rounded-lg hover:bg-[#4F8EF7]/10 hover:border-[#4F8EF7]/45 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  >
                    <Github className="w-3.5 h-3.5" />
                    GitHub
                    <ArrowRight className="w-3.5 h-3.5 text-[#4F8EF7] opacity-0 -ml-3 group-hover/btn:opacity-100 group-hover/btn:ml-0 transition-all duration-300" />
                  </motion.a>
                  {project.liveDemoUrl && (
                    <motion.a
                      whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                      whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[100px] py-2.5 text-xs font-semibold tracking-wider text-center text-[#F1F5F9] bg-gradient-to-r from-[#4F8EF7] to-[#A855F7] rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </motion.a>
                  )}
                  {project.demoVideoUrl && (
                    <motion.a
                      whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                      whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                      href={project.demoVideoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[100px] py-2.5 text-xs font-semibold tracking-wider text-center text-rose-100 bg-[#111827] border border-rose-500/20 rounded-lg hover:bg-rose-500/10 hover:border-rose-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Play className="w-3.5 h-3.5 text-rose-400" />
                      Video
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
