// **********************************
// ********** DEPENDENCIES **********
// **********************************
var htmlController = require("./htmlcontroller.js");

// ***************************
// ********** ROUTES *********
// ***************************
module.exports = function(app) {
  // ********************************
  // ********** GET Routes **********
  // ********************************
  app.get("/", htmlController.home); // Route for the home page
  app.get("/menu", isLoggedIn, htmlController.menu); // Route for the menu
  app.get("/upperbody", isLoggedIn, htmlController.upperbody); // Route for upperbody workout
  app.get("/lowerbody", isLoggedIn, htmlController.lowerbody); // Route for lowerbody workout
  app.get("/history", isLoggedIn, htmlController.history); // Route for workout history
  app.get("/chart/:exerciseid/:userid", htmlController.chart); // Route to view a summary of a specific exercise data for the user
  app.get("/logout", htmlController.logout); // Route for logout and return to the login page

  // *********************************
  // ********** POST Routes **********
  // *********************************
  app.post("/submit", isLoggedIn, htmlController.submit); // Route to submit workout data

  // Protects the HTML routes to only allow signed in user
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/");
  }
};
