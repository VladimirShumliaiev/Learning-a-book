import React from 'react'
import {FaStar} from 'react-icons/fa'

const Star = ({selected = false,onSelect = f => f}) => {
  return (
    <>
      <FaStar color={selected ? 'blue' : 'grey'} onClick={onSelect}/>
    </>
  )
}

export default Star
