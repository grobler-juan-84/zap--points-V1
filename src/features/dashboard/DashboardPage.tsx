import { CardsGrid } from './components/CardsGrid'

export function DashboardPage() {
  return (
    <main className="flex h-full w-full flex-col items-start justify-start bg-brand-tertiary py-6 px-6">
      <CardsGrid />
    </main>
  )
}
