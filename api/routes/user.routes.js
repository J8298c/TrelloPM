module.exports = (app, passport) => {
  const User = require('../models/user.model');

  app.get(
    '/user/:user',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      User.findById(req.params.user)
        .populate({
          path: 'boards',
          model: 'Board',
          populate: {
            path: 'lists',
            model: 'List',
            populate: {
              path: 'cards',
              model: 'Card'
            }
          }
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
