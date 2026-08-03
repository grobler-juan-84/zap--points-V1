import { create } from 'zustand'

type UserProfile = {
  id: string
  title: string
  firstName: string
  lastName: string
}

type UserStore = {
  profile: UserProfile | null
  isLoading: boolean
  setProfile: (profile: UserProfile) => void
  setIsLoading: (isLoading: boolean) => void
  clearProfile: () => void
}

export const useUserStore = create<UserStore>((set) => ({
  profile: null,
  isLoading: false,
  setProfile: (profile) => set({ profile }),
  setIsLoading: (isLoading) => set({ isLoading }),
  clearProfile: () => set({ profile: null }),
}))
