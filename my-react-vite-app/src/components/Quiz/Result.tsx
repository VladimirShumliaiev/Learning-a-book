import React, { FC } from 'react'

type ResultProps = {
  correct: number
}

const Result: FC<ResultProps> = (props) => {
    const {correct} = props
  return (
    <div>
        <h3></h3>
    </div>
  )
}

export default Result
