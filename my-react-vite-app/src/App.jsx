import { Route, Routes } from "react-router";
import "./App.css";
import Examples from "./components/Examples";
import Function from "./components/Function";
import Quiz from "./components/Quiz/Quiz";

function App() {
  // const list = [{ name: "Vasya" }, { name: "Petya" }, { name: "Misha" }];

  // const list2 = [{ name: "Igor" }, { name: "Misha" }, "1115", "23425"];

  // const allList = [...list, ...list2];

  // const x = (name, all) => [...all, { name }];

  // console.log(x("jora", list));
  // console.log(x("jora", list2));
  // console.log(x("jora", allList));
  // console.log(allList);

  return (
    <>
      O.REilLY-REACT Hello World
      <Examples />
      <Function />
      <Quiz />
    </>
  );
}

export default App;
