var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var redis = require('redis');
var redisClient = redis.createClient();

var messages = [];

var storeMessage = function(name, data) {
	var message = JSON.stringify({name: name, data: data});

	redisClient.lpush('messages', message, function(err, response) {
		redisClient.ltrim('messages', 0, 10);
	});
}

io.sockets.on('connection', function(client) {
	console.log('Client connected...');

	client.on('join', function(name) {
		client.nickname = name;
		client.broadcast.emit('add chatter', name);
		client.emit('add chatter', name);
		
		redisClient.lrange('messages', 0, -1, function(err, messages) {
			messages = messages.reverse();
			messages.forEach(function(message) {
				message = JSON.parse(message);
				client.emit('messages', message.name + ': ' + message.data);
			});
		});
		redisClient.smembers('names', function(err, names) {
			names.forEach(function(name) {
				client.emit('add chatter', name);
			});
		});
		redisClient.sadd('chatters', name);
	});

	client.on('messages', function(message) {
		client.nickname(function(err, name) {
			client.broadcast.emit('messages', name + ': ' + message);
			storeMessage(name, message);
		});
	});

	client.on('disconnect', function(name) {
		client.get('nickname', function(err, name) {
			client.broadcast.emit('remove chatter', name);

			redisClient.srem('chatters', name);
		});
	});
});

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

server.listen(8080);