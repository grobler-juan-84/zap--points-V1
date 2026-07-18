import { Link } from 'react-router-dom';

import FormLabel from '@/components/ui/FormLabel';
import TextInput from '@/components/ui/TextInput';
import InlineErrorText from '@/components/ui/InlineErrorText';
import AuthFormHeader from '@/features/auth/components/AuthFormHeader';
import AuthPrimaryButton from '@/features/auth/components/AuthPrimaryButton';
import { authContent } from '@/features/auth/content/authContent';
import type { ForgotPasswordStep } from '@/features/auth/hooks/useForgotPassword';

type ForgotPasswordFormProps = {
  step: ForgotPasswordStep;
  email: string;
  otp: string;
  isLoading: boolean;
  error?: string;
  success?: string;
  onEmailChange: (value: string) => void;
  onOtpChange: (value: string) => void;
  onBackToRequest: () => void;
  onRequestSubmit: (data: { email: string }) => void | Promise<void>;
  onVerifySubmit: (data: { email: string; otp: string }) => void | Promise<void>;
};

type ForgotHeaderProps = {
  step: ForgotPasswordStep;
};

const ForgotHeader = ({ step }: ForgotHeaderProps) => (
  <AuthFormHeader
    title={authContent.forgotPasswordTitle}
    subtitle={
      step === 'request'
        ? authContent.forgotPasswordRequestSubtitle
        : authContent.forgotPasswordVerifySubtitle
    }
  />
);

const ForgotPasswordForm = ({
  step,
  email,
  otp,
  isLoading,
  error,
  success,
  onEmailChange,
  onOtpChange,
  onBackToRequest,
  onRequestSubmit,
  onVerifySubmit,
}: ForgotPasswordFormProps) => {
  return (
    <>
      <ForgotHeader step={step} />

      {step === 'request' ? (
        <form
          className="grid gap-6"
          onSubmit={(e) => {
            e.preventDefault();
            void onRequestSubmit({ email });
          }}
        >
          <div className="grid gap-2">
            <FormLabel
              htmlFor="forgot-email"
              className="text-base font-semibold text-[24px] text-black font-spartan"
            >
              {authContent.emailLabel}
            </FormLabel>
            <TextInput
              id="forgot-email"
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

          <div className="flex justify-center gap-3">
            <AuthPrimaryButton type="submit" disabled={isLoading} className="w-full">
              {isLoading
                ? authContent.forgotPasswordSendingButton
                : authContent.forgotPasswordSendCodeButton}
            </AuthPrimaryButton>
          </div>
        </form>
      ) : (
        <form
          className="grid gap-6"
          onSubmit={(e) => {
            e.preventDefault();
            void onVerifySubmit({ email, otp });
          }}
        >
          <p className="text-center text-sm text-black/80 font-spartan">
            {authContent.forgotPasswordCodeSentPrefix}{' '}
            <span className="font-semibold text-brand-primary">{email}</span>
          </p>

          <div className="grid gap-2">
            <FormLabel
              htmlFor="recovery-otp"
              className="text-base font-semibold text-[24px] text-black font-spartan"
            >
              {authContent.forgotPasswordOtpLabel}
            </FormLabel>
            <TextInput
              id="recovery-otp"
              name="otp"
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              required
              maxLength={6}
              disabled={isLoading}
              className="h-14 rounded-[12px] border border-black/20 bg-white px-4 text-center text-2xl tracking-[0.5em] font-sans text-black outline-none focus:border-black/40 focus:ring-2 focus:ring-brand-primary/30 disabled:opacity-60"
              placeholder={authContent.forgotPasswordOtpPlaceholder}
              value={otp}
              onChange={(e) => onOtpChange(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <button
              type="button"
              disabled={isLoading}
              onClick={onBackToRequest}
              className="h-12 w-full max-w-[750px] sm:max-w-[220px] rounded-[12px] border-2 border-brand-primary bg-white px-8 text-lg font-bold text-brand-primary transition hover:bg-brand-primary/10 focus:outline-none focus:ring-4 focus:ring-brand-primary/30 font-spartan disabled:opacity-60"
            >
              {authContent.forgotPasswordBackButton}
            </button>
            <AuthPrimaryButton
              type="submit"
              disabled={isLoading || otp.length !== 6}
            >
              {isLoading
                ? authContent.forgotPasswordVerifyingButton
                : authContent.forgotPasswordVerifyButton}
            </AuthPrimaryButton>
          </div>
        </form>
      )}

      {error && (
        <InlineErrorText className="mt-4 text-sm text-red-600 text-center">
          {error}
        </InlineErrorText>
      )}
      {success && (
        <InlineErrorText className="mt-4 text-sm text-green-600 text-center">
          {success}
        </InlineErrorText>
      )}

      <div className="mt-6 text-center text-sm text-[18px]">
        <Link
          to="/login"
          className="text-brand-secondary font-semibold font-spartan hover:underline"
        >
          {authContent.forgotPasswordBackToLogin}
        </Link>
      </div>
    </>
  );
};

export default ForgotPasswordForm;
