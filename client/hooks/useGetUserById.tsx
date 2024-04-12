import { useQuery } from '@tanstack/react-query'

import { getUserById } from '../apis/users'
import { User } from '../../models/users'

export default function useGetUserById(id: User) {
  return useQuery({
    queryKey: ['user'],
    queryFn: async () => await getUserById(id),
  })
}
