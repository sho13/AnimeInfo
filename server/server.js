var express = require('express');
var app = express();
var request = require("request");
var bodyParser = require("body-parser");
var slug = require("slug");

app.use(express.static(__dirname + '/../app'))
app.use(bodyParser.json())

app.post('/anime', function(req, resp) {
	request.get('https://hummingbird.me/api/v1/anime/' + slug(req.body.anime).toLowerCase(), function(error, res, body) {
		console.log(body);
		resp.json(body);
	});
});

app.listen(process.env.PORT || 8000);

module.exports = app;

//render the image 
//get the tag
//make a new call to the server
//call the function
//make a query string
//send to database
