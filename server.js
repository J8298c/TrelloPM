const express = require('express');
const bodyParser = require('body-parser');
const config = require('./server/config');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const app = express();

mongoose.connect(config.DBURI, () => {
  console.log('connected to mongo successfully');
});

mongoose.connection.on('error', () => {
  console.log('There was an error connecting to the DB');
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
app.use(passport.initialize());
require('./server/passport')(passport);

if (process.env.NODE_ENV !== 'production') {
  const logger = require('morgan');
  app.use(logger('dev'));
}

require('./server/routes/auth_routes')(app, passport);
require('./server/routes/user_routes')(app, passport);
require('./server/routes/task_routes')(app);
app.listen(config.PORT, () => {
  console.log(`app is listening on port: ${config.PORT}`);
});

module.exports = app;
