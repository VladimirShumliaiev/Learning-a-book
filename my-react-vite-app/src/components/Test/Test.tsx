import React, { useState } from 'react'
import './Test.css'

const Test = () => {
  const [counter, setCounter] = useState(0)
  const [color, setColor] = useState('')

  const handlePlus = () => {
    setCounter(counter + 1)

    if (counter >= 5) {
      setCounter(0)
    }
  }

  const handleMinus = () => {
    setCounter(counter - 1)

    if (counter <= -5) {
      setCounter(0)
    }
  }

  const handleColors = (value: string) => {
      setColor(value)
  }


  return (
    <div>
      <hr />
        <h3>Counter:</h3>
        <button onClick={handlePlus}>+</button>{' '}
        {counter}
        {' '}<button onClick={handleMinus}>-</button>

        <hr />
          <h3>Colors: </h3>
        <button className={color === '1' ? 'one-color' : ''} onClick={() => handleColors('1')}>1</button>
        <button className={color === '2' ? 'two-color' : ''} onClick={() => handleColors('2')}>2</button>
        <button className={color === '3' ? 'three-color' : ''} onClick={() => handleColors('3')}>3</button>
        <button className={color === '4' ? 'four-color' : ''} onClick={() => handleColors('4')}>4</button>
        <button className={color === '5' ? 'five-color' : ''} onClick={() => handleColors('5')}>5</button>
        <hr />
    </div>
  )
}

export default Test
