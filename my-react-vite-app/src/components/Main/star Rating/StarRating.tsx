import React, { useState } from 'react'
import Star from './Star'

const StarRating = ({totalStar = 5}) => {
  const [selectedStar,setSelectedStar] = useState(0)
  const createArray = ({length}) => [...Array(length)]
  return (
    <div>
        {createArray(totalStar).map((n,i) => <Star key={i} selectedStar={selectedStar} setSelectedStar={setSelectedStar}/>)}
    </div>
  )
}

export default StarRating
