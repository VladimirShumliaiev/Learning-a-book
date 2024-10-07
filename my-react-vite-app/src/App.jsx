import "./App.css";

function App() {
  const list = [{ name: "vasya" }, { name: "petya" }, { name: "misha" }];

  const list2 = [{ name: "igor" }, { name: "misha" }, "111"];

  const all = [...list, ...list2];

  const x = (name, all) => [...all, { name }];

  console.log(x("ura", all));
  console.log(all);
  return <>O.REilLY-REACT</>;
}

export default App;
