import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type LandingNavLinkProps = {
  href: string;
  children: ReactNode;
};

export default function LandingNavLink({ href, children }: LandingNavLinkProps) {
  return (
    <Link to={href} className="text-white font-semibold text-[clamp(1.5rem,3.5vw,5rem)] font-league-spartan hover:opacity-80 transition">
      {children}
    </Link>
  );
}
