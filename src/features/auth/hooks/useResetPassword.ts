import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { authContent } from '@/features/auth/content/authContent'
import { useAuthFeedback } from '@/features/auth/hooks/useAuthFeedback'
import {
  getSessionUser,
  updateCurrentUserPassword,
} from '@/services/auth.service'

export function useResetPassword() {
  const navigate = useNavigate()
  const {
    isLoading,
    error,
    success,
    setError,
    setSuccess,
    clearFeedback,
    runAction,
  } = useAuthFeedback()

  const [resetPassword, setResetPassword] = useState('')
  const [resetConfirmPassword, setResetConfirmPassword] = useState('')
  const [isSessionChecked, setIsSessionChecked] = useState(false)
  const [hasSession, setHasSession] = useState(false)

  const checkResetSession = useCallback(async () => {
    const session = await getSessionUser()
    setHasSession(!!session)
    setIsSessionChecked(true)
  }, [])

  useEffect(() => {
    void checkResetSession()
  }, [checkResetSession])

  const handleResetPassword = useCallback(
    async (data: { password: string; confirmPassword: string }) => {
      clearFeedback()
      if (data.password !== data.confirmPassword) {
        setError(authContent.passwordsMismatch)
        return
      }
      if (data.password.length < 6) {
        setError(authContent.passwordTooShort)
        return
      }

      await runAction(async () => {
        await updateCurrentUserPassword(data.password)
        setSuccess(authContent.resetSuccess)
        navigate('/login')
      }, authContent.resetError)
    },
    [clearFeedback, navigate, runAction, setError, setSuccess],
  )

  return {
    isLoading,
    error,
    success,
    clearFeedback,
    resetPassword,
    setResetPassword,
    resetConfirmPassword,
    setResetConfirmPassword,
    isSessionChecked,
    hasSession,
    handleResetPassword,
  }
}
