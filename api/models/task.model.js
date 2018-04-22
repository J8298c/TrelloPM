const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
	createdBy: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	assignedTo: {
		type: String
	},
	dueOn: {
		type: Date
	},
	taskBody: {
		type: String,
		required: true
	}
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
