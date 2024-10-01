import "./App.css";

function App() {
  const list = [{ title: "1" }, { title: "2" }, { title: "3" }];

  const add2 = (title, list) => [...list, { title }];

  console.log(add2("four", list).length);
  console.log(list.length);

  return <>O.REilLY-REACT</>;
}

export default App;
