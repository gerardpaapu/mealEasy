export interface Recipes {
  name: string
  image: string
  ingredients: string
}

export interface RecipeId extends Recipes {
  id: number
}
