"use client"

import { LanguageProvider, useLanguage } from "@/components/language-provider"
import { Navbar } from "@/components/navbar"
import { About } from "@/components/sections/about"
import { Projects } from "@/components/sections/projects"
import { Experience } from "@/components/sections/experience"
import { Resume } from "@/components/sections/resume"

function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="border-t border-border py-10">
      <p className="font-mono text-xs text-muted-foreground">{t.footer}</p>
    </footer>
  )
}

export default function Page() {
  return (
    <LanguageProvider>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6">
        <About />
        <Projects />
        <Experience />
        <Resume />
        <Footer />
      </main>
    </LanguageProvider>
  )
}
