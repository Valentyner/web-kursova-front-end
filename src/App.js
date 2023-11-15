import "../src/css/main.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import Home from "./pages/HomePage/Home.jsx";
import TenderPage from "./pages/TenderPage.jsx";
import MakeTender from "./pages/MakeTender/MakeTender.jsx";
import MainPage from "./pages/MainPage.jsx";
import Registration from "./pages/Registration/Registration.jsx";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAuthMe } from "./redux/slices/auth.js";
import Regulatory from "./pages/Regulatory/Regulatory.jsx";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuthMe())
  }, [])
  return (
    <>
      <Routes>
        <Route path="/tenders" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tender/:id" element={<TenderPage />} />
        <Route path="/create-tender" element={<MakeTender />} />
        <Route path="/" element={<MainPage/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/regulatory" element={<Regulatory/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
      </Routes>
    </>
  );
}

export default App;
