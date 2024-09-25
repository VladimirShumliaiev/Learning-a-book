import "./App.css";

function App() {
  const insideFN = (logger) => logger("REACT");

  insideFN((message) => console.log(message));

  return <>O.REilLY-REACT</>;
}

export default App;
