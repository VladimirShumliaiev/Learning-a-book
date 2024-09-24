import { useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/todos").then((response) =>
      console.log(response.data)
    );
  }, []);

  return <>hello</>;
}

export default App;
