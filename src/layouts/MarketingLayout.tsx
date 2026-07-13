import { Outlet } from 'react-router-dom'
import LandingHeader from '@/features/landing/components/LandingHeader.tsx'

export function MarketingLayout() {
  return (
    <div className="flex min-h-screen flex-col gap-[clamp(2.5rem,4.7vw,5rem)] bg-white">
      <header className="relative flex h-[clamp(5rem,10vw,8.75rem)] min-w-[200px] overflow-visible bg-brand-primary">
        <LandingHeader />
      </header>
      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>

      {/* for modal - Review later */}
      <div id="overlay-root" aria-hidden="true" />
    </div>
  )
}
