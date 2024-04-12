import React from 'react'

const meals = [
  {
    name: 'Butter Chicken',
    image:
      'https://img.taste.com.au/sL0izJWj/w643-h428-cfill-q90/taste/2016/11/butter-chicken-101831-1.jpeg',
    day: 'Sunday',
  },
  {
    name: 'Spaghetti Carbonara',
    image:
      'https://hips.hearstapps.com/hmg-prod/images/carbonara-index-6476367f40c39.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*',
    day: 'Thursday',
  },

  {
    name: 'Sushi',
    image:
      'https://img.taste.com.au/3mYHXsD_/taste/2016/11/sushi-for-kids-81300-1.jpeg',
    day: 'Wednesday',
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
    day: 'Monday',
  },
  {
    name: 'Spaghetti Carbonara',
    image:
      'https://hips.hearstapps.com/hmg-prod/images/carbonara-index-6476367f40c39.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*',
    day: 'Tuesday',
  },
]

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

  const getCurrentDayMeals = (day) => {
    return meals.filter((meal) => meal.day === day)
  }

  return (
    <div className="mb-4 mt-24">
      <div className="flex justify-center text-4xl">
        <h2>Your Week</h2>
      </div>
      <div className="ml-10 flex flex-col gap-4">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="flex items-center">
            <div className="mr-2 font-bold">{day}</div>
            <div
              className="card card-side bg-base-100 shadow-xl"
              style={{ maxWidth: '200px' }}
            >
              <figure>
                <img
                  src={getCurrentDayMeals(day)?.image}
                  alt={getCurrentDayMeals(day)?.name}
                  style={{ maxWidth: '100%' }}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{getCurrentDayMeals(day)?.name}</h2>
                <p>Some description about the meal</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Recipe Details</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
