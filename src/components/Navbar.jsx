import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion, animate } from "framer-motion";
import { Menu, X } from "lucide-react";
import { TRANSITIONS } from "../utils/motion";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const shouldReduceMotion = useReducedMotion();

  const { scrollY } = useScroll();
  
  // Smoothly interpolate background color and backdrop blur
  const navBg = useTransform(
    scrollY,
    [0, 50],
    ["rgba(10, 15, 30, 0)", "rgba(10, 15, 30, 0.75)"]
  );
  const navBorder = useTransform(
    scrollY,
    [0, 50],
    ["rgba(79, 142, 247, 0)", "rgba(79, 142, 247, 0.08)"]
  );
  const navBlur = useTransform(
    scrollY,
    [0, 50],
    ["blur(0px)", "blur(12px)"]
  );
  const navShadow = useTransform(
    scrollY,
    [0, 50],
    ["none", "0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -4px rgba(0, 0, 0, 0.1)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const el = document.querySelector(item.href);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.href);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      
      if (shouldReduceMotion) {
        window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
      } else {
        // Dim main content briefly to guide the eye
        const mainContent = document.querySelector("main");
        if (mainContent) {
          animate(mainContent, { opacity: [1, 0.85, 1] }, { duration: TRANSITIONS.DURATION_SCROLL, ease: TRANSITIONS.EASE_OUT_EXPO });
        }

        // Custom smooth scroll using Framer Motion
        animate(window.scrollY, elementPosition - offset, {
          duration: TRANSITIONS.DURATION_SCROLL,
          ease: TRANSITIONS.EASE_OUT_EXPO,
          onUpdate: (latest) => window.scrollTo(0, latest)
        });
      }
    }
  };

  // Mobile menu animation variants
  const sidebarVariants = {
    hidden: { x: "-100%" },
    visible: { 
      x: 0, 
      transition: { 
        ...TRANSITIONS.SPRING_SNAPPY,
        staggerChildren: 0.04,
        delayChildren: 0.1
      } 
    },
    exit: { x: "-100%", transition: { duration: 0.15, ease: "easeIn" } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: TRANSITIONS.SPRING_SNAPPY }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.15 } }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={shouldReduceMotion ? { background: "rgba(10,15,30,0.9)", borderBottom: "1px solid rgba(79,142,247,0.1)" } : { 
          backgroundColor: navBg, 
          borderBottomColor: navBorder,
          borderBottomWidth: "1px",
          borderBottomStyle: "solid",
          backdropFilter: navBlur,
          WebkitBackdropFilter: navBlur,
          boxShadow: navShadow
        }}
        className="fixed top-0 left-0 right-0 z-50 py-4 transition-all"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Monogram Logo */}
          <a
            href="#"
            onClick={(e) => handleClick(e, "#about")}
            className="group flex items-center gap-2 text-2xl font-bold tracking-wider"
          >
            <span className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-[#111827] border border-[#4F8EF7]/30 text-base font-extrabold text-[#F1F5F9] shadow-md shadow-[#4F8EF7]/10 transition-all duration-300 group-hover:border-[#A855F7]/50 group-hover:shadow-[#A855F7]/20">
              <span className="gradient-text font-sora">SH</span>
            </span>
            <span className="hidden sm:inline font-sora text-lg tracking-tight bg-gradient-to-r from-[#F1F5F9] to-[#94A3B8] bg-clip-text text-transparent group-hover:text-[#4F8EF7] transition-colors">
              Shahzaib Haider
            </span>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-300 ${
                  activeSection === item.href
                    ? "text-[#4F8EF7]"
                    : "text-[#94A3B8] hover:text-[#F1F5F9]"
                }`}
              >
                {item.label}
                {activeSection === item.href && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#4F8EF7] to-[#A855F7] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
            <motion.a
              whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
              href="https://drive.google.com/file/d/1qwBejlOWV1fuKlXi0Xm5JoaUNa27Riz2/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold tracking-wider text-[#F1F5F9] bg-gradient-to-r from-[#4F8EF7] to-[#A855F7] rounded-lg shadow-md transition-all duration-300 hover:shadow-[#4F8EF7]/20"
            >
              Resume
            </motion.a>
          </nav>

          {/* Mobile Navigation Trigger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 text-[#94A3B8] hover:text-[#F1F5F9] rounded-lg bg-[#111827]/80 border border-[#4F8EF7]/10 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[#0A0F1E]/80 backdrop-blur-sm z-[60] md:hidden"
            />
            
            {/* Sidebar */}
            <motion.div
              variants={shouldReduceMotion ? { hidden: { opacity: 0 }, visible: { opacity: 1 }, exit: { opacity: 0 } } : sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 left-0 bottom-0 w-64 bg-[#0A0F1E] border-r border-[#4F8EF7]/10 z-[70] md:hidden shadow-2xl flex flex-col"
            >
              <div className="p-6 flex justify-between items-center border-b border-[#4F8EF7]/10">
                <span className="font-sora font-bold text-lg text-white">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-[#94A3B8] hover:text-white rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 flex flex-col gap-4 overflow-y-auto flex-1">
                {navItems.map((item) => (
                  <motion.a
                    variants={itemVariants}
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className={`text-base font-semibold py-3 px-4 rounded-lg transition-colors ${
                      activeSection === item.href
                        ? "text-[#F1F5F9] bg-[#4F8EF7]/15 border-l-2 border-[#4F8EF7]"
                        : "text-[#94A3B8] hover:text-[#F1F5F9] hover:bg-[#111827]/50"
                    }`}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>

              <div className="p-6 border-t border-[#4F8EF7]/10">
                <motion.a
                  variants={itemVariants}
                  whileTap={{ scale: 0.95 }}
                  href="https://drive.google.com/file/d/1qwBejlOWV1fuKlXi0Xm5JoaUNa27Riz2/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 text-sm font-semibold tracking-wider text-[#F1F5F9] bg-gradient-to-r from-[#4F8EF7] to-[#A855F7] rounded-lg shadow-md transition-shadow hover:shadow-[#4F8EF7]/20"
                >
                  Download Resume
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
