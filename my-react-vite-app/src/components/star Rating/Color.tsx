import React from 'react'
import StarRating from './StarRating'
import { FaTrash } from 'react-icons/fa'

const Color = ({title, color, rating, id, onRemove = f => f, onRate = f => f}) => {
  return (
    <section>
        <h1>{title}</h1>
        <button onClick={() => onRemove(id)}>
            <FaTrash/>
        </button>
        <div style={{height: 50, backgroundColor: color}}/>
        <StarRating selectedStar={rating} onRate={rating => onRate(id, rating)}/>
    </section>
  )
}

export default Color
