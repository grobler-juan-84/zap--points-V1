import AuthCard from './components/AuthCard'
import AuthBackLink from './components/AuthBackLink'
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
    <main className="flex flex-row h-screen items-center justify-center">
      <AuthBackLink className="top-6 left-6" href="/login" />
      <AuthCard className="w-9/10 sm:w-1/3 px-6 pb-2">
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
    </main>
  )
}
