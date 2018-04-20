const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  createdOn: {
    type: Date,
    default: Date.now
  },
  createdBy: String,
  dueOn: { type: Date },
  assignedTo: String,
  taskBody: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['complete', 'not started', 'in progress'],
    default: 'not started'
  }
});

const Task = mongoose.model('Task', TaskSchema);

module.export = Task;
