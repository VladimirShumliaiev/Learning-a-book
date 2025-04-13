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
        <button className={ color === '1' ? 'one-color' : ''} onClick={() => handleOnClickColor('1')}>one</button>{' '}
        <button className={ color === '2' ? 'two-color' : ''} onClick={() => handleOnClickColor('2')}>two</button>{' '}
        <button className={ color === '3' ? 'three-color' : ''} onClick={() => handleOnClickColor('3')}>three</button>{' '}
        <button className={ color === '4' ? 'four-color' : ''} onClick={() => handleOnClickColor('4')}>four</button>{' '}
        <button className={ color === '5' ? 'five-color' : ''} onClick={() => handleOnClickColor('5')}>five</button>
        <hr />
    </div>
  )
}

export default Test
