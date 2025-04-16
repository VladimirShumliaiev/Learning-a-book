import { Route, Routes } from "react-router";
import "./App.css";
import ClockFromABook from "./components/ClockFromABook";
import Examples from "./components/Examples";
import Function from "./components/Function";
import Quiz from "./components/Quiz/Quiz";
import Test from "./components/Test/Test";

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
      <div>
        <Examples />
      </div>
      <Function />
      <Test />
      <br />
      <Quiz />
      <hr />
      <ClockFromABook />
    </>
  );
}

export default App;
