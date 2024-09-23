import "./App.css";

function App() {
  const one = (firstName = "oleg", lastName = "klichko") => {
    return `hello ${firstName} ${lastName}`;
  };
  return <>{one()}</>;
}

export default App;
