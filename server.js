const express = require("express");

let app = express();
let PORT = process.env.PORT || 3000;

// Middleware to handle JSON parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Router
require("./app/routing/htmlRoutes")(app);
// require("./app/routing/apiRoutes")(app);


// Add listener
app.listen(PORT, function () {
  console.log(`Listening on PORT: ${PORT}`)
});
