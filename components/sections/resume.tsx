"use client"

import { Download } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { SectionHeading } from "@/components/sections/section-heading"

const skills = [
  "Product Design",
  "Design Systems",
  "React",
  "TypeScript",
  "Next.js",
  "Figma",
  "Accessibility",
  "Prototyping",
]

export function Resume() {
  const { t } = useLanguage()

  return (
    <section id="resume" className="scroll-mt-24 border-t border-border py-16">
      <SectionHeading>{t.resume.heading}</SectionHeading>
      <p className="max-w-xl leading-relaxed text-muted-foreground text-pretty">
        {t.resume.intro}
      </p>

      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {t.resume.education}
          </h3>
          <p className="mt-3 leading-relaxed text-foreground text-pretty">
            {t.resume.educationDetail}
          </p>
        </div>
        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {t.resume.skills}
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border bg-card px-2.5 py-0.5 font-mono text-xs text-muted-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#resume"
        className="mt-10 inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <Download className="size-4" aria-hidden="true" />
        {t.resume.download}
      </a>
    </section>
  )
}
