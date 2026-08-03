type Props = {
    text: string
    icon: React.ReactNode
}

export function BotNavButton({ icon, text }: Props) {
    return (
        <button className="flex flex-row items-center justify-center bg-gray-200 w-35 h-10 gap-2 border-gray-400 border-1">
            <span className={'flex items-center justify-center shrink-0'}> {icon} </span>
            <span className="hidden sm:block text-sm font-bold text-gray-500">{text}</span>
        </button >
    )
}