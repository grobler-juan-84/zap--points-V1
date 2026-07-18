import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { authContent } from '@/features/auth/content/authContent'
import { useAuthFeedback } from '@/features/auth/hooks/useAuthFeedback'
import { signInWithEmailPassword } from '@/services/auth.service'

export function useLogin() {
  const navigate = useNavigate()
  const {
    isLoading,
    error,
    success,
    setSuccess,
    clearFeedback,
    runAction,
  } = useAuthFeedback()

  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  const handleLogin = useCallback(
    async (data: { email: string; password: string }) => {
      await runAction(async () => {
        await signInWithEmailPassword(data.email, data.password)
        setSuccess(authContent.loginSuccess)
        navigate('/dashboard')
      }, authContent.loginError)
    },
    [navigate, runAction, setSuccess],
  )

  return {
    isLoading,
    error,
    success,
    clearFeedback,
    loginEmail,
    setLoginEmail,
    loginPassword,
    setLoginPassword,
    handleLogin,
  }
}
