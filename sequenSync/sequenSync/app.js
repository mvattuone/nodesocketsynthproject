/////////////////////////
// Module dependencies //
/////////////////////////

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var Room = require('./models/Room.js');


var routes = require('./routes/index');
var rooms = require('./routes/rooms');

var app = express();
app.engine('html', require('ejs').renderFile);
var server =  require('http').createServer(app);
var io = require('socket.io', { rememberTransport: false, transports: ['WebSocket', 'Flash Socket', 'AJAX long-polling'] })(server);
var port = process.env.PORT || 8080;
var mongoose = require('mongoose');

////////////////////////////////
// Mongoose (MongoDB) Connect //
////////////////////////////////

mongoose.connect('mongodb://localhost/sequenSync', function(err) {
  if(err) {
    console.log('connection error', err);
  } else {
    console.log('connection successful');
  }
});

///////////////////////
// view engine setup //
///////////////////////

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// rooms routes
app.use('/rooms', rooms);
// redirect all random paths to index

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

////////////////////
// Error handlers //
////////////////////

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

////////////////////////////
// log server listen port //
////////////////////////////

server.listen(port, function() {
    console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(__dirname + '/public'));

/////////////////////////////////////
// DAW state data living on Server //
/////////////////////////////////////

app.roomname;
var room_id;
var usernames = {};
var numUsers = 0;
var currentState = {
    name: '',
    room_id: 0,
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

///////////////////////////////////
// Socket Listeners and Emitters //
///////////////////////////////////

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
        console.log('yo');
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
        //  currentState.array_name.step_position = 1;
        // } else if (currentState.array_name.step_position === 1) {
        //  currentState.array_name.step_position = 0;
        // }
    });

    // when the client emits 'pushSynth' this listens and executes
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
        //  currentState.array_name.step_position = 1;
        // } else if (currentState.array_name.step_position === 1) {
        //  currentState.array_name.step_position = 0;
        // }
    });

    socket.on('reset', function(data){
        console.log("reset");
        currentState.play = 0;
        currentState.currentStep =  0;
        currentState.kick =  [0, 0, 0, 0, 0, 0, 0, 0];
        currentState.snare =  [0, 0, 0, 0, 0, 0, 0, 0];
        currentState.hh =  [0, 0, 0, 0, 0, 0, 0, 0];
        currentState.hho =  [0, 0, 0, 0, 0, 0, 0, 0];
        currentState.clap =  [0, 0, 0, 0, 0, 0, 0, 0];
        currentState.tom =  [0, 0, 0, 0, 0, 0, 0, 0];
        currentState.cowbell =  [0, 0, 0, 0, 0, 0, 0, 0];
        currentState.shaker =  [0, 0, 0, 0, 0, 0, 0, 0];
        currentState.bass =  {
          0: {d: 0, f: 0, a: 0, csharp: 0},
          1: {d: 0, f: 0, a: 0, csharp: 0},
          2: {d: 0, f: 0, a: 0, csharp: 0},
          3: {d: 0, f: 0, a: 0, csharp: 0},
          4: {d: 0, f: 0, a: 0, csharp: 0},
          5: {d: 0, f: 0, a: 0, csharp: 0},
          6: {d: 0, f: 0, a: 0, csharp: 0},
          7: {d: 0, f: 0, a: 0, csharp: 0}
        };
        currentState.key = {
          0: {d: 0, f: 0, a: 0, csharp: 0},
          1: {d: 0, f: 0, a: 0, csharp: 0},
          2: {d: 0, f: 0, a: 0, csharp: 0},
          3: {d: 0, f: 0, a: 0, csharp: 0},
          4: {d: 0, f: 0, a: 0, csharp: 0},
          5: {d: 0, f: 0, a: 0, csharp: 0},
          6: {d: 0, f: 0, a: 0, csharp: 0},
          7: {d: 0, f: 0, a: 0, csharp: 0}
        };
        socket.emit("updateState", currentState);
        socket.broadcast.emit("updateState", currentState);
    })

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
            numUsers: numUsers,
            name: currentState.name,
        });
        console.log(currentState.name);
        // echo globally (all clients) that a person has connected
        socket.broadcast.emit('user joined', {
            username: socket.username,
            numUsers: numUsers
        });
    });

    socket.on('save', function() {
      var params = {
        name: currentState.name,
        play: currentState.play,
        currentStep: currentState.currentStep,
        kick: currentState.kick,
        snare: currentState.snare,
        hh: currentState.hh,
        hho: currentState.hho,
        clap: currentState.clap,
        tom: currentState.tom,
        cowbell: currentState.cowbell,
        shaker: currentState.shaker,
        bass: currentState.bass,
        key: currentState.key,
        kick_slider: currentState.kick_slider,
        snare_slider: currentState.snare_slider,
        high_hat_slider: currentState.high_hat_slider,
        high_hat_open_slider: currentState.high_hat_open_slider,
        clap_slider: currentState.clap_slider,
        tom_slider: currentState.tom_slider,
        cowbell_slider: currentState.cowbell_slider,
        shaker_slider: currentState.shaker_slider,
        kick_knob: currentState.kick_knob,
        snare_knob: currentState.snare_knob,
        high_hat_knob: currentState.high_hat_knob,
        high_hat_open_knob: currentState.high_hat_open_knob,
        clap_knob: currentState.clap_knob,
        tom_knob: currentState.tom_knob,
        cowbell_knob: currentState.cowbell_knob,
        shaker_knob: currentState.shaker_knob,
      }
      console.log("save button pushed");
      console.log(currentState.room_id);
        Room.findByIdAndUpdate(currentState.room_id, params, function (err, room) {
          if (err) return next(err);
          console.log("Saved/Updated Room:"+room);
        });
    });

    socket.on('join or create room', function(roomname) {
      serverRoomname = roomname;
      console.log(serverRoomname);
      Room.findOne({name: roomname}, function(err, room) {
        if (err) next(err);
        if (!room || room.length === 0) {
          Room.create({name: roomname}, function(err, room) {
            if (err) next(err);
            console.log("CREATED ROOM:"+roomname);
            console.log("ROOM:"+room);
          });

        }
        else {
            currentState.name = room.name;
            currentState.room_id = room._id;
            currentState.play = room.play;
            currentState.currentStep = room.currentStep;
            currentState.kick = room.kick;
            currentState.snare = room.snare;
            currentState.hh = room.hh;
            currentState.hho = room.hho;
            currentState.clap = room.clap;
            currentState.tom = room.tom;
            currentState.cowbell = room.cowbell;
            currentState.shaker = room.shaker;
            currentState.bass = room.bass;
            currentState.key = room.key;
            currentState.kick_slider = room.kick_slider;
            currentState.snare_slider = room.snare_slider;
            currentState.high_hat_slider = room.high_hat_slider;
            currentState.high_hat_open_slider = room.high_hat_open_slider;
            currentState.clap_slider = room.clap_slider;
            currentState.tom_slider = room.tom_slider;
            currentState.cowbell_slider = room.cowbell_slider;
            currentState.shaker_slider = room.shaker_slider;
            currentState.kick_knob = room.kick_knob;
            currentState.snare_knob = room.snare_knob;
            currentState.high_hat_knob = room.high_hat_knob;
            currentState.high_hat_open_knob = room.high_hat_open_knob;
            currentState.clap_knob = room.clap_knob;
            currentState.tom_knob = room.tom_knob;
            currentState.cowbell_knob = room.cowbell_knob;
            currentState.shaker_knob = room.shaker_knob;
            socket.emit("updateState", currentState);
            socket.broadcast.emit("updateState", currentState);
        }
      })
    })

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



module.exports = app;
