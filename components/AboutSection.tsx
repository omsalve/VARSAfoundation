"use client";

import { motion } from "framer-motion";
import {
  slideLeft, slideRight, fadeUp, scaleUp,
  staggerContainer, staggerContainerSlow, VIEWPORT,
} from "../lib/animation";

/* ── AboutSection ─────────────────────────────────────────────────────
   - Left column slides in from left
   - Right column slides in from right
   - Value pills stagger in with scaleUp
   - Director cards stagger up on scroll
───────────────────────────────────────────────────────────────────── */

const directors = [
  {
    name: "Sariputra Salve",
    role: "Co-Director & Founder",
    initials: "SS",
    bio: "A passionate social entrepreneur committed to grassroots community development and sustainable change.",
  },
  {
    name: "Vaishali Jambhulkar",
    role: "Co-Director & Founder",
    initials: "VJ",
    bio: "A dedicated advocate for women's rights and children's welfare with years of fieldwork experience.",
  },
];

const values = ["Integrity", "Inclusion", "Sustainability", "Compassion", "Accountability"];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── Left: Mission copy — slides from left ── */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <p className="section-label mb-3">Who We Are</p>
            <h2 className="section-heading mb-6">
              A Foundation Built on{" "}
              <span className="text-forest-600">Purpose & People</span>
            </h2>
            <div className="space-y-4 text-stone-600 text-base leading-relaxed">
              <p>
                VARSA Foundation was born from a simple yet powerful belief —
                that every individual, regardless of their background, deserves
                dignity, opportunity, and the tools to shape their own future.
                We work directly within communities, listening before acting,
                and building trust before building programs.
              </p>
              <p>
                Our work spans women empowerment, health &amp; hygiene, education,
                and sustainable livelihoods — interconnected pillars that
                together lift entire communities out of cycles of disadvantage.
              </p>
              <p>
                We are not just an organization. We are neighbors, advocates,
                and changemakers — rooted in the communities we serve.
              </p>
            </div>

            {/* Value pills — stagger in */}
            <motion.div
              className="flex flex-wrap gap-2 mt-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
            >
              {values.map((value) => (
                <motion.span
                  key={value}
                  variants={scaleUp}
                  className="bg-forest-50 text-forest-700 text-sm font-medium px-3 py-1.5 rounded-full border border-forest-200"
                >
                  {value}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Directors — slides from right ── */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <p className="section-label mb-3">Our Leadership</p>
            <h3 className="font-display text-2xl font-bold text-stone-900 mb-6">
              The Faces Behind the Mission
            </h3>

            <motion.div
              className="space-y-4"
              variants={staggerContainerSlow}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
            >
              {directors.map((director) => (
                <motion.div
                  key={director.name}
                  variants={fadeUp}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-stone-100 shadow-card hover:shadow-card-hover transition-shadow bg-stone-50 cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-forest-600 text-white flex items-center justify-center font-display font-bold text-sm flex-shrink-0">
                    {director.initials}
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-stone-900 leading-snug">{director.name}</p>
                    <p className="text-forest-600 text-xs font-medium uppercase tracking-wide mb-1">{director.role}</p>
                    <p className="text-stone-500 text-sm leading-relaxed">{director.bio}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}