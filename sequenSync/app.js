var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var rooms = require("./routes/rooms");

var app = express();


// mongoose 
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sequenSync', function(err) {
  if(err) {
    console.log('connection error', err);
  } else {
    console.log('connection successful');
  }
});

// create a test room

var RoomSchema = new mongoose.Schema({
    name: String,
    play: Boolean,
    currentStep: Number,
    kick: Array,
    snare: Array,
    hh: Array,
    hho: Array,
    updated_at: { type: Date, default: Date.now },
});

var Room = mongoose.model('Room', RoomSchema);

var darkroom = new Room({
    name: 'darkroom',
    play: false,
    currentStep: 5
})
darkroom.save(function(err) {
    if (err)
        console.log(err);
    else
        console.log(darkroom);
});

// view engine setup
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
app.use('/:name', rooms);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

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


module.exports = app;