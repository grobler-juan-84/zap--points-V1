import { Button } from '@/components/ui/Button'
import type { ButtonHTMLAttributes } from 'react'
import { dashboardContent } from '../../../features/dashboard/content/DashboardContent'

export function SidebarWebsitesButton({ className }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <Button className={className}>
            {dashboardContent.sidebarWebsitesButton}
        </Button>
    )
}