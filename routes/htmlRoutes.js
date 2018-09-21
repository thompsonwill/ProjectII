var db = require("../models");
var path = require('path');

module.exports = function (app, passport) {
  // Load index page
  // index route loads view.html
  app.get("/", function (req, res) {
    res.render("login", { layout: false });
  });


  app.post('/',
    passport.authenticate('local', { failureRedirect: '/' }),
    function (req, res) {
      res.redirect('/dash');
    });


  app.get('/survey',
    require('connect-ensure-login').ensureLoggedIn(),
    function (req, res) {
      res.render('survey', { user: req.user, title: "Weekly Survey" });
    });

    app.get('/login', function (req, res) {
      res.render('login', {layout: false});
    });


  app.get('/rewards',
    require('connect-ensure-login').ensureLoggedIn(),
    function (req, res) {
      res.render('rewards', {title: "Employee Rewards"});
    });



  app.get('/dash',
    require('connect-ensure-login').ensureLoggedIn(),
    function (req, res) {
      res.render('dashboard', { user: req.user, title: "Dashboard" });
    });



  app.get('/cms',
    require('connect-ensure-login').ensureLoggedIn(),
    function (req, res) {
      res.render('cms', { user: req.user, title: "Suggestion Box" });
    });

  // blog route loads blog.html
  app.get("/categories", function (req, res) {
    res.render("category-manager");
  });


  app.get("/employees", function (req, res) {
    res.render("employee-manager");
  });

  app.get('/logout',
    function (req, res) {
      req.logout();
      res.redirect('/');
    });


  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  // app.get("*", function (req, res) {
  //   res.render("404", { layout: false });
  // });


};
