import { useQuery } from '@tanstack/react-query'

import { getWeeksByUserId } from '../apis/backend-apis/weeks'

export default function useGetWeeksByUser(userId: string) {
  return useQuery({
    queryKey: ['userWeeks'],
    queryFn: async () => await getWeeksByUserId(userId),
  })
}
