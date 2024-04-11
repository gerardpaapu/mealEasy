import React, { useState } from 'react'

export default function RecipeCardSml() {
  const [selectedMeal, setSelectedMeal] = useState(null)

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
  ]

  const handleSelectMeal = (index) => {
    setSelectedMeal(index)
  }

  return (
    <div className="flex flex-wrap justify-center">
      {meals.map((meal, index) => (
        <button
          key={index}
          onClick={() => handleSelectMeal(index)}
          className={`card card-compact m-4 w-96 bg-base-100 shadow-xl ${selectedMeal === index ? 'border-4 border-green-500' : ''}`}
        >
          <figure>
            <img className="h-40 w-64" src={meal.image} alt={meal.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{meal.name}</h2>
            <p>Some description about the meal goes here.</p>
          </div>
        </button>
      ))}
    </div>
  )
}
