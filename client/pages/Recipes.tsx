import { useState } from 'react'
import RecipeCardMedium from '../components/RecipeCardMedium'

function Recipe() {
  const [input, setInput] = useState('')

  function handleChange(e: { target: { value: SetStateAction<string> } }) {
    setInput(e.target.value)
  }

  return (
    <div>
      <div></div>
      <div className="flex h-full items-center">
        <div className="mb-4 ml-16">
          <input
            onChange={handleChange}
            className="mt-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 focus:border-indigo-500 focus:outline-none"
            placeholder="Input your ingredients"
            value={input}
          />
          <RecipeCardMedium input={input} setInput={setInput} />
        </div>
      </div>
    </div>
  )
}

export default Recipe
