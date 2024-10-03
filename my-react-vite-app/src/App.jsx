import "./App.css";

function App() {
  const x = (logo) => (message) => {
    logo(console.log(message.toUpperCase() + "!!!"));
  };

  const a = x((message) => console.log(message));

  a("asdasdsad");
  b("asdsad");
  return <>O.REilLY-REACT</>;
}

export default App;
