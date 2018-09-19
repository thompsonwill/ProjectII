// var db = require("../models");
// =============================================================
var Suggestion = require("../models/suggestion");
// Routes
// =============================================================
module.exports = function (app) {
    app.get("/api/all", function (req, res) {
        Suggestion.findAll({}).then(function (results) {
            // results are available to us inside the .then
            res.json(results);
        });
    });

    app.post("/api/new", function (req, res) {
        console.log("Suggestion Data:");
        console.log(req.body);
        Suggestion.create({
            employee: req.body.employee,
            body: req.body.body,
            created_at: req.body.created_at
        }).then(function (results) {
            res.end();
        });
    });
};