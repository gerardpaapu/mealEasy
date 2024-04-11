import { Link } from 'react-router-dom'
import RecipeCardSml from '../components/RecipeCardSml'

function Recipe() {
  return (
    <div className="mb-4 mt-24">
      <div className="flex justify-center text-4xl">
        <h2>Pick Your Meals</h2>
      </div>
      <div className="mt-2 flex justify-center">
        <h3>Choose up to seven meals</h3>
      </div>
      <RecipeCardSml />
      <Link to="weekplan">Save and Go to meal plan</Link>
    </div>
  )
}

export default Recipe
