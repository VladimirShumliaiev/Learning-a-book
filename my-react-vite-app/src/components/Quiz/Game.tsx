import React, { FC } from 'react'

type Question = {
  id: number
  title: string
  variants: string[]
  correct: number
}

type GameProps = {
  question: Question
  handleOnClickButton: (value: number) => void
}

const Game: FC<GameProps> = (props) => {
  const {question, handleOnClickButton} = props
  return (
    <div>
        <h3>{}</h3>
    </div>
  )
}

export default Game
