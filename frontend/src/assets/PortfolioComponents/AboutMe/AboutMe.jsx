import React, { useEffect } from "react";
import ScreenHeadings from "../../../utilities/ScreenHeadingComponent/ScreenHeadings";
import Animations from "../../../utilities/Animations";
import ScrollService from "../../../utilities/scrollService";
import "./AboutMe.css";

export default function AboutMe(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;

        Animations.animations.fadeInScreen(props.id);
    };

    const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const SCREEN_CONSTANTS = {
        description:
            "Full Stack Web and Mobile developer with background knowledge of MERN stack with Redux, Flutter - Dart along with a knack of building applications with utmost efficiency. Strong professional with increasing eagerness, aiming to contribute with his utmost performance",
        highlights: {
            bullets: [
                "Full Stack Web Development and Mobile Development",
                "Interactive Frontend as per the design",
                "Rigid and Scalable Backend",
                "Building REST API",
                "Managing Database",
                "Interest and Experience with AI / ML",
                "Deployed and Managed Microservices",
            ],
            heading: "Here are a few Highlights:",
        },
    };

    const renderHighlight = () => {
        return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
            <div className="highlight" key={i}>
                <div className="highlight-blob"></div>
                <span>{value}</span>
            </div>
        ));
    };

    return (
        <div
            className="about-me-container screen-container fade-in"
            id={props.id || ""}
        >
            <div className="about-me-parent">
                <ScreenHeadings
                    title={"About Me"}
                    subHeading={"Why Choose Me?"}
                />
                <div className="about-me-card">
                    <div className="about-me-profile"></div>
                    <div className="about-me-details">
                        <span className="about-me-description">
                            {SCREEN_CONSTANTS.description}
                        </span>
                        <div className="about-me-highlights">
                            <div className="highlight-heading">
                                <span>
                                    {SCREEN_CONSTANTS.highlights.heading}
                                </span>
                            </div>
                            {renderHighlight()}
                        </div>
                        <div className="about-me-options">
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
                </div>
            </div>
        </div>
    );
}
