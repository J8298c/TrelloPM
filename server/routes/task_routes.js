const Task = require('../models/task_model');

module.exports = app => {
  app.get('/task', (req, res) => {
    res.send('I am working');
  });

  app.post('/task', (req, res) => {
    let task = new Task({
      createdBy: req.body.createdBy,
      dueOn: req.body.dueOn,
      assignedTo: req.body.assignedTo,
      taskBody: req.body.taskBody,
      status: req.body.status
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
