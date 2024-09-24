import { useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const num = [1, 2, 3, 4, 5];
  const str = ["a", "b", "c"];

  const all = [...num, ...str];
  console.log(all, num, str);

  const obj = {
    one: 1,
    two: 2,
  };

  const obj2 = {
    three: 3,
    four: 4,
  };

  const a = 5;

  const objAll = {
    ...obj,
    ...obj2,
    a,
  };

  console.log(objAll);
  return <>hello</>;
}

export default App;
