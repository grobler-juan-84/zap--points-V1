import { Button } from "@/components/ui/Button"
import type { ButtonHTMLAttributes } from "react"
import { dashboardContent } from "@/features/dashboard/content/DashboardContent"
import TimerIcon from "@/assets/icons/classroom-tools/TimerIcon"

type TimerButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function TimerButton(props: TimerButtonProps) {
    return (
        <Button {...props} variant="secondary" >
            <TimerIcon />
            <span>{dashboardContent.bottomNavTimer}</span>
        </Button>
    )
}