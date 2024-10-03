import "./App.css";

function App() {
  const frederick = {
    name: "Frederick",
    strong: true,
    fast: true,
  };

  const reFrederick = (person) => ({
    ...person,
    strong: false,
    fast: false,
  });

  console.log(frederick);
  console.log(reFrederick(frederick));
  return <>O.REilLY-REACT</>;
}

export default App;
