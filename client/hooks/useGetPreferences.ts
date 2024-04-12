import { useQuery } from '@tanstack/react-query'

import { getPreferences } from '../apis/backend-apis/preferences'

export default function useGetPreferences() {
  return useQuery({
    queryKey: ['user'],
    queryFn: async () => await getPreferences(),
  })
}
