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
