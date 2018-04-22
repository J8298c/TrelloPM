const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./api/config/config');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const session = require('express-session');
const cors = require('cors');

const app = express();

mongoose.connect(config.DBURI, () => {
  console.log('connected to db');
});

mongoose.connection.on('error', () => {
  console.log(' connecting to db');
});

app.use(bodyParser.json());
app.use(cors());

app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  })
);
app.use(passport.initialize());
require('./api/config/passport')(passport);

require('./api/routes/auth.routes')(app, passport);
require('./api/routes/user.routes')(app, passport);
require('./api/routes/task.routes')(app);
app.listen(config.PORT, () => {
  console.log(`app is listening on port: ${config.PORT}`);
});
