import React from 'react'

const RecipeDetail = ({ imageUrl, recipeName, ingredients }) => (
  <div className="card w-96 cursor-pointer bg-white shadow-xl">
    <figure>
      <img className="mt-5 rounded" src={imageUrl} alt="Recipe" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{recipeName}</h2>
      <h3 className="font-bold">Ingredients:</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  </div>
)

export default RecipeDetail
