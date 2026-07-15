import { Outlet } from 'react-router-dom'

export function MarketingLayout() {
    return (
        <div className="flex min-h-screen flex-col bg-brand-primary">
            <main className="flex flex-1 flex-col">
                <Outlet />
            </main>

            {/* for modal - Review later */}
            <div id="overlay-root" aria-hidden="true" />
        </div>
    )
}