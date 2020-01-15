// Dependencies
var express = require('express');
var bodyParser = require("body-parser");
var path = require("path");
var app = express();

//location for web server to look for
var PORT = process.env.PORT || 8080;
 
// Sets up Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// API and HTML routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});