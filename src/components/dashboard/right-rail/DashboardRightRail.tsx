import AddIcon from '@/assets/icons/actions/AddIcon'
import { RightRailButton } from './RightRailButton'
import EditIcon from '@/assets/icons/actions/EditIcon'
import PointsLogIcon from '@/assets/icons/reports/PointsLogIcon'
import TeacherPerspectiveIcon from '@/assets/icons/seating/TeacherPerspectiveIcon'
import SeatingLayoutIcon from '@/assets/icons/seating/SeatingLayoutIcon'
import PointsReportIcon from '@/assets/icons/reports/PointsReportIcon'



export function DashboardRightRail() {
    return (
        <div className="flex flex-col w-16 h-full bg-white p-1">
            <div className="flex flex-col w-full h-full items-center justify-start gap-2">
                <RightRailButton icon={<AddIcon />} title="Add Class" />
                <RightRailButton icon={<EditIcon />} title="Edit Class" />
                <RightRailButton icon={<SeatingLayoutIcon />} title="Layout Manager" />
            </div>
            <div className="flex flex-col w-full h-full items-center justify-end">

                {/* wrong icon, will fix later */}
                <RightRailButton icon={<PointsReportIcon />} title="Points Reports" />
                <RightRailButton icon={<TeacherPerspectiveIcon />} title="Switch to Teacher Perspective" />
                <RightRailButton icon={<PointsLogIcon />} title="Points History Log" />
            </div>
        </div>
    )
}