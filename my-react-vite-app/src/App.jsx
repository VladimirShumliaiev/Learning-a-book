import "./App.css";

function App() {
  const frederick = {
    name: "Frederick",
    strong: true,
    fast: true,
  };

  const reFrederick = (person) => ({
    ...person,
    fas: false,
    stron: false,
  });
  console.log(reFrederick(frederick));
  console.log(frederick);
  return <>O.REilLY-REACT</>;
}

export default App;
