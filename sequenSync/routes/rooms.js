var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Room = require('../models/Room.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Room.find(function (err, rooms) {
  	if (err) return next(err);
  	res.json(rooms);
  });
});

module.exports = router;
