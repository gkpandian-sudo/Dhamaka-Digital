"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, inView } from "@/lib/motion"
import { useLang } from "@/lib/i18n"

export default function NoTemplate() {
  const { t } = useLang()
  const n = t.noTemplate

  return (
    <section className="py-12 border-y border-outline bg-surface-variant/30">
      <motion.div
        {...inView}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-6 text-center"
      >
        <motion.span
          variants={fadeInUp}
          className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-4 block"
        >
          {n.eyebrow}
        </motion.span>

        <motion.h2
          variants={fadeInUp}
          className="font-headline text-3xl font-bold mb-4"
        >
          {n.headline}{" "}
          <span className="px-2 py-1 bg-on-surface text-surface">
            {n.headlineAccent}
          </span>
        </motion.h2>

        <motion.p variants={fadeInUp} className="text-on-surface-variant max-w-2xl mx-auto text-sm">
          {n.sub}
        </motion.p>
      </motion.div>
    </section>
  )
}
