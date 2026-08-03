import { Button } from "@/components/ui/Button"
import type { ButtonHTMLAttributes } from "react"
import { dashboardContent } from "@/features/dashboard/content/DashboardContent"
import RandomStudentIcon from "@/assets/icons/classroom-tools/RandomStudentIcon"

type RandomStudentButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function RandomStudentButton(props: RandomStudentButtonProps) {
    return (
        <Button {...props} variant="secondary" >
            <RandomStudentIcon />
            <span>{dashboardContent.bottomNavRandom}</span>
        </Button>
    )
}