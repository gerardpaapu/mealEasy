import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import RecipeDetail from '../components/RecipeDetailCard'

export default function WeekPlan() {
  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]

  const [selectedRecipe, setSelectedRecipe] = useState(null)

  const handleRecipeClick = () => {
    setSelectedRecipe(
      selectedRecipe === null ? (
        <RecipeDetail
          imageUrl="https://img.taste.com.au/3mYHXsD_/taste/2016/11/sushi-for-kids-81300-1.jpeg"
          recipeName="Recipe Name"
        />
      ) : null,
    )
  }

  return (
    <div>
      <h1 className="text-headingGreen mb-20 flex justify-center text-4xl">
        Your week
      </h1>
      <div className="flex">
        <div>
          <div className="ml-12 flex flex-col items-start">
            {daysOfWeek.map((day, index) => (
              <div key={index} className="mb-10 h-36">
                <h2 className="text-headingGreen text-xl font-semibold">
                  {day}
                </h2>
                <div className="card card-side h-28 w-80 bg-base-100 bg-white shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title text-lg">Meal Name!</h2>
                    <div className="card-actions justify-end">
                      <button onClick={handleRecipeClick}>Recipe Detail</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link to="recipes">Back to Recipes</Link>
        </div>
        <div className="ml-40">{selectedRecipe}</div>
      </div>
    </div>
  )
}
