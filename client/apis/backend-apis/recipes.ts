import request from 'superagent'
import { User } from '../../../models/users'
import { RecipeId, Recipes } from '../../../models/recipes'

const rootUrl = '/api/v1'

export async function getRecipeById(id: RecipeId) {
  const recipe = await request.get(`${rootUrl}/recipes/${id}`)
  console.log('getbyid', recipe)
  return recipe.body as RecipeId
}

export async function getRecipeByName(name: Recipes) {
  const recipe = await request.get(`${rootUrl}/recipes/${name}`)
  console.log('getbyname', recipe)
  return recipe.body as RecipeId
}

export async function addARecipe(data: Recipes) {
  await request.post(`${rootUrl}/recipes/`).send(data)
}
