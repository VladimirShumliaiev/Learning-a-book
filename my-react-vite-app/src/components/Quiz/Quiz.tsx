import React, { useState } from 'react'
import Game from './Game'
import Result from './Result'
import questionList from './questionList'

const Quiz = () => {
  const [step, setStep] = useState(0)
  const [correct, setCorrect] = useState(0)

  const onClickVariant = (index: number) => {
      setStep(step + 1)

      if( index === question.correct) {
        setCorrect(correct + 1)
      }

  }

  const question = questionList[step]
  return (
    <div>
       { step !== questionList.length ? <Game onClickVariant={onClickVariant} question={question} /> : <Result correct={correct}/> }
    </div>
  )
}

export default Quiz
