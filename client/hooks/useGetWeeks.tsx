import { useQuery } from '@tanstack/react-query'

import { getWeeksById } from '../apis/backend-apis/weeks'
import { WeeksId } from '../../models/weeks'

export default function useGetWeekById(id: WeeksId) {
  return useQuery({
    queryKey: ['week'],
    queryFn: async () => await getWeeksById(id),
  })
}
