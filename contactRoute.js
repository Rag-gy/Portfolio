const router = require("express").Router();
const nodemailer = require("nodemailer");
require("dotenv").config();

router.post("/contact", async (req, res) => {
    let data = req.body;

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.USER,
            pass: process.env.PASS,
        },
    });

    let message = {
        from: data.email,
        to: "kraghulprasanth@gmail.com",
        subject: `Message from ${data.name} via Protfolio`,
        text: "",
        html: `
            <h3>Informational Message</h3>
            <ul>
            <li> Name: ${data.name} </li>
            <li> Email: ${data.email} </li>
            </ul>
            <h3>Message</h3>
            <p> ${data.message} </p>
            `,
    };

    try {
        await transporter.sendMail(message);
        return res
            .status(200)
            .json({ msg: "Thank you for contacting Raghul !" });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ msg: e });
    }
});

module.exports = router;
