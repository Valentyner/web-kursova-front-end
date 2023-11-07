import Navbar from "./components/NavBar/NavBar.jsx";
import "../src/main.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import TenderPage from "./pages/TenderPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tender" element = {<TenderPage/>}/>
      </Routes>
    </>
  );
}

export default App;
