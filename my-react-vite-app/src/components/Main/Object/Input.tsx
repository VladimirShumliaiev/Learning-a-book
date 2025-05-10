import React from 'react'

const Input = ({title,setTitle}) => {
  return (
    <div>
      <input type="text" value={title} onChange={() => setTitle()} />
    </div>
  )
}

export default Input
