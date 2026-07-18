import AuthCard from './components/AuthCard'
import AuthBackLink from './components/AuthBackLink'
import ForgotPasswordForm from './components/forms/ForgotPasswordForm'
import { useForgotPassword } from './hooks/useForgotPassword'

export function ForgotPasswordPage() {
  const {
    forgotStep,
    setForgotStep,
    forgotEmail,
    setForgotEmail,
    forgotOtp,
    setForgotOtp,
    isLoading,
    error,
    success,
    handleForgotPasswordRequest,
    handleForgotPasswordVerify,
  } = useForgotPassword()

  return (
    <main className="flex flex-row h-screen items-center justify-center">
      <AuthBackLink className="top-6 left-6" href="/login" />
      <AuthCard className="w-9/10 md:w-1/3 overflow-hidden pb-2 px-2 md:px-6">
        <ForgotPasswordForm
          step={forgotStep}
          email={forgotEmail}
          otp={forgotOtp}
          isLoading={isLoading}
          error={error}
          success={success}
          onEmailChange={setForgotEmail}
          onOtpChange={setForgotOtp}
          onBackToRequest={() => setForgotStep('request')}
          onRequestSubmit={handleForgotPasswordRequest}
          onVerifySubmit={handleForgotPasswordVerify}
        />
      </AuthCard>
    </main>
  )
}
