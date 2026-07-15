import LoginForm from './components/forms/LoginForm'
import AuthCard from './components/AuthCard'
import AuthBackLink from './components/AuthBackLink'
import { authContent } from './content/authContent'


export function LoginPage() {
    const email = authContent.emailLabel
    const password = authContent.passwordLabel
    const loginButton = authContent.loginButton
    return (
        <main className="flex flex-row h-screen items-center justify-center">
            <AuthBackLink className="top-6 left-6" href="/login" />
            <AuthCard className="w-9/10 sm:w-1/3 px-6">
                <LoginForm email={'email@example.com'} password={'password'} isLoading={false} onEmailChange={() => { }} onPasswordChange={() => { }} onSubmit={() => { }} />
            </AuthCard>
        </main>
    )
}