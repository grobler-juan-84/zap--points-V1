'use client';

import { Link } from 'react-router-dom';
import FormLabel from '@/components/ui/FormLabel';
import TextInput from '@/components/ui/TextInput';
import PasswordInput from '@/components/ui/PasswordInput';
import InlineErrorText from '@/components/ui/InlineErrorText';
import AuthBackLink from '@/features/auth/components/AuthBackLink';
import AuthCard from '@/features/auth/components/AuthCard';
import AuthFormHeader from '@/features/auth/components/AuthFormHeader';
import AuthFormFooter from '@/features/auth/components/AuthFormFooter';
import AuthPrimaryButton from '@/features/auth/components/AuthPrimaryButton';
import { authContent } from '@/features/auth/content/authContent';

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
  const title = authContent.login //login page title
  const emailLabel = authContent.emailLabel //email label
  const passwordLabel = authContent.passwordLabel //password label
  const loginButton = authContent.loginButton //login button
  const forgotPassword = authContent.forgotPassword //forgot password
  return (
    <>
      <AuthFormHeader title={title} />
      {/* <form className="grid gap-2" onSubmit={(e) => { e.preventDefault(); void onSubmit({ email, password }); }}> */}
      <div className="flex flex-col gap-6 w-full overflow-hidden">
        <div className="grid gap-2">
          <FormLabel htmlFor="email" className="text-base font-semibold text-[24px] text-black font-league-spartan">
            {emailLabel}
          </FormLabel>
          {/* TextInput is used to display the email input */}
          <TextInput
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            disabled={isLoading}
            className="h-12 rounded-[12px] border border-black/20 bg-white px-4 text-[16px] text-black outline-none focus:border-black/40 focus:ring-2 focus:ring-brand-purple/30 font-sans disabled:opacity-60"
            placeholder=""
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <FormLabel htmlFor="password" className="text-base font-semibold text-black text-[24px] font-spartan">
            {passwordLabel}
          </FormLabel>
          <PasswordInput
            id="password"
            name="password"
            autoComplete="current-password"
            required
            disabled={isLoading}
            className="h-12 w-full rounded-[12px] border border-black/20 bg-white px-4 pr-12 text-[16px] text-black outline-none focus:border-black/40 focus:ring-2 focus:ring-brand-purple/30 font-sans disabled:opacity-60"
            placeholder=""
            value={password}
            onChange={(e) => onPasswordChange(e.target.value)}
          />
        </div>

        {/* text-left is used to align the text to the left */}
        <Link to="/" className="hover:underline font-league-spartan font-bold text-lg text-gray-600">
          {forgotPassword}
        </Link>

        <div className="flex justify-end gap-3">
          <AuthPrimaryButton
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Logging in…' : 'Login'}
          </AuthPrimaryButton>
        </div>
        {/* {error && (
              <InlineErrorText className="text-sm text-red-600 text-center">{error}</InlineErrorText>
            )}
            {success && (
              <InlineErrorText className="text-sm text-green-600 text-center">{success}</InlineErrorText>
            )} */}
      </div>
      {/* </form> */}
      {/* <AuthFormFooter promptText="Don&apos;t have an account?" linkText="Sign up" linkHref="/signup" /> */}
    </>
  );
};

export default LoginForm;
