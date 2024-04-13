import { RecipeId, Recipes } from '../../../models/recipes'
import connection from '../connection'

const db = connection

//add Recipe by post request
export async function addRecipes(data: Recipes) {
  await db('recipes').insert(data)
}

//Get Recipe By Name

export async function getRecipesByName(name: string): Promise<RecipeId[]> {
  const recipe = await db('recipes').where({ name }).select()

  return recipe
}

export async function getRecipeById(id: number): Promise<RecipeId> {
  const recipe = await db('recipes').where({ id }).select().first()
  return recipe
}
