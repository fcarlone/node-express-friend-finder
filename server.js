const express = require("express");
const path = require("path");

let app = express();
let PORT = process.env.PORT || 3000;

// Middleware to handle JSON parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Setup home route
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/app/public/home.html"))
});

// Setup survey route
app.get("/survey", function (req, res) {
  res.sendFile(path.join(__dirname, "/app/public/survey.html"))
});


app.listen(PORT, function () {
  console.log(`Listening on PORT: ${PORT}`)
});
