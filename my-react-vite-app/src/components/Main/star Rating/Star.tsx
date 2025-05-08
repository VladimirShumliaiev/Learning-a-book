import React from 'react'
import {FaStar} from 'react-icons/fa'

const Star = ({selectedStar = 0,setSelectedStar = f => f}) => {
  return (
    <div>
      <FaStar color={selectedStar ? 'blue' : 'grey'} onClick={() => setSelectedStar}/>
    </div>
  )
}

export default Star
