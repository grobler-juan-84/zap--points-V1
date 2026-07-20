import { useCallback, useState } from 'react'

export function useAuthFeedback() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const clearFeedback = useCallback(() => {
    setError('')
    setSuccess('')
  }, [])

  const runAction = useCallback(
    async (action: () => Promise<void>, fallbackError: string) => {
      clearFeedback()
      setIsLoading(true)
      try {
        await action()
      } catch (err) {
        console.error(err)
        setError(err instanceof Error ? err.message : fallbackError)
      } finally {
        setIsLoading(false)
      }
    },
    [clearFeedback],
  )

  return {
    isLoading,
    error,
    success,
    setError,
    setSuccess,
    clearFeedback,
    runAction,
  }
}
