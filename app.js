// create server

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

// create custom chat EventEmitter

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