var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.sockets.on('connection', function(client) {
	console.log('Client connected...');
	client.on('messages', function(data) {
		client.broadcast.emit('messages', data);
	});
	client.on('join', function(name) {
		client.set('nickname', name);
	});
});

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

server.listen(8080);