"use strict";
const http = require("http");
const path = require('path')

const hostname = "127.0.0.1";
const port = 3337;

const express = require("express");
const cors = require('cors')
const morgan = require("morgan");
const logger = morgan("tiny");
const helmet = require("helmet");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const cookieParser = require("cookie-parser");

const corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept"
};

const app = express();

app.use(logger);
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(cors(corsOptions));

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server now running on http://${hostname}:${port}`);
});

const blogController = require("./routes/blog");

app.use("/blog", blogController); // <- BLOG route
