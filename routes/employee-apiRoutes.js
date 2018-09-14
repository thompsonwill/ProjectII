var db = require("../models");

module.exports = function(app) {
  // Find all employyes and return them to the user with res.json
  app.get("/api/employees", function(req, res) {
    db.Employee.findAll({}).then(function(dbEmployee) {
      res.json(dbEmployee);
    });
  });

  app.get("/api/employees/:id", function(req, res) {
    // Find one employee with the id in req.params.id and return them to the user with res.json
    db.Employee.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbEmployee) {
      res.json(dbEmployee);
    });
  });

  app.post("/api/employees", function(req, res) {
    // Create an employee with the data available to us in req.body
    console.log(req.body);
    db.Employee.create(req.body).then(function(dbEmployee) {
      res.json(dbEmployee);
    });
  });

  app.delete("/api/employees/:id", function(req, res) {
    // Delete the employee with the id available to us in req.params.id
    db.Employee.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbEmployee) {
      res.json(dbEmployee);
    });
  });

};