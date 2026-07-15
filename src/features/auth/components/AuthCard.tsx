import type { ReactNode } from 'react';

type AuthCardProps = {
  children: ReactNode;
  className?: string;
};

const AuthCard = ({ children, className = '' }: AuthCardProps) => {
  return (
    <div className={`bg-brand-tertiary rounded-xl shadow-xl relative ${className}`}>
      {children}
    </div>
  );
};

export default AuthCard;
