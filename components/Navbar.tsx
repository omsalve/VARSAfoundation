"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ── Navbar ──────────────────────────────────────────────────────────
   - GSAP ScrollTrigger: adds .scrolled class → shrinks + shadow
   - Framer Motion: logo/links entrance, mobile menu slide + stagger
───────────────────────────────────────────────────────────────────── */

const navLinks = [
  { label: "About",        href: "#about"        },
  { label: "Focus Areas",  href: "#focus-areas"  },
  { label: "Our Impact",   href: "#impact"       },
  { label: "Get Involved", href: "#get-involved" },
];

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

const mobileLinkVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.06, duration: 0.3, ease: "easeOut" },
  }),
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      start: "top+=80 top",
      onEnter:     () => headerRef.current?.classList.add("navbar-scrolled"),
      onLeaveBack: () => headerRef.current?.classList.remove("navbar-scrolled"),
    });
    return () => trigger.kill();
  }, []);

  return (
    <header ref={headerRef} className="navbar-base fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <style>{`
        .navbar-base {
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid transparent;
        }
        .navbar-scrolled {
          background: rgba(255,255,255,0.98) !important;
          border-bottom-color: #e7e5e4 !important;
          box-shadow: 0 2px 20px rgb(0 0 0 / 0.06);
        }
      `}</style>

      <div className="section-container">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2 group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="w-8 h-8 rounded-lg bg-forest-600 flex items-center justify-center text-white text-sm font-bold group-hover:bg-forest-700 transition-colors">
              V
            </span>
            <span className="font-display font-bold text-lg text-stone-900">
              VARSA <span className="text-forest-600">Foundation</span>
            </span>
          </motion.a>

          {/* Desktop nav */}
          <motion.nav
            className="hidden md:flex items-center gap-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-stone-600 hover:text-forest-600 font-sans text-sm font-medium transition-colors group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-forest-500 group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
          </motion.nav>

          {/* Desktop CTAs */}
          <motion.div
            className="hidden md:flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <a href="#get-involved" className="btn-outline text-sm py-2 px-4">Volunteer</a>
            <a href="#get-involved" className="btn-primary text-sm py-2 px-4">Donate</a>
          </motion.div>

          {/* Mobile hamburger */}
          <motion.button
            className="md:hidden p-2 rounded-lg text-stone-600 hover:bg-stone-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </motion.button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden overflow-hidden border-t border-stone-100"
            >
              <div className="py-4 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    custom={i}
                    variants={mobileLinkVariants}
                    initial="hidden"
                    animate="visible"
                    onClick={() => setMenuOpen(false)}
                    className="block text-stone-600 hover:text-forest-600 font-sans text-sm font-medium py-2 px-1 transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <div className="flex flex-col gap-2 pt-3">
                  <a href="#get-involved" className="btn-outline text-sm py-2" onClick={() => setMenuOpen(false)}>Volunteer</a>
                  <a href="#get-involved" className="btn-primary text-sm py-2" onClick={() => setMenuOpen(false)}>Donate</a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}