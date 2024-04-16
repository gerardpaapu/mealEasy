import { useQuery } from '@tanstack/react-query'

import { getPreferences } from '../apis/backend-apis/preferences'
import { getUserById } from '../apis/backend-apis/users'
import { getUserPreferences } from '../apis/backend-apis/preferences'

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

  const { data: userPreferences } = useQuery({
    queryKey: ['userPreferences'],
    queryFn: async () => await getUserPreferences(id),
  })

  return { currentUser, preferences, userPreferences, isLoading, isError }
}
