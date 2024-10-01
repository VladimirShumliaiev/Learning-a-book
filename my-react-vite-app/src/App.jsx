import "./App.css";

function App() {
  const arr = [{ text: "a" }, { text: "b" }, { text: "c" }];

  const add = (text, arr) => [...arr, { text }];

  console.log(add("d", arr).length);
  console.log(add.length);

  return <>O.REilLY-REACT</>;
}

export default App;
