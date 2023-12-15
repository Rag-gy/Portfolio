import React from "react";
import curve from "../../Home/curve.png";
import "./Footer.css";

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-parent">
                <img src={curve} alt="No internet available" />
            </div>
        </div>
    );
}
