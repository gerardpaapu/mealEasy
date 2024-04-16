import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import RecipeDetail from '../components/RecipeDetailCard'
import Button from '../components/Button'

import useGetUserById from '../hooks/useGetUserById'
import { useAuth0 } from '@auth0/auth0-react'
import { addUser } from '../apis/backend-apis/users'
import useGetWeekById from '../hooks/useGetWeeks'
import { getRecipeById } from '../apis/backend-apis/recipes'

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

  const [daysOfWeek, setDaysOfWeek] = useState(initialDaysOfWeek)
  const [mealPlan, setMealPlan] = useState({})
  const [selectedRecipeIndex, setSelectedRecipeIndex] = useState(null)
  const [recipes, setRecipes] = useState([])
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const { data: week } = useGetWeekById(2)

  useEffect(() => {
    if (week) {
      const arr = [
        week.monday,
        week.tuesday,
        week.wednesday,
        week.thursday,
        week.friday,
        week.saturday,
        week.sunday,
      ]

      setMealPlan(
        arr.reduce((acc, meal, index) => {
          acc[initialDaysOfWeek[index]] = meal
          return acc
        }, {}),
      )
    }
  }, [week])

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const promises = Object.values(mealPlan).map((item) =>
          getRecipeById(item),
        )
        const recipes = await Promise.all(promises)
        setRecipes(recipes)
      } catch (error) {
        console.error('Error fetching recipes')
      }
    }
    getRecipes()
  }, [mealPlan])

  const handleRecipeClick = (index) => {
    setSelectedRecipeIndex(index)
  }

  const handleDragStart = (e, day) => {
    e.dataTransfer.setData('text/plain', day)
  }

  const handleDrop = (e, targetDay) => {
    e.preventDefault()
    const draggedDay = e.dataTransfer.getData('text/plain')
    if (draggedDay !== targetDay) {
      const updatedMealPlan = { ...mealPlan }
      const temp = updatedMealPlan[targetDay]
      updatedMealPlan[targetDay] = updatedMealPlan[draggedDay]
      updatedMealPlan[draggedDay] = temp
      setMealPlan(updatedMealPlan)
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  // Add user
  const { user } = useAuth0()
  const auth = user?.sub
  const { data, isLoading, isError } = useGetUserById(auth)

  useEffect(() => {
    if (!data && !isLoading && !isError) {
      const newUser = {
        auth0_id: user?.sub,
        email: user?.email,
        first_name: user?.given_name,
        last_name: user?.family_name,
        nickname: user?.nickname,
      }
      addUser(newUser)
    }
  }, [data, isError, isLoading, user])

  if (isLoading) {
    return <p>Waiting on user details...</p>
  }
  if (isError) {
    console.error('Error with user')
    return null // or handle error UI
  }

  return (
    <div>
      <div className="relative flex flex-col items-center justify-center">
        <h1 className="mb-14 flex justify-center text-4xl text-headingGreen">
          Your week
        </h1>
        <Link to="recipes">
          <Button>Back to Recipes</Button>
        </Link>
      </div>

      <div className="mb-20 flex">
        <div>
          <div className="ml-12 flex flex-col items-start">
            {daysOfWeek.map((day, index) => (
              <div key={index} className="h-32">
                <h2 className="mb-1 text-xl font-semibold text-headingGreen">
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
                      {recipes[index]?.name || 'No Recipe'}
                    </h2>
                    <button onClick={() => handleRecipeClick(index)}>
                      Recipe Detail
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="ml-40">
          {selectedRecipeIndex !== null && (
            <RecipeDetail
              imageUrl={recipes[selectedRecipeIndex]?.image}
              recipeName={recipes[selectedRecipeIndex]?.name}
              ingredients={recipes[selectedRecipeIndex]?.ingredients.split('_')}
            />
          )}
        </div>
      </div>
    </div>
  )
}
