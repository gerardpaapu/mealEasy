import request from 'superagent'

export async function getApiRecipes(searchString: string) {
  const recipes = await request.get(
    `https://api.edamam.com/api/recipes/v2?type=public&app_id=3d5a0f61&app_key=8328c02fd85739c5fd6feaafe05e4d4b&imageSize=LARGE${searchString}`,
  )

  return recipes.body
}
