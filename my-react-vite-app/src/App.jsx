import { Route, Routes } from "react-router";
import "./App.css";
import ClockFromABook from "./components/Main/Clock-from-a-book/ClockFromABook";
import Examples from "./components/Main/Example/Examples";
import Function from "./components/Main/Function/Function";
import Quiz from "./components/Main/Quiz/Quiz";
import Test from "./components/Main/Test1/Test";
import Layout from "./AppLayout/Layout";

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
      <Layout />
    </>
  );
}

export default App;
