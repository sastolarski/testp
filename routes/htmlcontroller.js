// **********************************
// ********** DEPENDENCIES **********
// **********************************
var db = require("../models");

// *********************************
// ********** Controllers **********
// *********************************
var exports = (module.exports = {});

// *******************************************
// ********** GET Route Controllers **********
// *******************************************

// Controller for the home page route
exports.home = function(req, res) {
  res.render("home");
};

// Controller for the menu route
exports.menu = function(req, res) {
  var exerciseObject = {
    user: req.user.username
  };
  res.render("menu", exerciseObject);
};

// Controller for upperbody workout route
exports.upperbody = function(req, res) {
  db.Exercise.findAll({
    where: {
      upperBody: true
    }
  }).then(function(data) {
    var exerciseArray = [];
    // Sample data pushed into exerciseArray
    //   { id: 1,
    //     name: 'Bench Press',
    //     upperBody: true,
    //     lowerBody: false,
    //     createdAt: Invalid Date,
    //     updatedAt: Invalid Date,
    //     userid: 1 }
    for (var i = 0; i < data.length; i++) {
      data[i].dataValues.userid = req.user.id;
      exerciseArray.push(data[i].dataValues);
    }
    var exerciseObject = {
      exercise: exerciseArray,
      user: req.user.username,
      label: "Upper Body",
      modal: true
    };
    res.render("exercise", exerciseObject);
  });
};

// Controller for lowerbody workout route
exports.lowerbody = function(req, res) {
  db.Exercise.findAll({
    where: {
      lowerBody: true
    }
  }).then(function(data) {
    var exerciseArray = [];
    // Sample data pushed into exerciseArray
    //   { id: 11,
    //     name: 'Barbell Squats',
    //     upperBody: false,
    //     lowerBody: true,
    //     createdAt: Invalid Date,
    //     updatedAt: Invalid Date,
    //     userid: 1 }
    for (var i = 0; i < data.length; i++) {
      data[i].dataValues.userid = req.user.id;
      exerciseArray.push(data[i].dataValues);
    }
    var exerciseObject = {
      exercise: exerciseArray,
      user: req.user.username,
      label: "Lower Body",
      modal: true
    };
    res.render("exercise", exerciseObject);
  });
};

// Controller for history route
exports.history = function(req, res) {
  db.Exercise.findAll({}).then(function(data) {
    var exerciseArray = [];
    // Sample data pushed into exerciseArray
    //   { id: 1,
    //     name: 'Bench Press',
    //     upperBody: true,
    //     lowerBody: false,
    //     createdAt: Invalid Date,
    //     updatedAt: Invalid Date,
    //     userid: 1 }
    for (var i = 0; i < data.length; i++) {
      data[i].dataValues.userid = req.user.id;
      exerciseArray.push(data[i].dataValues);
    }
    var exerciseObject = {
      exercise: exerciseArray,
      user: req.user.username,
      label: "History",
      modal: false,
      chart: true
    };
    res.render("exercise", exerciseObject);
  });
};

// Controller for specific exercise data for the user
exports.chart = function(req, res) {
  db.UserData.findAll({
    where: {
      userId: req.params.userid,
      exerciseId: req.params.exerciseid
    },
    limit: 10
  }).then(function(data) {
    console.log(data);
    res.json(data);
  });
};

// Controller for the logout route
exports.logout = function(req, res) {
  req.session.destroy(function(err) {
    if (!err) {
      res.redirect("/");
    } else {
      console.log(err);
    }
  });
};

// *******************************************
// ********** GET Route Controllers **********
// *******************************************

// Controller for exercise submission
exports.submit = function(req, res) {
  db.UserData.create(req.body).then(function() {
    res.json({ id: res.insertId });
  });
};
