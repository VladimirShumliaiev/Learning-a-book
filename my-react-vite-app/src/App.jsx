import "./App.css";

function App() {
  const obj = {
    message: "hello world,hello world",
    log(message) {
      console.log(message);
    },
  };

  obj.log(obj.message);

  return <>Hello World!!!</>;
}

export default App;
