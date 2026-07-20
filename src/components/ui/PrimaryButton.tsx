import type { ButtonHTMLAttributes, ReactNode } from 'react';

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
  size?: 'md' | 'lg';
  fullWidth?: boolean;
};

const PrimaryButton = ({
  className = '',
  children,
  size = 'md',
  fullWidth = false,
  ...props
}: PrimaryButtonProps) => {
  const base =
    'rounded-lg bg-brand-secondary text-white font-bold tracking-tight hover:brightness-95 transition focus:outline-none focus:ring-4 focus:ring-brand-secondary/30 disabled:opacity-60';

  const sizes = {
    md: 'h-10 px-6 text-base',
    lg: 'h-12 px-8 text-2xl',
  };

  return (
    <button
      className={`${base} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
