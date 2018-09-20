var db = require("../models");
var request = require("request");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });
  app.get("/api/rewards", function(req, res) {
    res.send("Groupon Data");
    
    $.ajax({
      url: "https://api.discountapi.com/v2/deals?api_key=mAzPLCrk",
      type: "GET",
      data: {
        "$limit" : 1000,
      }
      }).done(function(data) {
        alert("Retrieved " + data.length + " records from the dataset!");
          console.log(data);
      });    
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};


// get and post routes to server


app.get("/api/survey", function(req, res) {
  db.survey.findAll({}).then(function(newSurvey) {
    // results are available to us inside the .then
    res.json(newSurvey);
  });
});

app.post("/api/survey", function(req, res) {
  console.log("New Survey");
  console.log(req.body);
  db.newSurvey.create({
    group1: req.body.group1,
    group2: req.body.group2,
    group3: req.body.group3
  }).then(function(newSurvey) {
    res.end();
  });
});
