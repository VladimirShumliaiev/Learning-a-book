import React from 'react'
import {FaStar} from 'react-icons/fa'

const Star = ({selectedStar = false,onSelected = f => f}) => {
  return (
    <div>
      <FaStar color={selectedStar ? 'blue' : 'grey'} onClick={() => onSelected}/>
    </div>
  )
}

export default Star
