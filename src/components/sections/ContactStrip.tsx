import { Mail, MapPin, Phone } from "lucide-react"
import { FacebookIcon } from "@/components/icons/FacebookIcon"

import { org } from "@/data/site"

const items = [
  { icon: MapPin, label: org.address, href: undefined },
  { icon: Phone, label: org.phone, href: `tel:${org.phone.replace(/\s+/g, "")}` },
  { icon: Mail, label: org.email, href: `mailto:${org.email}` },
  {
    icon: FacebookIcon,
    label: `${org.facebookFollowers} followers on Facebook`,
    href: org.facebookUrl,
  },
] as const

export function ContactStrip() {
  return (
    <section className="w-full border-b border-border bg-[#F8FAF9] py-6">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center justify-between gap-4 px-4 sm:px-6 md:flex-row">
        <div className="flex shrink-0 items-center gap-2 font-sans font-bold text-primary">
          <span className="font-sans text-xs font-bold uppercase tracking-widest">
            Find &amp; Reach Us
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:justify-end">
          {items.map((item) => {
            const content = (
              <span className="flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">
                <item.icon className="h-[18px] w-[18px] text-primary" />
                {item.label}
              </span>
            )
            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {content}
              </a>
            ) : (
              <span key={item.label}>{content}</span>
            )
          })}
        </div>
      </div>
    </section>
  )
}
