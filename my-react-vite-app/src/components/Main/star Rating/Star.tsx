import React from 'react'
import {FaStar} from 'react-icons/fa'

const Star = ({selected = false,onSelected = f => f}) => {
  return (
    <>
        <FaStar color={selected ? 'blue' : 'gray'} onClick={onSelected}/>
    </>
  )
}

export default Star
