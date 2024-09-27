import "./App.css";

function App() {
  const test = (text) => text("abc");

  test((message) => console.log(message));

  const text = function (e) {
    return function (b) {
      e(b.toUpperCase() + "!!!");
    };
  };

  const scream = text((message) => console.log(message));

  scream("React");
  scream("JavaScript");
  scream("123");

  return <>O.REilLY-REACT</>;
}

export default App;
