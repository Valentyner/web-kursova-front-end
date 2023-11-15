import React from 'react';
import Slider from "../components/Slider/Slider.jsx";
import NavBar from "../components/NavBar/NavBar.jsx";


const MainPage = () => {
    return (
        <>
        <NavBar/>
            <Slider />
            <div style={{ marginTop: "670px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus facilis quia culpa tempora et perspiciatis suscipit, ullam totam odit repellat! Iste eveniet quidem enim consectetur vitae? Atque sapiente ipsum enim.
            </div>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus facilis quia culpa tempora et perspiciatis suscipit, ullam totam odit repellat! Iste eveniet quidem enim consectetur vitae? Atque sapiente ipsum enim.
            </div>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus facilis quia culpa tempora et perspiciatis suscipit, ullam totam odit repellat! Iste eveniet quidem enim consectetur vitae? Atque sapiente ipsum enim.
            </div>
        </>

    );
};

export default MainPage;