import donorVisit from "@/assets/photos/donor-visit.jpg"
import mealMat from "@/assets/photos/meal-mat.jpg"
import suppliesDelivery from "@/assets/photos/supplies-delivery.jpg"
import treePlanting from "@/assets/photos/tree-planting.jpg"

const photos = [
  {
    src: suppliesDelivery,
    alt: "Sacks of mealie meal delivered to Glory Orphanage and Community School",
    caption: "Food Supplies Delivered",
  },
  {
    src: mealMat,
    alt: "Children sharing a meal together outdoors at Glory Orphanage",
    caption: "Mealtime Together",
  },
  {
    src: treePlanting,
    alt: "Children helping unload fruit tree saplings for planting at the home",
    caption: "Planting for the Future",
  },
  {
    src: donorVisit,
    alt: "A visitor meeting children at Glory Orphanage",
    caption: "Visitors & Well-Wishers",
  },
] as const

export function Gallery() {
  return (
    <section className="w-full bg-[#F8FAF9] py-16 md:py-24" id="gallery">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 px-4 sm:px-6">
        <div className="max-w-xl">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary">
            On the Ground
          </span>
          <h2 className="mt-1 font-display text-[28px] font-bold text-foreground sm:text-[36px]">
            Recent Moments at the Home
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {photos.map((photo) => (
            <figure
              key={photo.caption}
              className="group relative overflow-hidden rounded-3xl border border-border shadow-sm"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4 pt-10">
                <span className="font-sans text-sm font-semibold text-white">
                  {photo.caption}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
