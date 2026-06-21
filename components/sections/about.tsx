"use client"

import { useLanguage } from "@/components/language-provider"

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="pt-20 pb-16">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
        {t.about.title}
      </p>
      <h1 className="mt-4 font-serif text-5xl leading-tight tracking-tight text-foreground sm:text-6xl text-balance">
        {t.about.name}
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
        {t.about.tagline}
      </p>
    </section>
  )
}
