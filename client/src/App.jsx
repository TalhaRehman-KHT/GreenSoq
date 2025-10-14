import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Header/Navbar/NavBar.jsx";
import Cover from "./Components/Coverimg/Cover.jsx";
import Card from "./Components/Cards/Card.jsx";
import Collection from "./Components/Collection/Collection.jsx";
import IndoorPlants from "./Components/IndoorPlants/IndoorPlants.jsx";
import Outdoor from "./Components/Outdoor/Outdoor.jsx";
import NewArrival from "./Components/NewArrival/NewArrival.jsx";
import Gardening from "./Components/GardeningAccesories/Gardening.jsx";
import Pots from "./Components/Pots&Planters/Pots.jsx";
import Soil from "./Components/Soil&Fetilizers/Soil.jsx";
import News from "./Components/News/News.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Login from "./Components/Register/Login.jsx";
import Register from "./Components/Register/Register.jsx";
import Fav from "./Components/favurite/Fav.jsx";

export default function App() {
    return (
        <Router>
            <NavBar />

            <Routes>
                {/* ✅ Login Page */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/fav" element={<Fav />} />

                {/* ✅ Home Page */}
                <Route
                    path="/"
                    element={
                        <>
                            <Cover />
                            <Card />
                            <Collection />
                            <IndoorPlants />
                            <Outdoor />
                            <NewArrival />
                            <Gardening />
                            <Pots />
                            <Soil />
                            <News />
                            <Footer />
                        </>
                    }
                />
            </Routes>
        </Router>
    );
}
