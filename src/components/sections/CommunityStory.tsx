import { Quote } from "lucide-react"

import schoolBuilding from "@/assets/photos/school-building.jpg"
import { FacebookIcon } from "@/components/icons/FacebookIcon"
import { communityStory, org } from "@/data/site"

export function CommunityStory() {
  return (
    <section
      className="w-full border-t border-border bg-[#F8FAF9] py-16 md:py-24"
      id="community"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-6 px-4 sm:px-6">
        <div>
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary">
            From Our Community
          </span>
          <h2 className="mt-1 font-display text-[28px] font-bold text-foreground sm:text-[36px]">
            Everyday Moments at Glory Orphanage
          </h2>
        </div>

        <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-border bg-white shadow-md lg:grid-cols-12">
          <div className="relative min-h-[220px] overflow-hidden lg:col-span-5">
            <img
              src={schoolBuilding}
              alt="The Glory Orphanage and Community School building in Kambilombilo Compound, Luanshya"
              className="h-full w-full object-cover"
            />
            <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3.5 py-1 shadow-sm backdrop-blur-md">
              <span className="font-sans text-xs font-bold text-primary">
                On the Ground in Luanshya
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-between p-6 sm:p-10 lg:col-span-7">
            <div className="flex flex-col gap-4">
              <Quote className="h-9 w-9 text-amber" fill="currentColor" />
              <p className="font-display text-lg leading-relaxed text-foreground sm:text-xl">
                &ldquo;{communityStory.quote}&rdquo;
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="block font-sans text-base font-bold text-foreground">
                  {communityStory.source}
                </span>
                <span className="font-sans text-[13px] text-muted-foreground">
                  {communityStory.sourceDetail}
                </span>
              </div>
              <a
                href={org.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-sans text-sm font-bold text-primary hover:text-sanctuary-deep"
              >
                <FacebookIcon className="h-4 w-4" />
                Follow the page
              </a>
            </div>
            <div className="mt-4 rounded-2xl bg-[#F8FAF9] p-4">
              <p className="font-sans text-sm italic leading-relaxed text-foreground">
                &ldquo;{communityStory.comment.text}&rdquo;
              </p>
              <span className="mt-1 block font-sans text-xs font-semibold text-muted-foreground">
                — {communityStory.comment.author}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
