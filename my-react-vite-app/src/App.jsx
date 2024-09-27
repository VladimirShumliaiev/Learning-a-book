import "./App.css";

function App() {
  const test = (text) => text("abc");

  test((message) => console.log(message));

  const text = function (event) {
    return function (x) {
      event(x.toUpperCase() + "!!!");
    };
  };

  const title = text((message) => console.log(message));

  title("hello");
  title("hi");
  title("yo");

  return <>O.REilLY-REACT</>;
}

export default App;
