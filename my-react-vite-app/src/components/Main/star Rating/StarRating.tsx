import React, { useState } from 'react'
import Star from './Star'

const totalStar = 5

const StarRating = (totalStar) => {
  const [selectedStar,setSelectedStar] = useState(0)
  const createArray = (length) => [...Array(length)]
  return (
    <div>
        {createArray(totalStar).map((n,i) => <Star key={i} selected={selectedStar} onSelect/>)}
    </div>
  )
}

export default StarRating
