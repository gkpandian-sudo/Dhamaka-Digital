"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { fadeInUp, staggerContainer, inView, EASE } from "@/lib/motion"
import { useLang } from "@/lib/i18n"

export default function Faq() {
  const { t } = useLang()
  const f = t.faq
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-24 border-t border-outline px-6">
      <div className="max-w-3xl mx-auto">

        {/* Title */}
        <motion.h2
          {...inView}
          variants={fadeInUp}
          className="font-headline text-3xl font-bold text-center mb-12"
        >
          {f.headline}
        </motion.h2>

        {/* Accordion */}
        <motion.div {...inView} variants={staggerContainer} className="space-y-3">
          {f.items.map((item, i) => {
            const isOpen = open === i
            return (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="border border-outline rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left font-medium hover:bg-surface-variant transition-colors"
                >
                  <span className="pr-4 text-sm">{item.q}</span>
                  <span className="shrink-0">
                    {isOpen
                      ? <Minus size={16} className="text-primary" />
                      : <Plus  size={16} className="text-on-surface-variant" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1, transition: { duration: 0.3, ease: EASE } }}
                      exit={{ height: 0, opacity: 0, transition: { duration: 0.2, ease: EASE } }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm text-on-surface-variant leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
