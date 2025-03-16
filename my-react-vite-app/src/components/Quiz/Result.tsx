import React, { FC } from "react";
import questionList from "./questionList";
import {Link, NavLink, Route, Routes} from 'react-router-dom'


type ResultProps = {
  correct: number
}

const Result: FC<ResultProps> = (props) => {
  const { correct } = props
  return (
    <div>
      <img
        src="https://www.invictory.org/articles/wp-content/uploads/sites/3/2017/11/say-yes-to-the-live-2121044_1920-715x400.jpg"
        alt=""
      />
      <h3>
        you answered {correct} of {questionList.length} questions
      </h3>
    <a href="/">new Game</a>
    
    </div>
  );
};

export default Result;
