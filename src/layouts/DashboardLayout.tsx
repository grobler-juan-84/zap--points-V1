import { Outlet } from 'react-router-dom'
import { DashboardTopNav } from '@/components/dashboard/top-nav/DashboardTopNav'
import { DashboardBottomNav } from '@/components/dashboard/bottom-nav/DashboardBottomNav'
import { DashboardSidebar } from '@/components/dashboard/sidebar/DashboardSidebar'
import { DashboardRightRail } from '@/components/dashboard/right-rail/DashboardRightRail'

import { useCurrentUserProfile } from '@/features/dashboard/hooks/useCurrentUserProfile'

export function DashboardLayout() {

    // Hook to load the current user profile (Hook => Store => Service)
    useCurrentUserProfile()


    return (
        <div className="flex flex-row min-h-screen bg-brand-primary px-1 gap-1">
            <DashboardSidebar />

            <div className="flex flex-col min-h-screen w-full">
                <DashboardTopNav />
                <div className="flex flex-row flex-1 bg-brand-tertiary">
                    <main className="flex flex-1">
                        <Outlet />
                    </main>
                    <DashboardRightRail />
                </div>

                <DashboardBottomNav />
            </div>
        </div>

    )
}
