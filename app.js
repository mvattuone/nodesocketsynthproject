///////////////////
// create server //
///////////////////

var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.listen(8080);
server.on('request', function(request, response) {
	response.writeHead(200, {
		'Content-Type': 'text/html'
	});
	fs.readFile('index.html', function(err, contents) {
		response.write(contents);
		response.end();
	}); // asynchronously read index.html file	
});
server.on('request', function(request, response) {
	console.log("New request coming in...");
}); // listening for an event more than once
server.on('close', function() {
	console.log("Closing down the server...");
}); // add listener for close event

/////////////////////////////////////
// create custom chat EventEmitter //
/////////////////////////////////////

var events = require('events');
var EventEmitter = events.EventEmitter;
var chat = new EventEmitter();
var users = [], chatlog = [];

chat.on('message', function(message) {
	console.log(message);
});

chat.on('join', function(nickname) {
	users.push(nickname);
});

chat.emit('join', 'custom message');

chat.emit('message', 'custom message');

//////////////////////
// file read stream //
//////////////////////

var fs = require('fs');
var file = fs.createReadStream('fruits.txt');
var destFile = fs.createWriteStream('destination.txt');

file.pipe(destFile, { end: false });

file.on('end', function() {
	destFile.end('Finished!');
});

// download server

var fs = require('fs');
var http = require('http');

http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type': 'text/html'});

	var file = fs.createReadStream('index.html');
	file.pipe(response);
}).listen(8080);

/////////////////
// express app //
/////////////////

var express = require('express');
var app = express();

app.get('/', function(request, response) {
	response.sendFile(__dirname + '/index.html');
});

app.listen(8080);

// Twitter call, return last 10 tweets for a given user

var express = require('express');
var app = express();
var request = require('request');
var url = require('url');

app.get('/tweets/:username', function(req, response) {
	var username = request.params.username;
	options = {
		protocol: 'http',
		host: 'api.twitter.com',
		pathname: '/1/statuses/user_timeline.json',
		query: { screen_name: username, count: 10 }
	}
	var twitterUrl = url.format(options);
	request(twitterUrl, function(err, res, body) {
		var tweets = JSON.parse(body);
		// set locals property on express response
		// tell response which template to render out 
		response.locals = { tweets: tweets, name: username };
		response.render('tweets.ejs');
	});
}); // twitter's API has changed to require authentication for this 

//////////////////////////////////
// rendering templates with ejs //
//////////////////////////////////

// app.js

var express = require('express');
var app = express();

var quotes = {
	"einstein": "Life is like riding a bicycle. To keep your balance you must keep moving",
	"berners-lee": "The Web does not just connect machines, it connects people",
	"crockford": "The good thing about reinventing the wheel is that you can get a round one",
	"hofstadter": "Which statement seems more true: (1) I have a brain. (2) I am a brain."
};

app.get('/quotes/:name', function(req, res) {
	var quote = quotes[req.params.name];
	res.locals = { quote: quote, name: req.params.name };
	res.render('quote.ejs');
});

app.listen(8080);

// views/quote.ejs

<h2>Quote by <%= name %></h2>

<blockquote>
	<%= quote %>
</blockquote>

//////////////////
// url building //
//////////////////

var url = require('url');

var options = {
	protocol: 'http:',
	host: 'search.twitter.com',
	pathname: '/search.json',
	query: { 
		q: 'codeschool' 
	}
};

var searchUrl = url.format(options);
// user request module to make a simple web
// request and log the response to the console
var request = require('request');
request(searchUrl, function(err, res, body) {
	console.log(body);
});

// create an express server which queries out 
// for the search term and then return the JSON

var url = require('url');
var request = require('request');
var express = require('express');

var app = express();
app.get('/', function(req, res) {
	request(searchUrl).pipe(res);
});

var options = {
	protocol: 'http:',
	host: 'search.twitter.com',
	pathname: '/search.json',
	query: { 
		q: 'codeschool' 
	}
};

var searchUrl = url.format(options);
app.listen(8080);

***///////////////***
***// Socket.io //***
***///////////////***
























