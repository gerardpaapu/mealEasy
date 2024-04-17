import { useQuery } from '@tanstack/react-query'

import { getWeeksById } from '../apis/backend-apis/weeks'
import { WeeksId } from '../../models/weeks'

export default function useGetWeekById(id: number) {
  return useQuery({
    queryKey: ['week', id],
    queryFn: async () => await getWeeksById(id),
  })
}
