import { useQuery } from '@tanstack/react-query'

import { getUserPreferences } from '../apis/backend-apis/preferences'

export default function useGetUserPreference(id: string) {
  return useQuery({
    queryKey: ['userPreferences'],
    queryFn: async () => await getUserPreferences(id),
  })
}
