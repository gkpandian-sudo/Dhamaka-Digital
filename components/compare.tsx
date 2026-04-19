"use client"

import { motion } from "framer-motion"
import { X, Check } from "lucide-react"
import { fadeInLeft, fadeInRight, fadeInUp, staggerContainer, inView } from "@/lib/motion"
import { useLang } from "@/lib/i18n"

export default function Compare() {
  const { t } = useLang()
  const c = t.compare

  return (
    <section id="compare" className="py-24 bg-surface-variant/20 px-6 border-y border-outline">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <motion.h2
          {...inView}
          variants={fadeInUp}
          className="font-headline text-3xl font-bold text-center mb-12"
        >
          {c.headline}
        </motion.h2>

        {/* Two columns */}
        <motion.div
          {...inView}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden border border-outline"
        >
          {/* WordPress column */}
          <motion.div variants={fadeInLeft} className="bg-surface p-8 md:border-r border-outline">
            <h3 className="font-bold text-red-500 mb-6 flex items-center gap-2">
              <span>🚫</span> WordPress / CMS
            </h3>
            <ul className="space-y-4">
              {c.wordpress.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-on-surface-variant">
                  <X size={14} className="text-red-500 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Next.js column */}
          <motion.div variants={fadeInRight} className="bg-surface p-8">
            <h3 className="font-bold text-success mb-6 flex items-center gap-2">
              <Check size={16} /> Next.js / React
            </h3>
            <ul className="space-y-4">
              {c.nextjs.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <Check size={14} className="text-success mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
