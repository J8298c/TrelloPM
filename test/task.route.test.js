process.env.NODE_ENV = 'test';

const config = require('../server/config');
const Task = require('../server/models/task_model');
const mongoose = require('mongoose');

describe('Tasks', () => {
  beforeAll(() => {
    if (process.env.NODE_ENV === 'test') {
      mongoose.connect(config.DBURI);
    }
  });

  afterEach(() => {
    Task.remove({}, err => {
      if (err) console.log(err);
      console.log('tasks removed');
    });
  });

  describe('saving task', () => {
    it('should verify that a document saved into the db', async () => {
      const newTask = new Task({
        createdBy: 'Test User',
        assignedTo: 'Test Assignee',
        taskBody: 'Run the tests'
      });
      newTask.save((err, task) => {
        if (err) console.log(err);
        console.log('Task Saved');
        expect(task.createdBy).toEqual('Test User');
      });
    });
  });

  describe('edit task', () => {
    beforeEach(() => {
      const newTask = new Task({
        createdBy: 'Test User',
        assignedTo: 'Test Assignee',
        taskBody: 'Run the tests'
      });
      newTask.save((err, task) => {
        if (err) console.log(err);
        console.log('Task Saved');
      });
    });

    it('should edit a task', async () => {
      let updateTask = {
        createdBy: 'Test User',
        assignedTo: 'Test Assignee',
        taskBody: 'Update the tests'
      };
      let query = { createdBy: 'Test User' };
      Task.findOneAndUpdate(
        query,
        { $set: { taskBody: updateTask.taskBody } },
        { new: true },
        (err, task) => {
          if (err) console.log(err);
          console.log(task);
        }
      );
    });
  });
});
