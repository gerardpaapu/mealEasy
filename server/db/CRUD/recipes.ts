import connection from '../connection'

const db = connection

//add Recipe by post request
export async function addRecipes(data) {
  await db('recipes').insert(data)
}

//Get Recipe By Name

export async function getRecipesByName(name: string) {
  const recipe = await db('recipes').where({ name }).select().first()
  return recipe
}

export async function getRecipesById(id: number) {
  const recipe = await db('recipes').where({ id }).select().first()
  return recipe
}
