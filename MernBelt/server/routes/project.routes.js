const ProjectController = require("../controllers/project.controller");

module.exports = app => {
  app.get("/api/projects/", ProjectController.findAllProjects);
  app.post("/api/projects/new", ProjectController.createProject);
  app.delete("/api/projects/delete/:id", ProjectController.deleteAnExistingProject);
  app.put("/api/projects/edit/:id", ProjectController.updateExistingProject);
};