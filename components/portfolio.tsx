"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { fadeInUp, staggerContainer, inView, EASE } from "@/lib/motion"
import { useLang } from "@/lib/i18n"

export default function Portfolio() {
  const { t } = useLang()
  const p = t.portfolio

  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header row */}
        <motion.div
          {...inView}
          variants={staggerContainer}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <motion.span
              variants={fadeInUp}
              className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-4 block"
            >
              {p.eyebrow}
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-headline text-4xl font-bold">
              {p.headline}
            </motion.h2>
          </div>

          <motion.a
            variants={fadeInUp}
            href="https://github.com/gkpandian-sudo"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            className="hidden md:flex items-center gap-2 text-sm text-on-surface-variant hover:text-on-surface transition-colors border border-outline px-4 py-2 rounded-lg hover:border-primary"
          >
            <Github size={15} /> {p.viewGithub}
          </motion.a>
        </motion.div>

        {/* Project cards */}
        <motion.div
          {...inView}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {p.projects.map((project) => (
            <motion.article
              key={project.title}
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: EASE } }}
              className="rounded-xl border border-outline hover:border-primary transition-colors glass bg-surface-variant/10 flex flex-col overflow-hidden"
            >
              {/* Card body */}
              <div className="p-8 flex-grow">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded-lg border flex items-center justify-center text-xl ${project.color}`}>
                    {project.icon}
                  </div>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-on-surface-variant hover:text-primary transition-colors"
                    aria-label={`Open ${project.title} on GitHub`}
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>

                <h3 className="font-headline text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-surface border border-outline rounded text-xs text-on-surface-variant"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card footer */}
              <div className="px-8 py-4 border-t border-outline bg-surface-variant/20 flex items-center justify-between">
                <span className="text-xs text-on-surface-variant">{project.segment}</span>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:underline flex items-center gap-1 font-medium"
                >
                  GitHub →
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Mobile GitHub link */}
        <motion.div {...inView} variants={fadeInUp} className="mt-8 text-center md:hidden">
          <a
            href="https://github.com/gkpandian-sudo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-on-surface transition-colors border border-outline px-6 py-3 rounded-lg hover:border-primary"
          >
            <Github size={15} /> {p.viewGithub}
          </a>
        </motion.div>

      </div>
    </section>
  )
}
