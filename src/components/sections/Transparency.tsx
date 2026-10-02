import { financialBreakdown } from "@/data/site"

const CIRCUMFERENCE = 2 * Math.PI * 40

function DonutChart() {
  const slices = financialBreakdown.reduce<
    Array<{ label: string; color: string; length: number; offset: number }>
  >((acc, slice) => {
    const previous = acc[acc.length - 1]
    const offset = previous ? previous.offset + previous.length : 0
    const length = (slice.percent / 100) * CIRCUMFERENCE
    acc.push({ label: slice.label, color: slice.color, length, offset })
    return acc
  }, [])

  return (
    <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
      <circle
        cx="50"
        cy="50"
        r="40"
        fill="transparent"
        stroke="var(--border)"
        strokeWidth="12"
      />
      {slices.map((slice) => (
        <circle
          key={slice.label}
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
          stroke={slice.color}
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={`${slice.length} ${CIRCUMFERENCE - slice.length}`}
          strokeDashoffset={-slice.offset}
        />
      ))}
    </svg>
  )
}

export function Transparency() {
  const topSlice = financialBreakdown[0]

  return (
    <section className="w-full bg-white py-16 md:py-24" id="transparency">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6">
        <div className="rounded-3xl border border-border bg-[#F8FAF9] p-6 sm:p-10">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="flex flex-col gap-5 lg:col-span-6">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 font-sans text-xs font-bold uppercase tracking-wider text-primary">
                Stewardship
              </div>
              <h2 className="font-display text-[28px] font-bold text-foreground sm:text-[36px]">
                Sample Allocation — Figures To Be Confirmed
              </h2>
              <p className="font-sans text-base leading-relaxed text-muted-foreground">
                This breakdown is a placeholder layout only. Swap it for
                Glory Orphanage&rsquo;s real, audited figures once they&rsquo;re
                available so donors see exactly where every gift goes.
              </p>
              <div className="flex flex-col gap-2.5 pt-2">
                {financialBreakdown.map((slice) => (
                  <div key={slice.label} className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2">
                        <span
                          className="h-3 w-3 rounded-full"
                          style={{ backgroundColor: slice.color }}
                        />
                        <span className="font-medium text-foreground">
                          {slice.label}
                        </span>
                      </span>
                      <span className="font-bold text-foreground">
                        {slice.percent}%
                      </span>
                    </div>
                    <div className="h-2.5 w-full overflow-hidden rounded-full bg-border">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${slice.percent}%`,
                          backgroundColor: slice.color,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center justify-center p-4 lg:col-span-6 sm:p-6">
              <div className="relative h-56 w-56 sm:h-72 sm:w-72">
                <DonutChart />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="font-display text-4xl font-bold leading-none text-foreground">
                    {topSlice.percent}%
                  </span>
                  <span className="mt-1 font-sans text-xs font-bold uppercase tracking-widest text-primary">
                    Sample Figure
                  </span>
                </div>
              </div>
              <p className="mt-5 text-center font-sans text-xs text-muted-foreground">
                Placeholder chart — not an audited statement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
