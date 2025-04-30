import React from 'react'
import {FaStar} from 'react-icons/fa'

const Star = ({selected,onSelect = f => f}) => {
  return (
    <>
       <FaStar color={selected ? 'blue' : 'gray'} onClick={onSelect}/>
    </>
  )
}

export default Star
