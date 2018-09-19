var express = require("express");

var router = express.Router();

var survey = require("../models"); {
    module.exports = function (app) {
        app.post("/survey", function (req, res) {
            db.survey.create({
                    group1: req.body.group1,
                    group2: req.body.group2,
                    group3: req.body.group3
                })
                .then(function (dbPost) {
                    res.json(dbPost);
                });
        });


    }

}