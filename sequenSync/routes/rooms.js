var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Room = require('../models/Room.js');

// GET /rooms (Index)
router.get('/', function(req, res, next) {
  Room.find(function (err, rooms) {
  	if (err) return next(err);
  	res.json(rooms);
  });
});

// POST to /rooms (Create)
router.post('/', function(req, res, next) {
	Room.create(req.body, function (err, room) {
		if (err) return next(err);
		res.json(room);
	});
});

// GET /rooms/:id (Show)
router.get('/:id', function(req, res, next) {
	Room.findById(req.params.id, function (err, room) {
		if (err) return next(err);
		res.json(room);
	});
});

// PUT /rooms/:id (Update)
router.put('/:id', function(req, res, next) {
	Room.findByIdAndUpdate(req.params.id, req.body, function (err, room) {
		if (err) return next(err);
		res.json(room);
	});
});

// DELETE /rooms/:id
router.delete('/:id', function(req, res, next) {
	Room.findByIdAndRemove(req.params.id, req.body, function(err, room) {
		if (err) return next(err);
		res.json(room);
	});
});

module.exports = router;
