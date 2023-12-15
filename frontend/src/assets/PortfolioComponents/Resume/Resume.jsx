import React, { useEffect, useState } from "react";
import ScreenHeadings from "../../../utilities/ScreenHeadingComponent/ScreenHeadings";
import ScrollService from "../../../utilities/scrollService";
import Animations from "../../../utilities/Animations";
import codingIcon from "../../Info/coding.svg";
import educationIcon from "../../Info/education.svg";
import experienceIcon from "../../Info/experience.svg";
import interestIcon from "../../Info/interest.svg";
import projectIcon from "../../Info/project.svg";
import "./Resume.css";

function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;

        Animations.animations.fadeInScreen(props.id);
    };

    const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const ResumeHeading = (props) => {
        return (
            <div className="resume-heading">
                <div>
                    <div className="resume-main-heading">
                        <div>
                            <div className="heading-bullet" />
                            <span>{props.heading ? props.heading : ""}</span>
                        </div>
                        {props.fromDate && props.toDate ? (
                            <div className="heading-date">
                                {props.fromDate + " -- " + props.toDate}
                            </div>
                        ) : (
                            <div />
                        )}
                    </div>
                    <div className="resume-sub-heading">
                        <span>{props.subHeading ? props.subHeading : ""}</span>
                    </div>
                    <div className="resume-heading-description">
                        <span>
                            {props.description ? props.description : ""}
                        </span>
                    </div>
                </div>
            </div>
        );
    };

    const resumeBullets = [
        { label: "Education", logoSrc: "education" },
        { label: "Experience", logoSrc: "experience" },
        { label: "Programming Skills", logoSrc: "coding" },
        { label: "Projects", logoSrc: "projects" },
        { label: "Interests", logoSrc: "interest" },
    ];

    const infoIcons = {
        education: educationIcon,
        experience: experienceIcon,
        coding: codingIcon,
        projects: projectIcon,
        interest: interestIcon,
    };

    const programmingSkillDetails = [
        { skill: "Python", ratingPercentage: 75 },
        { skill: "JavaScript", ratingPercentage: 70 },
        { skill: "ReactJs", ratingPercentage: 70 },
        { skill: "Express JS", ratingPercentage: 80 },
        { skill: "NodeJS", ratingPercentage: 75 },
        { skill: "Mongo DB", ratingPercentage: 70 },
        { skill: "SQL", ratingPercentage: 80 },
        { skill: "Flutter / Dart", ratingPercentage: 70 },
        { skill: "Flask", ratingPercentage: 70 },
    ];

    const projectDetails = [
        {
            title: "Smart Surveillance Project using ML",
            duration: { fromDate: "2020", toDate: "2021" },
            description:
                "Efficient and Advanced approach to surveillance and threat prevention using Google Mediapipe and Cloud data transmission for immediate actions",
            subHeading: "Technologies Used: Google Mediapipe, Cloudinary",
        },
        {
            title: "Real Time Modern Chat Application",
            duration: { fromDate: "2021", toDate: "2022" },
            description:
                "A real-time chat application built using MERN stack and Websocket with modern features like Notifications, Read and many more",
            subHeading:
                "Technologies Used: Mongo DB, Express Js, React Js, Node Js, Redux, Bootstrap, Cloudinary",
        },
        {
            title: "Amazon Clone",
            duration: { fromDate: "2022", toDate: "2023" },
            description:
                "A real clone of Amazon E-commerce site with all the features including Payment features and Mailing systems",
            subHeading:
                "Technologies Used: SQL, Express Js, React Js, Node Js, Redux, Tailwind CSS",
        },
    ];

    const resumeDetails = [
        <div className="resume-screen-container" key="education">
            <ResumeHeading
                heading={"Kongu Engineering College, Erode"}
                subHeading={"Bachelor OF Mechatronics Engineering"}
                fromDate={"2020"}
                toDate={"2024"}
            />

            <ResumeHeading
                heading={"Infant Jesus Matric. Hr. Sec. School, Tiruppur"}
                subHeading={"Higher Secondary Education"}
                fromDate={"2018"}
                toDate={"2020"}
            />

            <ResumeHeading
                heading={"St. Joseph's, Tiruppur"}
                subHeading={"Primary & Secondary Education"}
                fromDate={"2004"}
                toDate={"2018"}
            />
        </div>,
        <div className="resume-screen-container" key="work-experience">
            <ResumeHeading
                heading={"FourKites"}
                subHeading={"Software Developer Intern"}
                fromDate={"2023"}
                toDate={"Present"}
            />
            <div className="experience-desciption">
                <span className="resume-decription-text">
                    Currently working as an Android and Software Developer
                    Intern
                </span>
            </div>
            <div className="experience-desciption">
                <span className="resume-description-text">
                    - Developed Facial Recognition Authentication from scratch
                    for the mobile application.
                </span>
                <br />
                <span className="resume-description-text">
                    - Developed SSO for the mobile application for easier and
                    secure user login.
                </span>
                <br />
                <span className="resume-description-text">
                    - Optimised Database queries for faster and efficient data
                    accessing and data related operations.
                </span>
                <br />
                <span className="resume-description-text">
                    - I perform automation for every feature I developed in both
                    the frontend and backend.
                </span>
                <br />
            </div>
        </div>,
        <div
            className="resume-screen-container programming-skills-container"
            key="programming-skills"
        >
            {programmingSkillDetails.map((skill, index) => (
                <div className="skill-parent" key={index}>
                    <div className="heading-bullet"></div>
                    <span>{skill.skill}</span>
                    <div className="skill-percentage">
                        <div
                            style={{ width: skill.ratingPercentage + "%" }}
                            className="active-percentage-bar"
                        ></div>
                    </div>
                </div>
            ))}
        </div>,
        <div className="resume-screen-container" key="projects">
            {projectDetails.map((project, index) => (
                <ResumeHeading
                    key={index}
                    heading={project.title}
                    subHeading={project.subHeading}
                    description={project.description}
                    fromDate={project.duration.fromDate}
                    toDate={project.duration.toDate}
                />
            ))}
        </div>,
        <div className="resume-screen-container" key="interests">
            <ResumeHeading
                heading="Upskilling"
                description="Apart from being a tech enthusiast, I also love to learn new things and upskill myself with more knowledge for providing newer and better solutions for every possible problems."
            />
            <ResumeHeading
                heading="Music & Audiobook"
                description="Listening to soothing and relaxing music is something I can never compromise with, I also love listening to Audiobook as it is an efficent and an immserive way to learn and experience the book"
            />
            <ResumeHeading
                heading="Competetive Sports & Gaming"
                description="I like to challenge my reflexes a lot while competing in football games, and also love to play console and computer games for change of pace and mindset."
            />
        </div>,
    ];

    const handleCarousal = (index) => {
        let offsetHeight = 360;
        let newCarousalOffset = {
            transform: "translateY(" + index * offsetHeight * -1 + "px",
        };
        console.log(JSON.stringify(carousalOffSetStyle));
        console.log(JSON.stringify(newCarousalOffset));
        setCarousalOffSetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
    };

    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
            <div
                onClick={() => handleCarousal(index)}
                className={
                    index === selectedBulletIndex
                        ? "bullet selected-bullet"
                        : "bullet"
                }
                key={index}
            >
                <img
                    src={infoIcons[bullet.logoSrc]}
                    alt="Oops,, No internet"
                    className="bullet-logo"
                />
                <span className="bullet-label">{bullet.label}</span>
            </div>
        ));
    };

    const getResumeScreen = () => {
        return (
            <div
                style={carousalOffSetStyle}
                className="resume-details-carousal"
            >
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
        );
    };

    return (
        <div
            className="resume-container screen-container fade-in"
            id={props.id || ""}
        >
            <div className="resume-content">
                <ScreenHeadings
                    title={"Information"}
                    subHeading={"My Formal Bio Details"}
                />
                <div className="resume-card">
                    <div className="resume-bullets">
                        <div className="bullet-container">
                            <div className="bullet-icons"></div>
                            <div className="bullets">{getBullets()}</div>
                        </div>
                    </div>
                    <div className="resume-bullet-details">
                        {getResumeScreen()}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;
