module.exports = app => {
  const Task = require('../models/task.model');

  app.post('/task', (req, res) => {
    const task = new Task({
      description: req.body.description,
      createdBy: req.body.createdBy,
      assignedTo: req.body.assignedTo,
      dueOn: req.body.dueOn
    });

    task.save((err, task) => {
      if (err) console.log(err);
      res.json({ status: 200, task });
    });
  });

  app.get('/alltasks', (req, res) => {
    Task.find({}, (err, tasks) => {
      if (err) console.log(err);
      res.json({ status: 200, tasks });
    });
  });
};
