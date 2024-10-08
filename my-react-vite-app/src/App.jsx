import "./App.css";

function App() {
  const list = [{ name: "Vasya" }, { name: "Petya" }, { name: "Misha" }];

  const list2 = [{ name: "Igor" }, { name: "misha" }, "111"];

  const all = [...list, ...list2];

  const x = (name, all) => [...all, { name }];

  console.log(x("urasik", all));
  console.log(all);
  return <>O.REilLY-REACT</>;
}

export default App;
