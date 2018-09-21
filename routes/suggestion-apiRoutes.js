// var db = require("../models");
// =============================================================

// var Suggestion = require("../models/suggestion");
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  app.get("/api/all", function(req, res) {
    db.Suggestion.findAll({}).then(function(itsData) {
      // results are available to us inside the .then
      res.json(itsData);
    });
  });

  app.post("/api/all", function(req, res) {
    console.log("Suggestion Data:");
    console.log(req.body);
    db.Suggestion.create({
      employee: req.body.employee,
      body: req.body.body,
      created_at: req.body.created_at
    }).then(function(results) {
      res.end();
    });
  });
};
