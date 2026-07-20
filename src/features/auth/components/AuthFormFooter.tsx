import { Link } from 'react-router-dom';

type AuthFormFooterProps = {
  promptText?: string;
  linkText: string;
  linkHref: string;
  className?: string;
  promptClassName?: string;
  linkClassName?: string;
};

const AuthFormFooter = ({
  promptText,
  linkText,
  linkHref,
  className = 'mt-6 text-center text-sm text-[18px]',
  promptClassName = 'text-gray-600 font-spartan',
  linkClassName = 'text-brand-secondary text-[18px] font-semibold font-spartan hover:underline',
}: AuthFormFooterProps) => {
  return (
    <div className={className}>
      {promptText ? <span className={promptClassName}>{promptText} </span> : null}
      <Link to={linkHref} className={linkClassName}>
        {linkText}
      </Link>
    </div>
  );
};

export default AuthFormFooter;
