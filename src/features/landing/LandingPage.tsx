import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { env } from '@/lib/env'
import { useAppStore } from '@/stores/useAppStore'

export function LandingPage() {
  const clickCount = useAppStore((state) => state.clickCount)
  const incrementClickCount = useAppStore((state) => state.incrementClickCount)

  return (
    <motion.section
      className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center gap-6 px-6 py-16 text-center"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-wider text-brand-accent">
          Phase 1 Foundation
        </p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Welcome to {env.appName}
        </h2>
        <p className="text-base text-gray-600 sm:text-lg">
          A clean starting point with Vite, React, Tailwind, Zustand, and Framer
          Motion — ready for feature development.
        </p>
      </div>

      <div className="flex flex-col items-center gap-3">
        <Button onClick={incrementClickCount}>
          Verify Zustand ({clickCount})
        </Button>
        <p className="text-sm text-gray-500">
          Click the button to confirm global state is wired correctly.
        </p>
      </div>
    </motion.section>
  )
}
