//! Security Requirements
require("dotenv").config();
const cors = require("cors");

//! Server Requirements
const express = require("express");
const expressFormidable = require('express-formidable');

//! Routes Requierements
const get = require('./routes/get.js');

// Create Server
const server = express();

// Run Requirements
server.use(cors());
server.use(expressFormidable());
server.use(get);

//? No Route Security
server.all('*', (request, response) => {
    response.status(400).json({ message: "Page not found" });
});

//? Server Start
server.listen(process.env.PORT, () => {
    console.log("Server start ! 😎");
});