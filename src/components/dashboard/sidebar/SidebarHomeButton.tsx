import { Button } from '@/components/ui/Button'
import { useNavigate } from 'react-router-dom'
import { dashboardContent } from '../../../features/dashboard/content/DashboardContent'

type SidebarHomeButtonProps = {
    to?: string
}


export function SidebarHomeButton({
    to = '/login',
    className = '',
    onClick,
    type = 'button',
    ...buttonProps
}: SidebarHomeButtonProps) {
    return (
        <Button to={to} className={className} onClick={onClick} type={type} {...buttonProps}>
            {dashboardContent.sidebarHomeButton}
        </Button>
    )
}