type SidebarTeacherClassesItemProps = {
    icon: string;
    className: string;
    students?: number;
}

export function SidebarTeacherClassesItem({ icon, className }: SidebarTeacherClassesItemProps) {
    return (
        <div className="flex items-center justify-start w-full max-w-90 gap-2 bg-white/50 rounded-lg shadow-md px-2">
            <img src={icon} alt="class icon" className="w-8 h-8" />
            <div className="text-xl font-bold truncate no-ellipsis">{className}</div>
        </div>
    )
}