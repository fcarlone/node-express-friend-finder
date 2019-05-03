// Load data
const friendsTable = require("../data/friends");

// Routing 
module.exports = function (app) {

  // API table
  app.get("/api/friends", function (req, res) {
    res.json(friendsTable);
  });

  // API POST requests
  app.post("/api/friends", function (req, res) {
    res.json(friendsTable);
  })
};
