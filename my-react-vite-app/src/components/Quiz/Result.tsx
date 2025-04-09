import React, { FC } from 'react'
import questionList from './questionList'

type ResultProps = {
  correct: number
}

const Result: FC<ResultProps> = (props) => {
  const {correct} = props

  return (
    <div>
        <h3>you {correct} answered of {questionList.length}  questions</h3>

        <a href="/"><button>new Game</button></a>
    </div>
  )
}

export default Result
