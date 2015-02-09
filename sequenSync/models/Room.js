var mongoose = require('mongoose');

var RoomSchema = new mongoose.Schema({
	name: String,
	play: Boolean,
	currentStep: Number,
	kick: Array,
	snare: Array,
	hh: Array,
	hho: Array,
	updated_at: { type: Date, default: Date.now },
})


module.exports = mongoose.model('Room', RoomSchema);