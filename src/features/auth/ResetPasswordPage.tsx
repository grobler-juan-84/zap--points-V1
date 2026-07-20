import AuthCard from './components/AuthCard'
import ResetPasswordForm from './components/forms/ResetPasswordForm'
import { useResetPassword } from './hooks/useResetPassword'

export function ResetPasswordPage() {
  const {
    resetPassword,
    setResetPassword,
    resetConfirmPassword,
    setResetConfirmPassword,
    isLoading,
    error,
    success,
    isSessionChecked,
    hasSession,
    handleResetPassword,
  } = useResetPassword()

  return (
    <AuthCard>
      <ResetPasswordForm
        password={resetPassword}
        confirmPassword={resetConfirmPassword}
        isLoading={isLoading}
        error={error}
        success={success}
        isSessionChecked={isSessionChecked}
        hasSession={hasSession}
        onPasswordChange={setResetPassword}
        onConfirmPasswordChange={setResetConfirmPassword}
        onSubmit={handleResetPassword}
      />
    </AuthCard>
  )
}
