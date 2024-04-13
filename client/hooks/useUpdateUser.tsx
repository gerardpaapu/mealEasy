import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateUser } from '../apis/backend-apis/users'

interface Params {
  auth0_id?: string
  email?: string
  first_name?: string
  last_name?: string
  nickname?: string
}

export default function useUpdateUser() {
  const client = useQueryClient()
  return useMutation({
    mutationFn: (values: Params) => updateUser(values),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['user'] })
    },
  })
}
