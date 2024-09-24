import "./App.css";

function App() {
  const name = ["billy", "willy"];

  const nameTwo = ["alex", "petya"];

  const allName = [...name, ...nameTwo];

  const test = [...allName, "xxx"];

  console.log(test.join(","));

  return <></>;
}

export default App;
