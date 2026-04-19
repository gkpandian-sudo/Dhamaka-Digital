"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, inView, EASE } from "@/lib/motion"
import { useLang } from "@/lib/i18n"

const WA_LINK =
  "https://wa.me/919632233776?text=Hello%2C%20I%27d%20like%20a%20free%20consultation%20for%20my%20website."

const tierPill = {
  hot:    "bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-400",
  warm:   "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400",
  steady: "bg-green-50 text-green-700 dark:bg-green-950/40 dark:text-green-400",
}

export default function Industries() {
  const { t } = useLang()
  const ind = t.industries

  return (
    <section id="industries" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* ── Section header ──────────────────────────────────────── */}
        <motion.div
          {...inView}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-16"
        >
          {/* Left: title */}
          <motion.div variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-7 h-[1.5px] bg-gold" />
              <span className="text-gold text-[11px] font-medium tracking-[0.18em] uppercase">
                {ind.eyebrow}
              </span>
            </div>
            <h2 className="font-editorial text-[clamp(36px,5vw,56px)] font-semibold leading-[1.08] text-on-surface">
              {ind.headline}
              <br />
              <em className="text-gold not-italic">{ind.headlineAccent}</em>
            </h2>
          </motion.div>

          {/* Right: body */}
          <motion.p
            variants={fadeInUp}
            className="text-base font-light leading-relaxed text-on-surface-variant"
          >
            {ind.sub}
          </motion.p>
        </motion.div>

        {/* ── Industry grid ───────────────────────────────────────── */}
        <motion.div
          {...inView}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] rounded-xl overflow-hidden border border-outline bg-outline"
        >
          {ind.items.map((industry) => (
            <motion.div
              key={industry.name}
              variants={fadeInUp}
              className="relative group bg-surface hover:bg-surface-variant transition-colors duration-300 p-8 overflow-hidden flex flex-col"
            >
              {/* Gold gradient bottom-border on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[3px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                style={{ background: "linear-gradient(90deg, rgb(var(--color-gold)), rgb(var(--color-gold) / 0.4))" }}
              />

              {/* Icon */}
              <div className="mb-5">
                <div className="w-11 h-11 rounded-[10px] bg-surface-variant group-hover:bg-surface transition-colors duration-300 flex items-center justify-center text-xl flex-shrink-0">
                  {industry.icon}
                </div>
              </div>

              {/* Name + sub */}
              <h3 className="font-editorial text-[22px] font-semibold leading-snug mb-1 text-on-surface">
                {industry.name}
              </h3>
              <p className="text-[11px] text-on-surface-variant mb-4 tracking-wide">
                {industry.sub}
              </p>

              {/* Pitch */}
              <p className="text-sm font-light leading-[1.7] text-on-surface-variant mb-5 pb-5 border-b border-outline flex-grow">
                {industry.pitch}
                <strong className="font-medium text-on-surface">{industry.bold}</strong>
              </p>

              {/* Benefits */}
              <ul className="flex flex-col gap-2 mb-5">
                {industry.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-[13px] text-on-surface-variant leading-snug">
                    <span
                      className="mt-[5px] w-[5px] h-[5px] rounded-full flex-shrink-0"
                      style={{ background: "rgb(var(--color-gold))" }}
                    />
                    {b}
                  </li>
                ))}
              </ul>

              {/* Signature service */}
              <div className="flex items-center gap-2 px-3.5 py-2.5 bg-on-surface rounded-lg mt-auto">
                <span className="text-[10px] font-medium uppercase tracking-widest text-on-surface-variant/60 mr-auto">
                  {ind.bestFor}
                </span>
                <span className="text-[12px] font-medium text-surface">
                  {industry.sig}
                </span>
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" className="opacity-50">
                  <path d="M2 10L10 2M10 2H4M10 2V8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Bottom CTA strip ────────────────────────────────────── */}
        <motion.div
          {...inView}
          variants={fadeInUp}
          className="mt-14 p-10 bg-on-surface rounded-xl grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center gap-8"
        >
          <div>
            <h3 className="font-editorial text-[28px] font-semibold leading-snug text-surface mb-3">
              {ind.ctaTitle}
              <br />
              <em className="text-gold/90">{ind.ctaTitleAccent}</em>
            </h3>
            <p className="text-sm font-light leading-relaxed text-surface/60 max-w-xl">
              {ind.ctaSub}
            </p>
          </div>
          <motion.a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: EASE }}
            className="flex-shrink-0 inline-block px-8 py-4 rounded-lg text-sm font-medium text-white whitespace-nowrap transition-opacity hover:opacity-90"
            style={{ background: "rgb(var(--color-gold))" }}
          >
            {ind.ctaBtn}
          </motion.a>
        </motion.div>

      </div>
    </section>
  )
}
