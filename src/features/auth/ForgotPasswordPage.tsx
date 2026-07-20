import AuthCard from './components/AuthCard'
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
    <AuthCard>
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
  )
}
