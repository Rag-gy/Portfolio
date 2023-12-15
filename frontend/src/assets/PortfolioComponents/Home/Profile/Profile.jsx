import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./Profile.css";
import ScrollService from "../../../../utilities/scrollService";

export default function Profile() {
    const [roles] = useTypewriter({
        words: [
            "Enthusiatic Dev",
            "Full Stack Developer",
            "Flutter/Dart Developer",
            "MERN Stack Developer",
            "SERN Stack Developer",
            "AI / ML Enthusiast",
        ],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 30,
    });

    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">
                            <a
                                href="https://www.instagram.com/raghul_k_"
                                target="None"
                            >
                                <i className="fa fa-instagram"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/raghul-prasanth-2033581b6/"
                                target="None"
                            >
                                <i className="fa fa-linkedin"></i>
                            </a>
                            <a
                                href="https://leetcode.com/raghul_k_/"
                                target="None"
                            >
                                <i className="fa fa-code"></i>
                            </a>
                            <a href="https://github.com/Rag-gy" target="None">
                                <i className="fa fa-github"></i>
                            </a>
                        </div>
                    </div>
                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello , I'm{" "}
                            <span className="highlighted-text">
                                Raghul Prasanth
                            </span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                                {" "}
                                {roles}
                                <span>
                                    <Cursor
                                        cursorColor="#ff5823"
                                        cursorStyle="<"
                                    />
                                </span>
                            </h1>
                            <span className="profile-role-tagline">
                                Crafting apps and softwares to Perfection
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                        <button
                            className="btn primary-btn"
                            onClick={() =>
                                ScrollService.scrollHandler.scrollToHireMe()
                            }
                        >
                            {""}
                            Hire Me{" "}
                        </button>
                        <a
                            href="Raghul_Prasanth.pdf"
                            download="Raghul_Prasanth.pdf"
                        >
                            <button className="btn highlighted-btn">
                                Get Resume
                            </button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background"></div>
                </div>
            </div>
        </div>
    );
}
