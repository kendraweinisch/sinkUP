// Dependencies!
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3001;
var app = express();
var routes = require("./backend/routes");

// Designate public folder as a static directory
app.use(express.static("client/build"));

// Use bodyParser in our app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Have every request go through our route middleware
app.use(routes);

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/sinkup";

// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

// Listen on the port 3000
app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});
