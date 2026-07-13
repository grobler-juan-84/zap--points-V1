// import { motion } from 'framer-motion'
// import { Button } from '@/components/ui/Button'
import { env } from '@/lib/env'
// import { useAppStore } from '@/stores/useAppStore'

import LandingFeatureList from '@/features/landing/components/LandingFeatureList.tsx'
import LandingHeroTitle from '@/features/landing/components/LandingHeroTitle.tsx'
import LandingMascot from '@/features/landing/components/LandingMascot'

export function LandingPage() {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10 md:gap-[clamp(1.25rem,4vw,5rem)] h-[80dvh] items-center sm:items-start">
      <div className="flex justify-center md:justify-end items-center lg:items-start">
        <LandingMascot />
      </div>
      <div className="flex flex-col gap-5 sm:gap-5 md:gap-[clamp(0.5rem,1vw,5rem)]">
        <LandingHeroTitle title={env.appHeroTitle} />
        <LandingFeatureList items={env.appFeatureList} />


      </div>
    </main>
  )
}