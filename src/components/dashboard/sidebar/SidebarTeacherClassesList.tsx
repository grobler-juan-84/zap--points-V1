import { tempClassCardContent } from '@/features/dashboard/content/tempClassCardContent';
import { SidebarTeacherClassesItem } from './SidebarTeacherClassesItem';

export function SidebarTeacherClassesList() {
    return (
        <div className="flex flex-col h-screen bg-brand-tertiary w-full p-2 items-center rounded-4xl drop-shadow-lg">
            <div className="flex flex-col w-full text-2xl font-bold gap-1">
                {tempClassCardContent.map((item) => (
                    <SidebarTeacherClassesItem key={item.className} icon={item.icon} className={item.className} />
                ))}
            </div>
        </div>
    )
}



