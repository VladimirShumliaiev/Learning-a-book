import "./App.css";

function App() {
  const list = [{ name: "Vasya" }, { name: "Petya" }, { name: "Misha" }];

  const list2 = [{ name: "Igor" }, { name: "Mishany" }, "111", "2342"];

  const allList = [...list, ...list2];

  const x = (name, all) => [...all, { name }];

  console.log(x("Gora", list));
  console.log(x("Gora", list2));
  console.log(x("Gora", allList));
  console.log(allList);

  return <>O.REilLY-REACT Hello World</>;
}

export default App;
