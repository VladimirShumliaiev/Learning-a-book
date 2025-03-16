const Game = (question, onClickVariants) => {
  return (
    <div>
      <h3>{question.title}</h3>
      {question.variants.map((e, index) => (
        <li key={index}>
          <button onClick={() => onClickVariants[index]}>{e}</button>
        </li>
      ))}
    </div>
  );
};

export default Game;
