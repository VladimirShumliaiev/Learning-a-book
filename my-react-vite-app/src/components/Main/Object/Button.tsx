import React from 'react'

const Button = ({title,setDisplay,setTitle,children}) => {
  
  const handleButton = () => {
    setDisplay(title)
    setTitle('')
  }
      
  
  return (
    <div>
      <button onClick={handleButton}>{children}</button>
    </div>
  )
}

export default Button
