import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateUser } from '../apis/backend-apis/users'
import { User } from '../../models/users'

export default function useUpdateUser() {
  const client = useQueryClient()
  return useMutation({
    mutationFn: (values: User) => updateUser(values),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['user'] })
    },
  })
}
