const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  createdOn: {
    type: Date,
    default: Date.now()
  },
  assignedTo: {
    type: String,
    required: true
  },
  dueOn: {
    type: Date
  },
  createdBy: {
    type: String
  },
  taskBody: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
