import React, { useState } from 'react'

const Quiz = () => {
  const [step, setStep] = useState(0)
  const [correct, setCorrect] = useState(0)
  return (
    <div>
      <Game />
    </div>
  )
}

export default Quiz
