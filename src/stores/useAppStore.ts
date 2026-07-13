import { create } from 'zustand'

type AppState = {
  clickCount: number
  incrementClickCount: () => void
}

export const useAppStore = create<AppState>((set) => ({
  clickCount: 0,
  incrementClickCount: () =>
    set((state) => ({ clickCount: state.clickCount + 1 })),
}))
