import { useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  useEffect(() => {
    axios("https://randomuser.me/api").then((res) => console.log(res.data));
  });

  useEffect(() => {
    fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((json) => console.log(json));
  });
  return <>hello</>;
}

export default App;
