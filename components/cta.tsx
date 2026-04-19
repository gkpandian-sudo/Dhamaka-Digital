"use client"

import { motion } from "framer-motion"
import { fadeInUp, scaleIn, staggerContainer, inView, EASE } from "@/lib/motion"
import { useLang } from "@/lib/i18n"

const WA_LINK =
  "https://wa.me/919632233776?text=Hello%2C%20I%27d%20like%20a%20free%20consultation%20for%20my%20business%20website."

export default function Cta() {
  const { t } = useLang()
  const c = t.cta

  return (
    <section className="py-24 px-6">
      <motion.div
        {...inView}
        variants={scaleIn}
        className="max-w-5xl mx-auto rounded-2xl bg-primary text-white p-12 text-center relative overflow-hidden"
      >
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

        <motion.div {...inView} variants={staggerContainer} className="relative z-10">
          <motion.h2
            variants={fadeInUp}
            className="font-headline text-4xl font-bold mb-6"
          >
            {c.headline}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="opacity-90 mb-6 max-w-xl mx-auto"
          >
            {c.sub}
          </motion.p>

          {/* Badge row */}
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3 mb-10">
            {c.badges.map((b) => (
              <span key={b} className="px-3 py-1 bg-white/10 rounded-full text-xs">
                {b}
              </span>
            ))}
          </motion.div>

          {/* WhatsApp button */}
          <motion.a
            variants={fadeInUp}
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, transition: { duration: 0.2, ease: EASE } }}
            whileTap={{ scale: 0.96 }}
            className="bg-white text-primary px-10 py-5 rounded-xl font-black text-lg shadow-2xl inline-flex items-center gap-3 hover:opacity-95 transition-opacity"
          >
            {c.btn}
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
