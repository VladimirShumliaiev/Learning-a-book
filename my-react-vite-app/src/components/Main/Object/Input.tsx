import React from 'react'

const Input = ({title,setTitle}) => {

  const handleInput = (e) => {
    setTitle(e.target.value)
  }
  return (
    <div>
      <input type="text" value={title} onChange={handleInput} />
    </div>
  )
}

export default Input
