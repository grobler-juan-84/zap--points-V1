import { supabase } from '@/lib/supabase/client'
import { getUser } from '@/services/auth.service'
import type { UserProfile } from '@/types/user.types'

type ProfileDatabaseRow = {
  id: string
  title: string
  first_name: string
  last_name: string
}

export async function getCurrentUserProfile(): Promise<UserProfile | null> {
  const user = await getUser()

  if (!user) {
    return null
  }

  const { data, error } = await supabase
    .from('profiles')
    .select('id, title, first_name, last_name')
    .eq('id', user.id)
    .single<ProfileDatabaseRow>()

  if (error) {
    throw new Error(error.message)
  }

  return {
    id: data.id,
    title: data.title,
    firstName: data.first_name,
    lastName: data.last_name,
  }
}
