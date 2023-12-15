import React from "react";
import Profile from "./Profile/Profile";
import "./Home.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Home() {
    return (
        <div className="home-container" id="Home">
            <Header />
            <Profile />
            <Footer />
            <></>
        </div>
    );
}
