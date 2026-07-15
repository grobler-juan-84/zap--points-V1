import LandingLogo from "@/features/landing/components/LandingLogo";
import LandingNavLink from '@/features/landing/components/LandingNavLink'

export default function LandingHeader() {
  return (
    <header className="flex flex-row w-full justify-end items-end pr-[clamp(1.5rem,4vw,3.25rem)] gap-[clamp(1.5rem,3vw,3.75rem)]">
      <div className="flex flex-row text-[clamp(1rem,3.0vw,2.75rem)] gap-[clamp(1rem,2vw,3rem)] text-lg text-white font-league-spartan font-bold">
        <LandingNavLink href="/login">Login</LandingNavLink>
        <LandingNavLink href="/signup">Signup</LandingNavLink>
      </div>
      <LandingLogo />
    </header>
  );
}


