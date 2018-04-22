module.exports = (app, passport) => {
  const User = require('../models/user.model');
  const jwt = require('jsonwebtoken');
  const config = require('../config/config');

  app.post('/register', (req, res) => {
    console.log(req.body);
    if (!req.body.email || !req.body.password) {
      return res.json({
        status: false,
        message: 'please enter email and password'
      });
    } else {
      const user = new User({
        email: req.body.email,
        password: req.body.password
      });
      user.save(err => {
        if (err) return res.json({ status: false, message: err });
        return res.json({ success: true, message: 'created new user' });
      });
    }
  });

  app.post('/login', (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
      if (err) throw err;
      console.log(user);
      if (!user) {
        res.json({ status: 400, message: 'user not found please register' });
      } else {
        user.comparePassword(req.body.password, (err, isMatch) => {
          if (isMatch && !err) {
            var token = jwt.sign(user.toJSON(), config.secret, {
              expiresIn: 10080 // in seconds
            });
            res.json({ success: true, token: 'jwt ' + token, user: user });
          } else {
            res.send({
              success: false,
              message: 'Authentication failed. Passwords did not match.'
            });
          }
        });
      }
    });
  });
};
