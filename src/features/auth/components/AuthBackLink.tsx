import type { CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';

type AuthBackLinkProps = {
  fallbackTo?: string;
  className?: string;
  style?: CSSProperties;
  strokeWidth?: number;
};

const AuthBackLink = ({
  fallbackTo = '/',
  className = '',
  style,
  strokeWidth = 2,
}: AuthBackLinkProps) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate(fallbackTo);
    }
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      className={`absolute text-[#DE8680] hover:text-[#E89A94] transition-colors z-10 ${className}`}
      style={style}
      aria-label="Go back"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="h-7 w-7"
      >
        <path
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-8-8 8-8"
        />
      </svg>
    </button>
  );
};

export default AuthBackLink;
