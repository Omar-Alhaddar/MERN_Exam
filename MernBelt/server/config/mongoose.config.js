const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/ProjectsSchema", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true, 
	autoIndex: true, 
})
	.then(() => console.log("Established a connection to the database"))
	.catch(err => console.log("Something went wrong when connecting to the database", err));