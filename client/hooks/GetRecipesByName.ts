import { useQuery } from '@tanstack/react-query'

import { getRecipeByName } from '../apis/backend-apis/recipes'

export default function useGetRecipeName(name: string) {
  return useQuery({
    queryKey: ['recipeName'],
    queryFn: async () => await getRecipeByName(name),
  })
}
