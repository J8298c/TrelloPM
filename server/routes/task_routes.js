const Task = require('../models/task_model');

module.exports = app => {
  app.get('/task', (req, res) => {
    res.send('I am working');
  });
};
