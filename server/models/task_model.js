const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  createdOn: Date,
  createdBy: String,
  dueOn: Date,
  assignedTo: String,
  taskBody: String,
  status: {
    type: String,
    enum: ['complete', 'not started', 'in progress'],
    default: 'not started'
  }
});

const Task = mongoose.model('Task', TaskSchema);

module.export = Task;
