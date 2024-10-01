import "./App.css";

function App() {
  const test = (logger) => (message) => {
    logger(message + "!!!");
  };

  const x = test((m) => console.log(m));

  x("Hello World");
  x("TEST");

  return <>O.REilLY-REACT</>;
}

export default App;
