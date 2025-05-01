import React, { useState } from 'react'
import Star from './Star'

const StarRating = ({totalStar = 5}) => {
    const [selected,setSelected] = useState(0)

    const newArray = (length) => [...Array(length)]

  return (
    <>
        <h2>
        {
            newArray(totalStar).map((n,i) => <Star key={i} selected={selected > i} onSelect={() => setSelected(i + 1)}/>)
        }

          <p>
            {selected} of {totalStar} star
        </p>
        </h2>

      
       
    </>
  )
}

export default StarRating
