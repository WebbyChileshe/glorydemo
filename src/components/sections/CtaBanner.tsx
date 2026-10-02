import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { org } from "@/data/site"

export function CtaBanner() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6">
        <div className="relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-3xl bg-primary p-6 text-white shadow-xl sm:p-10 lg:flex-row lg:gap-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5" />
          <div className="relative z-10 flex max-w-2xl flex-col gap-2 text-left">
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-amber">
              Join Our Family
            </span>
            <h2 className="font-display text-[28px] font-bold leading-tight sm:text-[38px]">
              Be the Reason a Child Smiles Tomorrow
            </h2>
            <p className="max-w-xl font-sans text-base leading-relaxed text-white/80">
              Whether you give monthly, volunteer your time, or simply share
              our page, you help {org.name} keep its doors open.
            </p>
          </div>
          <div className="relative z-10 flex w-full shrink-0 flex-col items-center gap-3 sm:w-auto sm:flex-row">
            <Button
              render={<a href="#donate" />}
              className="h-auto w-full gap-2 rounded-full bg-amber px-8 py-3.5 font-display text-base font-bold text-foreground shadow-lg transition-all hover:bg-amber-deep sm:w-auto"
            >
              Make an Impact
              <ArrowRight className="h-5 w-5" />
            </Button>
            <a
              href={org.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3.5 font-display text-base font-semibold text-white transition-all hover:bg-white/20 sm:w-auto"
            >
              Follow on Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
