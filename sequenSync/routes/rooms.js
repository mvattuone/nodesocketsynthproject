var express = require('express');
var router = express.Router();

var mongoose = require("mongoose");
var Room = require("../models/Room.js");

/* GET users listing. */
router.get('/:name', function(req, res, next) {
  Room.find(function(err, room) {
  	if (err) return next(err);
  	res.json(room)
  });
});

module.exports = router;
