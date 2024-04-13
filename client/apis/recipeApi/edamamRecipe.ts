import request from 'superagent'

export async function getApiRecipes() {
  const recipes = await request.get(
    'https://api.edamam.com/api/recipes/v2?type=public&app_id=3d5a0f61&app_key=8328c02fd85739c5fd6feaafe05e4d4b&diet=high-protein&diet=low-carb&cuisineType=Indian&cuisineType=American&imageSize=LARGE',
  )

  return recipes.body
}
