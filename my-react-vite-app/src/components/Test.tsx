import React, { useState } from 'react'

const Test = () => {
  const [counter, setCounter] = useState(0)

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


  return (
    <div>
        <h3>Counter</h3>
        <button onClick={handlePlus}>+</button>{' '}
        {counter}
        {' '}<button onClick={handleMinus}>-</button>
    </div>
  )
}

export default Test
