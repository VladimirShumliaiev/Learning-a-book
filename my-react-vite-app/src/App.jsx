import "./App.css";

function App() {
  const list = [{ name: "Vasya" }, { name: "Petya" }, { name: "Misha" }];

  const list2 = [{ name: "Igor" }, { name: "Misha" }, "111", "2342"];

  const allList = [...list, ...list2];

  const x = (name, all) => [...all, { name }];

  console.log(x("Urasik", allList));
  console.log(allList);
  return <>O.REilLY-REACT Hello World</>;
}

export default App;
