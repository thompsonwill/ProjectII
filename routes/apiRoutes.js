var db = require("../models");
// var request = require("request");
// var deals = require("../public/js/rewards.js");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });
  app.get("/rewards", function (req, res) {
    request("https://api.discountapi.com/v2/deals?api_key=mAzPLCrk", function (error, response, body) {

      // If the request is successful (i.e. if the response status code is 200)
      if (!error && response.statusCode === 200) {

        // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
        // var apiData = JSON.parse(body).deals[0].deal.title;
        var apiData = JSON.parse(body).deals;
        console.log("We have a connection " + apiData);
      }
    
    res.render("rewards", {apiData: apiData});
  });
  });
  // app.get("/rewards", function(req, res) {
  //   $.ajax({
  //     url: "https://api.discountapi.com/v2/deals?api_key=mAzPLCrk",
  //     type: "GET",
  //     data: {
  //       $limit: 1000
  //     }
  //   }).done(function(data) {
  //     alert("Retrieved " + data.deals.length + " deals from the dataset!");
  //     console.log(data.deals[0]);
  //     for (i = 0; i < data.deals.length; i++) {
  //       $("#deal-view").append(
  //         "<h1> Title: " + data.deals.deal.title[i] + "</h1>"
  //       );
  //     }
  //     $("#deal-view").text(JSON.stringify(data));
  //   });
  //   console.log("Hi groupon");

  //   res.render("rewards");
  // });
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
