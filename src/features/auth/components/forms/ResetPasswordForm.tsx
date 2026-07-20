import { Link } from 'react-router-dom';

import FormLabel from '@/components/ui/FormLabel';
import PasswordInput from '@/components/ui/PasswordInput';
import AuthFormHeader from '@/features/auth/components/AuthFormHeader';
import AuthPrimaryButton from '@/features/auth/components/AuthPrimaryButton';
import AuthFormFeedback from '@/features/auth/components/AuthFormFeedback';
import { authContent } from '@/features/auth/content/authContent';

type ResetPasswordFormProps = {
  password: string;
  confirmPassword: string;
  isLoading: boolean;
  error?: string;
  success?: string;
  isSessionChecked: boolean;
  hasSession: boolean;
  onPasswordChange: (value: string) => void;
  onConfirmPasswordChange: (value: string) => void;
  onSubmit: (data: {
    password: string;
    confirmPassword: string;
  }) => void | Promise<void>;
};

const ResetPasswordForm = ({
  password,
  confirmPassword,
  isLoading,
  error,
  success,
  isSessionChecked,
  hasSession,
  onPasswordChange,
  onConfirmPasswordChange,
  onSubmit,
}: ResetPasswordFormProps) => {
  return (
    <>
      <AuthFormHeader
        title={authContent.resetPasswordTitle}
        subtitle={authContent.resetPasswordSubtitle}
      />

      {!isSessionChecked ? (
        <p className="text-center text-brand-primaryfont-spartan">
          {authContent.resetPasswordCheckingSession}
        </p>
      ) : !hasSession ? (
        <div className="grid gap-4 text-center">
          <p className="text-black/80 font-spartan">
            {authContent.resetPasswordExpiredMessage}
          </p>
          <Link
            to="/forgot-password"
            className="text-brand-secondary font-semibold font-spartan hover:underline"
          >
            {authContent.resetPasswordForgotLink}
          </Link>
        </div>
      ) : (
        <form
          className="grid gap-6"
          onSubmit={(e) => {
            e.preventDefault();
            void onSubmit({ password, confirmPassword });
          }}
        >
          <div className="grid gap-2">
            <FormLabel
              htmlFor="new-password"
              className="text-base font-semibold text-black text-[24px] font-spartan"
            >
              {authContent.resetPasswordNewLabel}
            </FormLabel>
            <PasswordInput
              id="new-password"
              name="password"
              autoComplete="new-password"
              required
              disabled={isLoading}
              className="h-12 w-full rounded-[12px] border border-black/20 bg-white px-4 pr-12 text-[16px] text-black outline-none focus:border-black/40 focus:ring-2 focus:ring-brand-primary/30 font-sans disabled:opacity-60"
              placeholder={authContent.passwordPlaceholder}
              value={password}
              onChange={(e) => onPasswordChange(e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <FormLabel
              htmlFor="confirm-password"
              className="text-base font-semibold text-black text-[24px] font-spartan"
            >
              {authContent.resetPasswordConfirmLabel}
            </FormLabel>
            <PasswordInput
              id="confirm-password"
              name="confirmPassword"
              autoComplete="new-password"
              required
              disabled={isLoading}
              className="h-12 w-full rounded-[12px] border border-black/20 bg-white px-4 pr-12 text-[16px] text-black outline-none focus:border-black/40 focus:ring-2 focus:ring-brand-primary/30 font-sans disabled:opacity-60"
              placeholder={authContent.confirmPasswordPlaceholder}
              value={confirmPassword}
              onChange={(e) => onConfirmPasswordChange(e.target.value)}
            />
          </div>

          <div className="flex justify-center gap-3">
            <AuthPrimaryButton
              type="submit"
              disabled={isLoading}
              className="max-w-[750px]"
            >
              {isLoading
                ? authContent.resetPasswordSavingButton
                : authContent.resetPasswordUpdateButton}
            </AuthPrimaryButton>
          </div>
          <AuthFormFeedback error={error} success={success} />
        </form>
      )}
    </>
  );
};

export default ResetPasswordForm;
