import type { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
  to?: string
}

export function Button({
  variant = 'primary',
  className = '',
  children,
  to,
  onClick,
  type = 'button',
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 justify-center rounded-lg px-4 py-2 text-sm font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50'

  const variants = {
    primary:
      'bg-brand-primary text-white hover:bg-brand-primary/80 focus-visible:outline-brand-primary',
    secondary:
      'border border-gray-300 bg-brand-primary/20 text-gray-500 hover:bg-brand-primary/30 focus-visible:outline-gray-400 w-40',
  }

  return (
    <button
      type="button"
      className={`${base} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}
