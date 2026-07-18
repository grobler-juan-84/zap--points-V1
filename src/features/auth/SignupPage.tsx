import AuthCard from './components/AuthCard'
import AuthBackLink from './components/AuthBackLink'
import SignupForm from './components/forms/SignupForm'
import { useSignup } from './hooks/useSignup'

export function SignupPage() {
  const {
    signupTitle,
    setSignupTitle,
    signupFirstName,
    setSignupFirstName,
    signupLastName,
    setSignupLastName,
    signupEmail,
    setSignupEmail,
    signupPassword,
    setSignupPassword,
    signupConfirmPassword,
    setSignupConfirmPassword,
    signupRole,
    setSignupRole,
    isLoading,
    error,
    success,
    handleSignup,
  } = useSignup()

  return (
    <main className="flex flex-row h-screen items-center justify-center">
      <AuthBackLink className="top-6 left-6" href="/" />
      <AuthCard className="w-9/10 sm:w-1/3 px-6 pb-2">
        <SignupForm
          title={signupTitle}
          firstName={signupFirstName}
          lastName={signupLastName}
          email={signupEmail}
          password={signupPassword}
          confirmPassword={signupConfirmPassword}
          role={signupRole}
          isLoading={isLoading}
          error={error}
          success={success}
          onTitleChange={setSignupTitle}
          onFirstNameChange={setSignupFirstName}
          onLastNameChange={setSignupLastName}
          onEmailChange={setSignupEmail}
          onPasswordChange={setSignupPassword}
          onConfirmPasswordChange={setSignupConfirmPassword}
          onRoleChange={setSignupRole}
          onSubmit={handleSignup}
        />
      </AuthCard>
    </main>
  )
}
