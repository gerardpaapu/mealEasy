import React from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

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

  const onDragEnd = (result) => {
    // TODO: Handle drag and drop logic
  }

  return (
    <div className="mb-4 mt-24">
      <div className="flex justify-center text-4xl">
        <h2>Your Week</h2>
      </div>
      <div className="ml-10">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="flex">
            {daysOfWeek.map((day, index) => (
              <Droppable droppableId={day} key={index}>
                {(provided) => (
                  <div
                    className="flex flex-col items-center"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    <div className="font-bold">{day}</div>
                    {getCurrentDayMeals(day).map((meal, mealIndex) => (
                      <Draggable
                        key={mealIndex}
                        draggableId={meal.name}
                        index={mealIndex}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <div
                              className="card card-side bg-base-100 shadow-xl"
                              style={{ maxWidth: '200px', margin: '8px' }}
                            >
                              <figure>
                                <img
                                  src={meal.image}
                                  alt={meal.name}
                                  style={{ maxWidth: '100%' }}
                                />
                              </figure>
                              <div className="card-body">
                                <h2 className="card-title">{meal.name}</h2>
                                <p>Some description about the meal</p>
                                <div className="card-actions justify-end">
                                  <button className="btn btn-primary">
                                    Recipe Details
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            ))}
          </div>
        </DragDropContext>
      </div>
    </div>
  )
}
