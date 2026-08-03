import { Button } from "@/components/ui/Button"
import type { ButtonHTMLAttributes } from "react"
import { dashboardContent } from "@/features/dashboard/content/DashboardContent"
import HappyMeterIcon from "@/assets/icons/classroom-tools/HappyMeterIcon"

type HappyMeterButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function HappyMeterButton(props: HappyMeterButtonProps) {
    return (
        <Button {...props} variant="secondary" >
            <HappyMeterIcon />
            <span>{dashboardContent.bottomNavHappyMeter}</span>
        </Button>
    )
}