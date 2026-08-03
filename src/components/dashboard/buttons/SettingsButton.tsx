import { Button } from "@/components/ui/Button"
import type { ButtonHTMLAttributes } from "react"
import { dashboardContent } from "@/features/dashboard/content/DashboardContent"
import SettingsWheelIcon from "@/assets/icons/SettingsWheelIcon"

type SettingsButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function SettingsButton(props: SettingsButtonProps) {
    return (
        <Button {...props} variant="secondary" >
            <SettingsWheelIcon />
            <span>{dashboardContent.bottomNavSettings}</span>
        </Button>
    )
}

