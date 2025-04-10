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


  return (
    <div>
        <h3>Counter</h3>
        <button onClick={handlePlus}>+</button>{' '}
        {counter}
        {' '}<button onClick={handleMinus}>-</button>

        <hr />
          <h3>Colors: </h3>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>

    </div>
  )
}

export default Test
