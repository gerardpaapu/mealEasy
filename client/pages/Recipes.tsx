import { useState } from 'react'
import RecipeCardMedium from '../components/RecipeCardMedium'

function Recipe() {
  return (
    <div>
      <div></div>
      <div className="flex h-full items-center">
        <div className="mb-4 ml-16">
          <RecipeCardMedium />
        </div>
      </div>
    </div>
  )
}

export default Recipe
