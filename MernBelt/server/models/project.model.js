const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');


const ProjectsSchema = new mongoose.Schema({
	project:{
		type: String,
		unique: [ true,"project is already exist (back end)"],
		minlength:[3, "Project must be at least 3 characters long (back end)"],
		required: [true,"Project is required (back end)"]
	},
	date:{
		type:Date,
		required: [
			true,
			"Due Date is required (back end)"
		]
	},
	status: String
	
},{ timestamps: true });
const Project = mongoose.model("Project", ProjectsSchema);
ProjectsSchema.plugin(uniqueValidator, { message: 'project is already exist (back end)' });


module.exports = Project;