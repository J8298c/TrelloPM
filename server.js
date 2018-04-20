const express = require('express');
const bodyParser = require('body-parser');
const config = require('./server/config');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(config.DBURI, () => {
  console.log('connected to mongo successfully');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(config.PORT, () => {
  console.log(`app is listening on port: ${config.PORT}`);
});

module.exports = app;
