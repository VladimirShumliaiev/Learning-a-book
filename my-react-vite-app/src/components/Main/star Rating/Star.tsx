import React from 'react'
import {FaStar} from 'react-icons/fa'

const Star = ({selectedStar = false,onSelect = f => f}) => {
  return (
    <>
      <FaStar color={selectedStar ? 'blue' : 'grey'} onClick={onSelect}/>
    </>
  )
}

export default Star
