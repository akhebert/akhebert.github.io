"use client"

import { ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { SectionHeading } from "@/components/sections/section-heading"

export function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="scroll-mt-24 border-t border-border py-16">
      <SectionHeading>{t.projects.heading}</SectionHeading>
      <ul className="space-y-2">
        {t.projects.items.map((project) => (
          <li key={project.title}>
            <a
              href="#projects"
              className="group -mx-4 flex flex-col gap-3 rounded-lg px-4 py-5 transition-colors hover:bg-secondary sm:flex-row sm:items-start sm:gap-6"
            >
              <span className="font-mono text-sm text-muted-foreground sm:w-14 sm:shrink-0 sm:pt-1">
                {project.year}
              </span>
              <div className="flex-1">
                <h3 className="flex items-center gap-1.5 font-medium text-foreground">
                  {project.title}
                  <ArrowUpRight
                    className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    aria-hidden="true"
                  />
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-card px-2.5 py-0.5 font-mono text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
