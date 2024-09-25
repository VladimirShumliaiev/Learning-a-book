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

  const obj = {
    one: "one",
    two: "two",
  };

  const obj2 = {
    three: "three",
    four: "four",
  };

  const all = {
    ...obj,
    ...obj2,
  };

  console.log(all, obj, obj2);
  return <>Hello World!!!</>;
}

export default App;
