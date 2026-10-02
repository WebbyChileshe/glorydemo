import { useMemo, useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"

import { FacebookIcon } from "@/components/icons/FacebookIcon"
import { Button } from "@/components/ui/button"
import { footerLinks, org } from "@/data/site"

export function Footer() {
  const [email, setEmail] = useState("")
  const [joined, setJoined] = useState(false)
  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <footer className="w-full border-t border-border bg-[#F8FAF9] text-muted-foreground">
      <div className="mx-auto w-full max-w-[1280px] px-4 py-12 sm:px-6 md:py-16">
        <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-amber">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M12 2.5 21 10v11h-6v-6H9v6H3V10z" />
                </svg>
              </span>
              <span className="font-sans text-base font-bold text-foreground">
                {org.name}
              </span>
            </div>
            <p className="max-w-sm font-sans text-sm leading-relaxed text-muted-foreground">
              {org.description}
            </p>
            <div className="flex flex-col gap-2 pt-1 font-sans text-sm">
              <a href={`mailto:${org.email}`} className="flex items-center gap-2 hover:text-primary">
                <Mail className="h-4 w-4 text-primary" /> {org.email}
              </a>
              <a href={`tel:${org.phone.replace(/\s+/g, "")}`} className="flex items-center gap-2 hover:text-primary">
                <Phone className="h-4 w-4 text-primary" /> {org.phone}
              </a>
              <span className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {org.address}
              </span>
            </div>
            <a
              href={org.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-white text-primary shadow-sm transition-colors hover:bg-primary hover:text-white"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
          </div>

          <div className="flex flex-col gap-3 lg:col-span-2">
            <span className="mb-1 font-sans text-xs font-bold uppercase tracking-wider text-foreground">
              Sanctuary
            </span>
            <nav className="flex flex-col gap-2">
              {footerLinks.sanctuary.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-sans text-sm leading-relaxed hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-3 lg:col-span-2">
            <span className="mb-1 font-sans text-xs font-bold uppercase tracking-wider text-foreground">
              Governance
            </span>
            <nav className="flex flex-col gap-2">
              {footerLinks.governance.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-sans text-sm leading-relaxed hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-3 sm:col-span-2 lg:col-span-4">
            <span className="mb-1 font-sans text-xs font-bold uppercase tracking-wider text-foreground">
              Stay Connected
            </span>
            <p className="font-sans text-sm leading-relaxed">
              Follow along for updates and everyday moments from the home and
              school.
            </p>
            {joined ? (
              <p className="mt-1 font-sans text-sm font-semibold text-primary">
                Thank you — we&rsquo;ll be in touch.
              </p>
            ) : (
              <form
                className="mt-1 flex items-center gap-2"
                onSubmit={(e) => {
                  e.preventDefault()
                  if (email.trim()) setJoined(true)
                }}
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full flex-1 rounded-full border border-border bg-white px-4 py-2 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <Button
                  type="submit"
                  className="h-auto shrink-0 rounded-full bg-primary px-5 py-2 font-sans text-sm font-semibold text-primary-foreground hover:bg-sanctuary-deep"
                >
                  Join
                </Button>
              </form>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-center font-sans text-xs sm:flex-row sm:text-left">
          <span>
            © {year} {org.fullName}. All rights reserved.
          </span>
          <span>
            Built from the {org.name} community design, Luanshya, Zambia.
          </span>
        </div>
      </div>
    </footer>
  )
}
