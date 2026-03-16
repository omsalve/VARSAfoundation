"use client";

import { motion } from "framer-motion";
import { fadeUp, scaleUp, staggerContainerSlow, VIEWPORT } from "../lib/animation";

interface FocusArea {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string; // Tailwind bg class for icon wrapper
}

const focusAreas: FocusArea[] = [
  {
    title: "Education",
    description:
      "We bridge the gap between potential and opportunity by running learning centres, scholarship programs, and digital literacy initiatives for children and adults alike.",
    color: "bg-forest-50 text-forest-600",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
  },
  {
    title: "Health & Hygiene",
    description:
      "Access to clean water, sanitation, and preventive healthcare are fundamental rights. We run health camps, hygiene awareness drives, and support rural medical access.",
    color: "bg-sky-50 text-sky-600",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9" />
      </svg>
    ),
  },
  {
    title: "Women Empowerment",
    description:
      "We run skill development workshops, self-help groups, and legal literacy camps to help women achieve financial independence and community leadership.",
    color: "bg-rose-50 text-rose-600",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c2.21 0 4-1.79 4-4S14.21 3 12 3 8 4.79 8 7s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    ),
  },
  {
    title: "Livelihood & Environment",
    description:
      "We support sustainable livelihoods through vocational training and micro-enterprise support, while driving environmental stewardship through tree plantation and waste management.",
    color: "bg-amber-50 text-amber-600",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

/* ── Single focus area card ── */
function FocusCard({ area }: { area: FocusArea }) {
  return (
    <motion.div
      variants={scaleUp}
      whileHover={{ y: -6, transition: { duration: 0.22 } }}
      className="bg-white rounded-2xl border border-stone-100 shadow-card hover:shadow-card-hover transition-shadow p-6 flex flex-col gap-4 cursor-default"
    >
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${area.color}`}>
        {area.icon}
      </div>
      <h3 className="font-display text-xl font-bold text-stone-900">{area.title}</h3>
      <p className="text-stone-500 text-sm leading-relaxed flex-1">{area.description}</p>
      <a
        href="#"
        className="inline-flex items-center gap-1 text-forest-600 text-sm font-semibold hover:text-forest-700 transition-colors mt-1 group"
      >
        Learn more
        <motion.svg
          className="w-4 h-4"
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
          animate={{ x: 0 }}
          whileHover={{ x: 3 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </motion.svg>
      </a>
    </motion.div>
  );
}

export default function FocusAreasSection() {
  return (
    <section id="focus-areas" className="section-padding bg-stone-50">
      <div className="section-container">

        {/* Heading */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <p className="section-label mb-3">What We Do</p>
          <h2 className="section-heading mb-4">
            Our <span className="text-forest-600">Focus Areas</span>
          </h2>
          <p className="text-stone-500 text-base leading-relaxed">
            Every initiative we run is rooted in one question: what does this
            community actually need? Our work targets four interconnected areas
            that together create lasting, systemic change.
          </p>
        </motion.div>

        {/* Cards grid — staggered */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          {focusAreas.map((area) => (
            <FocusCard key={area.title} area={area} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}