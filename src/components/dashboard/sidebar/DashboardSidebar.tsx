import { SidebarMascot } from './SidebarMascot'
import { SidebarHomeButton } from './SidebarHomeButton'
import { SidebarTeacherClassesList } from './SidebarTeacherClassesList'
import { SidebarWebsitesButton } from './SidebarWebsitesButton'
import { Button } from '@/components/ui/Button'
import { dashboardContent } from '@/features/dashboard/content/DashboardContent'
import { useNavigate } from 'react-router-dom'

export function DashboardSidebar() {
    return (
        <div className="flex flex-col h-screen bg-white w-90 max-w-[90] p-2 items-center gap-2">
            <SidebarMascot />
            <SidebarHomeButton />
            <SidebarTeacherClassesList />
            <SidebarWebsitesButton className="w-full h-10 bg-brand-secondary text-white text-xl font-bold" />
        </div>
    )
}