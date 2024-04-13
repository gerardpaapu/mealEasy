import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateWeek } from '../apis/backend-apis/weeks'

interface Params {
  id: number
  monday?: number
  tuesday?: number
  wednesday?: number
  thursday?: number
  friday?: number
  saturday?: number
  sunday?: number
}

export default function useUpdateWeeks() {
  const client = useQueryClient()
  return useMutation({
    mutationFn: (values: Params) => updateWeek(values),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['week'] })
    },
  })
}
