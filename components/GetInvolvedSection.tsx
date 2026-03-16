"use client";

import { motion } from "framer-motion";
import { fadeUp, slideLeft, slideRight, scaleUp, staggerContainer, VIEWPORT } from "../lib/animation";

/* ── GetInvolvedSection ───────────────────────────────────────────────
   - Heading fades up
   - Volunteer card slides from left, Donate card slides from right
   - Amount buttons scale in with stagger
   - CTAs have whileHover/whileTap spring feedback
───────────────────────────────────────────────────────────────────── */

export default function GetInvolvedSection() {
  return (
    <section id="get-involved" className="section-padding bg-white">
      <div className="section-container">

        {/* Section heading */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <p className="section-label mb-3">Join the Movement</p>
          <h2 className="section-heading mb-4">
            Two Ways to{" "}
            <span className="text-forest-600">Make a Difference</span>
          </h2>
          <p className="text-stone-500 text-base leading-relaxed">
            Change doesn't happen in isolation — it takes a community. Whether
            you give your time or your resources, every contribution matters.
          </p>
        </motion.div>

        {/* CTA Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

          {/* ── Volunteer Card — slides from left ── */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="rounded-3xl border-2 border-forest-200 bg-forest-50 p-8 flex flex-col items-start gap-5 hover:border-forest-400 transition-colors"
          >
            <motion.div
              className="w-14 h-14 rounded-2xl bg-forest-600 text-white flex items-center justify-center"
              whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }}
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
              </svg>
            </motion.div>
            <div>
              <h3 className="font-display text-2xl font-bold text-stone-900 mb-2">Volunteer With Us</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-1">
                Your time and skills can transform lives. Whether you're a
                teacher, medical professional, engineer, or student — there's a
                place for you at VARSA Foundation.
              </p>
            </div>
            <ul className="space-y-2 text-sm text-stone-600">
              {[
                "Flexible — remote and on-ground opportunities",
                "Work directly with communities",
                "Receive a volunteer certificate",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-forest-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <motion.a
              href="mailto:volunteer@varsafoundation.org"
              className="btn-primary w-full justify-center mt-2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Apply to Volunteer
            </motion.a>
          </motion.div>

          {/* ── Donate Card — slides from right ── */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="rounded-3xl border-2 border-stone-200 bg-stone-900 p-8 flex flex-col items-start gap-5"
          >
            <motion.div
              className="w-14 h-14 rounded-2xl bg-amber-400 text-stone-900 flex items-center justify-center"
              whileHover={{ scale: 1.15, rotate: 10, transition: { duration: 0.3 } }}
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </motion.div>
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-2">Support Our Work</h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                Every rupee you donate goes directly to our programs — nutrition
                kits, school supplies, sanitation infrastructure, and livelihood
                training. No overhead bloat.
              </p>
            </div>

            {/* Amount buttons — staggered scale */}
            <motion.div
              className="grid grid-cols-3 gap-2 w-full"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
            >
              {["₹500", "₹1,000", "₹5,000"].map((amount) => (
                <motion.button
                  key={amount}
                  variants={scaleUp}
                  whileHover={{ scale: 1.06, backgroundColor: "#374151" }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-xl border border-stone-600 text-stone-300 text-sm font-medium py-2 transition-colors"
                >
                  {amount}
                </motion.button>
              ))}
            </motion.div>

            <motion.a
              href="mailto:donate@varsafoundation.org"
              className="inline-flex items-center justify-center gap-2 w-full bg-amber-400 text-stone-900 font-semibold px-6 py-3.5 rounded-xl hover:bg-amber-500 transition-colors mt-2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Donate Now
            </motion.a>
            <p className="text-stone-500 text-xs text-center w-full">
              Donations are eligible for tax exemption under Section 80G.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}