import { useQuery } from '@tanstack/react-query'

import { getApiRecipes } from '../apis/recipeApi/edamamRecipe'

export default function useGetApiRecipes(string: string) {
  return useQuery({
    queryKey: ['edamam'],
    queryFn: async () => await getApiRecipes(string),
  })
}
