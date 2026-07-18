import LoginForm from './components/forms/LoginForm'
import AuthCard from './components/AuthCard'
import AuthBackLink from './components/AuthBackLink'
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
    <main className="flex flex-row h-screen items-center justify-center">
      <AuthBackLink className="top-6 left-6" href="/" />
      <AuthCard className="w-9/10 sm:w-1/3 px-6 pb-2">
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
    </main>
  )
}
