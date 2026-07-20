import { Link } from 'react-router-dom'

import { env } from '@/lib/env'

export function DashboardPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-brand-primary px-6">
      <div className="w-full max-w-lg rounded-2xl bg-white px-8 py-10 text-center shadow-lg">
        <h1 className="text-3xl font-extrabold text-brand-primary font-spartan">
          Welcome to {env.appName}
        </h1>
        <p className="mt-4 text-black/70 font-spartan">
          Your dashboard is coming in Phase 3. You are signed in.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block text-brand-secondary font-semibold font-spartan hover:underline"
        >
          Back to home
        </Link>
      </div>
    </main>
  )
}
