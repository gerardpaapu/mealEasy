import React from 'react'

const RecipeDetail = ({ imageUrl, recipeName }) => (
  <div className="card w-96 bg-white shadow-xl">
    <figure>
      <img src={imageUrl} alt="Recipe" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{recipeName}</h2>
      <p>More details</p>
    </div>
  </div>
)

export default RecipeDetail
