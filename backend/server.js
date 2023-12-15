const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
const contactRoute = require("./contactRoute");
app.use(express.json());
app.use(cors());

app.use("/", contactRoute);

const port = process.env.PORT || 5000;
app.listen(port, console.log("Server listening to port 5000"));
