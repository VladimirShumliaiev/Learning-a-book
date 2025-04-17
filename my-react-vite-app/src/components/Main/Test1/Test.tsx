import React, { useState } from 'react'
import './Test.css'

const Test = () => {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState('')

  const handleCountPlus = () => {
      setCount(count + 1)

        if (count >= 5) {
          setCount(0)
        }
  }

  
  const handleCountMinus = () => {
    setCount(count - 1)

      if (count <= -5) {
        setCount(0)
      }
}

const handleColor = (value) => {
  setColor(value)
}
  return (
    <div>
      <h3>Counter:</h3>
        <button onClick={handleCountMinus}>-</button>{' '}
        {count}
        {' '}<button onClick={handleCountPlus}>+</button>
        <hr />
        <h3>Active color:</h3>
        <button className={color === 'one' ? 'one-color' : ''} onClick={() => handleColor('one')}>1</button>
        <button className={color === 'two' ? 'two-color' : ''} onClick={() => handleColor('two')}>2</button>
        <button className={color === 'three' ? 'three-color' : ''} onClick={() => handleColor('three')}>3</button>
        <button className={color === 'four' ? 'four-color' : ''} onClick={() => handleColor('four')}>4</button>
        <button className={color === 'five' ? 'five-color' : ''} onClick={() => handleColor('five')}>5</button>
    </div>
  )
}

export default Test
