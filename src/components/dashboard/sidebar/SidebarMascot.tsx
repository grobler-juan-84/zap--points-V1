import sidebarMascot from '@/assets/shared/sidebar-mascot.png'

export function SidebarMascot() {
    return (
        <div className="flex w-full h-auto bg-brand-tertiary rounded-4xl drop-shadow-lg ">
            <img src={sidebarMascot} alt="mascot" width={1} height={1} className="w-full h-auto object-cover drop-shadow-lg" />
        </div>
    )
}