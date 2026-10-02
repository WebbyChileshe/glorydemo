import { useMemo, useState } from "react"
import { CheckCircle2, HeartHandshake, Lock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { donationTiers } from "@/data/site"
import { cn } from "@/lib/utils"

type Frequency = "monthly" | "once"

const perks = [
  "Cancel or adjust monthly gifts at any time with one click",
  "Updates on how the home and school are doing",
  "A receipt for every gift, emailed immediately",
]

export function DonationCalculator() {
  const [frequency, setFrequency] = useState<Frequency>("monthly")
  const [selectedAmount, setSelectedAmount] = useState<number>(50)
  const [customAmount, setCustomAmount] = useState("")

  const activeAmount = customAmount ? Number(customAmount) || 0 : selectedAmount

  const activeImpact = useMemo(() => {
    if (customAmount) {
      return "Every gift, of any size, goes directly toward the children's care and schooling."
    }
    return (
      donationTiers.find((t) => t.amount === selectedAmount)?.impact ??
      donationTiers[0].impact
    )
  }, [customAmount, selectedAmount])

  return (
    <section
      className="w-full border-y border-border bg-[#F8FAF9] py-16 md:py-24"
      id="donate"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-5 lg:col-span-5">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 font-sans text-xs font-bold uppercase tracking-wider text-primary">
              Direct &amp; Transparent Giving
            </div>
            <h2 className="font-display text-[28px] font-bold text-foreground sm:text-[36px]">
              Give a Child More Than Shelter — Give Them a Future
            </h2>
            <p className="font-sans text-base leading-relaxed text-muted-foreground">
              Monthly gifts form the backbone of the home. They keep the
              pantry stocked, the lights on, and the community school
              running.
            </p>
            <div className="flex flex-col gap-3 pt-1">
              {perks.map((perk) => (
                <div key={perk} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <span className="font-sans text-[15px] leading-relaxed text-foreground">
                    {perk}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5 rounded-3xl border border-border bg-white p-6 shadow-md sm:p-8 lg:col-span-7">
            <div className="mx-auto flex w-full max-w-md rounded-full border border-border bg-muted p-1">
              <button
                type="button"
                onClick={() => setFrequency("monthly")}
                className={cn(
                  "flex-1 rounded-full py-2 text-center font-sans text-sm font-semibold transition-all",
                  frequency === "monthly"
                    ? "bg-primary text-white shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Give Monthly{" "}
                <span className="text-xs text-amber">(more impact)</span>
              </button>
              <button
                type="button"
                onClick={() => setFrequency("once")}
                className={cn(
                  "flex-1 rounded-full py-2 text-center font-sans text-sm font-semibold transition-all",
                  frequency === "once"
                    ? "bg-primary text-white shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Give Once
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              {donationTiers.map((tier) => {
                const active = !customAmount && selectedAmount === tier.amount
                return (
                  <button
                    key={tier.amount}
                    type="button"
                    onClick={() => {
                      setSelectedAmount(tier.amount)
                      setCustomAmount("")
                    }}
                    className={cn(
                      "rounded-2xl border px-2 py-3 text-center font-sans text-sm font-semibold shadow-sm transition-all",
                      active
                        ? "scale-[1.02] border-transparent bg-primary text-white shadow-md"
                        : "border-border bg-white text-foreground hover:border-primary"
                    )}
                  >
                    <span className="block font-display text-lg font-bold">
                      ${tier.amount}
                    </span>
                    <span
                      className={cn(
                        "block text-xs font-normal",
                        active ? "text-amber" : "text-muted-foreground"
                      )}
                    >
                      {frequency === "monthly" ? "/ month" : "one time"}
                    </span>
                  </button>
                )
              })}
            </div>

            <div className="relative w-full">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-display text-lg font-bold text-muted-foreground">
                $
              </span>
              <input
                type="number"
                min={1}
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                placeholder="Enter custom amount"
                className="w-full rounded-2xl border border-border bg-[#F8FAF9] py-3 pl-10 pr-4 font-sans text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-border bg-[#F8FAF9] p-4">
              <HeartHandshake className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
              <div className="flex flex-col">
                <span className="font-sans text-xs font-bold uppercase tracking-wider text-primary">
                  Your Selected Impact
                </span>
                <p className="mt-0.5 font-sans text-[15px] leading-relaxed text-foreground">
                  {activeImpact}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-1">
              <Button className="h-auto w-full rounded-full bg-primary py-4 text-center font-display text-[18px] font-bold text-primary-foreground shadow-md transition-all hover:scale-[1.01] hover:bg-sanctuary-deep active:scale-[0.99]">
                {activeAmount > 0
                  ? `Proceed to Secure Donation • $${activeAmount}${frequency === "monthly" ? " / month" : ""}`
                  : "Enter an amount to continue"}
              </Button>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-1 font-sans text-xs text-muted-foreground sm:gap-3">
                <span className="flex items-center gap-1">
                  <Lock className="h-[15px] w-[15px] text-primary" /> Secure
                  checkout
                </span>
                <span>•</span>
                <span>Visa / Mastercard / Airtel Money</span>
                <span>•</span>
                <span>Mobile Money &amp; PayPal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
