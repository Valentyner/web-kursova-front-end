import "../src/css/main.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import Home from "./pages/HomePage/Home.jsx";
import TenderPage from "./pages/TenderPage.jsx";
import MakeTender from "./pages/MakeTender.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import MainPage from "./pages/MainPage.jsx";
import Registration from "./pages/Registration/Registration.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/tenders" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tender/:id" element={<TenderPage />} />
        <Route path="/create-tender" element={<MakeTender />} />
        <Route path="/" element={<MainPage/>}/>
        <Route path="/registration" element={<Registration/>}/>
      </Routes>
    </>
  );
}

export default App;
