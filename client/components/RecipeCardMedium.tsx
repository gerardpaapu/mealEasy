import React, { useState } from 'react'

export default function RecipeCardMedium() {
  const [selectedItems, setSelectedItems] = useState([])

  const meals = [
    {
      name: 'Butter Chicken',
      image:
        'https://img.taste.com.au/sL0izJWj/w643-h428-cfill-q90/taste/2016/11/butter-chicken-101831-1.jpeg',
    },
    {
      name: 'Spaghetti Carbonara',
      image:
        'https://hips.hearstapps.com/hmg-prod/images/carbonara-index-6476367f40c39.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*',
    },
    {
      name: 'Sushi',
      image:
        'https://img.taste.com.au/3mYHXsD_/taste/2016/11/sushi-for-kids-81300-1.jpeg',
    },
    {
      name: 'Butter Chicken',
      image:
        'https://img.taste.com.au/sL0izJWj/w643-h428-cfill-q90/taste/2016/11/butter-chicken-101831-1.jpeg',
    },
    {
      name: 'Spaghetti Carbonara',
      image:
        'https://hips.hearstapps.com/hmg-prod/images/carbonara-index-6476367f40c39.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*',
    },
    {
      name: 'Sushi',
      image:
        'https://img.taste.com.au/3mYHXsD_/taste/2016/11/sushi-for-kids-81300-1.jpeg',
    },
    {
      name: 'Butter Chicken',
      image:
        'https://img.taste.com.au/sL0izJWj/w643-h428-cfill-q90/taste/2016/11/butter-chicken-101831-1.jpeg',
    },
    {
      name: 'Spaghetti Carbonara',
      image:
        'https://hips.hearstapps.com/hmg-prod/images/carbonara-index-6476367f40c39.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*',
    },
    {
      name: 'Sushi',
      image:
        'https://img.taste.com.au/3mYHXsD_/taste/2016/11/sushi-for-kids-81300-1.jpeg',
    },
  ]

  const handleSelectMeal = (index) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter((item) => item !== index))
    } else if (selectedItems.length < 7) {
      setSelectedItems([...selectedItems, index])
    }
  }

  const isMealSelected = (index) => selectedItems.includes(index)
  const isSelectionFull = selectedItems.length >= 7

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="flex flex-wrap justify-start">
        {meals.map((meal, index) => (
          <button
            key={index}
            onClick={() => handleSelectMeal(index)}
            className={`card card-compact relative m-4 w-96 bg-base-100 bg-white shadow-xl ${
              isMealSelected(index) ? 'border-4 border-green-500' : ''
            } ${isSelectionFull && !isMealSelected(index) ? 'opacity-50' : ''}`}
          >
            {isMealSelected(index) && (
              <div className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full border-green-500">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox-primary checkbox"
                    />
                  </label>
                </div>
              </div>
            )}
            <figure>
              <img
                className="ml-3 mt-3 h-40 w-64 rounded"
                src={meal.image}
                alt={meal.name}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{meal.name}</h2>
              <p>Some description about the meal goes here.</p>
            </div>
          </button>
        ))}
      </div>
      {isSelectionFull && (
        <div className="fixed left-0 top-0 w-full bg-red-500 py-2 text-center text-white">
          You have selected seven meals. You cannot select more.
        </div>
      )}
    </div>
  )
}
