import kis_logo from '@/assets/auth/auth-logo.png'

type AuthFormHeaderProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

const AuthFormHeader = ({ title, subtitle, className = '' }: AuthFormHeaderProps) => {
  return (
    <div className={`flex flex-row gap-1 px-2 md:px-0 ${className}`}>
      <div className="flex flex-col justify-center items-start w-150 md:w-full">
        <div>
          <h1 className="text-3xl md:text-6xl font-extrabold text-brand-primary font-spartan">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-2 text-base md:text-lg text-black/70 font-spartan">
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
      <div className="flex justify-end items-start">
        <img src={kis_logo}
          alt="KIS Points logo"
          width={1}
          height={1}
          className="h-auto w-[clamp(3.5rem,7dvw,15rem)]"
        />
      </div>
    </div>
  );
};

export default AuthFormHeader;


