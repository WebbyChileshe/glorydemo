import { ArrowRight, BookOpen, HeartPulse, Home, Users } from "lucide-react"

import { pillars } from "@/data/site"

const icons = {
  home: Home,
  book: BookOpen,
  "heart-pulse": HeartPulse,
  users: Users,
} as const

export function Pillars() {
  return (
    <section className="w-full bg-white py-16 md:py-24" id="pillars">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 px-4 sm:px-6 md:gap-12">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary">
              Core Pillars
            </span>
            <h2 className="mt-1 font-display text-[28px] font-bold text-foreground sm:text-[36px]">
              Where Compassion Becomes Tangible Care
            </h2>
          </div>
          <p className="max-w-md font-sans text-base leading-relaxed text-muted-foreground">
            Every program exists to give each child stability, an education,
            and a sense of belonging.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => {
            const Icon = icons[pillar.icon as keyof typeof icons]
            const accentBg = pillar.accent === "amber" ? "bg-amber text-foreground" : "bg-primary text-white"
            return (
              <div
                key={pillar.title}
                className="group flex flex-col justify-between rounded-3xl border border-border bg-[#F8FAF9] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-white hover:shadow-lg"
              >
                <div className="flex flex-col gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl shadow-sm ${accentBg}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-display text-lg font-bold text-foreground">
                      {pillar.title}
                    </h3>
                    <p className="font-sans text-[15px] leading-relaxed text-muted-foreground">
                      {pillar.description}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-4 font-sans text-[13px] font-bold text-primary">
                  <span>{pillar.footnote}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
