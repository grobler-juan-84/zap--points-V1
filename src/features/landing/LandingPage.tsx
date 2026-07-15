import { landingContent } from '@/features/landing/content/LandingContent.ts'
import LandingFeatureList from '@/features/landing/components/LandingFeatureList.tsx'
import LandingHeroTitle from '@/features/landing/components/LandingHeroTitle.tsx'
import LandingMascot from '@/features/landing/components/LandingMascot'

export function LandingPage() {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10 md:gap-[clamp(1.25rem,4vw,5rem)] h-[80dvh] items-center sm:items-start">
      <div className="flex justify-center sm:justify-end items-center sm:items-start">
        <LandingMascot />
      </div>
      <div className="flex flex-col gap-[clamp(0.5rem,1vw,5rem)]">
        <LandingHeroTitle items={landingContent.HeroTitle} />
        <LandingFeatureList items={landingContent.FeatureList} />
      </div>
    </main>
  )
}