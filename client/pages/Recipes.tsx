
import RecipeCardMedium from '../components/RecipeCardMedium'




function Recipe() {
  return (
    <div>
      <div>
        <div className="flex justify-center text-4xl">
          <h2 className="text-headingGreen">Pick Your Meals</h2>
        </div>
        <div className="mb-10 mt-2 flex justify-center">
          <h3>Choose up to seven meals</h3>
        </div>
      </div>
      <div className="flex h-full items-center justify-center">
        <div className="mb-4 ml-16">
          <RecipeCardMedium />
        </div>
      </div>
    </div>
  )
}

export default Recipe
