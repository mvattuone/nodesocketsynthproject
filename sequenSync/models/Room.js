var mongoose = require('mongoose');

var RoomSchema = new mongoose.Schema({
	name: { type: String, default: "default" },
	play: { type: Boolean, default: true },
	currentStep: { type: Number, default: 0 },
	kick: { type: Array, default: [0,0,0,0,0,0,0,0] },
	snare: { type: Array, default: [0,0,0,0,0,0,0,0] },
	hh: { type: Array, default: [0,0,0,0,0,0,0,0] },
	hho: { type: Array, default: [0,0,0,0,0,0,0,0] },
	updated_at: { type: Date, default: Date.now },
})


module.exports = mongoose.model('Room', RoomSchema);