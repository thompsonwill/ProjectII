var db = require("../models");

module.exports = function(app) {
  // Load index page
    // index route loads view.html
    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../views/login.html "));
    });
  
    // cms route loads cms.html
    app.get("/cms", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/cms.html"));
    });
  
    // blog route loads blog.html
    app.get("/categories", function(req, res) {
      res.sendFile(path.join(__dirname, "../views/category-manager.html"));
    });
  
    app.get("/employees", function(req, res) {
      res.sendFile(path.join(__dirname, "../views/employee-manager.html"));
    });
  
  };
