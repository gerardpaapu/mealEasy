import { useQuery } from '@tanstack/react-query'

import { getApiRecipes } from '../apis/recipeApi/edamamRecipe'

export default function useGetApiRecipes(string: string) {
  return useQuery({
    queryKey: ['edamam', string],
    queryFn: async () => await getApiRecipes(string),

    staleTime: 300000, // 5 minutes (adjust as needed)
  })
}
