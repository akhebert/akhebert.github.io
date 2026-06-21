"use client"

import { useLanguage } from "@/components/language-provider"
import { LanguageDropdown } from "@/components/language-dropdown"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const { t } = useLanguage()

  const tabs = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.resume, href: "#resume" },
  ]

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (!target) return
    const navHeight = 73 // sticky header height + small gap
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight
    window.scrollTo({ top, behavior: "smooth" })
    history.replaceState(null, "", href)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-4">
        <LanguageDropdown />

        <div className="flex items-center gap-5 sm:gap-7">
          <ul className="flex items-center gap-5 sm:gap-7">
            {tabs.map((tab) => (
              <li key={tab.href}>
                <a
                  href={tab.href}
                  onClick={(e) => handleScroll(e, tab.href)}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {tab.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
