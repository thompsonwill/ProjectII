module.exports = function (app) {
  // Load index page
  // index route loads view.html
  app.get("/", function (req, res) {
    res.render("login");
  });

  app.get("/survey", function (req, res) {
    res.render("survey");
  });


  app.get("/rewards", function (req, res) {
    res.render("rewards");
  });


  app.get("/dash", function (req, res) {
    res.render("dashboard");
  });

  // cms route loads cms.html
  app.get("/cms", function (req, res) {
    res.render("cms");
  });

  // blog route loads blog.html
  app.get("/categories", function (req, res) {
    res.render("category-manager");
  });

  app.get("/employees", function (req, res) {
    res.render("employee-manager");
  });

  // app.get("/", function (req, res) {
  //   db.Example.findAll({}).then(function (dbExamples) {
  //     res.render("index", {
  //       msg: "Welcome!",
  //       examples: dbExamples
  //     });
  //   });
  // });

  app.get("/login", function (req, res) {
    res.render("login");
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });




};