import { Button } from "@/components/ui/Button"
import { dashboardContent } from "@/features/dashboard/content/DashboardContent"
import MultiSelectIcon from "@/assets/icons/classroom-tools/MultiSelectIcon"
import type { ButtonHTMLAttributes } from "react"

type MultiSelectButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function MultiSelectButton(props: MultiSelectButtonProps) {
    return (
        <Button {...props} variant="secondary" >
            <MultiSelectIcon />
            <span>{dashboardContent.bottomNavMultipleSelect}</span>
        </Button>
    )
}