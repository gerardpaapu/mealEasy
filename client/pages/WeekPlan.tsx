import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import RecipeDetail from '../components/RecipeDetailCard'
import Button from '../components/Button'

import useGetUserById from '../hooks/useGetUserById'
import { useAuth0 } from '@auth0/auth0-react'
import { addUser } from '../apis/backend-apis/users'
import useGetWeekById from '../hooks/useGetWeeks'
import { getRecipeById } from '../apis/backend-apis/recipes'
import { WeeksId } from '../../models/weeks'

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
    // initialDaysOfWeek.reduce((acc, day, index) => {
    //   acc[day] = meals[index % meals.length].name // Assign a meal to each day from the meals array cyclically
    //   return acc
    // }, {}),
    [Number],
  )

  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [recipes, setRecipes] = useState([])
  const { data: week } = useGetWeekById(2)
  const [currentWeek, setCurrentWeek] = useState(
    // initialDaysOfWeek.reduce((acc, day, index) => {
    //   acc[day] = recipes[index % recipes.length].name // Assign a meal to each day from the meals array cyclically
    //   return acc
    // }, {}),
    [],
  )

  console.log(week?.monday)
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

      setMealPlan(arr)
    }
  }, [week])

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const promises = mealPlan.map((item) => getRecipeById(item))
        const recipes = await Promise.all(promises)
        setRecipes(recipes)
        setCurrentWeek(
          initialDaysOfWeek.reduce((acc, day, index) => {
            acc[day] = recipes[index % recipes.length].name // Assign a meal to each day from the meals array cyclically
            return acc
          }, {}),
        )
      } catch (error) {
        console.error('Error fetching recipes')
      }
    }
    getRecipes()
  }, [mealPlan])

  console.log('new recipes', recipes)
  // const recipes = getRecipes()
  // console.log(recipes)

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

  //---- Add user ---
  const { user } = useAuth0()
  const auth = user?.sub
  const { data, isLoading, isError } = useGetUserById(auth)
  console.log('users', data)
  if (isLoading) {
    return <p>Waiting on user details...</p>
  }
  if (isError) {
    return console.log('error with user')
  }
  if (!data) {
    const newUser: User = {
      auth0_id: user?.sub,
      email: user?.email,
      first_name: user?.given_name,
      last_name: user?.family_name,
      nickname: user?.nickname,
    }
    addUser(newUser)
  } else {
    console.log('user already exsits')
  }
  //-------

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
              <div key={index} className="mt-5 h-32">
                <h2 className="mb-1 text-xl font-semibold text-headingGreen">
                  {day}
                </h2>
                <div
                  className="card card-side h-24 w-96 bg-white shadow-xl"
                  draggable
                  onDragStart={(e) => handleDragStart(e, day)}
                  onDrop={(e) => handleDrop(e, day)}
                  onDragOver={handleDragOver}
                >
                  <div className="p-2">
                    <h2 className="card-title text-lg font-semibold">
                      {currentWeek[day]}
                    </h2>
                    <button onClick={handleRecipeClick}>Recipe Detail</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="ml-40">{selectedRecipe}</div>
      </div>
    </div>
  )
}
