var db = require("../models");

module.exports = function(app) {
  // Find all catgeories and return them to the user with res.json
  app.get("/api/categories", function(req, res) {
    db.Category.findAll({}).then(function(dbCategory) {
      res.json(dbCategory);
    });
  });

  app.get("/api/categories/:id", function(req, res) {
    // Find one category with the id in req.params.id and return them to the user with res.json
    db.Category.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbCategory) {
      res.json(dbCategory);
    });
  });

  app.post("/api/categories", function(req, res) {
    // Create an category with the data available to us in req.body
    console.log(req.body);
    db.Category.create(req.body).then(function(dbCategory) {
      res.json(dbCategory);
    });
  });

  app.delete("/api/categories/:id", function(req, res) {
    // Delete the category with the id available to us in req.params.id
    db.Category.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbCategory) {
      res.json(dbCategory);
    });
  });

};