import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect, useState } from 'react'
import useGetUserPreference from '../hooks/useGetUserPreferences'
import useGetApiRecipes from '../hooks/useGetApiRecipes'
import RecipeDetail from './RecipeDetailCard'
import { addARecipe, getRecipeByName } from '../apis/backend-apis/recipes'
import { Recipes } from '../../models/recipes'
import { Weeks } from '../../models/weeks'
import { addWeek } from '../apis/backend-apis/weeks'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

export default function RecipeCardMedium({ input }) {
  const [selectedItems, setSelectedItems] = useState([])
  const [selectedRecipeIndex, setSelectedRecipeIndex] = useState(null)
  const [meals, setMeals] = useState([])

  console.log(input)

  const { user } = useAuth0()
  const auth = user?.sub
  const userId = auth ?? '-1'

  const { data: userPreference } = useGetUserPreference(userId)

  const searchString = userPreference
    ?.map((pref) => `&${pref.type}=${pref.name}`)
    .join('')

  const string = searchString ?? '-1'
  console.log(string)
  const { data, isLoading, isError } = useGetApiRecipes(string)

  useEffect(() => {
    let mealsObjArr
    if (data) {
      mealsObjArr = data.hits.map((item) => {
        const obj = {}
        obj.name = item.recipe.label
        obj.image = item.recipe.images

        obj.ingredients = item.recipe.ingredientLines
        return obj
      })
    }

    setMeals(mealsObjArr)
  }, [data])

  console.log(meals)

  const navigate = useNavigate()

  function handleFilter() {
    const filteredMeals = meals.filter((meal) =>
      meal.ingredients.find((item) => item.split(' ').includes(input)),
    )

    setMeals(filteredMeals)
  }

  async function handleSave(meals) {
    const mealsArr = selectedItems.map((index) => meals[index])
    const weekObj: Weeks = {
      user_id: userId,

      created_on: Date.now(),
    }

    const week = [
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
      'sunday',
    ]

    await Promise.all(
      mealsArr.map(async (meal) => {
        const arr = await getRecipeByName(meal.name)

        if (arr.length === 0) {
          const obj: Recipes = { name: '', ingredients: '', image: '' }
          obj.name = meal.name
          obj.image = meal.image.LARGE.url
          obj.ingredients = meal.ingredients.join('_')
          console.log(obj)
          await addARecipe(obj)
        }
      }),
    )

    // After all recipes are added, log the results
    await Promise.all(
      mealsArr.map(async (meal, i) => {
        const arr = await getRecipeByName(meal.name)
        const id = arr[0].id
        weekObj[week[i]] = id
      }),
    )

    await addWeek(weekObj)
    navigate('/home')
  }

  if (isLoading) {
    return <p>is Loading ...</p>
  }

  if (isError) {
    return <p>An Error has occurred. </p>
  }

  // if (data) {
  //   const meals = data.hits.map((item) => {
  //     const obj = {}
  //     obj.name = item.recipe.label
  //     obj.image = item.recipe.images

  //     obj.ingredients = item.recipe.ingredientLines
  //     return obj
  //   })

  const handleShowRecipeDetail = (index) => {
    setSelectedRecipeIndex(index)
  }
  const handleToggleSelection = (index) => {
    if (selectedItems.length >= 7 && !isMealSelected(index)) {
      return
    }

    const selectedIndex = selectedItems.indexOf(index)
    if (selectedIndex === -1) {
      setSelectedItems([...selectedItems, index])
    } else {
      const updatedSelection = [...selectedItems]
      updatedSelection.splice(selectedIndex, 1)
      setSelectedItems(updatedSelection)
    }
  }

  const isMealSelected = (index) => selectedItems.includes(index)
  const isSelectionFull = selectedItems.length >= 7

  const handleDetailClick = () => {
    setSelectedRecipeIndex(null) // closing detail view when detail is clicked
  }
  if (meals) {
    return (
      <>
        <div className="relative flex flex-col items-center justify-center">
          <div className="flex justify-center text-4xl">
            <h2 className="text-headingGreen">Pick Your Meals</h2>
          </div>
          <div className="mb-10 mt-2 flex justify-center">
            <h3>Choose up to seven meals</h3>
          </div>
          <div className="flex flex-col md:flex-row md:items-start md:justify-start">
            {/* Filter button on the extreme left */}
            <Button
              className="mb-12 md:mb-0 md:mr-4"
              onClick={() => handleFilter()}
            >
              Filter
            </Button>

            {/* Save button */}
            <Button className="mb-12" onClick={() => handleSave(meals)}>
              Save and See Your Week Plan
            </Button>
          </div>

          <div className="flex flex-wrap justify-start">
            {meals.map((meal, index) => (
              <div key={index} className="m-4 w-96">
                <div
                  className={`card card-compact relative h-64 cursor-pointer ${
                    isMealSelected(index)
                      ? 'border-buttonGreen border-2 '
                      : 'border-transparent'
                  } hover:shadow-buttonGreen bg-white shadow-sm hover:shadow-md ${isSelectionFull && !isMealSelected(index) ? 'opacity-50 hover:shadow-transparent' : ''}`}
                >
                  <figure onClick={() => handleShowRecipeDetail(index)}>
                    <img
                      className="ml-3 mt-3 h-40 w-64 rounded"
                      src={meal.image.REGULAR.url}
                      alt={meal.name}
                    />
                  </figure>
                  <div
                    className="card-body"
                    onClick={() => handleShowRecipeDetail(index)}
                  >
                    <h2 className="card-title">{meal.name}</h2>
                  </div>
                  <div className="absolute right-2 top-2">
                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <input
                          type="checkbox"
                          checked={isMealSelected(index)}
                          onChange={() => handleToggleSelection(index)}
                          className="checkbox-primary checkbox"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {isSelectionFull && (
            <div className="fixed left-0 top-0 w-full bg-red-500 py-2 text-center text-white opacity-90">
              You have selected seven meals. You cannot select more.
            </div>
          )}
          {selectedRecipeIndex !== null && (
            <div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-65"
              onClick={handleDetailClick}
            >
              <div className="z-10">
                <RecipeDetail
                  imageUrl={meals[selectedRecipeIndex].image.REGULAR.url}
                  recipeName={meals[selectedRecipeIndex].name}
                  ingredients={meals[selectedRecipeIndex].ingredients}
                />
              </div>
            </div>
          )}
        </div>
      </>
    )
  }
}
