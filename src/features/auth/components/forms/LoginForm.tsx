import { Link } from 'react-router-dom';
import { authContent } from '@/features/auth/content/authContent';
import FormLabel from '@/components/ui/FormLabel';
import TextInput from '@/components/ui/TextInput';
import PasswordInput from '@/components/ui/PasswordInput';
import AuthFormHeader from '@/features/auth/components/AuthFormHeader';
import AuthFormFooter from '@/features/auth/components/AuthFormFooter';
import AuthPrimaryButton from '@/features/auth/components/AuthPrimaryButton';
import AuthFormFeedback from '@/features/auth/components/AuthFormFeedback';

type LoginFormProps = {
  email: string;
  password: string;
  isLoading: boolean;
  error?: string;
  success?: string;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onSubmit: (data: { email: string; password: string }) => void | Promise<void>;
};

const LoginForm = ({
  email,
  password,
  isLoading,
  error,
  success,
  onEmailChange,
  onPasswordChange,
  onSubmit,
}: LoginFormProps) => {
  return (
    <>
      <AuthFormHeader title={authContent.loginLabel} />

      <form className="grid gap-2" onSubmit={(e) => {
        e.preventDefault();
        void onSubmit({ email, password });
      }}
      >
        <div className="flex flex-col gap-6 w-full overflow-hidden">

          <div className="grid gap-2">
            <FormLabel
              htmlFor="email"
              className="text-base font-semibold text-[24px] text-black font-league-spartan"
            >
              {authContent.emailLabel}
            </FormLabel>

            <TextInput
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              disabled={isLoading}
              className="h-12 rounded-[12px] border border-black/20 bg-white px-4 text-[16px] text-black outline-none focus:border-black/40 focus:ring-2 focus:ring-brand-primary/30 font-sans disabled:opacity-60"
              placeholder={authContent.emailPlaceholder}
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <FormLabel
              htmlFor="password"
              className="text-base font-semibold text-black text-[24px] font-spartan"
            >
              {authContent.passwordLabel}
            </FormLabel>
            <PasswordInput
              id="password"
              name="password"
              autoComplete="current-password"
              required
              disabled={isLoading}
              className="h-12 w-full rounded-[12px] border border-black/20 bg-white px-4 pr-12 text-[16px] text-black outline-none focus:border-black/40 focus:ring-2 focus:ring-brand-primary/30 font-sans disabled:opacity-60"
              placeholder={authContent.passwordPlaceholder}
              value={password}
              onChange={(e) => onPasswordChange(e.target.value)}
            />
          </div>

          <Link
            to="/forgot-password"
            className="hover:underline font-league-spartan font-bold text-lg text-gray-600"
          >
            {authContent.forgotPasswordLabel}
          </Link>

          <div className="flex justify-end gap-3">
            <AuthPrimaryButton type="submit" disabled={isLoading}>
              {isLoading
                ? authContent.loginButtonLoadingText
                : authContent.loginButtonText}
            </AuthPrimaryButton>
          </div>

          <AuthFormFeedback error={error} success={success} />
        </div>
      </form>
      <AuthFormFooter
        promptText={authContent.dontHaveAccountLabel}
        linkText={authContent.signUpLabel}
        linkHref="/signup"
      />
    </>
  );
};

export default LoginForm;
