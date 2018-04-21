module.exports = app => {
  const Task = require('../models/task_model');

  app.post('/task', (req, res) => {
    console.log(req.body);

    const task = new Task({
      createdBy: req.body.createdBy,
      assignedTo: req.body.assignedTo,
      taskBody: req.body.taskBody
    });

    task.save((err, task) => {
      if (err) return console.log(err);
      console.log('saved');
    });
  });
};
