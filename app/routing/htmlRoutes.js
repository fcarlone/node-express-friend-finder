const path = require("path");


// Routing
module.exports = function (app) {

  // Setup home route
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"))
  });

  // Setup survey route
  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"))
  });

  // Catch-all - no matching route default to home
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"))
  });

};
