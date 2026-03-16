"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerContainerSlow, scaleUp, VIEWPORT } from "../lib/animation";

const footerLinks = {
  "Quick Links": [
    { label: "About Us",      href: "#about"        },
    { label: "Focus Areas",   href: "#focus-areas"  },
    { label: "Our Impact",    href: "#impact"       },
    { label: "Get Involved",  href: "#get-involved" },
  ],
  "Get Involved": [
    { label: "Volunteer",     href: "#get-involved" },
    { label: "Donate",        href: "#get-involved" },
    { label: "Partner With Us", href: "mailto:partnerships@varsafoundation.org" },
    { label: "Internships",   href: "mailto:careers@varsafoundation.org" },
  ],
};

// Placeholder social media icons
const socials = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-400">
      <div className="section-container py-12 md:py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-10"
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          {/* Brand column */}
          <motion.div variants={fadeUp} className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-lg bg-forest-600 flex items-center justify-center text-white font-bold text-sm">V</span>
              <span className="font-display font-bold text-lg text-white">
                VARSA <span className="text-forest-400">Foundation</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs mb-6">
              Empowering communities through education, health &amp; hygiene, women
              empowerment, and sustainable livelihoods. Every action we take is
              rooted in dignity, equity, and lasting impact.
            </p>
            <div className="space-y-1 text-sm">
              <a href="mailto:contact@varsafoundation.org" className="flex items-center gap-2 hover:text-forest-400 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contact@varsafoundation.org
              </a>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                Maharashtra, India
              </p>
            </div>

            {/* Social icons — staggered scale */}
            <motion.div
              className="flex items-center gap-3 mt-5"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
            >
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  variants={scaleUp}
                  whileHover={{ scale: 1.15, backgroundColor: "#1f6e1f" }}
                  className="w-9 h-9 rounded-lg bg-stone-800 hover:text-white flex items-center justify-center transition-colors"
                >
                  {s.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <motion.div key={heading} variants={fadeUp}>
              <h4 className="text-white font-semibold text-sm mb-4">{heading}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm hover:text-forest-400 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-800">
        <div className="section-container py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-stone-600">
          <p>© {year} VARSA Foundation. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-stone-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-stone-400 transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}