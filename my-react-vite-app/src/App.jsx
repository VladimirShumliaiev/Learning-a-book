import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  useEffect(() => {
    axios
  }, []);

  return <></>;
}

export default App;
