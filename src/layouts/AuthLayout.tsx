import AuthBackLink from '@/features/auth/components/AuthBackLink'
import { Outlet } from 'react-router-dom'

export function AuthLayout() {
    return (
        <div className="flex flex-col min-h-screen bg-brand-primary">
            <header className="relative flex h-[clamp(5rem,10vw,8.75rem)] min-w-[200px] overflow-visible bg-brand-primary">
                <AuthBackLink className="top-6 left-6" />
            </header>
            <main className="flex flex-row items-start justify-center">
                <Outlet />
            </main>
        </div>
    )
}
