import landing_logo from '@/assets/landing/landing-logo.png'

export default function LandingLogo() {
  return (
    <div className="relative overflow-visible">
      <img src={landing_logo}
        alt="logo"
        width={1}
        height={1}
        className="h-[clamp(4.5rem,10vw,9rem)] w-auto min-w-[80px] translate-y-[25%] w-auto scale-150" />
    </div>
  );
}
