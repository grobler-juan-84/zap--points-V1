import type { ButtonHTMLAttributes, ReactNode } from 'react';
import PrimaryButton from '@/components/ui/PrimaryButton';

type AuthPrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
};

const AuthPrimaryButton = ({ children, className = '', ...props }: AuthPrimaryButtonProps) => {
  return (
    <PrimaryButton size="lg" fullWidth className={`font-spartan ${className}`.trim()} {...props}>
      {children}
    </PrimaryButton>
  );
};

export default AuthPrimaryButton;
