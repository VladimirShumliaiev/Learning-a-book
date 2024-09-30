import "./App.css";

function App() {
  const test = (text) => text("abc");

  test((message) => console.log(message));

  const text = function (event) {
    return function (x) {
      event(x.toLowerCase() + "!!!");
    };
  };

  const title = text((message) => console.log(message));

  title("HELLO WoRLD");
  title("HI");
  title("YO");

  return <>O.REilLY-REACT</>;
}

export default App;
