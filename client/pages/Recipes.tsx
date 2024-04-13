import { Link } from 'react-router-dom'
import RecipeCardMedium from '../components/RecipeCardMedium'
import Button from '../components/Button'

function Recipe() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="mb-4 ml-16">
        <div className="flex justify-center text-4xl">
          <h2 className="text-headingGreen">Pick Your Meals</h2>
        </div>
        <div className="mb-10 mt-2 flex justify-center">
          <h3>Choose up to seven meals</h3>
        </div>
        <RecipeCardMedium />
        <Link to="/home">
          <Button>Save and See your plan</Button>
        </Link>
      </div>
    </div>
  )
}

export default Recipe
