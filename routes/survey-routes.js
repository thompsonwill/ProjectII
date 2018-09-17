var express = require("express");

var router = express.Router();


var surveyInput = require("../models/survey.js");

router.post("/", function(req, res) {
    answers.create([
      "question1", "question2", "quesitons3" 
    ], [
      req.body.surveyResponses, req.body.answers
    ], function() {
      res.redirect("/");
    });
  });

