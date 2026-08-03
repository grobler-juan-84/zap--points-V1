type Props = {
    ariaLabel: string
    icon: React.ReactNode
}

export function RightRailButton({ icon, ariaLabel }: Props) {
    return (
        <button className="flex items-center justify-center bg-white/80 hover:bg-brand-primary/20 transition-all duration-300 w-14 h-14 rounded-xl drop-shadow-lg}">
            <span className={'flex items-center justify-center shrink-0 h-5 w-5 text-gray-500'}> {icon} </span>
        </button >
    )
}