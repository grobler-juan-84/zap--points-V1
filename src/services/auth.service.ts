import type { User } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase/client'

function throwAuthError(error: { message: string }): never {
  throw new Error(error.message)
}

export async function signInWithEmailPassword(
  email: string,
  password: string,
): Promise<void> {
  const { error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) throwAuthError(error)
}

export async function signUpWithEmailPassword(params: {
  email: string
  password: string
  data: {
    name: string
    title: string
    role: string
  }
}): Promise<void> {
  const { error } = await supabase.auth.signUp({
    email: params.email,
    password: params.password,
    options: {
      data: params.data,
    },
  })
  if (error) throwAuthError(error)
}

export async function requestPasswordReset(email: string): Promise<void> {
  const redirectTo = `${window.location.origin}/reset-password`
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo,
  })
  if (error) throwAuthError(error)
}

export async function verifyRecoveryOtp(
  email: string,
  token: string,
): Promise<void> {
  const { error } = await supabase.auth.verifyOtp({
    email,
    token,
    type: 'recovery',
  })
  if (error) throwAuthError(error)
}

export async function updateCurrentUserPassword(
  password: string,
): Promise<void> {
  const { error } = await supabase.auth.updateUser({ password })
  if (error) throwAuthError(error)
}

export async function getSession(): Promise<User | null> {
  const { data, error } = await supabase.auth.getSession()
  if (error) throwAuthError(error)
  return data.session?.user ?? null
}

export async function getUser(): Promise<User | null> {
  const { data, error } = await supabase.auth.getUser()
  if (error) throwAuthError(error)
  return data.user ?? null
}

export async function signOut(): Promise<void> {
  const { error } = await supabase.auth.signOut()
  if (error) throwAuthError(error)
}
