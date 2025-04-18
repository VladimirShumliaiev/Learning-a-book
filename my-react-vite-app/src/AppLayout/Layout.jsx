import React from "react";
import { Route, Routes } from "react-router";
import LayoutApp from "./LayoutApp";
import Home from "../components/Main/HomePage/Home";
import Examples from "../components/Main/Example/Examples";
import Quiz from "../components/Main/Quiz/Quiz";
import Test from "../components/Main/Test1/Test";
import Objects from "../components/Main/Object/Objects";
import Function from "../components/Main/Function/Function";
import ClockFromABook from "../components/Main/Clock-from-a-book/ClockFromABook";

const Layout = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutApp />}>
          <Route index element={<Home />} />
          <Route path="example" element={<Examples />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="test" element={<Test />} />
          <Route path="object" element={<Objects />} />
          <Route path="function" element={<Function />} />
          <Route path="clock" element={<ClockFromABook />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Layout;
