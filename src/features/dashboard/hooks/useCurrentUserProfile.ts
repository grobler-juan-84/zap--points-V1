import { useEffect } from 'react'
import { useUserStore } from '@/stores/useUserStore'
import { getCurrentUserProfile } from '@/services/profile.service'

export function useCurrentUserProfile() {
  const setProfile = useUserStore((state) => state.setProfile)
  const setIsLoading = useUserStore((state) => state.setIsLoading)
  // const clearProfile = useUserStore((state) => state.clearProfile)

  useEffect(() => {
    async function loadProfile() {
      setIsLoading(true)

      try {
        const profile = await getCurrentUserProfile()

        if (profile) {
          setProfile(profile)
        }
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }

    loadProfile()
  }, [setProfile, setIsLoading])
}
