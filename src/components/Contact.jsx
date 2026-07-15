import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Mail, Linkedin, Github, Send, CheckCircle2 } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function Contact() {
  const { email, linkedin, github } = portfolioData.personal;
  const shouldReduceMotion = useReducedMotion();
  
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    setSubmitError("");
    
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000);

      const response = await fetch("https://formsubmit.co/ajax/shahzaib1384@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: `New Portfolio Message from ${formData.name}`,
            _captcha: "false"
        }),
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSuccess(false), 2000);
      } else {
        throw new Error("FormSubmit rejected the request");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError("Failed to send message. Please try emailing me directly.");
      setTimeout(() => setSubmitError(""), 5000);
    } finally {
      setIsSubmitting(false);
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1, delayChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0A0F1E]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={headerVariants}
            className="flex items-center gap-3 mb-2"
          >
            <span className="w-8 h-[2px] bg-[#4F8EF7] rounded-full"></span>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#4F8EF7] font-mono">07 / Connect</span>
          </motion.div>
          
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={headerVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-sora text-white"
          >
            Get In Touch
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl sm:text-3xl font-bold font-sora text-white mb-4 leading-tight">
                Let's Build Something Together
              </h3>
              <p className="text-base sm:text-lg text-[#94A3B8] font-inter leading-relaxed">
                Open to AI, Full-Stack, and Data Analytics roles. Drop me a message or connect through social channels.
              </p>
            </motion.div>

            <div className="space-y-4">
              <motion.a variants={itemVariants} whileHover={shouldReduceMotion ? {} : { scale: 1.02 }} whileTap={shouldReduceMotion ? {} : { scale: 0.98 }} href={`mailto:${email}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl glass-card glass-card-hover group shadow-md shadow-black/10 transition-transform"
              >
                <div className="p-3 rounded-xl bg-[#111827] border border-[#4F8EF7]/20 text-[#4F8EF7] group-hover:bg-[#4F8EF7] group-hover:text-white transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold font-mono text-[#94A3B8] uppercase tracking-wider">Email Me</span>
                  <span className="block text-sm sm:text-base font-semibold text-white group-hover:text-[#4F8EF7] transition-colors">{email}</span>
                </div>
              </motion.a>

              <motion.a variants={itemVariants} whileHover={shouldReduceMotion ? {} : { scale: 1.02 }} whileTap={shouldReduceMotion ? {} : { scale: 0.98 }} href={linkedin} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl glass-card glass-card-hover group shadow-md shadow-black/10 transition-transform"
              >
                <div className="p-3 rounded-xl bg-[#111827] border border-[#A855F7]/20 text-[#A855F7] group-hover:bg-[#A855F7] group-hover:text-white transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold font-mono text-[#94A3B8] uppercase tracking-wider">LinkedIn</span>
                  <span className="block text-sm sm:text-base font-semibold text-white group-hover:text-[#A855F7] transition-colors">shahzaibhaider2751</span>
                </div>
              </motion.a>

              <motion.a variants={itemVariants} whileHover={shouldReduceMotion ? {} : { scale: 1.02 }} whileTap={shouldReduceMotion ? {} : { scale: 0.98 }} href={github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl glass-card glass-card-hover group shadow-md shadow-black/10 transition-transform"
              >
                <div className="p-3 rounded-xl bg-[#111827] border border-[#4F8EF7]/25 text-[#94A3B8] group-hover:text-[#4F8EF7] transition-all duration-300">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold font-mono text-[#94A3B8] uppercase tracking-wider">GitHub</span>
                  <span className="block text-sm sm:text-base font-semibold text-white group-hover:text-[#4F8EF7] transition-colors">shahzaib1384</span>
                </div>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, x: shouldReduceMotion ? 0 : 30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="lg:col-span-7 w-full"
          >
            <div className="glass-card rounded-3xl p-6 sm:p-10 relative">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="relative">
                  <input type="text" id="contact-form-name" required value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder=" "
                    className="block w-full px-4 py-4 text-sm text-white bg-[#0A0F1E]/60 border border-[#4F8EF7]/15 rounded-xl appearance-none focus:outline-none focus:border-[#4F8EF7] focus:ring-1 focus:ring-[#4F8EF7] peer transition-all duration-300 shadow-inner"
                  />
                  <label htmlFor="contact-form-name"
                    className="absolute text-sm text-[#94A3B8] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#111827] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3 rounded peer-focus:text-[#4F8EF7] font-medium"
                  >Your Name</label>
                </div>

                <div className="relative">
                  <input type="email" id="contact-form-email" required value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder=" "
                    className="block w-full px-4 py-4 text-sm text-white bg-[#0A0F1E]/60 border border-[#4F8EF7]/15 rounded-xl appearance-none focus:outline-none focus:border-[#4F8EF7] focus:ring-1 focus:ring-[#4F8EF7] peer transition-all duration-300 shadow-inner"
                  />
                  <label htmlFor="contact-form-email"
                    className="absolute text-sm text-[#94A3B8] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#111827] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3 rounded peer-focus:text-[#4F8EF7] font-medium"
                  >Email Address</label>
                </div>

                <div className="relative">
                  <textarea id="contact-form-message" required rows="4" value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder=" "
                    className="block w-full px-4 py-4 text-sm text-white bg-[#0A0F1E]/60 border border-[#4F8EF7]/15 rounded-xl appearance-none focus:outline-none focus:border-[#4F8EF7] focus:ring-1 focus:ring-[#4F8EF7] peer transition-all duration-300 shadow-inner resize-none"
                  ></textarea>
                  <label htmlFor="contact-form-message"
                    className="absolute text-sm text-[#94A3B8] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#111827] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3 rounded peer-focus:text-[#4F8EF7] font-medium"
                  >Your Message</label>
                </div>

                <motion.button 
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  type="submit" 
                  disabled={isSubmitting || isSuccess}
                  className="w-full py-4 px-6 text-sm font-semibold tracking-wider text-[#F1F5F9] bg-gradient-to-r from-[#4F8EF7] to-[#A855F7] rounded-xl hover:shadow-lg hover:shadow-[#4F8EF7]/20 transition-all duration-300 flex items-center justify-center gap-2 shadow-md disabled:opacity-80 disabled:cursor-not-allowed"
                >
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.span 
                        key="submitting" 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        exit={{ opacity: 0 }} 
                        transition={{ duration: 0.2 }} 
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin flex-shrink-0" 
                      />
                    ) : isSuccess ? (
                      <motion.div 
                        key="success" 
                        initial={{ scale: 0.8, opacity: 0 }} 
                        animate={{ scale: 1, opacity: 1 }} 
                        exit={{ scale: 0.8, opacity: 0 }} 
                        transition={{ type: "spring", stiffness: 300, damping: 20 }} 
                        className="flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4" /> Message Sent
                      </motion.div>
                    ) : (
                      <motion.div 
                        key="default" 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        exit={{ opacity: 0 }} 
                        transition={{ duration: 0.2 }} 
                        className="flex items-center gap-2"
                      >
                        <Send className="w-4 h-4" /> Send Message
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </form>

              <AnimatePresence>
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="mt-6 p-4 rounded-xl bg-rose-950/40 border border-rose-500/30 flex items-center gap-3 text-rose-400 text-sm shadow-md"
                  >
                    <span>{submitError}</span>
                  </motion.div>
                )}
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="mt-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center gap-3 text-emerald-400 text-sm shadow-md"
                  >
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span>Thank you! Your message has been sent successfully. I will get back to you soon.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
