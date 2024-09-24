import "./App.css";

function App() {
  let lordify = ({ firstName }) => {
    return `${firstName} hello`;
  };

  let regularPerson = {
    firstName: "billy",
    lastName: "klichko",
  };

  return <>{lordify(regularPerson)}</>;
}

export default App;
