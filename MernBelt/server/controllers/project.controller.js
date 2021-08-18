const Project = require("../models/project.model");



module.exports.findAllProjects = (req, res) => {
  Project.find().sort('date')
    .then(projects => res.json(projects))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};


module.exports.createProject = (req, res) => {
  Project.create(req.body)
  .then(result => res.json(result))
  .catch(err => res.status(400).json(err));
}

module.exports.deleteAnExistingProject = (req, res) => {
  Project.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};


module.exports.updateExistingProject = (req, res) => {
  Project.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators:true })
    .then(updateProject => res.json(updateProject))
    .catch(err => res.status(400).json(err));
};