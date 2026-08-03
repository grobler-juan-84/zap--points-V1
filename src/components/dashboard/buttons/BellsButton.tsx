import { Button } from "@/components/ui/Button"
import type { ButtonHTMLAttributes } from "react"
import { dashboardContent } from "@/features/dashboard/content/DashboardContent"
import BellIcon from "@/assets/icons/classroom-tools/BellIcon"

type BellsButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function BellsButton(props: BellsButtonProps) {
    return (
        <Button {...props} variant="secondary" >
            <BellIcon />
            <span>{dashboardContent.bottomNavBells}</span>
        </Button>
    )
}