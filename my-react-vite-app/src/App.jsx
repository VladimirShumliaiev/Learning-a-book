import "./App.css";

function App() {
  const obj = {
    one: "1",
    two: "2",
  };

  const obj2 = {
    four: "4",
  };

  const three = "3";

  const all = {
    ...obj,
    three,
    ...obj2,
  };

  console.log(all);
  console.log(obj);
  console.log(obj2);

  return <></>;
}

export default App;
