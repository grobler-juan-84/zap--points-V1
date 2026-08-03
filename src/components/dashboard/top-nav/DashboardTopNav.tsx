import dashboardLogo from '@/assets/dashboard/dashboard-logo.png'
import { dashboardContent } from '@/features/dashboard/content/DashboardContent'
import { useUserStore } from '@/stores/useUserStore'

export function DashboardTopNav() {
    const profile = useUserStore((state) => state.profile)
    console.log(profile)
    return (
        <header className="flex flex-row bg-white w-full h-30 pl-6">
            <div className="flex flex-row items-center justify-start w-9/10 text-7xl font-bold">
                {profile
                    ? dashboardContent.topNavTitle(profile.firstName)
                    : 'Loading...'}
            </div>
            <div className="flex flex-row items-center justify-start w-1/10">
                <img src={dashboardLogo} alt="Dashboard Logo" className="object-contain" />
            </div>
        </header >
    )
}