import { Button } from "@/components/ui/Button"
import type { ButtonHTMLAttributes } from "react"
import { dashboardContent } from "@/features/dashboard/content/DashboardContent"
import ViewSwitchIcon from "@/assets/icons/classroom-tools/ViewSwitchIcon"

type ViewSwitchButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    onClick: () => void
}

export function ViewSwitchButton(props: ViewSwitchButtonProps) {
    return (
        <Button {...props} variant="secondary" >
            <ViewSwitchIcon />
            <span>{dashboardContent.bottomNavViewSwitch}</span>
        </Button>

    )
}