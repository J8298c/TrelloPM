const Task = require('../models/task_model');

module.exports = app => {
  app.get('/task', (req, res) => {
    res.send('I am working');
  });

  app.post('/task', (req, res) => {
    const {
      createdOn,
      createdBy,
      dueOn,
      assignedTo,
      taskBody,
      status
    } = req.body;

    let task = new Task({
      createdOn,
      createdBy,
      dueOn,
      assignedTo,
      taskBody,
      status
    });

    task.save((err, task) => {
      if (err) errorHandler(err);

      res.json({ status: 200, task });
    });
  });
};

function errorHandler(err) {
  console.log(err);
}
