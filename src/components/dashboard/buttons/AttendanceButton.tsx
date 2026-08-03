import { Button } from "@/components/ui/Button"
import type { ButtonHTMLAttributes } from "react"
import { dashboardContent } from "@/features/dashboard/content/DashboardContent"
import AttendanceIcon from "@/assets/icons/classroom-tools/AttendanceIcon"

type AttendanceButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function AttendanceButton(props: AttendanceButtonProps) {
    return (
        <Button {...props} variant="secondary" >
            <AttendanceIcon />
            <span>{dashboardContent.bottomNavAttendance}</span>
        </Button>
    )
}