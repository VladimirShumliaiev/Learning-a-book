import React, { useState } from 'react'
import Star from './Star'

const StarRating = ({totalStar = 5}) => {
  const [selected,setSelected] = useState(0)

  const createArray = (length) => [...Array(length)]
  return (
    <>
      <h2>
        {createArray(totalStar).map((n,i) => <Star key={i} selected={selected > i} onSelect={() => setSelected(i + 1)}/>)}
      </h2>
    </>
  )
}

export default StarRating
