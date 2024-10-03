import "./App.css";

function App() {
  const list = [{ name: "vasya" }, { name: "petya" }, { name: "misha" }];

  const x = (name, list) => [...list, { name }];

  console.log(x("ura", list));
  console.log(list);
  return <>O.REilLY-REACT</>;
}

export default App;
