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
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.get("/login", function(req, res) {
    res.render("login");
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

