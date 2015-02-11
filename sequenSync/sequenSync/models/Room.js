var mongoose = require('mongoose');
var Mixed = mongoose.Schema.Types.Mixed;

var RoomSchema = new mongoose.Schema({
	name: { type: String, default: "default" },
	play: { type: Number, default: 0 },
	currentStep: { type: Number, default: 0 },
	kick: { type: Array, default: [0,0,0,0,0,0,0,0] },
	snare: { type: Array, default: [0,0,0,0,0,0,0,0] },
	hh: { type: Array, default: [0,0,0,0,0,0,0,0] },
	hho: { type: Array, default: [0,0,0,0,0,0,0,0] },
	clap: { type: Array, default: [0,0,0,0,0,0,0,0] },
	tom: { type: Array, default: [0,0,0,0,0,0,0,0] },
	cowbell: { type: Array, default: [0,0,0,0,0,0,0,0] },
	shaker: { type: Array, default: [0,0,0,0,0,0,0,0] },
	bass: { type: Mixed, default: {
										0: {d: 0, f: 0, a: 0, csharp: 0},
										1: {d: 0, f: 0, a: 0, csharp: 0},
										2: {d: 0, f: 0, a: 0, csharp: 0},
										3: {d: 0, f: 0, a: 0, csharp: 0},
										4: {d: 0, f: 0, a: 0, csharp: 0},
										5: {d: 0, f: 0, a: 0, csharp: 0},
										6: {d: 0, f: 0, a: 0, csharp: 0},
										7: {d: 0, f: 0, a: 0, csharp: 0}
									},
								},
	key: { type: Mixed, default: {
										0: {d: 0, f: 0, a: 0, csharp: 0},
										1: {d: 0, f: 0, a: 0, csharp: 0},
										2: {d: 0, f: 0, a: 0, csharp: 0},
										3: {d: 0, f: 0, a: 0, csharp: 0},
										4: {d: 0, f: 0, a: 0, csharp: 0},
										5: {d: 0, f: 0, a: 0, csharp: 0},
										6: {d: 0, f: 0, a: 0, csharp: 0},
										7: {d: 0, f: 0, a: 0, csharp: 0}
									},
								},
	kick_slider: { type: Number, default: 99 },
	snare_slider: { type: Number, default: 99 },
	high_hat_slider: { type: Number, default: 99 },
	high_hat_open_slider: { type: Number, default: 99 },
	clap_slider: { type: Number, default: 99 },
	tom_slider: { type: Number, default: 99 },
	cowbell_slider: { type: Number, default: 99 },
	shaker_slider: { type: Number, default: 99 },
	kick_knob: { type: Number, default: 0 },
	snare_knob: { type: Number, default: 0 },
	high_hat_knob: { type: Number, default: 0 },
	clap_knob: { type: Number, default: 0 },
	tom_knob: { type: Number, default: 0 },
	cowbell_knob: { type: Number, default: 0 },
	shaker_knob: { type: Number, default: 0 },
	updated_at: { type: Date, default: Date.now },
});


module.exports = mongoose.model('Room', RoomSchema);
