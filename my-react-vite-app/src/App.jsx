import "./App.css";

function App() {
  const insideFN = (logger) => logger("REACT");

  insideFN((message) => console.log(message));

  const createScream = function (logger) {
    return function (message) {
      logger(message.toUpperCase() + "!!");
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
