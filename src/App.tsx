import { Footer } from "@/components/layout/Footer"
import { Header } from "@/components/layout/Header"
import { CommunityStory } from "@/components/sections/CommunityStory"
import { ContactStrip } from "@/components/sections/ContactStrip"
import { CtaBanner } from "@/components/sections/CtaBanner"
import { DonationCalculator } from "@/components/sections/DonationCalculator"
import { Gallery } from "@/components/sections/Gallery"
import { Hero } from "@/components/sections/Hero"
import { Pillars } from "@/components/sections/Pillars"
import { Transparency } from "@/components/sections/Transparency"

function App() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white text-foreground">
      <Header />
      <main className="w-full pt-20">
        <Hero />
        <ContactStrip />
        <Pillars />
        <Gallery />
        <DonationCalculator />
        <Transparency />
        <CommunityStory />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}

export default App
