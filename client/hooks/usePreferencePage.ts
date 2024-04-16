import { useQuery } from '@tanstack/react-query'

import { getPreferences } from '../apis/backend-apis/preferences'
import { getUserById } from '../apis/backend-apis/users'
import { useAuth0 } from '@auth0/auth0-react'

export default function usePreferencePage(id: string) {
  const {
    data: currentUser,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['user'],
    queryFn: async () => await getUserById(id),
  })

  const { data: preferences } = useQuery({
    queryKey: ['preference'],
    queryFn: async () => await getPreferences(),
  })

  return { currentUser, preferences, isLoading, isError }
}
