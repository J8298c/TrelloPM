const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./api/config/config');

const app = express();

mongoose.connect(config.DBURI, () => {
  console.log('connected to db');
});

mongoose.connection.on('error', () => {
  console.log(' connecting to db');
});

app.use(bodyParser.json());

app.listen(config.PORT, () => {
  console.log(`app is listening on port: ${config.PORT}`);
});
