import React, { useState } from 'react'

const StarRating = (totalStar) => {
  const [starRating,setStarRating] = useState(0)

  const createArray = (length) => [...Array(length)]
  return (
    <div>
        {
          createArray(totalStar).map(() => )
        }
    </div>
  )
}

export default StarRating
