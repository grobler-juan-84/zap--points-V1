import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { authContent } from '@/features/auth/content/authContent'
import { useAuthFeedback } from '@/features/auth/hooks/useAuthFeedback'
import {
  requestPasswordReset,
  verifyRecoveryOtp,
} from '@/services/auth.service'

export type ForgotPasswordStep = 'request' | 'verify'

export function useForgotPassword() {
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

  const [forgotStep, setForgotStep] = useState<ForgotPasswordStep>('request')
  const [forgotEmail, setForgotEmail] = useState('')
  const [forgotOtp, setForgotOtp] = useState('')

  const handleForgotPasswordRequest = useCallback(
    async (data: { email: string }) => {
      await runAction(async () => {
        await requestPasswordReset(data.email)
        setSuccess(authContent.forgotCodeSent)
        setForgotStep('verify')
      }, authContent.forgotSendError)
    },
    [runAction, setSuccess],
  )

  const handleForgotPasswordVerify = useCallback(
    async (data: { email: string; otp: string }) => {
      clearFeedback()
      if (data.otp.length !== 6) {
        setError(authContent.forgotOtpIncomplete)
        return
      }

      await runAction(async () => {
        await verifyRecoveryOtp(data.email, data.otp)
        setSuccess(authContent.forgotVerifySuccess)
        navigate('/reset-password')
      }, authContent.forgotVerifyError)
    },
    [clearFeedback, navigate, runAction, setError, setSuccess],
  )

  return {
    isLoading,
    error,
    success,
    clearFeedback,
    forgotStep,
    setForgotStep,
    forgotEmail,
    setForgotEmail,
    forgotOtp,
    setForgotOtp,
    handleForgotPasswordRequest,
    handleForgotPasswordVerify,
  }
}
