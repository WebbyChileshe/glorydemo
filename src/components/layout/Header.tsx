import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { navLinks, org } from "@/data/site"
import { cn } from "@/lib/utils"

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-amber shadow-sm">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
          <path d="M12 2.5 21 10v11h-6v-6H9v6H3V10z" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[17px] font-bold tracking-tight text-foreground">
          {org.name}
        </span>
        <span className="mt-0.5 font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
          {org.tagline}
        </span>
      </span>
    </a>
  )
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      id="top"
      className={cn(
        "fixed top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-border bg-white/95 shadow-sm backdrop-blur-md"
          : "border-transparent bg-white/70 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between px-4 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-1.5 font-sans text-sm font-semibold transition-colors",
                i === 0
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <a
            href={`tel:${org.phone.replace(/\s+/g, "")}`}
            className="font-sans text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
          >
            {org.phone}
          </a>
          <Button
            render={<a href="#donate" />}
            className="h-auto rounded-full bg-primary px-6 py-2.5 font-sans text-sm font-semibold text-primary-foreground shadow-md transition-transform hover:scale-[1.02] hover:bg-sanctuary-deep"
          >
            Donate Now
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground xl:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-white px-4 py-4 xl:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 font-sans text-sm font-semibold text-foreground hover:bg-muted"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-3 flex flex-col gap-2 border-t border-border pt-3">
            <a
              href={`tel:${org.phone.replace(/\s+/g, "")}`}
              className="px-3 font-sans text-sm font-semibold text-muted-foreground"
            >
              {org.phone}
            </a>
            <Button
              render={<a href="#donate" />}
              className="h-auto rounded-full bg-primary px-6 py-3 font-sans text-sm font-semibold text-primary-foreground"
            >
              Donate Now
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
