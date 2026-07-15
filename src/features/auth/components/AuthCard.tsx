import type { FC, ReactNode } from 'react';

type AuthCardProps = {
  children: ReactNode;
  className?: string;
};

const AuthCard: FC<AuthCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-brand-tertiary rounded-xl shadow-xl relative ${className}`}>
      {children}
    </div>
  );
};

export default AuthCard;
