import { Outlet } from 'react-router-dom'

export function AuthLayout() {
    return (
        <div className="flex min-h-screen flex-col bg-brand-primary">
            <main className="flex flex-1 flex-col">
                <Outlet />
            </main>
        </div>
    )
}