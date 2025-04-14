import React, { useState } from 'react'
import questionList from './questionList'

const Quiz = () => {
  const [step, setStep] = useState(0)
  const [correct, setCorrect] = useState(0)

  const question = questionList[step]

  const handleOnClickButton = (value: number) => {
      setStep(step + 1)

      if (value === question.correct) {
        setCorrect(correct + 1)
      }
  }

  
  return (
    <div>
      
    </div>
  )
}

export default Quiz
