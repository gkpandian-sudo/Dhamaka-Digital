// -- Dhamaka Digital — Footer --

"use client"

import { motion } from "framer-motion"
import { Github } from "lucide-react"
import { fadeInUp, staggerContainer, inView } from "@/lib/motion"
import { useLang } from "@/lib/i18n"

export default function Footer() {
  const { t } = useLang()
  const f = t.footer
  const navLinks = t.nav.links.slice(0, 3)

  return (
    <footer className="py-16 px-6 border-t border-outline bg-surface text-sm">
      <div className="max-w-7xl mx-auto">

        <motion.div
          {...inView}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {/* Brand */}
          <motion.div variants={fadeInUp}>
            <div className="font-headline text-lg font-bold mb-2 flex items-center gap-2">
              <span className="text-[#f97316]">D</span>
              <span className="text-primary">D</span>
              <span className="text-on-surface ml-1">धमाका Digital</span>
            </div>
            <p className="text-on-surface-variant leading-relaxed mt-4">
              {f.tagline}
            </p>
          </motion.div>

          {/* Links */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-bold uppercase tracking-widest text-[10px] text-[#f97316] mb-6">
              {f.quickLinks}
            </h4>
            <div className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://github.com/gkpandian-sudo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-surface-variant hover:text-on-surface transition-colors"
              >
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-bold uppercase tracking-widest text-[10px] text-[#f97316] mb-6">
              {f.contact}
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="https://wa.me/919632233776"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-on-surface-variant hover:text-on-surface transition-colors"
              >
                💬 +91 96322 33776
              </a>
              <a
                href="https://github.com/gkpandian-sudo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-on-surface-variant hover:text-on-surface transition-colors"
              >
                <Github size={14} /> github.com/gkpandian-sudo
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          {...inView}
          variants={fadeInUp}
          className="mt-16 pt-8 border-t border-outline text-center text-on-surface-variant text-xs"
        >
          © 2025 Dhamaka Digital — धमाका डिजिटल. सर्वाधिकार सुरक्षित।
        </motion.div>

      </div>
    </footer>
  )
}
