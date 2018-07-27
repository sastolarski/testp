var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/exercises", function(req, res) {
    db.Exercise.findAll({}).then(function(data) {
      res.json(data);
    });
  });

  // // Create a new example
  app.get("/api/user/:user", function(req, res) {
    db.UserData.findAll({
      where: {
        userId: req.params.user
      }
    }).then(function(data) {
      res.json(data);
    });
  });

  app.get("/api/exercises/upper", function(req, res) {
    db.Exercise.findAll({
      where: {
        upperBody: true
      }
    }).then(function(data) {
      res.json(data);
    });
  });

  app.get("/api/exercises/lower", function(req, res) {
    db.Exercise.findAll({
      where: {
        upperBody: false
      }
    }).then(function(data) {
      res.json(data);
    });
  });

  app.post("/api/exercises", function(req, res) {
    db.Exercise.create({}).then(function(data) {
      res.json(data);
    });
  });
};
