import type { InputHTMLAttributes } from 'react';

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

const TextInput = ({ className = '', ...props }: TextInputProps) => {
  return <input className={className} {...props} />;
};

export default TextInput;
