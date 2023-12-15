import { React, useState } from "react";
import imgBack from "../../Contact/mail.jpg";
import loader from "../../Contact/load1.gif";
import Footer from "../Home/Footer/Footer";
import ScreenHeadings from "../../../utilities/ScreenHeadingComponent/ScreenHeadings";
import ScrollService from "../../../utilities/scrollService";
import Animations from "../../../utilities/Animations";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { toast } from "react-toastify";
import "./ContactMe.css";

export default function ContactMe(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;

        Animations.animations.fadeInScreen(props.id);
    };

    const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const [word] = useTypewriter({
        words: ["Get In Touch"],
        loop: {},
    });

    var inputs = document.getElementsByClassName("input");
    var backImg = document.getElementById("backimg");

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("focus", function () {
            backImg.style.opacity = 1;
        });

        inputs[i].addEventListener("blur", function () {
            backImg.style.opacity = 0.6;
        });
    }

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [banner, setBanner] = useState("");
    const [boolean, setBoolean] = useState(false);

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleMessage = (e) => {
        setMessage(e.target.value);
    };

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            let data = {
                name,
                email,
                message,
            };
            setBoolean(true);
            if (
                name.length === 0 ||
                email.length === 0 ||
                message.length === 0
            ) {
                console.log("ASDDSA");
                setBanner("Please fill all the fields");
                toast.error("Please fill all the fields", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                setBoolean(false);
            } else {
                const res = await fetch(
                    `https://portfoliobackend-phia.onrender.com/contact`,
                    {
                        method: "POST",
                        body: JSON.stringify(data),
                        headers: { "Content-Type": "application/json" },
                    }
                );
                if (res.status == 200) {
                    setBanner("Mail Sent Successfully !");
                    toast.success("Thank you for contacting Raghul !", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                    setBoolean(false);
                    setName("");
                    setEmail("");
                    setMessage("");
                } else {
                    res = res.json();
                    toast.warn(res.msg, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                    setBoolean(false);
                    setName("");
                    setEmail("");
                    setMessage("");
                }
            }
        } catch (e) {
            toast.error("Internal Server Error. Please try after sometime", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            setBoolean(false);
            setName("");
            setEmail("");
            setMessage("");
        }
    };

    return (
        <div className="main-container fade-in" id={props.id || ""}>
            <ScreenHeadings
                subHeading={"Let's Keep In Touch"}
                title={"Contact Me"}
            />
            <div className="central-form">
                <div className="col">
                    <h2 className="title">
                        {" "}
                        {word}
                        <span>
                            <Cursor cursorColor="#ff5823" cursorStyle="!" />
                        </span>
                    </h2>
                    <a href="https://www.instagram.com/raghul_k_" target="None">
                        <i className="fa fa-instagram"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/raghul-prasanth-2033581b6/"
                        target="None"
                    >
                        <i className="fa fa-linkedin"></i>
                    </a>
                    <a href="https://leetcode.com/raghul_k_/" target="None">
                        <i className="fa fa-code"></i>
                    </a>
                    <a href="https://github.com/Rag-gy" target="None">
                        <i className="fa fa-github"></i>
                    </a>
                </div>
                <div className="back-form">
                    <div className="img-back">
                        <h4>Send Your Email Here!</h4>
                        <img
                            id="backimg"
                            className="back-img"
                            src={imgBack}
                            alt="Image Not Found"
                        />
                    </div>
                    <form onSubmit={submitForm}>
                        <p className="banner">{banner}</p>
                        <label htmlFor="name">Name</label>
                        <input
                            className="input"
                            type="text"
                            onChange={handleName}
                            value={name}
                        />

                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="input"
                            onChange={handleEmail}
                            value={email}
                        />

                        <label htmlFor="message">Message</label>
                        <textarea
                            type="text"
                            className="input"
                            onChange={handleMessage}
                            value={message}
                        />

                        <div className="send-btn">
                            {boolean ? (
                                <b className="load">
                                    <img
                                        src={loader}
                                        alt="Image not responding"
                                    />
                                </b>
                            ) : (
                                <button type="submit">
                                    Send
                                    <i className="fa fa-paper-plane" />
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}
