"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, inView, EASE } from "@/lib/motion"
import { useLang } from "@/lib/i18n"

const WA_LINK =
  "https://wa.me/919632233776?text=Hello%2C%20I%27d%20like%20a%20free%20consultation%20for%20my%20website."

export default function Services() {
  const { t } = useLang()
  const s = t.services

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div {...inView} variants={staggerContainer} className="text-center mb-16">
          <motion.h2 variants={fadeInUp} className="font-headline text-4xl font-bold mb-4">
            {s.headline}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-on-surface-variant">
            {s.sub}
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          {...inView}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {s.items.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: EASE } }}
              className="p-8 rounded-xl border border-outline hover:border-primary transition-colors"
            >
              <div className="text-4xl mb-6">{item.icon}</div>
              <h3 className="font-headline text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">{item.body}</p>
            </motion.div>
          ))}

          {/* WhatsApp CTA card */}
          <motion.div
            variants={fadeInUp}
            className="bg-primary/5 p-8 rounded-xl border border-primary/30 flex flex-col justify-center items-center text-center"
          >
            <h3 className="font-headline text-xl font-bold mb-4">{s.customTitle}</h3>
            <p className="text-sm text-on-surface-variant mb-6">
              {s.customBody}
            </p>
            <motion.a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="bg-primary text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              {s.customCta}
            </motion.a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
