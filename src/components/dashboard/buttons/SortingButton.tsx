import { Button } from "@/components/ui/Button"
import type { ButtonHTMLAttributes } from "react"
import SortingIcon from "@/assets/icons/classroom-tools/SortingIcon"
import { dashboardContent } from "@/features/dashboard/content/DashboardContent"

type SortingButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function SortingButton(props: SortingButtonProps) {
    return (
        <Button {...props} variant="secondary" >
            <SortingIcon />
            <span>{dashboardContent.bottomNavSortingSwitch}</span>
        </Button>
    )
}