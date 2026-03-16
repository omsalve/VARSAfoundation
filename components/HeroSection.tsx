"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { fadeIn, fadeUp, staggerContainer } from "../lib/animation";

/* ── HeroSection ──────────────────────────────────────────────────────
   - GSAP: splits heading words and staggers them in on mount
   - Framer Motion: badge, subtext, CTAs, trust indicators fade up
   - Lenis: smooth scroll drives parallax on background blobs
───────────────────────────────────────────────────────────────────── */

export default function HeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const blob1Ref   = useRef<HTMLDivElement>(null);
  const blob2Ref   = useRef<HTMLDivElement>(null);

  // GSAP: word-split entrance for h1
  useEffect(() => {
    if (!headingRef.current) return;

    const words = headingRef.current.querySelectorAll(".word");

    gsap.fromTo(
      words,
      { y: "110%", opacity: 0, rotateX: -40 },
      {
        y: "0%",
        opacity: 1,
        rotateX: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.3,
      }
    );
  }, []);

  // GSAP: subtle parallax on blobs via mousemove
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const cx = (clientX / window.innerWidth  - 0.5) * 30;
      const cy = (clientY / window.innerHeight - 0.5) * 30;

      gsap.to(blob1Ref.current, { x: cx * 0.6, y: cy * 0.6, duration: 1.2, ease: "power2.out" });
      gsap.to(blob2Ref.current, { x: -cx * 0.4, y: -cy * 0.4, duration: 1.4, ease: "power2.out" });
    };

    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-forest-50"
    >
      {/* Parallax blobs */}
      <div
        ref={blob1Ref}
        aria-hidden="true"
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-forest-200/40 blur-3xl pointer-events-none"
      />
      <div
        ref={blob2Ref}
        aria-hidden="true"
        className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full bg-forest-300/30 blur-3xl pointer-events-none"
      />

      <div className="section-container relative z-10 section-padding pt-32">
        <div className="max-w-3xl">

          {/* Badge */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-forest-100 text-forest-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-widest"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-forest-500 inline-block" />
            Registered NGO · Maharashtra, India
          </motion.div>

          {/* Heading — GSAP splits each word */}
          <h1
            ref={headingRef}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-stone-900 leading-[1.1] mb-6"
            style={{ perspective: "600px" }}
          >
            {["Empowering", "Communities,", "Transforming", "Lives"].map((word, i) => (
              <span
                key={i}
                className="inline-block overflow-hidden mr-[0.25em] last:mr-0"
                style={{ verticalAlign: "bottom" }}
              >
                <span
                  className={`word inline-block ${word === "Communities," ? "text-forest-600" : ""}`}
                  style={{ opacity: 0 }}
                >
                  {word}
                </span>
              </span>
            ))}
          </h1>

          {/* Sub-description */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.85 }}
            className="text-stone-600 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
          >
            VARSA Foundation works at the grassroots level to uplift
            underserved communities through women empowerment, health &amp; hygiene,
            education, and sustainable livelihoods — because lasting change
            begins at home.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            transition={{ delayChildren: 1.0, staggerChildren: 0.12 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#get-involved"
              className="btn-primary text-base px-8 py-3.5"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              Donate Now
            </motion.a>
            <motion.a
              href="#get-involved"
              className="btn-outline text-base px-8 py-3.5"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
              </svg>
              Become a Volunteer
            </motion.a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            transition={{ delayChildren: 1.2, staggerChildren: 0.1 }}
            className="flex flex-wrap items-center gap-6 mt-12 text-stone-500 text-sm"
          >
            {["Transparent & Accountable", "Community-First Approach", "Grassroots Impact"].map((item) => (
              <motion.div
                key={item}
                variants={fadeUp}
                className="flex items-center gap-2"
              >
                <svg className="w-4 h-4 text-forest-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {item}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}