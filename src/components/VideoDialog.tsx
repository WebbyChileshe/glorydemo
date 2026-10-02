import { Play } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { org } from "@/data/site"

export function VideoDialog() {
  return (
    <Dialog>
      <DialogTrigger
        className="group inline-flex items-center gap-2.5 rounded-full border border-border bg-white px-5 py-3 font-sans text-sm font-semibold text-foreground shadow-sm transition-all hover:border-primary"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber text-foreground transition-transform group-hover:scale-105">
          <Play className="ml-0.5 h-3.5 w-3.5" fill="currentColor" />
        </span>
        Watch Our Story
      </DialogTrigger>
      <DialogContent className="max-w-2xl overflow-hidden rounded-3xl bg-foreground p-0 sm:max-w-2xl" showCloseButton>
        <DialogTitle className="sr-only">
          {org.name} — a short introduction
        </DialogTitle>
        <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-sanctuary-deep to-primary text-white">
          <div className="flex flex-col items-center gap-3 px-6 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-amber text-foreground">
              <Play className="ml-0.5 h-6 w-6" fill="currentColor" />
            </span>
            <p className="font-display text-lg font-bold">
              A video introduction is coming soon
            </p>
            <p className="max-w-sm font-sans text-sm text-white/70">
              Drop a video file or embed link here to welcome visitors with a
              real look at life at {org.name}.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
