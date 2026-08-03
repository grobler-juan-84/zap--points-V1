import SettingsWheelIcon from '@/assets/icons/SettingsWheelIcon';

type ClassCardProps = {
    icon: string;
    className: string;
    students: number;
}

export const ClassCard = ({ icon, className, students }: ClassCardProps) => {
    return (

        <div className="relative flex flex-col items-center justify-center bg-white rounded-lg shadow-md w-full min-w-[200px] w-full aspect-square p-2 gap-4">
            <SettingsWheelIcon className="absolute top-2 right-2 w-6 h-6 text-gray-400" />
            <img src={icon} alt="class icon" className="w-20 h-20" />
            <div className="text-2xl font-bold">{className}</div>
            <div className="text-sm text-gray-500">{students}</div>
        </div>
    )
}