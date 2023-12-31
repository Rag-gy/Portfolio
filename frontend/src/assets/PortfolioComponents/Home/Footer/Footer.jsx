import React from "react";
import "./Footer.css";
import ScrollService from "../../../../utilities/scrollService";
export default function Footer() {
    return (
        <div className="scroll-container">
            <button
                className="btn-scroll"
                onClick={() => ScrollService.scrollHandler.scrollToMain()}
            >
                {" "}
                <i className="fa fa-arrow-up"></i>
            </button>
        </div>
    );
}
