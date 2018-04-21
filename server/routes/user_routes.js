module.exports = (app, passport) => {
  const User = require('../models/task_model');
  const Task = require('../models/task_model');

  app.get(
    '/user/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      User.findById(req.params.id)
        .populate({
          path: 'tasks',
          model: 'Task'
        })
        .exec((err, user) => {
          if (err) return res.json({ status: 400, message: err });
          return res.json({ status: 200, user: user });
        });
    }
  );

  app.post(
    '/:user',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      User.findByIdAndUpdate(
        req.params.user,
        req.body,
        { new: true },
        (err, user) => {
          if (err) return res.json({ status: 400, message: err });
          delete user.password;
          return res.json({ status: 200, user: user });
        }
      );
    }
  );
};
