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

  const list = question
  return (
    <div>
        <h3>{list.title}</h3>
        {list.variants.map((e, index) => <li key={index}><button onClick={() => handleOnClickButton(index)}>{e}</button></li>)}
    </div>
  )
}

export default Game
