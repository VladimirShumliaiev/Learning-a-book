import React, { FC } from 'react'

type Question = {
    id: number
    title: string
    variants: string[]
    correct: number
}

type GamePros = {
   question: Question
   onClickVariant: (i: number) => void
}

const Game: FC<GamePros> = (props) => {
    const {question, onClickVariant} = props

    const list = question
  return (
    <div>
        {list.variants.map((e, index) => <li key={index}><button onClick={() => onClickVariant(index)}>{e}</button></li>)}
    </div>
  )
}

export default Game
