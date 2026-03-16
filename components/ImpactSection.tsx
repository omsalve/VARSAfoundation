"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, staggerContainerSlow, counterReveal, VIEWPORT } from "../lib/animation";
import { useCountUp } from "../lib/useCountUp";

/* ── ImpactSection ────────────────────────────────────────────────────
   - GSAP-driven count-up numbers when section enters view
   - Framer Motion: section heading fade, cards stagger in
   - Each stat animates its numeric value from 0 → target
───────────────────────────────────────────────────────────────────── */

interface Stat {
  numericValue: number; // for count-up
  suffix: string;       // "+", "x", etc.
  label: string;
  description: string;
  icon: React.ReactNode;
}

const stats: Stat[] = [
  {
    numericValue: 5000, suffix: "+",
    label: "People Helped",
    description: "Individuals directly impacted through our programs",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
      </svg>
    ),
  },
  {
    numericValue: 30, suffix: "+",
    label: "Communities Served",
    description: "Villages and urban neighbourhoods reached across the region",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    numericValue: 200, suffix: "+",
    label: "Active Volunteers",
    description: "Dedicated changemakers contributing their time and skills",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    numericValue: 50, suffix: "+",
    label: "Projects Completed",
    description: "Successful initiatives across health, education, and welfare",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

/* ── Animated stat card ── */
function StatCard({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const count = useCountUp(stat.numericValue, 1800, inView);

  // Format with commas
  const formatted = count.toLocaleString("en-IN");

  return (
    <motion.div
      ref={ref}
      variants={counterReveal}
      className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center"
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
    >
      <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white mx-auto mb-4">
        {stat.icon}
      </div>
      <p className="font-display text-4xl md:text-5xl font-bold text-white mb-1">
        {formatted}{stat.suffix}
      </p>
      <p className="text-forest-100 font-semibold text-base mb-2">{stat.label}</p>
      <p className="text-forest-200 text-sm leading-relaxed">{stat.description}</p>
    </motion.div>
  );
}

export default function ImpactSection() {
  return (
    <section id="impact" className="section-padding bg-forest-700 relative overflow-hidden">

      {/* Decorative blobs */}
      <div aria-hidden="true" className="absolute top-0 right-0 w-96 h-96 rounded-full bg-forest-600/50 blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-forest-800/60 blur-2xl pointer-events-none" />

      <div className="section-container relative z-10">

        {/* Heading */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <p className="text-forest-300 font-sans font-semibold text-sm uppercase tracking-widest mb-3">
            Our Impact
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Numbers That Tell the Story
          </h2>
          <p className="text-forest-200 text-base leading-relaxed">
            Every number represents a real person, a real community, and a real
            story of change. Here's what we've accomplished together so far.
          </p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </motion.div>

        <motion.p
          className="text-center text-forest-300 text-sm mt-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          *These figures reflect our work to date and are updated annually.
        </motion.p>
      </div>
    </section>
  );
}