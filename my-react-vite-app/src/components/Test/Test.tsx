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

  const handleOnClickColor = (value: string) => {
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
        <button className={ color === '1' ? 'one-color' : ''} onClick={() => handleOnClickColor('1')}>one</button>
        <button className={ color === '2' ? 'one-color' : ''} onClick={() => handleOnClickColor('2')}>two</button>
        <button className={ color === '3' ? 'one-color' : ''} onClick={() => handleOnClickColor('3')}></button>
        <button className={ color === '4' ? 'one-color' : ''} onClick={() => handleOnClickColor('4')}></button>
        <button className={ color === '5' ? 'one-color' : ''} onClick={() => handleOnClickColor('5')}></button>
        <hr />
    </div>
  )
}

export default Test
