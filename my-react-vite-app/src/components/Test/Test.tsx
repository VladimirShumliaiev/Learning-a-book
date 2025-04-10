import React, { useState } from 'react'

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
        <h3>Counter</h3>
        <button onClick={handlePlus}>+</button>{' '}
        {counter}
        {' '}<button onClick={handleMinus}>-</button>

        <hr />
          <h3>Colors: </h3>
        <button className={color === '1' ? 'one' : ''} onClick={() => handleColors('1')}>1</button>
        <button className={color === '2' ? 'one' : ''} onClick={() => handleColors('1')}>2</button>
        <button className={color === '3' ? 'one' : ''}>3</button>
        <button className={color === '4' ? 'one' : ''}>4</button>
        <button className={color === '5' ? 'one' : ''}>5</button>

    </div>
  )
}

export default Test
