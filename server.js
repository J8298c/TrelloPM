const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./server/config");
const cors = require("cors");

const app = express();

app.use(bodyParser, json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.listen(config.app.port, () => {
	console.log(`server is listening on port ${config.app.port}`);
});
