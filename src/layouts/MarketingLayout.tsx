import { Outlet } from 'react-router-dom'
import { env } from '@/lib/env'

export function MarketingLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="border-b border-gray-200 bg-brand-surface px-6 py-4 shadow-sm">
        <h1 className="text-xl font-semibold tracking-tight text-brand-primary">
          {env.appName}
        </h1>
      </header>

      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>

      <div id="overlay-root" aria-hidden="true" />
    </div>
  )
}
