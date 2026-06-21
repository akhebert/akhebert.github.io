"use client"

import { useLanguage } from "@/components/language-provider"
import { SectionHeading } from "@/components/sections/section-heading"

export function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="scroll-mt-24 border-t border-border py-16">
      <SectionHeading>{t.experience.heading}</SectionHeading>
      <ul className="space-y-8">
        {t.experience.items.map((item) => (
          <li
            key={`${item.company}-${item.period}`}
            className="flex flex-col gap-2 sm:flex-row sm:gap-6"
          >
            <span className="font-mono text-sm text-muted-foreground sm:w-32 sm:shrink-0 sm:pt-0.5">
              {item.period}
            </span>
            <div className="flex-1">
              <h3 className="font-medium text-foreground">
                {item.role}
                <span className="text-muted-foreground"> · {item.company}</span>
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground text-pretty">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
