import "../App.css";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import { Outlet } from "react-router";

const LayoutApp = () => {
  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
      <div className="Nav">
        <NavBar />
      </div>
      <div className="Main">
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutApp;
