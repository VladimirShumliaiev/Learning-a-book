import questionList from "./questionList";

const Result = (correct) => {
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
