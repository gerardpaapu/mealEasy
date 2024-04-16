import request from 'superagent'

import { RecipeId, Recipes } from '../../../models/recipes'

const rootUrl = '/api/v1'

export async function getRecipeById(id: number) {
  const recipe = await request.get(`${rootUrl}/recipes/${id}`)

  return recipe.body as RecipeId
}

export async function getRecipeByName(name: string) {
  const recipe = await request.get(`${rootUrl}/recipes/name/${name}`)
  console.log('getbyname', recipe)
  return recipe.body as RecipeId[]
}

export async function addARecipe(data: Recipes) {
  await request.post(`${rootUrl}/recipes/`).send(data)
}
