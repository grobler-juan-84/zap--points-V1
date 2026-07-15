import landing_mascot from '@/assets/landing/landing-mascot.png'

export default function LandingMascot() {
  return (
    <div className="flex w-[clamp(3.5rem,70dvw,40rem)] sm:w-[clamp(3.5rem,30dvw,40rem)] h-auto bg-brand-tertiary rounded-4xl drop-shadow-lg">
      <img src={landing_mascot}
        alt="mascot"
        width={1}
        height={1}
        className="w-full h-auto object-cover scale-105 drop-shadow-lg" />
    </div>
  )
}
