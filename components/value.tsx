"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, inView } from "@/lib/motion"
import { useLang } from "@/lib/i18n"

export default function Value() {
  const { t } = useLang()
  const v = t.value

  return (
    <section className="py-24 px-6 bg-surface-variant/10 border-b border-outline">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <motion.div {...inView} variants={staggerContainer} className="text-center mb-16">
          <motion.span variants={fadeInUp} className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-4 block">
            {v.eyebrow}
          </motion.span>
          <motion.h2 variants={fadeInUp} className="font-headline text-4xl font-bold mb-4">
            {v.headline}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-on-surface-variant max-w-2xl mx-auto">
            {v.sub}
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          {...inView}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {v.cards.map((c) => (
            <motion.div
              key={c.title}
              variants={fadeInUp}
              className="p-8 rounded-xl border border-outline"
            >
              <div className="text-4xl mb-5">{c.icon}</div>
              <h3 className="font-headline text-xl font-bold mb-3">{c.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">{c.body}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Pills marquee */}
        <motion.div {...inView} variants={fadeInUp} className="overflow-hidden">
          <div className="animate-marquee">
            {[...v.pills, ...v.pills].map((p, i) => (
              <span
                key={`${p}-${i}`}
                className="inline-block mx-3 px-4 py-2 rounded-full border border-outline text-sm text-on-surface-variant whitespace-nowrap"
              >
                {p}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
