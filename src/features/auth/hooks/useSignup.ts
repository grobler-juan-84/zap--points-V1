import { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { authContent } from '@/features/auth/content/authContent'
import { useAuthFeedback } from '@/features/auth/hooks/useAuthFeedback'
import { signUpWithEmailPassword } from '@/services/auth.service'

export function useSignup() {
  const navigate = useNavigate()
  const redirectTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const {
    isLoading,
    error,
    success,
    setError,
    setSuccess,
    clearFeedback,
    runAction,
  } = useAuthFeedback()

  const [signupTitle, setSignupTitle] = useState('ms')
  const [signupFirstName, setSignupFirstName] = useState('')
  const [signupLastName, setSignupLastName] = useState('')
  const [signupEmail, setSignupEmail] = useState('')
  const [signupPassword, setSignupPassword] = useState('')
  const [signupConfirmPassword, setSignupConfirmPassword] = useState('')
  const [signupRole, setSignupRole] = useState('teacher')

  useEffect(() => {
    return () => {
      if (redirectTimeoutRef.current) {
        clearTimeout(redirectTimeoutRef.current)
      }
    }
  }, [])

  const handleSignup = useCallback(
    async (data: {
      title: string
      firstName: string
      lastName: string
      email: string
      password: string
      confirmPassword: string
      role: string
    }) => {
      clearFeedback()
      const fullName = `${data.firstName} ${data.lastName}`.trim()

      if (data.password !== data.confirmPassword) {
        setError(authContent.passwordsMismatch)
        return
      }

      await runAction(async () => {
        await signUpWithEmailPassword({
          email: data.email,
          password: data.password,
          data: {
            name: fullName,
            title: data.title,
            role: data.role,
          },
        })
        setSuccess(authContent.signupSuccess)
        redirectTimeoutRef.current = setTimeout(() => {
          navigate('/login')
        }, 2000)
      }, authContent.signupError)
    },
    [clearFeedback, navigate, runAction, setError, setSuccess],
  )

  return {
    isLoading,
    error,
    success,
    clearFeedback,
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
    handleSignup,
  }
}
