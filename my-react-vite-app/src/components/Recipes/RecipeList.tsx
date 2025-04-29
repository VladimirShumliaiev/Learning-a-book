import React from 'react'
import data from './data.js'
import Recipe from './Recipe.js'

const RecipeList = () => {
  return (
    <div>
        {
          data.map((recipe, i) => <Recipe key={i} {...recipe}/>)
        }
    </div>
  )
}

export default RecipeList

