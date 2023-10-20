import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AmdHero from "./components/BrandHero/AmdHero";

function App() {
  return (
    <>
      <Navbar />
      {/* <AmdHero /> */}
      <Outlet />
    </>
  );
}

export default App;
