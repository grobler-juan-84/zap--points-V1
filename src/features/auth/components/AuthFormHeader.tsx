import kis_logo from '@/assets/auth/auth-logo.png'

type AuthFormHeaderProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

const AuthFormHeader = ({
  title,
  className = '',
}: AuthFormHeaderProps) => {
  return (
    <div className={`flex flex-row ${className}`}>
      <div className="flex flex-col justify-center items-start">
        <h1 className="text-[clamp(1.25rem,4vw,4.25rem)] font-extrabold text-brand-primary font-league-spartan leading-none">
          {title}
        </h1>
      </div>
      <div className="flex justify-end items-start">
        <img
          src={kis_logo}
          alt="KIS Points logo"
          width={1}
          height={1}
          className="h-auto w-[clamp(3.5rem,10dvw,15rem)]"
        />
      </div>
    </div>
  );
};

export default AuthFormHeader;
