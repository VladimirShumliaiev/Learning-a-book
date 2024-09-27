import "./App.css";

function App() {
  const test = (text) => text("abc");

  test((m) => console.log(m));

  const createScream = function (logger) {
    return function (message) {
      logger(message.toUpperCase() + "!!!");
    };
  };

  const scream = createScream((message) => console.log(message));

  scream("React");
  scream("Redux");
  scream("JavaScript");
  scream("TypeScript");

  return <>O.REilLY-REACT</>;
}

export default App;
