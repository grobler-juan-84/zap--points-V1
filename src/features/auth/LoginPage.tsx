import LoginForm from './components/forms/LoginForm'
import AuthCard from './components/AuthCard'
import { useLogin } from './hooks/useLogin'

export function LoginPage() {
  const {
    loginEmail, setLoginEmail,
    loginPassword, setLoginPassword,
    isLoading,
    error,
    success,
    handleLogin,
  } = useLogin()

  return (
    <AuthCard>
      <LoginForm
        email={loginEmail}
        onEmailChange={setLoginEmail}
        password={loginPassword}
        onPasswordChange={setLoginPassword}
        isLoading={isLoading}
        error={error}
        success={success}
        onSubmit={handleLogin}
      />
    </AuthCard>
  )
}
