// Setup basic express server
// var debug = require('debug')('http');
var express = require('express');
var app = express();
var server =  require('http').createServer(app);
var io = require('socket.io', { rememberTransport: false, transports: ['WebSocket', 'Flash Socket', 'AJAX long-polling'] })(server);
var port = process.env.PORT || 8080;

// // setup mongoose for mongodb
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');
// var db = mongoose.connection;
// db.on('error', function(callback) {
// 	console.log("connection error:", error);
// })
// db.once('open', function(callback) {
// 	console.log("connection to db open");
// })

// // define schema for drumMachine a.k.a. currentState a.k.a. syncMachine
// var currentStateSchema = new mongoose.Schema({
// 	roomName: String,
// 	play: Boolean,
// 	currentStep: Number,
// 	kick: Array,
// 	snare: Array,
// 	hh: Array,
// 	hho: Array,
// 	updated_at: { type: Date, default: Date.now }
// })

// create a model using schema defined above
// var currentState = mongoose.model('currentState', currentStateSchema);

// log server listen port
server.listen(port, function() {
	console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(__dirname + '/public'));

// Chatroom

// username which are currently connected to the chat
var usernames = {};
var numUsers = 0;
	var currentState = {
		play: 0,
		currentStep: 0,
		kick: [0, 0, 0, 0, 0, 0, 0, 0],
		snare: [0, 0, 0, 0, 0, 0, 0, 0],
		hh: [0, 0, 0, 0, 0, 0, 0, 0],
		hho: [0, 0, 0, 0, 0, 0, 0, 0],
		clap: [0, 0, 0, 0, 0, 0, 0, 0],
		tom: [0, 0, 0, 0, 0, 0, 0, 0],
		cowbell: [0, 0, 0, 0, 0, 0, 0, 0],
		shaker: [0, 0, 0, 0, 0, 0, 0, 0],
		bass: { 0: {d: 0, f: 0, a: 0, csharp: 0},
					  1: {d: 0, f: 0, a: 0, csharp: 0},
					  2: {d: 0, f: 0, a: 0, csharp: 0},
					  3: {d: 0, f: 0, a: 0, csharp: 0},
					  4: {d: 0, f: 0, a: 0, csharp: 0},
					  5: {d: 0, f: 0, a: 0, csharp: 0},
					  6: {d: 0, f: 0, a: 0, csharp: 0},
					  7: {d: 0, f: 0, a: 0, csharp: 0}
					},
		key: { 0: {d: 0, f: 0, a: 0, csharp: 0},
			  1: {d: 0, f: 0, a: 0, csharp: 0},
			  2: {d: 0, f: 0, a: 0, csharp: 0},
			  3: {d: 0, f: 0, a: 0, csharp: 0},
			  4: {d: 0, f: 0, a: 0, csharp: 0},
			  5: {d: 0, f: 0, a: 0, csharp: 0},
			  6: {d: 0, f: 0, a: 0, csharp: 0},
			  7: {d: 0, f: 0, a: 0, csharp: 0}
			},
		kick_slider: 99,
		snare_slider: 99,
		high_hat_slider: 99,
		high_hat_open_slider: 99,
		clap_slider: 99,
		tom_slider: 99,
		cowbell_slider: 99,
		shaker_slider: 99,
		kick_knob: 0,
		snare_knob: 0,
		high_hat_knob: 0,
		high_hat_open_knob: 0,
		clap_knob: 0,
		tom_knob: 0,
		cowbell_knob: 0,
		shaker_knob: 0
	};

io.on('connection', function(socket) {
	var addedUser = false;

	socket.emit("currentState", currentState);
	socket.emit("updateState", currentState);

	// socket.broadcast.emit('getCurrentState');

	socket.on('currentState', function(data){
		socket.broadcast.emit('updateState', data);
		socket.emit('updateState', data);
	})

	// when the client emits 'push' click on the object returned
	socket.on('pushPlay', function(data){
		if (currentState.play === 1) {
			currentState.play = 0;
			currentState.currentStep = 0;
		} else { currentState.play = 1 }
		socket.broadcast.emit("updateState", currentState);
		socket.emit("updateState", currentState);
		// console.log("pushPlay");
	});

	// when the client emits 'pushSeq' this listens and executes
	socket.on('pushSeq', function(data){
		// if currentState.

		var array = data.array;
		var step_position = data.name;
		if (currentState[array][step_position] === 1) {
			currentState[array][step_position] = 0
		} else { currentState[array][step_position] = 1}
		socket.emit("updateState", currentState);
		socket.broadcast.emit("updateState", currentState);

		// debugger;
		// var array_name = data.array
		// var step_position = data.name
		// if (currentState.array_name.step_position === 0) {
		// 	currentState.array_name.step_position = 1;
		// } else if (currentState.array_name.step_position === 1) {
		// 	currentState.array_name.step_position = 0;
		// }
	});

	// socket.emit('pushSynth', {current_synth_hash: synth_hash, note: App.Machine[name].sound, position: App.Machine[name].step_position});


	// when the client emits 'pushSeq' this listens and executes
	socket.on('pushSynth', function(data){
		// if currentState.
		console.log(data);
		var current_hash = data.current_synth_hash;
		var step_position = data.position;
		if (currentState[current_hash][step_position][data.note] === 1) {
			currentState[current_hash][step_position][data.note] = 0
		} else { currentState[current_hash][step_position][data.note] = 1}
		console.log(currentState[current_hash]);
		socket.emit("updateState", currentState);
		socket.broadcast.emit("updateState", currentState);

		// debugger;
		// var array_name = data.array
		// var step_position = data.name
		// if (currentState.array_name.step_position === 0) {
		// 	currentState.array_name.step_position = 1;
		// } else if (currentState.array_name.step_position === 1) {
		// 	currentState.array_name.step_position = 0;
		// }
	});

	socket.on('sliderMove', function(data){
		// console.log(data);
		var slider = data.name;
		// console.log(currentState[slider]);
		currentState[slider] = data.position;
		// console.log(currentState[slider]);
		// socket.emit("updateState", currentState);
		socket.broadcast.emit("updateState", currentState);
	})

	socket.on('knobMove', function(data){
		// console.log(data);
		var knob = data.name;
		// console.log(currentState[slider]);
		currentState[knob] = data.position;
		// console.log(currentState[knob]);
		socket.emit("updateState", currentState);
		socket.broadcast.emit("updateState", currentState);
	})

	socket.on('nextStep', function(data) {
		var current_step = data['passed_step'];
		var current_visible_length = data[current_visible_length];
		if (current_step === 7 ){
			currentState.currentStep = 0;
		} else {
			currentState.currentStep = current_step + 1;
		}
		socket.emit("updateState", currentState);
		socket.broadcast.emit("updateState", currentState);
	})

	// when the client emits 'new message', this listens and executes
	socket.on('new message', function(data) {
		// we tell the client to execute 'new message'
		socket.broadcast.emit('new message', {
			username: socket.username,
			message: data
		});
	});

	// when the client emits 'add user', this listens and executes
	socket.on('add user', function(username) {
		// we store the username in the socket session for this client
		socket.username = username;
		// add the client's username to the global list
		usernames[username] = username;
		++numUsers;
		addedUser = true;
		socket.emit('login', {
			numUsers: numUsers
		});
		// echo globally (all clients) that a person has connected
		socket.broadcast.emit('user joined', {
			username: socket.username,
			numUsers: numUsers
		});
	});

	// when the client emits 'typing', we broadcast it to others
	socket.on('typing', function() {
		socket.broadcast.emit('typing', {
			username: socket.username
		});
	});

	// when the client emits 'stop typing', we broadcast it to others
	socket.on('stop typing', function() {
		socket.broadcast.emit('stop typing', {
			username: socket.username
		});
	});

	// when the user disconnects.. perform this
	socket.on('disconnect', function() {
		// remove the username from the global usernames list
		if (addedUser) {
			delete usernames[socket.username];
			--numUsers;

			// echo globally that this client has left
			socket.broadcast.emit('user left', {
				username: socket.username,
				numUsers: numUsers
			});
		}
	});

	socket.on('change color', function(data) {
		// console.log(data);
		io.emit("buttonPushed", data);
		});
	});
