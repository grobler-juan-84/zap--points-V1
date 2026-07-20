import type { ReactNode } from 'react';

type InlineErrorTextProps = {
  children: ReactNode;
  className?: string;
};

const InlineErrorText = ({ children, className = '' }: InlineErrorTextProps) => {
  return <p className={className}>{children}</p>;
};

export default InlineErrorText;
