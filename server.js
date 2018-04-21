const express = require('express');
const bodyParser = require('body-parser');
const config = require('./server/config');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');

const app = express();

mongoose.connect(config.DBURI, () => {
  console.log('connected to mongo successfully');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(
  session({
    secret: config.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  })
);

if (process.env.NODE_ENV !== 'production') {
  const logger = require('morgan');
  app.use(logger('dev'));
}

require('./server/routes/task_routes')(app);
app.listen(config.PORT, () => {
  console.log(`app is listening on port: ${config.PORT}`);
});

module.exports = app;
