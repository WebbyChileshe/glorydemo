import { Heart, GraduationCap, BadgeCheck, UtensilsCrossed } from "lucide-react"

import mealServing from "@/assets/photos/meal-serving.jpg"
import mealTime from "@/assets/photos/meal-time.jpg"
import newShoes from "@/assets/photos/new-shoes.jpg"
import { Button } from "@/components/ui/button"
import { VideoDialog } from "@/components/VideoDialog"
import { impactStats, org } from "@/data/site"

const statIcons = {
  roofing: Heart,
  school: GraduationCap,
  restaurant: UtensilsCrossed,
  verified: BadgeCheck,
} as const

export function Hero() {
  return (
    <section
      id="mission"
      className="relative w-full overflow-hidden border-b border-border bg-gradient-to-b from-[#F8FAF9] via-white to-white py-16 md:py-24"
    >
      <div className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-1/3 h-[32rem] w-[32rem] rounded-full bg-amber/10 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Copy */}
          <div className="flex flex-col gap-6 text-left lg:col-span-7">
            <div className="relative">
              <h1 className="font-display text-[36px] font-bold leading-[1.12] tracking-tight text-foreground sm:text-[48px] lg:text-[58px]">
                Every Child Deserves a Place to Call{" "}
                <span className="relative inline-block text-primary underline decoration-amber decoration-wavy decoration-2 underline-offset-8">
                  Home
                </span>{" "}
                &amp; Dream
              </h1>
              <svg
                className="pointer-events-none absolute -top-4 right-4 hidden h-12 w-16 text-amber sm:block"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2.5"
                viewBox="0 0 72 52"
              >
                <path d="M4 38C16 12 40 4 64 22M52 14L66 22L62 36" />
              </svg>
            </div>

            <p className="max-w-xl font-sans text-base leading-relaxed text-muted-foreground sm:text-[17px]">
              {org.fullName} provides loving sanctuary, education, and daily
              care for orphaned and vulnerable children in {org.location}.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                render={<a href="#donate" />}
                className="h-auto gap-2 rounded-full bg-primary px-8 py-3.5 font-sans text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:scale-[1.02] hover:bg-sanctuary-deep active:scale-[0.98]"
              >
                Donate Today
                <Heart className="h-[18px] w-[18px] text-amber" fill="currentColor" />
              </Button>
              <VideoDialog />
            </div>
          </div>

          {/* Image cluster */}
          <div className="relative mt-8 flex items-center justify-center lg:col-span-5 lg:mt-0 lg:justify-end">
            <div className="relative h-[340px] w-[290px] sm:h-[400px] sm:w-[380px] lg:h-[440px] lg:w-[450px]">
              <svg
                className="pointer-events-none absolute -top-6 right-2 h-14 w-14 text-amber sm:h-16 sm:w-16"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2.5"
                viewBox="0 0 100 100"
              >
                <line x1="50" x2="50" y1="10" y2="2" />
                <line x1="50" x2="50" y1="90" y2="98" />
                <line x1="10" x2="2" y1="50" y2="50" />
                <line x1="90" x2="98" y1="50" y2="50" />
                <line x1="22" x2="16" y1="22" y2="16" />
                <line x1="78" x2="84" y1="78" y2="84" />
                <line x1="22" x2="16" y1="78" y2="84" />
                <line x1="78" x2="84" y1="22" y2="16" />
              </svg>
              <svg
                className="pointer-events-none absolute -bottom-6 -left-4 h-24 w-28 text-primary/60 sm:h-28 sm:w-36"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2.5"
                viewBox="0 0 120 90"
              >
                <path d="M 20 80 C 40 10, 100 20, 110 70" />
                <path d="M 102 72 L 110 70 L 112 60" />
              </svg>

              <div className="absolute right-0 top-2 z-20 h-[230px] w-[230px] rounded-full bg-gradient-to-tr from-amber to-primary p-2 shadow-xl sm:top-4 sm:h-[290px] sm:w-[290px] lg:h-[310px] lg:w-[310px]">
                <div className="h-full w-full overflow-hidden rounded-full bg-muted">
                  <img
                    alt="A caregiver serving a warm meal to a child at Glory Orphanage"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    src={mealServing}
                    loading="eager"
                  />
                </div>
              </div>

              <div className="absolute left-0 top-20 z-30 h-[125px] w-[125px] rounded-full bg-primary p-1.5 shadow-lg transition-transform duration-500 hover:-translate-y-1 sm:top-24 sm:h-[160px] sm:w-[160px] lg:h-[175px] lg:w-[175px]">
                <div className="h-full w-full overflow-hidden rounded-full bg-muted">
                  <img
                    alt="Children sharing a meal together at Glory Orphanage"
                    className="h-full w-full object-cover"
                    src={mealTime}
                  />
                </div>
              </div>

              <div className="absolute bottom-2 right-8 z-30 h-[105px] w-[105px] rounded-full bg-amber p-1.5 shadow-md transition-transform duration-500 hover:scale-105 sm:right-12 sm:h-[135px] sm:w-[135px] lg:h-[150px] lg:w-[150px]">
                <div className="h-full w-full overflow-hidden rounded-full bg-white">
                  <img
                    alt="A child trying on a new pair of shoes donated to Glory Orphanage"
                    className="h-full w-full object-cover"
                    src={newShoes}
                  />
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 z-40 overflow-visible">
                <svg
                  className="animate-doodle-bounce absolute -bottom-6 right-2 h-28 w-28 text-white drop-shadow-md sm:right-6 sm:h-36 sm:w-36"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  viewBox="0 0 140 140"
                >
                  <path d="M118 20 C128 55, 120 100, 75 116 C55 123, 30 118, 16 102" />
                  <path d="M32 94 L14 102 L24 118" />
                </svg>
                <svg
                  className="animate-doodle-float absolute bottom-8 left-2 h-14 w-16 text-amber drop-shadow-sm sm:-left-6 sm:h-16 sm:w-20"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  viewBox="0 0 80 60"
                >
                  <path d="M6 34 Q 18 10, 30 32 T 54 28 T 74 16" />
                  <path d="M12 46 Q 22 28, 36 44 T 60 40" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Stat strip */}
        <div className="mt-12 grid grid-cols-2 gap-4 pt-8 md:grid-cols-4">
          {impactStats.map((stat) => {
            const Icon = statIcons[stat.icon as keyof typeof statIcons]
            return (
              <div
                key={stat.label}
                className="flex flex-col gap-1 rounded-2xl border border-border bg-white p-4 shadow-sm transition-colors hover:border-primary/40"
              >
                <div className="flex items-center gap-2">
                  <Icon className="h-[22px] w-[22px] text-amber" />
                  <span className="font-display text-2xl font-bold text-foreground">
                    {stat.value}
                  </span>
                </div>
                <span className="font-sans text-[13px] leading-relaxed text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
