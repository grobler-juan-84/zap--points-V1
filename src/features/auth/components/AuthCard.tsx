import type { ReactNode } from 'react';

type AuthCardProps = {
  children: ReactNode;
  className?: string;
};

const AuthCard = ({ children, className = '' }: AuthCardProps) => {
  return (
    <div className={`bg-brand-tertiary rounded-xl shadow-xl relative w-9/10 sm:w-1/3 px-6 pb-2 ${className}`}>
      {children}
    </div>
  );
};

export default AuthCard;
