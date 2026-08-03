interface SeatingLayoutIconProps {
    className?: string;
}

export default function SeatingLayoutIcon({ className = "w-16 h-16" }: SeatingLayoutIconProps) {
    return (
        <svg
            className={className}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h10M4 18h16" />
        </svg>
    );
}