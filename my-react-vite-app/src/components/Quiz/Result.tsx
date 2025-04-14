import React, { FC } from 'react'
import questionList from './questionList'

type ResultProps = {
  correct: number
}

const Result: FC<ResultProps> = (props) => {
    const {correct} = props
  return (
    <div> 
        <h1>Congratulations:</h1>
        <h3>you answered {correct} of {questionList.length} questions</h3>
        <a href="/">New Game</a>
    </div>
  )
}

export default Result
