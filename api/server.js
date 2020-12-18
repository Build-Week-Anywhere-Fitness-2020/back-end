const express = require("express");
const router = express.Router();
const helmet = require("helmet");
const cors = require("cors");

//server
const server = express();

//Global middleware
server.use(helmet());
server.use(cors());
server.use(express.json());

//Server endpoints --------->

//global middleware for .catch on all endpoints
server.use((err, req, res, next) => {
  console.log("err--->", err);
  res.status(500).json({ Error: "500 Error, what happened?" });
});

module.exports = server;
