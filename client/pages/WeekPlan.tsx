import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import RecipeDetail from '../components/RecipeDetailCard'
import Button from '../components/Button'

export default function WeekPlan() {
  const initialDaysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]

  const meals = [
    {
      name: 'Butter Chicken',
      about:
        'A creamy and flavorful Indian dish made with tender chicken pieces.',
    },
    {
      name: 'Pasta',
      about: 'Delicious pasta served with your favorite sauce and toppings.',
    },
    {
      name: 'Soup',
      about: 'Comforting soup filled with fresh vegetables and aromatic herbs.',
    },
    {
      name: 'Steak',
      about:
        'Juicy steak cooked to perfection and served with roasted vegetables.',
    },
    {
      name: 'Salad',
      about:
        'Fresh salad made with crisp greens, colorful vegetables, and tangy dressing.',
    },
    {
      name: 'Pizza',
      about: 'Classic pizza with your choice of toppings, baked to perfection.',
    },
    {
      name: 'Tacos',
      about:
        'Tasty tacos filled with seasoned meat, fresh salsa, and creamy guacamole.',
    },
  ]

  const [daysOfWeek, setDaysOfWeek] = useState(initialDaysOfWeek)
  const [mealPlan, setMealPlan] = useState(
    initialDaysOfWeek.reduce((acc, day, index) => {
      acc[day] = meals[index % meals.length].name // Assign a meal to each day from the meals array cyclically
      return acc
    }, {}),
  )

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

  const handleDragStart = (e, day) => {
    e.dataTransfer.setData('text/plain', day)
  }

  const handleDrop = (e, targetDay) => {
    e.preventDefault()
    const draggedDay = e.dataTransfer.getData('text/plain')
    if (draggedDay !== targetDay) {
      const updatedMealPlan = {
        ...mealPlan,
        [targetDay]: mealPlan[draggedDay],
        [draggedDay]: mealPlan[targetDay],
      }
      setMealPlan(updatedMealPlan)
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <h1 className="text-headingGreen mb-14 flex justify-center text-4xl">
        Your week
      </h1>
      <div className="mb-20 flex">
        <div>
          <div className="ml-12 flex flex-col items-start">
            {daysOfWeek.map((day, index) => (
              <div key={index} className="h-32">
                <h2 className="text-headingGreen mb-1 text-xl font-semibold">
                  {day}
                </h2>
                <div
                  className="card card-side h-20 w-80 bg-white shadow-xl"
                  draggable
                  onDragStart={(e) => handleDragStart(e, day)}
                  onDrop={(e) => handleDrop(e, day)}
                  onDragOver={handleDragOver}
                >
                  <div className="p-2">
                    <h2 className="card-title text-lg font-semibold">
                      {mealPlan[day]}
                    </h2>
                    <button onClick={handleRecipeClick}>Recipe Detail</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link to="recipes">
            <Button>Back to Recipes</Button>
          </Link>
        </div>
        <div className="ml-40">{selectedRecipe}</div>
      </div>
    </div>
  )
}
