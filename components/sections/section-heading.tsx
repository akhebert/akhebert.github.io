export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-8 flex items-center gap-3 font-serif text-3xl tracking-tight text-foreground">
      <span className="h-px w-8 bg-accent" aria-hidden="true" />
      {children}
    </h2>
  )
}
