<<<<<<< HEAD
function drawMachine(){

	// Parameters

	var socket = io();

	// Socket Listeners

	socket.on("Seqclick", function(data) {
		App.Machine[data].clickSocket();
	});

	socket.on("getCurrentState", function(){
		var snare_buttons_state = snare_buttons.map(function(snare_button){
			return snare_button.state;
		})
		var kick_buttons_state = kick_buttons.map(function(kick_button){
			return kick_button.state;
		})
		var high_hat_buttons_state = high_hat_buttons.map(function(high_hat_button){
			return high_hat_button.state;
		})
		var high_hat_open_buttons_state = high_hat_open_buttons.map(function(high_hat_open_button){
			return high_hat_open_button.state;
		})
		var clap_buttons_state = clap_buttons.map(function(clap_button){
			return clap_button.state;
		})
		var tom_buttons_state = tom_buttons.map(function(tom_button){
			return tom_button.state;
		})
		var cowbell_buttons_state = cowbell_buttons.map(function(cowbell_button){
			return cowbell_button.state;
		})
		var shaker_buttons_state = shaker_buttons.map(function(shaker_button){
			return shaker_button.state;
		})
		var data = { snare_buttons_state: snare_buttons_state,
								kick_buttons_state: kick_buttons_state,
								high_hat_buttons_state: high_hat_buttons_state,
								high_hat_open_buttons_state: high_hat_open_buttons_state,
								clap_buttons_state: clap_buttons_state,
								tom_buttons_state: tom_buttons_state,
								cowbell_buttons_state: cowbell_buttons_state,
								shaker_buttons_state: shaker_buttons_state,
								kick_slider_state: kick_slider.state,
									snare_slider_state: snare_slider.state,
									high_hat_slider_state: high_hat_slider.state,
									high_hat_open_slider_state: high_hat_open_slider.state,
								clap_slider_state: clap_slider.state,
								tom_slider_state: tom_slider.state,
								cowbell_slider_state: cowbell_slider.state,
								shaker_slider_state: shaker_slider.state
							};
		socket.emit("currentState", data);
	});

	socket.on('updateState', function(data){

		var play = data.play;
		if (play !== App.Machine.play.state) {
			App.Machine.play.clickSocket();
		}

		var snare = data.snare;
		snare.forEach(function(state, index){
			if(state !== snare_buttons[index].state){
					snare_buttons[index].clickSocket();
			}
		})

		var kick = data.kick;
		kick.forEach(function(state, index){
			if(state !== kick_buttons[index].state){
					kick_buttons[index].clickSocket();
			}
		})

		var high_hat = data.hh;
		high_hat.forEach(function(state, index){
			if(state !== high_hat_buttons[index].state){
					high_hat_buttons[index].clickSocket();
			}
		})

		var high_hat_open = data.hho;
		high_hat_open.forEach(function(state, index){
			if(state !== high_hat_open_buttons[index].state){
					high_hat_open_buttons[index].clickSocket();
			}
		})

		var clap = data.clap;
		clap.forEach(function(state, index){
			if(state !== clap_buttons[index].state){
					clap_buttons[index].clickSocket();
			}
		})

		var tom = data.tom;
		tom.forEach(function(state, index){
			if(state !== tom_buttons[index].state){
					tom_buttons[index].clickSocket();
			}
		})

		var cowbell = data.cowbell;
		cowbell.forEach(function(state, index){
			if(state !== cowbell_buttons[index].state){
					cowbell_buttons[index].clickSocket();
			}
		})

		var shaker = data.shaker;
		shaker.forEach(function(state, index){
			if(state !== shaker_buttons[index].state){
					shaker_buttons[index].clickSocket();
			}
		})

		if (App.Machine.kick_slider.state !== data.kick_slider){
			App.Machine.kick_slider.setPosition(data.kick_slider);
		}

		if (App.Machine.snare_slider.state !== data.snare_slider){
			App.Machine.snare_slider.setPosition(data.snare_slider);
		}

		if (App.Machine.high_hat_slider.state !== data.high_hat_slider){
			App.Machine.high_hat_slider.setPosition(data.high_hat_slider);
		}

		if (App.Machine.high_hat_open_slider.state !== data.high_hat_open_slider){
			App.Machine.high_hat_open_slider.setPosition(data.high_hat_open_slider);
		}

		if (App.Machine.clap_slider.state !== data.clap_slider){
			App.Machine.clap_slider.setPosition(data.clap_slider);
		}

		if (App.Machine.tom_slider.state !== data.tom_slider){
			App.Machine.tom_slider.setPosition(data.tom_slider);
		}

		if (App.Machine.cowbell_slider.state !== data.cowbell_slider){
			App.Machine.cowbell_slider.setPosition(data.cowbell_slider);
		}

		if (App.Machine.shaker_slider.state !== data.shaker_slider){
			App.Machine.shaker_slider.setPosition(data.shaker_slider);
		}

		if (App.Machine.kick_knob.state !== data.kick_knob){
			App.Machine.kick_knob.setPosition(data.kick_knob);
		}

		if (App.Machine.snare_knob.state !== data.snare_knob){
			App.Machine.snare_knob.setPosition(data.snare_knob);
		}

		if (App.Machine.high_hat_knob.state !== data.high_hat_knob){
			App.Machine.high_hat_knob.setPosition(data.high_hat_knob);
		}

		if (App.Machine.high_hat_open_knob.state !== data.high_hat_open_knob){
			App.Machine.high_hat_open_knob.setPosition(data.high_hat_open_knob);
		}

		if (App.Machine.clap_knob.state !== data.clap_knob){
			App.Machine.clap_knob.setPosition(data.clap_knob);
		}

		if (App.Machine.tom_knob.state !== data.tom_knob){
			App.Machine.tom_knob.setPosition(data.tom_knob);
		}

		if (App.Machine.cowbell_knob.state !== data.cowbell_knob){
			App.Machine.cowbell_knob.setPosition(data.cowbell_knob);
		}

		if (App.Machine.shaker_knob.state !== data.shaker_knob){
			App.Machine.shaker_knob.setPosition(data.shaker_knob);
		}

		// bass_buttons = data.bass;

		_.each(data.bass, function(element, index){
			_.each(element, function(element_2, index_2){
				if(bass_buttons[index][index_2].state !== element_2){
					bass_buttons[index][index_2].clickSocket();
				};
			})
			// console.log(list);
		});

		_.each(data.key, function(element, index){
			_.each(element, function(element_2, index_2){
				if(key_buttons[index][index_2].state !== element_2){
					key_buttons[index][index_2].clickSocket();
				};
			})
			// console.log(list);
		});

		// getting current status back from the bass hash on the server,
		// set the data on client side to be the same by iterating through and
		// doing 'click socket' on the appropriate buttons

	});

	var bpm = 128;
	var quarter_note = calculateQuarterNote(bpm);
	var sixteenth_note = calculateSixteenthNote(quarter_note);

	var play_button = [];

	var snare_buttons = [];
	var kick_buttons = [];
	var high_hat_buttons = [];
	var high_hat_open_buttons = [];
	var clap_buttons = [];
	var tom_buttons = [];
	var cowbell_buttons = [];
	var shaker_buttons = [];
	var bass_buttons =  { 0:{},
												1:{},
												2:{},
												3:{},
												4:{},
												5:{},
												6:{},
												7:{},
												8:{}
											};
	var key_buttons  =  { 0:{},
												1:{},
												2:{},
												3:{},
												4:{},
												5:{},
												6:{},
												7:{},
												8:{}
											};
	var selectors = [];
	var synth_selectors = [];
	var sliders = [];

	var current_step = 0;
	var current_visible = kick_buttons;

	// Colors

	var red = 0xf15a65;
	var green = 0x8cc540;
	var grey = 0x778899;
	var purple = 0x6e2b90;
	var blue = 0x00baed;
	var black = 0xa263b;
	var yellow = 0xfbab1e;
	var yellow_highlight = 0xf3712e;

	// Lighting

	var ambientLight = new THREE.AmbientLight( 0x404040 ); // soft white light
	scene.add( ambientLight );

	var directionalLight_top = new THREE.DirectionalLight( 0xffffff, 2 );
	directionalLight_top.position.set( -40, 20, 20 );
	directionalLight_top.castShadow = true;
	directionalLight_top.shadowDarkness = .5;

	var d = 15;
	directionalLight_top.shadowCameraLeft = -d;
	directionalLight_top.shadowCameraRight = d;
	directionalLight_top.shadowCameraTop = d;
	directionalLight_top.shadowCameraBottom = -d;
	directionalLight_top.shadowCameraNear	= 10;
	directionalLight_top.shadowCameraFar = 100;
	directionalLight_top.shadowMapWidth = 2048;
	directionalLight_top.shadowMapHeight = 2048;
	scene.add( directionalLight_top );

	// Build Table and Players

	drawBackground();
	drawTableObjects();
	drawDrumMachine(-14);
	drawSynth(0);

	play = drawPlay(-22, 0, 0, "play");


	function drawDrumMachine(position){

		drawDrumMachineBase();
		reset_button = drawReset(-22, 6.25, 0, "reset_button");
		save_button = drawSave(-22, 5, 0, "save_button");

		kick_selector = drawSelector(-20, 1, 0, "kick_selector", kick_buttons);
		kick_button_1 = drawButton(-20, 0, 0, "kick_button_1", 0, getKick, 'kick', kick_buttons, "kick");
		kick_button_2 = drawButton(-18, 0, 0, "kick_button_2", 1, getKick, 'kick', kick_buttons, "kick");
		kick_button_3 = drawButton(-16, 0, 0, "kick_button_3", 2, getKick, 'kick', kick_buttons, "kick");
		kick_button_4 = drawButton(-14, 0, 0, "kick_button_4", 3, getKick, 'kick', kick_buttons, "kick");
		kick_button_5 = drawButton(-12, 0, 0, "kick_button_5", 4, getKick, 'kick', kick_buttons, "kick");
		kick_button_6 = drawButton(-10, 0, 0, "kick_button_6", 5, getKick, 'kick', kick_buttons, "kick");
		kick_button_7 = drawButton(-8, 0, 0, "kick_button_7", 6, getKick, 'kick', kick_buttons, "kick");
		kick_button_8 = drawButton(-6, 0, 0, "kick_button_8", 7, getKick, 'kick', kick_buttons, "kick");
		kick_slider = drawSlider(-20, 1.75,0, "kick_slider", "slider");
		kick_knob = drawKnob(-20, 6.25 ,0, "kick_knob", "knob");

		snare_selector = drawSelector(-18, 1, 0, "snare_selector", snare_buttons);
		snare_button_1 = drawButton(-20, 0, 0, "snare_button_1", 0,  getSnare, 'snare', snare_buttons, "snare");
		snare_button_2 = drawButton(-18, 0, 0, "snare_button_2", 1, getSnare, 'snare', snare_buttons, "snare");
		snare_button_3 = drawButton(-16, 0, 0, "snare_button_3", 2, getSnare, 'snare', snare_buttons, "snare");
		snare_button_4 = drawButton(-14, 0, 0, "snare_button_4", 3, getSnare, 'snare', snare_buttons, "snare");
		snare_button_5 = drawButton(-12, 0, 0, "snare_button_5", 4, getSnare, 'snare', snare_buttons, "snare");
		snare_button_6 = drawButton(-10, 0, 0, "snare_button_6", 5, getSnare, 'snare', snare_buttons, "snare");
		snare_button_7 = drawButton(-8, 0, 0, "snare_button_7", 6, getSnare, 'snare', snare_buttons, "snare");
		snare_button_8 = drawButton(-6, 0, 0, "snare_button_8", 7, getSnare, 'snare', snare_buttons, "snare");
		snare_slider = drawSlider(-18, 1.75,0, "snare_slider", "slider");
		snare_knob = drawKnob(-18, 6.25, 0, "snare_knob", "knob");

		high_hat_selector = drawSelector(-16, 1, 0, "high_hat_selector", high_hat_buttons);
		high_hat_button_1 = drawButton(-20, 0, 0, "high_hat_button_1", 0, getHighHat, 'high_hat', high_hat_buttons, "hh");
		high_hat_button_2 = drawButton(-18, 0, 0, "high_hat_button_2", 1, getHighHat, 'high_hat', high_hat_buttons, "hh");
		high_hat_button_3 = drawButton(-16, 0, 0, "high_hat_button_3", 2, getHighHat, 'high_hat', high_hat_buttons, "hh");
		high_hat_button_4 = drawButton(-14, 0, 0, "high_hat_button_4", 3, getHighHat, 'high_hat', high_hat_buttons, "hh");
		high_hat_button_5 = drawButton(-12, 0, 0, "high_hat_button_5", 4, getHighHat, 'high_hat', high_hat_buttons, "hh");
		high_hat_button_6 = drawButton(-10, 0, 0, "high_hat_button_6", 5, getHighHat, 'high_hat', high_hat_buttons, "hh");
		high_hat_button_7 = drawButton(-8, 0, 0, "high_hat_button_7", 6, getHighHat, 'high_hat', high_hat_buttons, "hh");
		high_hat_button_8 = drawButton(-6, 0, 0, "high_hat_button_8", 7, getHighHat, 'high_hat', high_hat_buttons, "hh");
		high_hat_slider = drawSlider(-16, 1.75,0, "high_hat_slider", "slider");
		high_hat_knob = drawKnob(-16, 6.25, 0, "high_hat_knob", "knob");

		high_hat_open_selector = drawSelector(-14, 1, 0, "high_hat_open_selector", high_hat_open_buttons);
		high_hat_open_button_1 = drawButton(-20, 0, 0, "high_hat_open_button_1", 0, getHighHatOpen, 'high_hat_open', high_hat_open_buttons, "hho");
		high_hat_open_button_2 = drawButton(-18, 0, 0, "high_hat_open_button_2", 1, getHighHatOpen, 'high_hat_open', high_hat_open_buttons, "hho");
		high_hat_open_button_3 = drawButton(-16, 0, 0, "high_hat_open_button_3", 2, getHighHatOpen, 'high_hat_open', high_hat_open_buttons, "hho");
		high_hat_open_button_4 = drawButton(-14, 0, 0, "high_hat_open_button_4", 3, getHighHatOpen, 'high_hat_open', high_hat_open_buttons, "hho");
		high_hat_open_button_5 = drawButton(-12, 0, 0, "high_hat_open_button_5", 4, getHighHatOpen, 'high_hat_open', high_hat_open_buttons, "hho");
		high_hat_open_button_6 = drawButton(-10, 0, 0, "high_hat_open_button_6", 5, getHighHatOpen, 'high_hat_open', high_hat_open_buttons, "hho");
		high_hat_open_button_7 = drawButton(-8, 0, 0, "high_hat_open_button_7", 6, getHighHatOpen, 'high_hat_open', high_hat_open_buttons, "hho");
		high_hat_open_button_8 = drawButton(-6, 0, 0, "high_hat_open_button_8", 7, getHighHatOpen, 'high_hat_open', high_hat_open_buttons, "hho");
		high_hat_open_slider = drawSlider(-14, 1.75,0, "high_hat_open_slider", "slider");
		high_hat_open_knob = drawKnob(-14, 6.25, 0, "high_hat_open_knob", "knob");

		clap_selector = drawSelector(-12, 1, 0, "clap_selector", clap_buttons);
		clap_button_1 = drawButton(-20, 0, 0, "clap_button_1", 0, getClap, 'clap', clap_buttons, "clap");
		clap_button_2 = drawButton(-18, 0, 0, "clap_button_2", 1, getClap, 'clap', clap_buttons, "clap");
		clap_button_3 = drawButton(-16, 0, 0, "clap_button_3", 2, getClap, 'clap', clap_buttons, "clap");
		clap_button_4 = drawButton(-14, 0, 0, "clap_button_4", 3, getClap, 'clap', clap_buttons, "clap");
		clap_button_5 = drawButton(-12, 0, 0, "clap_button_5", 4, getClap, 'clap', clap_buttons, "clap");
		clap_button_6 = drawButton(-10, 0, 0, "clap_button_6", 5, getClap, 'clap', clap_buttons, "clap");
		clap_button_7 = drawButton(-8, 0, 0, "clap_button_7", 6, getClap, 'clap', clap_buttons, "clap");
		clap_button_8 = drawButton(-6, 0, 0, "clap_button_8", 7, getClap, 'clap', clap_buttons, "clap");
		clap_slider = drawSlider(-12, 1.75,0, "clap_slider", "slider");
		clap_knob = drawKnob(-12, 6.25, 0, "clap_knob", "knob");

		tom_selector = drawSelector(-10, 1, 0, "tom_selector", tom_buttons);
		tom_button_1 = drawButton(-20, 0, 0, "tom_button_1", 0, getTom, 'tom', tom_buttons, "tom");
		tom_button_2 = drawButton(-18, 0, 0, "tom_button_2", 1, getTom, 'tom', tom_buttons, "tom");
		tom_button_3 = drawButton(-16, 0, 0, "tom_button_3", 2, getTom, 'tom', tom_buttons, "tom");
		tom_button_4 = drawButton(-14, 0, 0, "tom_button_4", 3, getTom, 'tom', tom_buttons, "tom");
		tom_button_5 = drawButton(-12, 0, 0, "tom_button_5", 4, getTom, 'tom', tom_buttons, "tom");
		tom_button_6 = drawButton(-10, 0, 0, "tom_button_6", 5, getTom, 'tom', tom_buttons, "tom");
		tom_button_7 = drawButton(-8, 0, 0, "tom_button_7", 6, getTom, 'tom', tom_buttons, "tom");
		tom_button_8 = drawButton(-6, 0, 0, "tom_button_8", 7, getTom, 'tom', tom_buttons, "tom");
		tom_slider = drawSlider(-10, 1.75,0, "tom_slider", "slider");
		tom_knob = drawKnob(-10, 6.25, 0, "tom_knob", "knob");

		cowbell_selector = drawSelector(-8, 1, 0, "cowbell_selector", cowbell_buttons);
		cowbell_button_1 = drawButton(-20, 0, 0, "cowbell_button_1", 0, getCowbell, 'cowbell', cowbell_buttons, "cowbell");
		cowbell_button_2 = drawButton(-18, 0, 0, "cowbell_button_2", 1, getCowbell, 'cowbell', cowbell_buttons, "cowbell");
		cowbell_button_3 = drawButton(-16, 0, 0, "cowbell_button_3", 2, getCowbell, 'cowbell', cowbell_buttons, "cowbell");
		cowbell_button_4 = drawButton(-14, 0, 0, "cowbell_button_4", 3, getCowbell, 'cowbell', cowbell_buttons, "cowbell");
		cowbell_button_5 = drawButton(-12, 0, 0, "cowbell_button_5", 4, getCowbell, 'cowbell', cowbell_buttons, "cowbell");
		cowbell_button_6 = drawButton(-10, 0, 0, "cowbell_button_6", 5, getCowbell, 'cowbell', cowbell_buttons, "cowbell");
		cowbell_button_7 = drawButton(-8, 0, 0, "cowbell_button_7", 6, getCowbell, 'cowbell', cowbell_buttons, "cowbell");
		cowbell_button_8 = drawButton(-6, 0, 0, "cowbell_button_8", 7, getCowbell, 'cowbell', cowbell_buttons, "cowbell");
		cowbell_slider = drawSlider(-8, 1.75,0, "cowbell_slider", "slider");
		cowbell_knob = drawKnob(-8, 6.25, 0, "cowbell_knob", "knob");

		shaker_selector = drawSelector(-6, 1, 0, "shaker_selector", shaker_buttons);
		shaker_button_1 = drawButton(-20, 0, 0, "shaker_button_1", 0, getShaker, 'maraca', shaker_buttons, "shaker");
		shaker_button_2 = drawButton(-18, 0, 0, "shaker_button_2", 1, getShaker, 'maraca', shaker_buttons, "shaker");
		shaker_button_3 = drawButton(-16, 0, 0, "shaker_button_3", 2, getShaker, 'maraca', shaker_buttons, "shaker");
		shaker_button_4 = drawButton(-14, 0, 0, "shaker_button_4", 3, getShaker, 'maraca', shaker_buttons, "shaker");
		shaker_button_5 = drawButton(-12, 0, 0, "shaker_button_5", 4, getShaker, 'maraca', shaker_buttons, "shaker");
		shaker_button_6 = drawButton(-10, 0, 0, "shaker_button_6", 5, getShaker, 'maraca', shaker_buttons, "shaker");
		shaker_button_7 = drawButton(-8, 0, 0, "shaker_button_7", 6, getShaker, 'maraca', shaker_buttons, "shaker");
		shaker_button_8 = drawButton(-6, 0, 0, "shaker_button_8", 7, getShaker, 'maraca', shaker_buttons, "shaker");
		shaker_slider = drawSlider(-6, 1.75,0, "shaker_slider", "slider");
		shaker_knob = drawKnob(-6, 6.25, 0, "shaker_knob", "knob");

	}

	function drawSynth(position){

		drawSynthBase(position);

		bass_selector = drawSynthSelector(position+5, 6, 0, "bass_selector", bass_buttons);

		bass_button_1_d = drawSynthButton(position+2, 0, 0, "bass_button_1_d", 0, getBass, 'd', bass_buttons, "bass");
		bass_button_1_f = drawSynthButton(position+2, 1.5, 0, "bass_button_1_f", 0, getBass, 'f', bass_buttons, "bass");
		bass_button_1_a = drawSynthButton(position+2, 3, 0, "bass_button_1_a", 0, getBass, 'a', bass_buttons, "bass");
		bass_button_1_csharp = drawSynthButton(position+2, 4.5, 0, "bass_button_1_csharp", 0, getBass, 'csharp', bass_buttons, "bass");

		bass_button_2_d = drawSynthButton(position+4, 0, 0, "bass_button_2_d", 1, getBass, 'd', bass_buttons, "bass");
		bass_button_2_f = drawSynthButton(position+4, 1.5, 0, "bass_button_2_f", 1, getBass, 'f', bass_buttons, "bass");
		bass_button_2_a = drawSynthButton(position+4, 3, 0, "bass_button_2_a", 1, getBass, 'a', bass_buttons, "bass");
		bass_button_2_csharp = drawSynthButton(position+4, 4.5, 0, "bass_button_2_csharp", 1, getBass, 'csharp', bass_buttons, "bass");

		bass_button_3_d = drawSynthButton(position+6, 0, 0, "bass_button_3_d", 2, getBass, 'd', bass_buttons, "bass");
		bass_button_3_f = drawSynthButton(position+6, 1.5, 0, "bass_button_3_f", 2, getBass, 'f', bass_buttons, "bass");
		bass_button_3_a = drawSynthButton(position+6, 3, 0, "bass_button_3_a", 2, getBass, 'a', bass_buttons, "bass");
		bass_button_3_csharp = drawSynthButton(position+6, 4.5, 0, "bass_button_3_csharp", 2, getBass, 'csharp', bass_buttons, "bass");

		bass_button_4_d = drawSynthButton(position+8, 0, 0, "bass_button_4_d", 3, getBass, 'd', bass_buttons, "bass");
		bass_button_4_f = drawSynthButton(position+8, 1.5, 0, "bass_button_4_f", 3, getBass, 'f', bass_buttons, "bass");
		bass_button_4_a = drawSynthButton(position+8, 3, 0, "bass_button_4_a", 3, getBass, 'a', bass_buttons, "bass");
		bass_button_4_csharp = drawSynthButton(position+8, 4.5, 0, "bass_button_4_csharp", 3, getBass, 'csharp', bass_buttons, "bass");

		bass_button_5_d = drawSynthButton(position+10, 0, 0, "bass_button_5_d", 4, getBass, 'd', bass_buttons, "bass");
		bass_button_5_f = drawSynthButton(position+10, 1.5, 0, "bass_button_5_f", 4, getBass, 'f', bass_buttons, "bass");
		bass_button_5_a = drawSynthButton(position+10, 3, 0, "bass_button_5_a", 4, getBass, 'a', bass_buttons, "bass");
		bass_button_5_csharp = drawSynthButton(position+10, 4.5, 0, "bass_button_5_csharp", 4, getBass, 'csharp', bass_buttons, "bass");

		bass_button_6_d = drawSynthButton(position+12, 0, 0, "bass_button_6_d", 5, getBass, 'd', bass_buttons, "bass");
		bass_button_6_f = drawSynthButton(position+12, 1.5, 0, "bass_button_6_f", 5, getBass, 'f', bass_buttons, "bass");
		bass_button_6_a = drawSynthButton(position+12, 3, 0, "bass_button_6_a", 5, getBass, 'a', bass_buttons, "bass");
		bass_button_6_csharp = drawSynthButton(position+12, 4.5, 0, "bass_button_6_csharp", 5, getBass, 'csharp', bass_buttons, "bass");

		bass_button_7_d = drawSynthButton(position+14, 0, 0, "bass_button_7_d", 6, getBass, 'd', bass_buttons, "bass");
		bass_button_7_f = drawSynthButton(position+14, 1.5, 0, "bass_button_7_f", 6, getBass, 'f', bass_buttons, "bass");
		bass_button_7_a = drawSynthButton(position+14, 3, 0, "bass_button_7_a", 6, getBass, 'a', bass_buttons, "bass");
		bass_button_7_csharp = drawSynthButton(position+14, 4.5, 0, "bass_button_7_csharp", 6, getBass, 'csharp', bass_buttons, "bass");

		bass_button_8_d = drawSynthButton(position+16, 0, 0, "bass_button_8_d", 7, getBass, 'd', bass_buttons, "bass");
		bass_button_8_f = drawSynthButton(position+16, 1.5, 0, "bass_button_8_f", 7, getBass, 'f', bass_buttons, "bass");
		bass_button_8_a = drawSynthButton(position+16, 3, 0, "bass_button_8_a", 7, getBass, 'a', bass_buttons, "bass");
		bass_button_8_csharp = drawSynthButton(position+16, 4.5, 0, "bass_button_8_csharp", 7, getBass, 'csharp', bass_buttons, "bass");

		key_selector = drawSynthSelector(position+13, 6, 0, "key_selector", key_buttons);

		key_button_1_d = drawSynthButton(position+2, 0, 0, "key_button_1_d", 0, getKey, 'd', key_buttons, "key");
		key_button_1_f = drawSynthButton(position+2, 1.5, 0, "key_button_1_f", 0, getKey, 'f', key_buttons, "key");
		key_button_1_a = drawSynthButton(position+2, 3, 0, "key_button_1_a", 0, getKey, 'a', key_buttons, "key");
		key_button_1_csharp = drawSynthButton(position+2, 4.5, 0, "key_button_1_csharp", 0, getKey, 'csharp', key_buttons, "key");

		key_button_2_d = drawSynthButton(position+4, 0, 0, "key_button_2_d", 1, getKey, 'd', key_buttons, "key");
		key_button_2_f = drawSynthButton(position+4, 1.5, 0, "key_button_2_f", 1, getKey, 'f', key_buttons, "key");
		key_button_2_a = drawSynthButton(position+4, 3, 0, "key_button_2_a", 1, getKey, 'a', key_buttons, "key");
		key_button_2_csharp = drawSynthButton(position+4, 4.5, 0, "key_button_2_csharp", 1, getKey, 'csharp', key_buttons, "key");

		key_button_3_d = drawSynthButton(position+6, 0, 0, "key_button_3_d", 2, getKey, 'd', key_buttons, "key");
		key_button_3_f = drawSynthButton(position+6, 1.5, 0, "key_button_3_f", 2, getKey, 'f', key_buttons, "key");
		key_button_3_a = drawSynthButton(position+6, 3, 0, "key_button_3_a", 2, getKey, 'a', key_buttons, "key");
		key_button_3_csharp = drawSynthButton(position+6, 4.5, 0, "key_button_3_csharp", 2, getKey, 'csharp', key_buttons, "key");

		key_button_4_d = drawSynthButton(position+8, 0, 0, "key_button_4_d", 3, getKey, 'd', key_buttons, "key");
		key_button_4_f = drawSynthButton(position+8, 1.5, 0, "key_button_4_f", 3, getKey, 'f', key_buttons, "key");
		key_button_4_a = drawSynthButton(position+8, 3, 0, "key_button_4_a", 3, getKey, 'a', key_buttons, "key");
		key_button_4_csharp = drawSynthButton(position+8, 4.5, 0, "key_button_4_csharp", 3, getKey, 'csharp', key_buttons, "key");

		key_button_5_d = drawSynthButton(position+10, 0, 0, "key_button_5_d", 4, getKey, 'd', key_buttons, "key");
		key_button_5_f = drawSynthButton(position+10, 1.5, 0, "key_button_5_f", 4, getKey, 'f', key_buttons, "key");
		key_button_5_a = drawSynthButton(position+10, 3, 0, "key_button_5_a", 4, getKey, 'a', key_buttons, "key");
		key_button_5_csharp = drawSynthButton(position+10, 4.5, 0, "key_button_5_csharp", 4, getKey, 'csharp', key_buttons, "key");

		key_button_6_d = drawSynthButton(position+12, 0, 0, "key_button_6_d", 5, getKey, 'd', key_buttons, "key");
		key_button_6_f = drawSynthButton(position+12, 1.5, 0, "key_button_6_f", 5, getKey, 'f', key_buttons, "key");
		key_button_6_a = drawSynthButton(position+12, 3, 0, "key_button_6_a", 5, getKey, 'a', key_buttons, "key");
		key_button_6_csharp = drawSynthButton(position+12, 4.5, 0, "key_button_6_csharp", 5, getKey, 'csharp', key_buttons, "key");

		key_button_7_d = drawSynthButton(position+14, 0, 0, "key_button_7_d", 6, getKey, 'd', key_buttons, "key");
		key_button_7_f = drawSynthButton(position+14, 1.5, 0, "key_button_7_f", 6, getKey, 'f', key_buttons, "key");
		key_button_7_a = drawSynthButton(position+14, 3, 0, "key_button_7_a", 6, getKey, 'a', key_buttons, "key");
		key_button_7_csharp = drawSynthButton(position+14, 4.5, 0, "key_button_7_csharp", 6, getKey, 'csharp', key_buttons, "key");

		key_button_8_d = drawSynthButton(position+16, 0, 0, "key_button_8_d", 7, getKey, 'd', key_buttons, "key");
		key_button_8_f = drawSynthButton(position+16, 1.5, 0, "key_button_8_f", 7, getKey, 'f', key_buttons, "key");
		key_button_8_a = drawSynthButton(position+16, 3, 0, "key_button_8_a", 7, getKey, 'a', key_buttons, "key");
		key_button_8_csharp = drawSynthButton(position+16, 4.5, 0, "key_button_8_csharp", 7, getKey, 'csharp', key_buttons, "key");

	}

	// set initial state

	App.Machine.kick_selector.click();
	App.Machine.bass_selector.click();

	function drawTableObjects(){
		var geometry = new THREE.BoxGeometry( 1, 1, 1 );
		var material = new THREE.MeshLambertMaterial( {color: purple, side: THREE.DoubleSide, shading: THREE.FlatShading} );
		table_object = new THREE.Mesh( geometry, material );
		table_object.receiveShadow = true;
		table_object.castShadow = true;
		table_object.translateX(20.4);
		table_object.translateY(0.4);
		table_object.rotateZ(.3);
		scene.add(table_object);

		var geometry = new THREE.BoxGeometry( 1, 1, 1 );
		var material = new THREE.MeshLambertMaterial( {color: purple, side: THREE.DoubleSide, shading: THREE.FlatShading} );
		table_object_2 = new THREE.Mesh( geometry, material );
		table_object_2.receiveShadow = true;
		table_object_2.castShadow = true;
		table_object_2.translateX(22.3);
		table_object_2.translateY(2);
		table_object_2.rotateZ(0.6);
		scene.add(table_object_2);

		var geometry = new THREE.DodecahedronGeometry( 1.5);
		var material = new THREE.MeshLambertMaterial( {color: purple, side: THREE.DoubleSide, shading: THREE.FlatShading} );
		table_object_3 = new THREE.Mesh( geometry, material );
		table_object_3.receiveShadow = true;
		table_object_3.castShadow = true;
		table_object_3.translateX(-11);
		table_object_3.translateY(9);
		table_object_3.translateZ(.5);
		table_object_3.rotateZ(0.8);
		scene.add(table_object_3);

	}

	function drawBackground(){
		var geometry = new THREE.PlaneGeometry( 80, 40, 16 );
		var material = new THREE.MeshLambertMaterial( {color: 0xFFE4C4, side: THREE.DoubleSide, shading: THREE.FlatShading} );
		plane = new THREE.Mesh( geometry, material );
		plane.translateZ(0);
		// plane.translateX(0);
		// plane.translateY(3);
		plane.receiveShadow = true;
		scene.add(plane);
	}

	function drawDrumMachineBase(){
		var geometry = new THREE.BoxGeometry( 19, 9, .75 );
		var material = new THREE.MeshLambertMaterial( {color: grey, side: THREE.DoubleSide, shading: THREE.FlatShading} );
		base = new THREE.Mesh( geometry, material );
		// base.translateZ(-1);
		base.receiveShadow = true;
		base.castShadow = true;
		base.translateX(-14);
		base.translateY(3);
		scene.add(base);
		objects.push( base );

		for(i = 0; i < 8; i++){
			var geometry = new THREE.BoxGeometry( .1, 3.25, .1 );
			var material = new THREE.MeshLambertMaterial( {color: blue, side: THREE.DoubleSide, shading: THREE.FlatShading} );
			bar = new THREE.Mesh( geometry, material );
			bar.receiveShadow = true;
			bar.castShadow = true;
			bar.translateX(-20 + (2 * i));
			bar.translateZ(.35);
			bar.translateY(3.35);
			scene.add(bar);
		};

	};

	function drawSynthBase(position){
		var geometry = new THREE.BoxGeometry( 17, 9, .75 );
		var material = new THREE.MeshLambertMaterial( {color: grey, side: THREE.DoubleSide, shading: THREE.FlatShading} );
		base = new THREE.Mesh( geometry, material );
		// base.translateZ(-1);
		base.receiveShadow = true;
		base.castShadow = true;
		base.translateX(position + 9);
		base.translateY(3);
		scene.add(base);
		objects.push( base );
	}

function drawReset(x, y, z, name)	{

		// Geometry and Material

		var geometry = new THREE.BoxGeometry( 1, 1, 1 );
		var material = new THREE.MeshLambertMaterial( {color: black, side: THREE.DoubleSide, shading: THREE.FlatShading} );
		App.Machine[name] = new THREE.Mesh( geometry, material );
		App.Machine[name].receiveShadow = true;
		App.Machine[name].castShadow = true;

		// Set Location

		App.Machine[name].translateX(x);
		App.Machine[name].translateY(y);
		App.Machine[name].translateZ(z);

		// Set Parameters

		App.Machine[name].state = 0;
		App.Machine[name].name = name;

		// Functions & Listeners


		App.Machine[name].click = function(){
			socket.emit('reset', name);
		};

		App.Machine[name].clickSocket = function(){
			// if state is 0 (off), begin 'playing' the step sequencer and set to green, state state to on
			// if state is 1 (on), stop sequencer and set state to off, color to red
			// if (App.Machine[name].state === 0){
			// 	start_player();
			// 	this.material.color.setHex( green );
			// 	App.Machine[name].state = 1;
			// } else {
			// 	stop_player();
			// 	this.material.color.setHex( red );
			// 	App.Machine[name].state = 0;
			// }
			// socket emitter
			// socket.emit('push', name);
		};

		// Add to Scene

		scene.add( App.Machine[name] );
		objects.push( App.Machine[name] );
		// play_button.push( App.Machine[name] );

	};

function drawReset(x, y, z, name)	{

		// Geometry and Material

		var geometry = new THREE.BoxGeometry( 1, 1, 1 );
		var material = new THREE.MeshLambertMaterial( {color: black, side: THREE.DoubleSide, shading: THREE.FlatShading} );
		App.Machine[name] = new THREE.Mesh( geometry, material );
		App.Machine[name].receiveShadow = true;
		App.Machine[name].castShadow = true;

		// Set Location

		App.Machine[name].translateX(x);
		App.Machine[name].translateY(y);
		App.Machine[name].translateZ(z);

		// Set Parameters

		App.Machine[name].state = 0;
		App.Machine[name].name = name;

		// Functions & Listeners


		App.Machine[name].click = function(){
			socket.emit('reset', name);
		};

		App.Machine[name].clickSocket = function(){
			// if state is 0 (off), begin 'playing' the step sequencer and set to green, state state to on
			// if state is 1 (on), stop sequencer and set state to off, color to red
			// if (App.Machine[name].state === 0){
			// 	start_player();
			// 	this.material.color.setHex( green );
			// 	App.Machine[name].state = 1;
			// } else {
			// 	stop_player();
			// 	this.material.color.setHex( red );
			// 	App.Machine[name].state = 0;
			// }
			// socket emitter
			// socket.emit('push', name);
		};

		// Add to Scene

		scene.add( App.Machine[name] );
		objects.push( App.Machine[name] );
		// play_button.push( App.Machine[name] );

	};
function drawSave(x, y, z, name)	{

		// Geometry and Material

		var geometry = new THREE.BoxGeometry( 1, 1, 1 );
		var material = new THREE.MeshLambertMaterial( {color: green, side: THREE.DoubleSide, shading: THREE.FlatShading} );
		App.Machine[name] = new THREE.Mesh( geometry, material );
		App.Machine[name].receiveShadow = true;
		App.Machine[name].castShadow = true;

		// Set Location

		App.Machine[name].translateX(x);
		App.Machine[name].translateY(y);
		App.Machine[name].translateZ(z);

		// Set Parameters

		App.Machine[name].state = 0;
		App.Machine[name].name = name;

		// Functions & Listeners


		App.Machine[name].click = function(){
			socket.emit('save', name);
		};

		App.Machine[name].clickSocket = function(){
			// if state is 0 (off), begin 'playing' the step sequencer and set to green, state state to on
			// if state is 1 (on), stop sequencer and set state to off, color to red
			// if (App.Machine[name].state === 0){
			// 	start_player();
			// 	this.material.color.setHex( green );
			// 	App.Machine[name].state = 1;
			// } else {
			// 	stop_player();
			// 	this.material.color.setHex( red );
			// 	App.Machine[name].state = 0;
			// }
			// socket emitter
			// socket.emit('push', name);
		};

		// Add to Scene

		scene.add( App.Machine[name] );
		objects.push( App.Machine[name] );
		// play_button.push( App.Machine[name] );

	};


	function drawPlay(x, y, z, name)	{

		// Geometry and Material

		var geometry = new THREE.BoxGeometry( 1, 1, 1 );
		var material = new THREE.MeshLambertMaterial( {color: red, side: THREE.DoubleSide, shading: THREE.FlatShading} );
		App.Machine[name] = new THREE.Mesh( geometry, material );
		App.Machine[name].receiveShadow = true;
		App.Machine[name].castShadow = true;
		// Set Location

		App.Machine[name].translateX(x);
		App.Machine[name].translateY(y);
		App.Machine[name].translateZ(z);

		// Set Parameters

		App.Machine[name].state = 0;
		App.Machine[name].name = name;

		// Functions & Listeners

		socket.on("clickPlay", function(data) {
			console.log("heard click s->c");
			console.log(data);
			App.Machine.play.clickSocket();
		});


		App.Machine[name].click = function(){
			socket.emit('pushPlay', name);
		};

		App.Machine[name].clickSocket = function(){
			// if state is 0 (off), begin 'playing' the step sequencer and set to green, state state to on
			// if state is 1 (on), stop sequencer and set state to off, color to red
			if (App.Machine[name].state === 0){
				start_player();
				App.Machine[name].position.z = -0.05; 
				this.material.color.setHex( green );
				App.Machine[name].state = 1;
			} else {
				stop_player();
				App.Machine[name].position.z = 0; 
				this.material.color.setHex( red );
				App.Machine[name].state = 0;
			}
			// socket emitter
			// socket.emit('push', name);
		};

		// Add to Scene

		scene.add( App.Machine[name] );
		objects.push( App.Machine[name] );
		play_button.push( App.Machine[name] );

	};

	function drawButton(x, y, z, name, step_position, getSound, sound, array, array_name){

		// Geometry and Material

		var geometry = new THREE.BoxGeometry( 1, 1, 1 );
		var material = new THREE.MeshLambertMaterial( {color: blue, side: THREE.DoubleSide, shading: THREE.FlatShading} );
		App.Machine[name] = new THREE.Mesh( geometry, material );
		App.Machine[name].receiveShadow = true;
		App.Machine[name].castShadow = true;

		// Set Location

		App.Machine[name].translateX(x);
		App.Machine[name].translateY(y);
		App.Machine[name].translateZ(z);

		// Set Parameters

		App.Machine[name].name = name;
		App.Machine[name].state = 0;
		App.Machine[name].step_position = step_position;

		consolecheck = function(data) {
			return;
		};

		App.Machine[name].click = function(){
			socket.emit('pushSeq', {array: array_name, name: App.Machine[name].step_position});
		};

		App.Machine[name].clickSocket = function(){
			// console.log("hi");
			// if on, set state to 1 (on) and change color to highlited
			// if off, set state to 0 (off) and change color back to grey
			if (App.Machine[name].state === 0){
				App.Machine[name].state = 1;
				App.Machine[name].position.z = -0.05; 
				setColor(App.Machine[name]);
			} else {
				App.Machine[name].state = 0;
				App.Machine[name].position.z = 0; 
				setColor(App.Machine[name]);
			}
		};

		// Add Sound

		App.Machine[name].play = function(){
			getSound();
			App.Sounds[sound].start(0);
		}

		// Add to Scene

		scene.add( App.Machine[name] );
		objects.push( App.Machine[name] );
		array.push( App.Machine[name] );
	};

	function drawSynthButton(x, y, z, name, step_position, getSound, sound, array, array_name){

			// Geometry and Material

			var geometry = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshLambertMaterial( {color: blue, side: THREE.DoubleSide, shading: THREE.FlatShading} );
			App.Machine[name] = new THREE.Mesh( geometry, material );
			App.Machine[name].receiveShadow = true;
			App.Machine[name].castShadow = true;

			// Set Location

			App.Machine[name].translateX(x);
			App.Machine[name].translateY(y);
			App.Machine[name].translateZ(z);

			// Set Parameters

			App.Machine[name].name = name;
			App.Machine[name].state = 0;
			App.Machine[name].step_position = step_position;

			App.Machine[name].click = function(){
				console.log(App.Machine[name]);
				socket.emit('pushSynth', {current_synth_hash: array_name, note: sound, position: App.Machine[name].step_position});
				// socket.emit('pushSeq', {array: array_name, name: App.Machine[name].step_position});
				// if (App.Machine[name].state === 0){
				// 	App.Machine[name].state = 1;
				// 	setColor(App.Machine[name]);
				// } else {
				// 	App.Machine[name].state = 0;
				// 	setColor(App.Machine[name]);
				// }
				// socket.emit('pushSeq', {array: array_name, name: App.Machine[name].step_position});
			};

			App.Machine[name].clickSocket = function(){
				// console.log("hi");
				// if on, set state to 1 (on) and change color to highlited
				// if off, set state to 0 (off) and change color back to grey
				if (App.Machine[name].state === 0){
					App.Machine[name].state = 1;
					App.Machine[name].position.z = -0.05; 
					setColor(App.Machine[name]);
				} else {
					App.Machine[name].state = 0;
					App.Machine[name].position.z = 0; 
					setColor(App.Machine[name]);
				}
			};

			// Add Sound

			App.Machine[name].play = function(){
				getSound(sound);
				console.log(""+array_name+"_"+sound);
				App.Sounds[""+array_name+"_"+sound].start(0);
			}

			// Add to Scene

			scene.add( App.Machine[name] );
			objects.push( App.Machine[name] );
			var hash_position = array[step_position];
			hash_position[sound] = App.Machine[name];
		};

	function drawSlider(x, y, z, name, type){
		// Geometry and Material

		var geometry = new THREE.BoxGeometry( .4, .8, 1 );
		var material = new THREE.MeshLambertMaterial( {color: blue, side: THREE.DoubleSide, shading: THREE.FlatShading} );
		App.Machine[name] = new THREE.Mesh( geometry, material );
		App.Machine[name].receiveShadow = true;
		App.Machine[name].castShadow = true;

		// Set Location

		App.Machine[name].translateX(x);
		App.Machine[name].translateY(y + .001);
		App.Machine[name].translateZ(z);

		// Set Parameters

		App.Machine[name].state = 0;
		App.Machine[name].active = 0;
		App.Machine[name].type = type;
		App.Machine[name].top = 5;
		App.Machine[name].bottom = 1.75;
		App.Machine[name].name = name;

		App.Machine[name].click = function(){
			if (App.Machine[name].active === 0){
					App.Machine[name].active = 1;
					App.Machine[name].material.color.setHex( yellow );
			} else {
					App.Machine[name].active = 0;
					App.Machine[name].material.color.setHex( blue );
			}
		}

		App.Machine[name].move = function(){
			var state = 100 * ( App.Machine[name].position.y - App.Machine[name].bottom ) / ( App.Machine[name].top - App.Machine[name].bottom );
			socket.emit('sliderMove', {position: state, name: App.Machine[name].name });
			// if (App.Machine[name].state === 0){
			// 		App.Machine[name].state = 1;
			// 		setColor(App.Machine[name]);
			// } else {
			// 		App.Machine[name].state = 0;
			// 		setColor(App.Machine[name]);
			// }
		}

		App.Machine[name].setPosition = function(state){
			// console.log(state);
			App.Machine[name].state = state;
			// var position = 100 * ( App.Machine[name].position.y - App.Machine[name].bottom ) / ( App.Machine[name].top - App.Machine[name].bottom );
			App.Machine[name].position.y = (( App.Machine[name].state / 100 ) * (App.Machine[name].top - App.Machine[name].bottom)) + App.Machine[name].bottom;
			// console.log(App.Machine[name].position.y);
		}

		App.Machine[name].clickSocket = function(){
		};

		scene.add( App.Machine[name] );
		objects.push( App.Machine[name] );

	}

	function drawKnob(x, y, z, name, type){
		// Geometry and Material

		var geometry = new THREE.CylinderGeometry( .45, 1, 1, 12 );
		var material = new THREE.MeshLambertMaterial( {color: blue, side: THREE.DoubleSide, shading: THREE.FlatShading} );
		App.Machine[name] = new THREE.Mesh( geometry, material );
		App.Machine[name].receiveShadow = true;
		App.Machine[name].castShadow = true;


		var geometry = new THREE.CylinderGeometry( .25, .8, 1, 12 );
		var material = new THREE.MeshLambertMaterial( {color: blue, side: THREE.DoubleSide, shading: THREE.FlatShading} );
		top_knob = new THREE.Mesh( geometry, material );
		top_knob.translateZ(3);
		top_knob.receiveShadow = true;
		top_knob.castShadow = true;

		var pointer_geometry = new THREE.BoxGeometry( .15, 1.25, 1 );
		// pointer_geometry.translateY(y + .25);
		var material = new THREE.MeshBasicMaterial( { color: green } );
		pointer = new THREE.Mesh( pointer_geometry, material );

		// pointer.geometry.updateMatrix();
				App.Machine[name].geometry.merge( pointer.geometry, pointer.geometry.matrix );

		App.Machine[name].geometry.merge( pointer.geometry, pointer.geometry.matrix );

		pointer.translateY(5);
		// App.Machine[name].push(pointer);

		App.Machine[name].click = function(){
			if (App.Machine[name].active === 0){
					App.Machine[name].active = 1;
					App.Machine[name].material.color.setHex( yellow );
			} else {
					App.Machine[name].active = 0;
					App.Machine[name].material.color.setHex( blue );
			}
		}


		App.Machine[name].move = function(){
			var state = 100 * ( 1 - (App.Machine[name].rotation.y + App.Machine[name].maximum_rotation_right) / (App.Machine[name].maximum_rotation_right * 2));
			if (state > 100){
				state = 100;
			} else if (state < 0){
				state = 0;
			}
			// console.log(state);
			// console.log(state);
			socket.emit('knobMove', {position: state, name: App.Machine[name].name });
			// if (App.Machine[name].state === 0){
			// 		App.Machine[name].state = 1;
			// 		setColor(App.Machine[name]);
			// } else {
			// 		App.Machine[name].state = 0;
			// 		setColor(App.Machine[name]);
			// }
		}

		App.Machine[name].setPosition = function(state){
			// console.log(state);
			App.Machine[name].state = state;
			// var position = 100 * ( App.Machine[name].position.y - App.Machine[name].bottom ) / ( App.Machine[name].top - App.Machine[name].bottom );
			App.Machine[name].rotation.y = (( App.Machine[name].state / 100 ) * (App.Machine[name].maximum_rotation_left - App.Machine[name].maximum_rotation_right)) + App.Machine[name].maximum_rotation_right;
			// console.log(App.Machine[name].position.y);
		}

		// Set Location

		App.Machine[name].translateX(x);
		App.Machine[name].translateY(y);
		App.Machine[name].translateZ(z);
		App.Machine[name].rotateX(1.57079633);
		App.Machine[name].maximum_rotation_right = 1.8;
		App.Machine[name].maximum_rotation_left = -1.8;
		App.Machine[name].rotation.y = App.Machine[name].maximum_rotation_right;

		// Set Parameters

		App.Machine[name].state = 0;
		App.Machine[name].type = type;
		App.Machine[name].name = name;
		App.Machine[name].active = 0;

		scene.add( App.Machine[name] );
		objects.push( App.Machine[name] );

	}


	function drawSelector(x, y, z, name, array){

		// Geometry and Material

		var geometry = new THREE.BoxGeometry( 1, .5, 1 );
		var material = new THREE.MeshLambertMaterial( {color: grey, side: THREE.DoubleSide, shading: THREE.FlatShading} );
		App.Machine[name] = new THREE.Mesh( geometry, material );
		App.Machine[name].receiveShadow = true;
		App.Machine[name].castShadow = true;

		// Set Location

		App.Machine[name].translateX(x);
		App.Machine[name].translateY(y);
		App.Machine[name].translateZ(z);

		// Set Parameters

		App.Machine[name].state = 0;
		App.Machine[name].buttons = array;
		App.Machine[name].array = array;

		// Functions & Listeners

		App.Machine[name].click = function(){
			// on click,
			// check to see if it's state is 0
			if (App.Machine[name].state === 0){
				// set all selectors to off
				selectors.forEach( function(selector){
					selector.position.z = 0;
					selector.state = 0;
					setColor(selector);
					selector.buttons.forEach(function(button){
						button.visible = false;
						button.position.z = -1;
					});
				});
				// set this selector to on
				// console.log(App.Machine[name].array);
				current_visible = App.Machine[name].array;
				App.Machine[name].state = 1;
				setColor(App.Machine[name]);
				App.Machine[name].position.z = -0.05; 
				//// set its array to visible
				App.Machine[name].buttons.forEach(function(button){
					button.visible = true;
					if (button.state === 1){
						button.position.z = -0.05;
					} else {
						button.position.z = 0;
					}
				});
			};
		};

		// Add to Scene

		scene.add( App.Machine[name] );
		objects.push( App.Machine[name] );
		selectors.push ( App.Machine[name] );

	};

function drawSynthSelector(x, y, z, name, array){

		// Geometry and Material

		var geometry = new THREE.BoxGeometry( 7, 1, 1 );
		var material = new THREE.MeshLambertMaterial( {color: grey, side: THREE.DoubleSide, shading: THREE.FlatShading} );
		App.Machine[name] = new THREE.Mesh( geometry, material );
		App.Machine[name].receiveShadow = true;
		App.Machine[name].castShadow = true;

		// Set Location

		App.Machine[name].translateX(x);
		App.Machine[name].translateY(y);
		App.Machine[name].translateZ(z);

		// Set Parameters

		App.Machine[name].state = 0;
		App.Machine[name].buttons = array;
		App.Machine[name].array = array;

		// Functions & Listeners

		App.Machine[name].click = function(){
			// on click,
			// check to see if it's state is 0
			if (App.Machine[name].state === 0){
				// set all synth selectors to off
				synth_selectors.forEach( function(selector){
					selector.state = 0;
					selector.position.z = -0; 
					setColor(selector);
					_.each(selector.array, function(element){
						_.each(element, function(element_2){
							// console.log(element_2);
							element_2.visible = false;
							element_2.position.z = -1;
						})
					})
				});
				// set this selector to on
				// console.log(App.Machine[name].array);
				// current_visible = App.Machine[name].array;
				App.Machine[name].state = 1;
				App.Machine[name].position.z = -0.05; 
				setColor(App.Machine[name]);
				_.each(App.Machine[name].array, function(element){
					_.each(element, function(element_2){
						// console.log(element_2);
						element_2.visible = true;
					if (element_2.state === 1){
						element_2.position.z = -0.05;
					} else {
						element_2.position.z = 0;
					}
					})
				})
				//// set its array to visible
				// App.Machine[name].buttons.forEach(function(button){
				// 	button.visible = true;
				// 	button.position.z = 0;
				// });
			};
		};

		// Add to Scene

		scene.add( App.Machine[name] );
		objects.push( App.Machine[name] );
		synth_selectors.push ( App.Machine[name] );

	};

	// Timing / BPM Functions

	function changeBPM(bpm){
		bpm = bpm;
		quarter_note = calculateQuarterNote(bpm);
		sixteenth_note = calculateSixteenthNote(quarter_note);
	}

	function calculateQuarterNote(bpm){
		var quarter_note = 60 / bpm * 1000;
		return quarter_note;
	}

	function calculateSixteenthNote(quarter_note){
		var sixteenth_note = quarter_note / 4;
		return sixteenth_note;
	}

	// Player Functions

	function start_player() {

		intervalID = window.setInterval(step, sixteenth_note);
		step();
	}

	function stop_player() {
		clearInterval(intervalID);
		current_visible.forEach(setColor);
		_.each(bass_buttons[current_step - 1], function(button){
			setColor(button);
		})
		current_step = 0;
	}

	function step() {
		// debugger;
		// get visible object at step
		var visible_steps = []
		visible_steps.push(current_visible[current_step]);
		// get array of all sounds at step
		var steps = [];
		selectors.forEach(function(selector){
			steps.push(selector.array[current_step]);
		})
		_.each(bass_buttons[current_step], function(button){
			steps.push(button);
			visible_steps.push(button);
		})
		_.each(key_buttons[current_step], function(button){
			steps.push(button);
			visible_steps.push(button);
		})
		// set color of object to yellow
		visible_steps.forEach(function(step){
			step.material.color.setHex ( yellow_highlight );
		})
		// check state to play sound or not of all steps in array
		steps.forEach(function(step){
			playSound(step);
		})
		// set last button back to its normal state
		if (current_step === 0){
			setColor(current_visible[current_visible.length - 1]);
			_.each(bass_buttons[current_visible.length - 1], function(button){
				setColor(button);
			})
			_.each(key_buttons[current_visible.length - 1], function(button){
				setColor(button);
			})
			// bass_buttons[current_visible.length - 1].forEach(function(button){
			// 	setColor(button);
			// })
		} else {
			setColor(current_visible[current_step-1]);
			_.each(bass_buttons[current_step - 1], function(button){
				setColor(button);
			})
			_.each(key_buttons[current_step - 1], function(button){
				setColor(button);
			})
			// bass_buttons[current_step-1].forEach(function(button){
			// 	setColor(button);
			// })
		}
		// add one to step or reset to zero if snare_buttons.length is less than current step
		// socket.emit('nextStep', {passed_step: current_step, current_visible_length: current_visible.length});
		if (current_step > current_visible.length - 2 ){
			current_step = 0;
		} else {
			current_step = current_step + 1;
		}
	};

	function playSound(button){
		// take the button object at current step and play its corresponding sound
		if (button.state === 1){
			button.play();
		};
	}

	function setColor(button){
		// check a button's state
		// set its color accordingly
		if (button.state === 1 ){
			button.material.color.setHex( yellow );
		} else {
			button.material.color.setHex( blue );
		}
	}
};
||||||| merged common ancestors
=======
function drawMachine(){

	// Parameters

	var socket = io(); 

	// Socket Listeners

	socket.on("Seqclick", function(data) {
		App.Machine[data].clickSocket(); 
	}); 

	socket.on("getCurrentState", function(){
		var snare_buttons_state = snare_buttons.map(function(snare_button){
			return snare_button.state;
		})
		var kick_buttons_state = kick_buttons.map(function(kick_button){
			return kick_button.state;
		})
		var high_hat_buttons_state = high_hat_buttons.map(function(high_hat_button){
			return high_hat_button.state;
		})
		var high_hat_open_buttons_state = high_hat_open_buttons.map(function(high_hat_open_button){
			return high_hat_open_button.state;
		})
		var clap_buttons_state = clap_buttons.map(function(clap_button){
			return clap_button.state;
		})
		var tom_buttons_state = tom_buttons.map(function(tom_button){
			return tom_button.state;
		})
		var cowbell_buttons_state = cowbell_buttons.map(function(cowbell_button){
			return cowbell_button.state;
		})
		var shaker_buttons_state = shaker_buttons.map(function(shaker_button){
			return shaker_button.state;
		})					
		var data = { snare_buttons_state: snare_buttons_state, 
								 kick_buttons_state: kick_buttons_state, 
								 high_hat_buttons_state: high_hat_buttons_state, 
								 high_hat_open_buttons_state: high_hat_open_buttons_state, 
								 clap_buttons_state: clap_buttons_state, 
								 tom_buttons_state: tom_buttons_state, 
								 cowbell_buttons_state: cowbell_buttons_state, 
								 shaker_buttons_state: shaker_buttons_state,
								 kick_slider_state: kick_slider.state,
							 	 snare_slider_state: snare_slider.state,
						 		 high_hat_slider_state: high_hat_slider.state,
					 			 high_hat_open_slider_state: high_hat_open_slider.state,
								 clap_slider_state: clap_slider.state,
								 tom_slider_state: tom_slider.state,
								 cowbell_slider_state: cowbell_slider.state,
								 shaker_slider_state: shaker_slider.state								 
							 };
		socket.emit("currentState", data); 
	});

	socket.on('updateState', function(data){

		var play = data.play; 
		if (play !== App.Machine.play.state) {
			App.Machine.play.clickSocket();
		}

		var snare = data.snare;
		snare.forEach(function(state, index){
			if(state !== snare_buttons[index].state){
					snare_buttons[index].clickSocket();
			}
		})

		var kick = data.kick;
		kick.forEach(function(state, index){
			if(state !== kick_buttons[index].state){
					kick_buttons[index].clickSocket();
			}
		})

		var high_hat = data.hh;
		high_hat.forEach(function(state, index){
			if(state !== high_hat_buttons[index].state){
					high_hat_buttons[index].clickSocket();
			}
		})

		var high_hat_open = data.hho;
		high_hat_open.forEach(function(state, index){
			if(state !== high_hat_open_buttons[index].state){
					high_hat_open_buttons[index].clickSocket();
			}
		})

		var clap = data.clap;
		clap.forEach(function(state, index){
			if(state !== clap_buttons[index].state){
					clap_buttons[index].clickSocket();
			}
		})

		var tom = data.tom;
		tom.forEach(function(state, index){
			if(state !== tom_buttons[index].state){
					tom_buttons[index].clickSocket();
			}
		})

		var cowbell = data.cowbell;
		cowbell.forEach(function(state, index){
			if(state !== cowbell_buttons[index].state){
					cowbell_buttons[index].clickSocket();
			}
		})

		var shaker = data.shaker;
		shaker.forEach(function(state, index){
			if(state !== shaker_buttons[index].state){
					shaker_buttons[index].clickSocket();
			}
		})

		if (App.Machine.kick_slider.state !== data.kick_slider){
			App.Machine.kick_slider.setPosition(data.kick_slider);
		}

		if (App.Machine.snare_slider.state !== data.snare_slider){
			App.Machine.snare_slider.setPosition(data.snare_slider);
		}

		if (App.Machine.high_hat_slider.state !== data.high_hat_slider){
			App.Machine.high_hat_slider.setPosition(data.high_hat_slider);
		}

		if (App.Machine.high_hat_open_slider.state !== data.high_hat_open_slider){
			App.Machine.high_hat_open_slider.setPosition(data.high_hat_open_slider);
		}

		if (App.Machine.clap_slider.state !== data.clap_slider){
			App.Machine.clap_slider.setPosition(data.clap_slider);
		}

		if (App.Machine.tom_slider.state !== data.tom_slider){
			App.Machine.tom_slider.setPosition(data.tom_slider);
		}

		if (App.Machine.cowbell_slider.state !== data.cowbell_slider){
			App.Machine.cowbell_slider.setPosition(data.cowbell_slider);
		}

		if (App.Machine.shaker_slider.state !== data.shaker_slider){
			App.Machine.shaker_slider.setPosition(data.shaker_slider);
		}

		if (App.Machine.kick_knob.state !== data.kick_knob){
			App.Machine.kick_knob.setPosition(data.kick_knob);
		}

		if (App.Machine.snare_knob.state !== data.snare_knob){
			App.Machine.snare_knob.setPosition(data.snare_knob);
		}

		if (App.Machine.high_hat_knob.state !== data.high_hat_knob){
			App.Machine.high_hat_knob.setPosition(data.high_hat_knob);
		}

		if (App.Machine.high_hat_open_knob.state !== data.high_hat_open_knob){
			App.Machine.high_hat_open_knob.setPosition(data.high_hat_open_knob);
		}

		if (App.Machine.clap_knob.state !== data.clap_knob){
			App.Machine.clap_knob.setPosition(data.clap_knob);
		}

		if (App.Machine.tom_knob.state !== data.tom_knob){
			App.Machine.tom_knob.setPosition(data.tom_knob);
		}

		if (App.Machine.cowbell_knob.state !== data.cowbell_knob){
			App.Machine.cowbell_knob.setPosition(data.cowbell_knob);
		}

		if (App.Machine.shaker_knob.state !== data.shaker_knob){
			App.Machine.shaker_knob.setPosition(data.shaker_knob);
		}

		// bass_buttons = data.bass; 

		_.each(data.bass, function(element, index){
			_.each(element, function(element_2, index_2){
				if(bass_buttons[index][index_2].state !== element_2){
					bass_buttons[index][index_2].clickSocket();
				};
			})
			// console.log(list);
		});

		_.each(data.key, function(element, index){
			_.each(element, function(element_2, index_2){
				if(key_buttons[index][index_2].state !== element_2){
					key_buttons[index][index_2].clickSocket();
				};
			})
			// console.log(list);
		});

		// getting current status back from the bass hash on the server, 
		// set the data on client side to be the same by iterating through and 
		// doing 'click socket' on the appropriate buttons

	});

	var bpm = 128;
	var quarter_note = calculateQuarterNote(bpm);
	var sixteenth_note = calculateSixteenthNote(quarter_note);

	var play_button = [];

	var snare_buttons = [];
	var kick_buttons = [];
	var high_hat_buttons = [];
	var high_hat_open_buttons = [];
	var clap_buttons = [];
	var tom_buttons = [];
	var cowbell_buttons = [];
	var shaker_buttons = [];
	var bass_buttons =  { 0:{}, 
												1:{},
												2:{},
												3:{},
												4:{},
												5:{},
												6:{},
												7:{},
												8:{}
											}; 
	var key_buttons  =  { 0:{}, 
												1:{},
												2:{},
												3:{},
												4:{},
												5:{},
												6:{},
												7:{},
												8:{}
											}; 
	var selectors = [];
	var synth_selectors = []; 
	var sliders = [];

	var current_step = 0;
	var current_visible = kick_buttons;

	// Colors

	var red = 0xf15a65;
  var green = 0x8cc540;
  var grey = 0x778899;
  var purple = 0x6e2b90;
  var blue = 0x00baed;
  var yellow = 0xfbab1e;
  var yellow_highlight = 0xf3712e;

  // Lighting

	var ambientLight = new THREE.AmbientLight( 0x404040 ); // soft white light
	scene.add( ambientLight );

	var directionalLight_top = new THREE.DirectionalLight( 0xffffff, 2 );
	directionalLight_top.position.set( -40, 20, 20 );
	directionalLight_top.castShadow = true;
	directionalLight_top.shadowDarkness = .5;

	var d = 15;
	directionalLight_top.shadowCameraLeft = -d;
	directionalLight_top.shadowCameraRight = d;
	directionalLight_top.shadowCameraTop = d;
	directionalLight_top.shadowCameraBottom = -d;
	directionalLight_top.shadowCameraNear	= 10;		
	directionalLight_top.shadowCameraFar = 100;
	directionalLight_top.shadowMapWidth = 2048;
	directionalLight_top.shadowMapHeight = 2048;
	scene.add( directionalLight_top );

	// Build Table and Players

	drawBackground();
	drawTableObjects(); 
	drawDrumMachine(-14); 
	drawSynth(0); 

	play = drawPlay(-22, 0, 0, "play");


	function drawDrumMachine(position){

		drawDrumMachineBase(); 

		kick_selector = drawSelector(-20, 1, 0, "kick_selector", kick_buttons);
		kick_button_1 = drawButton(-20, 0, 0, "kick_button_1", 0, getKick, 'kick', kick_buttons, "kick");
		kick_button_2 = drawButton(-18, 0, 0, "kick_button_2", 1, getKick, 'kick', kick_buttons, "kick");
		kick_button_3 = drawButton(-16, 0, 0, "kick_button_3", 2, getKick, 'kick', kick_buttons, "kick");
		kick_button_4 = drawButton(-14, 0, 0, "kick_button_4", 3, getKick, 'kick', kick_buttons, "kick");
		kick_button_5 = drawButton(-12, 0, 0, "kick_button_5", 4, getKick, 'kick', kick_buttons, "kick");
		kick_button_6 = drawButton(-10, 0, 0, "kick_button_6", 5, getKick, 'kick', kick_buttons, "kick");
		kick_button_7 = drawButton(-8, 0, 0, "kick_button_7", 6, getKick, 'kick', kick_buttons, "kick");
		kick_button_8 = drawButton(-6, 0, 0, "kick_button_8", 7, getKick, 'kick', kick_buttons, "kick");
		kick_slider = drawSlider(-20, 1.75,0, "kick_slider", "slider"); 
		kick_knob = drawKnob(-20, 6.25 ,0, "kick_knob", "knob"); 

		snare_selector = drawSelector(-18, 1, 0, "snare_selector", snare_buttons);
		snare_button_1 = drawButton(-20, 0, 0, "snare_button_1", 0,  getSnare, 'snare', snare_buttons, "snare");
		snare_button_2 = drawButton(-18, 0, 0, "snare_button_2", 1, getSnare, 'snare', snare_buttons, "snare");
		snare_button_3 = drawButton(-16, 0, 0, "snare_button_3", 2, getSnare, 'snare', snare_buttons, "snare");
		snare_button_4 = drawButton(-14, 0, 0, "snare_button_4", 3, getSnare, 'snare', snare_buttons, "snare");
		snare_button_5 = drawButton(-12, 0, 0, "snare_button_5", 4, getSnare, 'snare', snare_buttons, "snare");
		snare_button_6 = drawButton(-10, 0, 0, "snare_button_6", 5, getSnare, 'snare', snare_buttons, "snare");
		snare_button_7 = drawButton(-8, 0, 0, "snare_button_7", 6, getSnare, 'snare', snare_buttons, "snare");
		snare_button_8 = drawButton(-6, 0, 0, "snare_button_8", 7, getSnare, 'snare', snare_buttons, "snare");
		snare_slider = drawSlider(-18, 1.75,0, "snare_slider", "slider"); 
		snare_knob = drawKnob(-18, 6.25, 0, "snare_knob", "knob"); 

		high_hat_selector = drawSelector(-16, 1, 0, "high_hat_selector", high_hat_buttons);
		high_hat_button_1 = drawButton(-20, 0, 0, "high_hat_button_1", 0, getHighHat, 'high_hat', high_hat_buttons, "hh");
		high_hat_button_2 = drawButton(-18, 0, 0, "high_hat_button_2", 1, getHighHat, 'high_hat', high_hat_buttons, "hh");
		high_hat_button_3 = drawButton(-16, 0, 0, "high_hat_button_3", 2, getHighHat, 'high_hat', high_hat_buttons, "hh");
		high_hat_button_4 = drawButton(-14, 0, 0, "high_hat_button_4", 3, getHighHat, 'high_hat', high_hat_buttons, "hh");
		high_hat_button_5 = drawButton(-12, 0, 0, "high_hat_button_5", 4, getHighHat, 'high_hat', high_hat_buttons, "hh");
		high_hat_button_6 = drawButton(-10, 0, 0, "high_hat_button_6", 5, getHighHat, 'high_hat', high_hat_buttons, "hh");
		high_hat_button_7 = drawButton(-8, 0, 0, "high_hat_button_7", 6, getHighHat, 'high_hat', high_hat_buttons, "hh");
		high_hat_button_8 = drawButton(-6, 0, 0, "high_hat_button_8", 7, getHighHat, 'high_hat', high_hat_buttons, "hh");
		high_hat_slider = drawSlider(-16, 1.75,0, "high_hat_slider", "slider"); 
		high_hat_knob = drawKnob(-16, 6.25, 0, "high_hat_knob", "knob"); 

		high_hat_open_selector = drawSelector(-14, 1, 0, "high_hat_open_selector", high_hat_open_buttons);
		high_hat_open_button_1 = drawButton(-20, 0, 0, "high_hat_open_button_1", 0, getHighHatOpen, 'high_hat_open', high_hat_open_buttons, "hho");
		high_hat_open_button_2 = drawButton(-18, 0, 0, "high_hat_open_button_2", 1, getHighHatOpen, 'high_hat_open', high_hat_open_buttons, "hho");
		high_hat_open_button_3 = drawButton(-16, 0, 0, "high_hat_open_button_3", 2, getHighHatOpen, 'high_hat_open', high_hat_open_buttons, "hho");
		high_hat_open_button_4 = drawButton(-14, 0, 0, "high_hat_open_button_4", 3, getHighHatOpen, 'high_hat_open', high_hat_open_buttons, "hho");
		high_hat_open_button_5 = drawButton(-12, 0, 0, "high_hat_open_button_5", 4, getHighHatOpen, 'high_hat_open', high_hat_open_buttons, "hho");
		high_hat_open_button_6 = drawButton(-10, 0, 0, "high_hat_open_button_6", 5, getHighHatOpen, 'high_hat_open', high_hat_open_buttons, "hho");
		high_hat_open_button_7 = drawButton(-8, 0, 0, "high_hat_open_button_7", 6, getHighHatOpen, 'high_hat_open', high_hat_open_buttons, "hho");
		high_hat_open_button_8 = drawButton(-6, 0, 0, "high_hat_open_button_8", 7, getHighHatOpen, 'high_hat_open', high_hat_open_buttons, "hho");
		high_hat_open_slider = drawSlider(-14, 1.75,0, "high_hat_open_slider", "slider"); 
		high_hat_open_knob = drawKnob(-14, 6.25, 0, "high_hat_open_knob", "knob"); 

		clap_selector = drawSelector(-12, 1, 0, "clap_selector", clap_buttons);
		clap_button_1 = drawButton(-20, 0, 0, "clap_button_1", 0, getClap, 'clap', clap_buttons, "clap");
		clap_button_2 = drawButton(-18, 0, 0, "clap_button_2", 1, getClap, 'clap', clap_buttons, "clap");
		clap_button_3 = drawButton(-16, 0, 0, "clap_button_3", 2, getClap, 'clap', clap_buttons, "clap");
		clap_button_4 = drawButton(-14, 0, 0, "clap_button_4", 3, getClap, 'clap', clap_buttons, "clap");
		clap_button_5 = drawButton(-12, 0, 0, "clap_button_5", 4, getClap, 'clap', clap_buttons, "clap");
		clap_button_6 = drawButton(-10, 0, 0, "clap_button_6", 5, getClap, 'clap', clap_buttons, "clap");
		clap_button_7 = drawButton(-8, 0, 0, "clap_button_7", 6, getClap, 'clap', clap_buttons, "clap");
		clap_button_8 = drawButton(-6, 0, 0, "clap_button_8", 7, getClap, 'clap', clap_buttons, "clap");
		clap_slider = drawSlider(-12, 1.75,0, "clap_slider", "slider"); 
		clap_knob = drawKnob(-12, 6.25, 0, "clap_knob", "knob"); 

		tom_selector = drawSelector(-10, 1, 0, "tom_selector", tom_buttons);
		tom_button_1 = drawButton(-20, 0, 0, "tom_button_1", 0, getTom, 'tom', tom_buttons, "tom");
		tom_button_2 = drawButton(-18, 0, 0, "tom_button_2", 1, getTom, 'tom', tom_buttons, "tom");
		tom_button_3 = drawButton(-16, 0, 0, "tom_button_3", 2, getTom, 'tom', tom_buttons, "tom");
		tom_button_4 = drawButton(-14, 0, 0, "tom_button_4", 3, getTom, 'tom', tom_buttons, "tom");
		tom_button_5 = drawButton(-12, 0, 0, "tom_button_5", 4, getTom, 'tom', tom_buttons, "tom");
		tom_button_6 = drawButton(-10, 0, 0, "tom_button_6", 5, getTom, 'tom', tom_buttons, "tom");
		tom_button_7 = drawButton(-8, 0, 0, "tom_button_7", 6, getTom, 'tom', tom_buttons, "tom");
		tom_button_8 = drawButton(-6, 0, 0, "tom_button_8", 7, getTom, 'tom', tom_buttons, "tom");
		tom_slider = drawSlider(-10, 1.75,0, "tom_slider", "slider"); 
		tom_knob = drawKnob(-10, 6.25, 0, "tom_knob", "knob"); 

		cowbell_selector = drawSelector(-8, 1, 0, "cowbell_selector", cowbell_buttons);
		cowbell_button_1 = drawButton(-20, 0, 0, "cowbell_button_1", 0, getCowbell, 'cowbell', cowbell_buttons, "cowbell");
		cowbell_button_2 = drawButton(-18, 0, 0, "cowbell_button_2", 1, getCowbell, 'cowbell', cowbell_buttons, "cowbell");
		cowbell_button_3 = drawButton(-16, 0, 0, "cowbell_button_3", 2, getCowbell, 'cowbell', cowbell_buttons, "cowbell");
		cowbell_button_4 = drawButton(-14, 0, 0, "cowbell_button_4", 3, getCowbell, 'cowbell', cowbell_buttons, "cowbell");
		cowbell_button_5 = drawButton(-12, 0, 0, "cowbell_button_5", 4, getCowbell, 'cowbell', cowbell_buttons, "cowbell");
		cowbell_button_6 = drawButton(-10, 0, 0, "cowbell_button_6", 5, getCowbell, 'cowbell', cowbell_buttons, "cowbell");
		cowbell_button_7 = drawButton(-8, 0, 0, "cowbell_button_7", 6, getCowbell, 'cowbell', cowbell_buttons, "cowbell");
		cowbell_button_8 = drawButton(-6, 0, 0, "cowbell_button_8", 7, getCowbell, 'cowbell', cowbell_buttons, "cowbell");
		cowbell_slider = drawSlider(-8, 1.75,0, "cowbell_slider", "slider"); 
		cowbell_knob = drawKnob(-8, 6.25, 0, "cowbell_knob", "knob"); 

		shaker_selector = drawSelector(-6, 1, 0, "shaker_selector", shaker_buttons);
		shaker_button_1 = drawButton(-20, 0, 0, "shaker_button_1", 0, getShaker, 'maraca', shaker_buttons, "shaker");
		shaker_button_2 = drawButton(-18, 0, 0, "shaker_button_2", 1, getShaker, 'maraca', shaker_buttons, "shaker");
		shaker_button_3 = drawButton(-16, 0, 0, "shaker_button_3", 2, getShaker, 'maraca', shaker_buttons, "shaker");
		shaker_button_4 = drawButton(-14, 0, 0, "shaker_button_4", 3, getShaker, 'maraca', shaker_buttons, "shaker");
		shaker_button_5 = drawButton(-12, 0, 0, "shaker_button_5", 4, getShaker, 'maraca', shaker_buttons, "shaker");
		shaker_button_6 = drawButton(-10, 0, 0, "shaker_button_6", 5, getShaker, 'maraca', shaker_buttons, "shaker");
		shaker_button_7 = drawButton(-8, 0, 0, "shaker_button_7", 6, getShaker, 'maraca', shaker_buttons, "shaker");
		shaker_button_8 = drawButton(-6, 0, 0, "shaker_button_8", 7, getShaker, 'maraca', shaker_buttons, "shaker");
		shaker_slider = drawSlider(-6, 1.75,0, "shaker_slider", "slider"); 
		shaker_knob = drawKnob(-6, 6.25, 0, "shaker_knob", "knob"); 	
	}

	function drawSynth(position){

		drawSynthBase(position);

		bass_selector = drawSynthSelector(position+5, 6, 0, "bass_selector", bass_buttons);

		bass_button_1_d = drawSynthButton(position+2, 0, 0, "bass_button_1_d", 0, getBass, 'd', bass_buttons, "bass");
		bass_button_1_f = drawSynthButton(position+2, 1.5, 0, "bass_button_1_f", 0, getBass, 'f', bass_buttons, "bass");
		bass_button_1_a = drawSynthButton(position+2, 3, 0, "bass_button_1_a", 0, getBass, 'a', bass_buttons, "bass");
		bass_button_1_csharp = drawSynthButton(position+2, 4.5, 0, "bass_button_1_csharp", 0, getBass, 'csharp', bass_buttons, "bass");

		bass_button_2_d = drawSynthButton(position+4, 0, 0, "bass_button_2_d", 1, getBass, 'd', bass_buttons, "bass");
		bass_button_2_f = drawSynthButton(position+4, 1.5, 0, "bass_button_2_f", 1, getBass, 'f', bass_buttons, "bass");
		bass_button_2_a = drawSynthButton(position+4, 3, 0, "bass_button_2_a", 1, getBass, 'a', bass_buttons, "bass");
		bass_button_2_csharp = drawSynthButton(position+4, 4.5, 0, "bass_button_2_csharp", 1, getBass, 'csharp', bass_buttons, "bass");

		bass_button_3_d = drawSynthButton(position+6, 0, 0, "bass_button_3_d", 2, getBass, 'd', bass_buttons, "bass");
		bass_button_3_f = drawSynthButton(position+6, 1.5, 0, "bass_button_3_f", 2, getBass, 'f', bass_buttons, "bass");
		bass_button_3_a = drawSynthButton(position+6, 3, 0, "bass_button_3_a", 2, getBass, 'a', bass_buttons, "bass");
		bass_button_3_csharp = drawSynthButton(position+6, 4.5, 0, "bass_button_3_csharp", 2, getBass, 'csharp', bass_buttons, "bass");

		bass_button_4_d = drawSynthButton(position+8, 0, 0, "bass_button_4_d", 3, getBass, 'd', bass_buttons, "bass");
		bass_button_4_f = drawSynthButton(position+8, 1.5, 0, "bass_button_4_f", 3, getBass, 'f', bass_buttons, "bass");
		bass_button_4_a = drawSynthButton(position+8, 3, 0, "bass_button_4_a", 3, getBass, 'a', bass_buttons, "bass");
		bass_button_4_csharp = drawSynthButton(position+8, 4.5, 0, "bass_button_4_csharp", 3, getBass, 'csharp', bass_buttons, "bass");

		bass_button_5_d = drawSynthButton(position+10, 0, 0, "bass_button_5_d", 4, getBass, 'd', bass_buttons, "bass");
		bass_button_5_f = drawSynthButton(position+10, 1.5, 0, "bass_button_5_f", 4, getBass, 'f', bass_buttons, "bass");
		bass_button_5_a = drawSynthButton(position+10, 3, 0, "bass_button_5_a", 4, getBass, 'a', bass_buttons, "bass");
		bass_button_5_csharp = drawSynthButton(position+10, 4.5, 0, "bass_button_5_csharp", 4, getBass, 'csharp', bass_buttons, "bass");

		bass_button_6_d = drawSynthButton(position+12, 0, 0, "bass_button_6_d", 5, getBass, 'd', bass_buttons, "bass");
		bass_button_6_f = drawSynthButton(position+12, 1.5, 0, "bass_button_6_f", 5, getBass, 'f', bass_buttons, "bass");
		bass_button_6_a = drawSynthButton(position+12, 3, 0, "bass_button_6_a", 5, getBass, 'a', bass_buttons, "bass");
		bass_button_6_csharp = drawSynthButton(position+12, 4.5, 0, "bass_button_6_csharp", 5, getBass, 'csharp', bass_buttons, "bass");

		bass_button_7_d = drawSynthButton(position+14, 0, 0, "bass_button_7_d", 6, getBass, 'd', bass_buttons, "bass");
		bass_button_7_f = drawSynthButton(position+14, 1.5, 0, "bass_button_7_f", 6, getBass, 'f', bass_buttons, "bass");
		bass_button_7_a = drawSynthButton(position+14, 3, 0, "bass_button_7_a", 6, getBass, 'a', bass_buttons, "bass");
		bass_button_7_csharp = drawSynthButton(position+14, 4.5, 0, "bass_button_7_csharp", 6, getBass, 'csharp', bass_buttons, "bass");

		bass_button_8_d = drawSynthButton(position+16, 0, 0, "bass_button_8_d", 7, getBass, 'd', bass_buttons, "bass");
		bass_button_8_f = drawSynthButton(position+16, 1.5, 0, "bass_button_8_f", 7, getBass, 'f', bass_buttons, "bass");
		bass_button_8_a = drawSynthButton(position+16, 3, 0, "bass_button_8_a", 7, getBass, 'a', bass_buttons, "bass");
		bass_button_8_csharp = drawSynthButton(position+16, 4.5, 0, "bass_button_8_csharp", 7, getBass, 'csharp', bass_buttons, "bass");

		key_selector = drawSynthSelector(position+13, 6, 0, "key_selector", key_buttons);

		key_button_1_d = drawSynthButton(position+2, 0, 0, "key_button_1_d", 0, getKey, 'd', key_buttons, "key");
		key_button_1_f = drawSynthButton(position+2, 1.5, 0, "key_button_1_f", 0, getKey, 'f', key_buttons, "key");
		key_button_1_a = drawSynthButton(position+2, 3, 0, "key_button_1_a", 0, getKey, 'a', key_buttons, "key");
		key_button_1_csharp = drawSynthButton(position+2, 4.5, 0, "key_button_1_csharp", 0, getKey, 'csharp', key_buttons, "key");

		key_button_2_d = drawSynthButton(position+4, 0, 0, "key_button_2_d", 1, getKey, 'd', key_buttons, "key");
		key_button_2_f = drawSynthButton(position+4, 1.5, 0, "key_button_2_f", 1, getKey, 'f', key_buttons, "key");
		key_button_2_a = drawSynthButton(position+4, 3, 0, "key_button_2_a", 1, getKey, 'a', key_buttons, "key");
		key_button_2_csharp = drawSynthButton(position+4, 4.5, 0, "key_button_2_csharp", 1, getKey, 'csharp', key_buttons, "key");

		key_button_3_d = drawSynthButton(position+6, 0, 0, "key_button_3_d", 2, getKey, 'd', key_buttons, "key");
		key_button_3_f = drawSynthButton(position+6, 1.5, 0, "key_button_3_f", 2, getKey, 'f', key_buttons, "key");
		key_button_3_a = drawSynthButton(position+6, 3, 0, "key_button_3_a", 2, getKey, 'a', key_buttons, "key");
		key_button_3_csharp = drawSynthButton(position+6, 4.5, 0, "key_button_3_csharp", 2, getKey, 'csharp', key_buttons, "key");

		key_button_4_d = drawSynthButton(position+8, 0, 0, "key_button_4_d", 3, getKey, 'd', key_buttons, "key");
		key_button_4_f = drawSynthButton(position+8, 1.5, 0, "key_button_4_f", 3, getKey, 'f', key_buttons, "key");
		key_button_4_a = drawSynthButton(position+8, 3, 0, "key_button_4_a", 3, getKey, 'a', key_buttons, "key");
		key_button_4_csharp = drawSynthButton(position+8, 4.5, 0, "key_button_4_csharp", 3, getKey, 'csharp', key_buttons, "key");

		key_button_5_d = drawSynthButton(position+10, 0, 0, "key_button_5_d", 4, getKey, 'd', key_buttons, "key");
		key_button_5_f = drawSynthButton(position+10, 1.5, 0, "key_button_5_f", 4, getKey, 'f', key_buttons, "key");
		key_button_5_a = drawSynthButton(position+10, 3, 0, "key_button_5_a", 4, getKey, 'a', key_buttons, "key");
		key_button_5_csharp = drawSynthButton(position+10, 4.5, 0, "key_button_5_csharp", 4, getKey, 'csharp', key_buttons, "key");

		key_button_6_d = drawSynthButton(position+12, 0, 0, "key_button_6_d", 5, getKey, 'd', key_buttons, "key");
		key_button_6_f = drawSynthButton(position+12, 1.5, 0, "key_button_6_f", 5, getKey, 'f', key_buttons, "key");
		key_button_6_a = drawSynthButton(position+12, 3, 0, "key_button_6_a", 5, getKey, 'a', key_buttons, "key");
		key_button_6_csharp = drawSynthButton(position+12, 4.5, 0, "key_button_6_csharp", 5, getKey, 'csharp', key_buttons, "key");

		key_button_7_d = drawSynthButton(position+14, 0, 0, "key_button_7_d", 6, getKey, 'd', key_buttons, "key");
		key_button_7_f = drawSynthButton(position+14, 1.5, 0, "key_button_7_f", 6, getKey, 'f', key_buttons, "key");
		key_button_7_a = drawSynthButton(position+14, 3, 0, "key_button_7_a", 6, getKey, 'a', key_buttons, "key");
		key_button_7_csharp = drawSynthButton(position+14, 4.5, 0, "key_button_7_csharp", 6, getKey, 'csharp', key_buttons, "key");

		key_button_8_d = drawSynthButton(position+16, 0, 0, "key_button_8_d", 7, getKey, 'd', key_buttons, "key");
		key_button_8_f = drawSynthButton(position+16, 1.5, 0, "key_button_8_f", 7, getKey, 'f', key_buttons, "key");
		key_button_8_a = drawSynthButton(position+16, 3, 0, "key_button_8_a", 7, getKey, 'a', key_buttons, "key");
		key_button_8_csharp = drawSynthButton(position+16, 4.5, 0, "key_button_8_csharp", 7, getKey, 'csharp', key_buttons, "key");

	}

	// set initial state

	App.Machine.kick_selector.click();
	App.Machine.bass_selector.click();

	function drawTableObjects(){
		var geometry = new THREE.BoxGeometry( 1, 1, 1 );
		var material = new THREE.MeshLambertMaterial( {color: purple, side: THREE.DoubleSide, shading: THREE.FlatShading} );
		table_object = new THREE.Mesh( geometry, material );
		table_object.receiveShadow = true;
		table_object.castShadow = true;
		table_object.translateX(20.4);
		table_object.translateY(0.4);  
		table_object.rotateZ(.3);
		scene.add(table_object);

		var geometry = new THREE.BoxGeometry( 1, 1, 1 );
		var material = new THREE.MeshLambertMaterial( {color: purple, side: THREE.DoubleSide, shading: THREE.FlatShading} );
		table_object_2 = new THREE.Mesh( geometry, material );
		table_object_2.receiveShadow = true;
		table_object_2.castShadow = true;
		table_object_2.translateX(22.3);
		table_object_2.translateY(2);  
		table_object_2.rotateZ(0.6);
		scene.add(table_object_2);

		var geometry = new THREE.DodecahedronGeometry( 1.5);
		var material = new THREE.MeshLambertMaterial( {color: purple, side: THREE.DoubleSide, shading: THREE.FlatShading} );
		table_object_3 = new THREE.Mesh( geometry, material );
		table_object_3.receiveShadow = true;
		table_object_3.castShadow = true;
		table_object_3.translateX(-11);
		table_object_3.translateY(9);
		table_object_3.translateZ(.5);  
		table_object_3.rotateZ(0.8);
		scene.add(table_object_3);

	}

	function drawBackground(){
		var geometry = new THREE.PlaneGeometry( 80, 40, 16 );
		var material = new THREE.MeshLambertMaterial( {color: 0xFFE4C4, side: THREE.DoubleSide, shading: THREE.FlatShading} );
		plane = new THREE.Mesh( geometry, material );
		plane.translateZ(0); 
		// plane.translateX(0);
		// plane.translateY(3);
		plane.receiveShadow = true;
		scene.add(plane);		
	}

	function drawDrumMachineBase(){
		var geometry = new THREE.BoxGeometry( 19, 9, .75 );
		var material = new THREE.MeshLambertMaterial( {color: grey, side: THREE.DoubleSide, shading: THREE.FlatShading} );
		base = new THREE.Mesh( geometry, material );
		// base.translateZ(-1); 
		base.receiveShadow = true;
		base.castShadow = true;
		base.translateX(-14);
		base.translateY(3);
		scene.add(base);

		for(i = 0; i < 8; i++){
			var geometry = new THREE.BoxGeometry( .1, 3.25, .1 );
			var material = new THREE.MeshLambertMaterial( {color: blue, side: THREE.DoubleSide, shading: THREE.FlatShading} );
			bar = new THREE.Mesh( geometry, material );
			bar.receiveShadow = true;
			bar.castShadow = true;
			bar.translateX(-20 + (2 * i));
			bar.translateZ(.35); 	
			bar.translateY(3.35);	
			scene.add(bar);
		};
	};

	function drawSynthBase(position){
		var geometry = new THREE.BoxGeometry( 17, 9, .75 );
		var material = new THREE.MeshLambertMaterial( {color: grey, side: THREE.DoubleSide, shading: THREE.FlatShading} );
		base = new THREE.Mesh( geometry, material );
		// base.translateZ(-1); 
		base.receiveShadow = true;
		base.castShadow = true;
		base.translateX(position + 9);
		base.translateY(3);
		scene.add(base);
	}

	function drawPlay(x, y, z, name)	{
		
		// Geometry and Material

		var geometry = new THREE.BoxGeometry( 1, 1, 1 );
		var material = new THREE.MeshLambertMaterial( {color: red, side: THREE.DoubleSide, shading: THREE.FlatShading} );
		App.Machine[name] = new THREE.Mesh( geometry, material );
		App.Machine[name].receiveShadow = true;
		App.Machine[name].castShadow = true;
		// Set Location

		App.Machine[name].translateX(x);
		App.Machine[name].translateY(y);
		App.Machine[name].translateZ(z); 

		// Set Parameters 

		App.Machine[name].state = 0;
		App.Machine[name].name = name;

		// Functions & Listeners 

		socket.on("clickPlay", function(data) {
			console.log("heard click s->c");
			console.log(data);
			App.Machine.play.clickSocket();
		});


		App.Machine[name].click = function(){
			socket.emit('pushPlay', name);
		};	

		App.Machine[name].clickSocket = function(){
			// if state is 0 (off), begin 'playing' the step sequencer and set to green, state state to on
			// if state is 1 (on), stop sequencer and set state to off, color to red 
			if (App.Machine[name].state === 0){
				start_player(); 
				this.material.color.setHex( green );
				App.Machine[name].state = 1;
			} else {
				stop_player(); 
				this.material.color.setHex( red );
				App.Machine[name].state = 0;
			}
			// socket emitter 
			// socket.emit('push', name);
		};

		// Add to Scene 

		scene.add( App.Machine[name] );
		objects.push( App.Machine[name] );
		play_button.push( App.Machine[name] );
		
	};

	function drawButton(x, y, z, name, step_position, getSound, sound, array, array_name){
		
		// Geometry and Material

		var geometry = new THREE.BoxGeometry( 1, 1, 1 );
		var material = new THREE.MeshLambertMaterial( {color: blue, side: THREE.DoubleSide, shading: THREE.FlatShading} );
		App.Machine[name] = new THREE.Mesh( geometry, material );
		App.Machine[name].receiveShadow = true;
		App.Machine[name].castShadow = true;

		// Set Location

		App.Machine[name].translateX(x);
		App.Machine[name].translateY(y);
		App.Machine[name].translateZ(z); 

		// Set Parameters 

		App.Machine[name].name = name;
		App.Machine[name].state = 0;
		App.Machine[name].step_position = step_position;

		consolecheck = function(data) {
			return;
		};

		App.Machine[name].click = function(){
			socket.emit('pushSeq', {array: array_name, name: App.Machine[name].step_position});
		};	

		App.Machine[name].clickSocket = function(){
			// console.log("hi");
			// if on, set state to 1 (on) and change color to highlited
			// if off, set state to 0 (off) and change color back to grey 
			if (App.Machine[name].state === 0){
				App.Machine[name].state = 1;
				setColor(App.Machine[name]);
			} else {
				App.Machine[name].state = 0;
				setColor(App.Machine[name]);
			}
		};

		// Add Sound 

		App.Machine[name].play = function(){
			getSound();
			App.Sounds[sound].start(0);
		}

		// Add to Scene 

		scene.add( App.Machine[name] );
		objects.push( App.Machine[name] );
		array.push( App.Machine[name] );
	};

	function drawSynthButton(x, y, z, name, step_position, getSound, sound, array, array_name){
			
			// Geometry and Material

			var geometry = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshLambertMaterial( {color: blue, side: THREE.DoubleSide, shading: THREE.FlatShading} );
			App.Machine[name] = new THREE.Mesh( geometry, material );
			App.Machine[name].receiveShadow = true;
			App.Machine[name].castShadow = true;

			// Set Location

			App.Machine[name].translateX(x);
			App.Machine[name].translateY(y);
			App.Machine[name].translateZ(z); 

			// Set Parameters 

			App.Machine[name].name = name;
			App.Machine[name].state = 0;
			App.Machine[name].step_position = step_position;

			App.Machine[name].click = function(){
				console.log(App.Machine[name]);
				socket.emit('pushSynth', {current_synth_hash: array_name, note: sound, position: App.Machine[name].step_position});
				// socket.emit('pushSeq', {array: array_name, name: App.Machine[name].step_position});
				// if (App.Machine[name].state === 0){
				// 	App.Machine[name].state = 1;
				// 	setColor(App.Machine[name]);
				// } else {
				// 	App.Machine[name].state = 0;
				// 	setColor(App.Machine[name]);
				// }
				// socket.emit('pushSeq', {array: array_name, name: App.Machine[name].step_position});
			};	

			App.Machine[name].clickSocket = function(){
				// console.log("hi");
				// if on, set state to 1 (on) and change color to highlited
				// if off, set state to 0 (off) and change color back to grey 
				if (App.Machine[name].state === 0){
					App.Machine[name].state = 1;
					setColor(App.Machine[name]);
				} else {
					App.Machine[name].state = 0;
					setColor(App.Machine[name]);
				}
			};

			// Add Sound 

			App.Machine[name].play = function(){
				getSound(sound);
				console.log(""+array_name+"_"+sound);
				App.Sounds[""+array_name+"_"+sound].start(0);
			}

			// Add to Scene 

			scene.add( App.Machine[name] );
			objects.push( App.Machine[name] );
			var hash_position = array[step_position];
			hash_position[sound] = App.Machine[name];
		};

	function drawSlider(x, y, z, name, type){
		// Geometry and Material

		var geometry = new THREE.BoxGeometry( 1, .5, 1 );
		var material = new THREE.MeshLambertMaterial( {color: blue, side: THREE.DoubleSide, shading: THREE.FlatShading} );
		App.Machine[name] = new THREE.Mesh( geometry, material );
		App.Machine[name].receiveShadow = true;
		App.Machine[name].castShadow = true;

		// Set Location

		App.Machine[name].translateX(x);
		App.Machine[name].translateY(y + .001);
		App.Machine[name].translateZ(z); 

		// Set Parameters 

		App.Machine[name].state = 0;
		App.Machine[name].active = 0;
		App.Machine[name].type = type;
		App.Machine[name].top = 5;
		App.Machine[name].bottom = 1.75;
		App.Machine[name].name = name;

		App.Machine[name].click = function(){
			if (App.Machine[name].active === 0){
					App.Machine[name].active = 1;
					App.Machine[name].material.color.setHex( yellow );
			} else {
					App.Machine[name].active = 0;
					App.Machine[name].material.color.setHex( blue );
			}
		}

		App.Machine[name].move = function(){
      var state = 100 * ( App.Machine[name].position.y - App.Machine[name].bottom ) / ( App.Machine[name].top - App.Machine[name].bottom );			
      socket.emit('sliderMove', {position: state, name: App.Machine[name].name });
			// if (App.Machine[name].state === 0){
			// 		App.Machine[name].state = 1;
			// 		setColor(App.Machine[name]);
			// } else {
			// 		App.Machine[name].state = 0;
			// 		setColor(App.Machine[name]);
			// }
		}

		App.Machine[name].setPosition = function(state){
			// console.log(state);
			App.Machine[name].state = state; 
			// var position = 100 * ( App.Machine[name].position.y - App.Machine[name].bottom ) / ( App.Machine[name].top - App.Machine[name].bottom );
			App.Machine[name].position.y = (( App.Machine[name].state / 100 ) * (App.Machine[name].top - App.Machine[name].bottom)) + App.Machine[name].bottom;
			// console.log(App.Machine[name].position.y);
		}

		App.Machine[name].clickSocket = function(){
		};

		scene.add( App.Machine[name] );
		objects.push( App.Machine[name] );

	}

	function drawKnob(x, y, z, name, type){
		// Geometry and Material

		var geometry = new THREE.CylinderGeometry( .55, .55, 1, 8 );
		var material = new THREE.MeshLambertMaterial( {color: blue, side: THREE.DoubleSide, shading: THREE.FlatShading} );
		App.Machine[name] = new THREE.Mesh( geometry, material );
		App.Machine[name].receiveShadow = true;
		App.Machine[name].castShadow = true;

		var pointer_geometry = new THREE.BoxGeometry( .15, 1.25, 1 );
		// pointer_geometry.translateY(y + .25);
		var material = new THREE.MeshBasicMaterial( { color: green } );
		pointer = new THREE.Mesh( pointer_geometry, material );

		// pointer.geometry.updateMatrix();
		App.Machine[name].geometry.merge( pointer.geometry, pointer.geometry.matrix );

		pointer.translateY(5);
		// App.Machine[name].push(pointer);

		App.Machine[name].click = function(){
			if (App.Machine[name].active === 0){
					App.Machine[name].active = 1;
					App.Machine[name].material.color.setHex( yellow );
			} else {
					App.Machine[name].active = 0;
					App.Machine[name].material.color.setHex( blue );
			}
		}


		App.Machine[name].move = function(){
      var state = 100 * ( 1 - (App.Machine[name].rotation.y + App.Machine[name].maximum_rotation_right) / (App.Machine[name].maximum_rotation_right * 2));			
      if (state > 100){
      	state = 100; 
      } else if (state < 0){
      	state = 0;
      }
      // console.log(state);
      // console.log(state);
      socket.emit('knobMove', {position: state, name: App.Machine[name].name });
			// if (App.Machine[name].state === 0){
			// 		App.Machine[name].state = 1;
			// 		setColor(App.Machine[name]);
			// } else {
			// 		App.Machine[name].state = 0;
			// 		setColor(App.Machine[name]);
			// }
		}

		App.Machine[name].setPosition = function(state){
			// console.log(state);
			App.Machine[name].state = state; 
			// var position = 100 * ( App.Machine[name].position.y - App.Machine[name].bottom ) / ( App.Machine[name].top - App.Machine[name].bottom );
			App.Machine[name].rotation.y = (( App.Machine[name].state / 100 ) * (App.Machine[name].maximum_rotation_left - App.Machine[name].maximum_rotation_right)) + App.Machine[name].maximum_rotation_right;
			// console.log(App.Machine[name].position.y);
		}

		// Set Location

		App.Machine[name].translateX(x);
		App.Machine[name].translateY(y);
		App.Machine[name].translateZ(z); 
		App.Machine[name].rotateX(1.57079633);
		App.Machine[name].maximum_rotation_right = 1.8;
		App.Machine[name].maximum_rotation_left = -1.8; 
		App.Machine[name].rotation.y = App.Machine[name].maximum_rotation_right;
		
		// Set Parameters 

		App.Machine[name].state = 0;
		App.Machine[name].type = type;
		App.Machine[name].name = name;
		App.Machine[name].active = 0;

		scene.add( App.Machine[name] );
		objects.push( App.Machine[name] );

	}


	function drawSelector(x, y, z, name, array){
		
		// Geometry and Material

		var geometry = new THREE.BoxGeometry( 1, .5, 1 );
		var material = new THREE.MeshLambertMaterial( {color: grey, side: THREE.DoubleSide, shading: THREE.FlatShading} );
		App.Machine[name] = new THREE.Mesh( geometry, material );
		App.Machine[name].receiveShadow = true;
		App.Machine[name].castShadow = true;

		// Set Location

		App.Machine[name].translateX(x);
		App.Machine[name].translateY(y);
		App.Machine[name].translateZ(z); 

		// Set Parameters 

		App.Machine[name].state = 0;
		App.Machine[name].buttons = array; 
		App.Machine[name].array = array;

		// Functions & Listeners 

		App.Machine[name].click = function(){
			// on click, 
			// check to see if it's state is 0 
			if (App.Machine[name].state === 0){
				// set all selectors to off
				selectors.forEach( function(selector){
					selector.state = 0;
					setColor(selector);
					selector.buttons.forEach(function(button){
						button.visible = false; 
						button.position.z = -1; 
					});
				});
				// set this selector to on
				// console.log(App.Machine[name].array);
				current_visible = App.Machine[name].array;
				App.Machine[name].state = 1;
				setColor(App.Machine[name]); 
				//// set its array to visible
				App.Machine[name].buttons.forEach(function(button){
					button.visible = true;
					button.position.z = 0; 
				});
			};
		};

		// Add to Scene 

		scene.add( App.Machine[name] );
		objects.push( App.Machine[name] );
		selectors.push ( App.Machine[name] );

	};

function drawSynthSelector(x, y, z, name, array){
		
		// Geometry and Material

		var geometry = new THREE.BoxGeometry( 7, 1, 1 );
		var material = new THREE.MeshLambertMaterial( {color: grey, side: THREE.DoubleSide, shading: THREE.FlatShading} );
		App.Machine[name] = new THREE.Mesh( geometry, material );
		App.Machine[name].receiveShadow = true;
		App.Machine[name].castShadow = true;

		// Set Location

		App.Machine[name].translateX(x);
		App.Machine[name].translateY(y);
		App.Machine[name].translateZ(z); 

		// Set Parameters 

		App.Machine[name].state = 0;
		App.Machine[name].buttons = array; 
		App.Machine[name].array = array;

		// Functions & Listeners 

		App.Machine[name].click = function(){
			// on click, 
			// check to see if it's state is 0 
			if (App.Machine[name].state === 0){
				// set all synth selectors to off
				synth_selectors.forEach( function(selector){
					selector.state = 0;
					setColor(selector);
					_.each(selector.array, function(element){
						_.each(element, function(element_2){
							// console.log(element_2);
							element_2.visible = false;
							element_2.position.z = -1;
						})
					})
				});
				// set this selector to on
				// console.log(App.Machine[name].array);
				// current_visible = App.Machine[name].array;
				App.Machine[name].state = 1;
				setColor(App.Machine[name]);
				_.each(App.Machine[name].array, function(element){
					_.each(element, function(element_2){
						console.log(element_2);
						element_2.visible = true;
						element_2.position.z = 0;
					})	
				})
				//// set its array to visible
				// App.Machine[name].buttons.forEach(function(button){
				// 	button.visible = true;
				// 	button.position.z = 0; 
				// });
			};
		};

		// Add to Scene 

		scene.add( App.Machine[name] );
		objects.push( App.Machine[name] );
		synth_selectors.push ( App.Machine[name] );

	};

	// Timing / BPM Functions 

	function changeBPM(bpm){
		bpm = bpm;
		quarter_note = calculateQuarterNote(bpm);
		sixteenth_note = calculateSixteenthNote(quarter_note);		
	}

	function calculateQuarterNote(bpm){
		var quarter_note = 60 / bpm * 1000;
		return quarter_note;
	}

	function calculateSixteenthNote(quarter_note){
		var sixteenth_note = quarter_note / 4; 
		return sixteenth_note; 
	}

	// Player Functions

	function start_player() {
		
		intervalID = window.setInterval(step, sixteenth_note);
		step(); 
	}

	function stop_player() {
		clearInterval(intervalID);
		current_visible.forEach(setColor);
		_.each(bass_buttons[current_step - 1], function(button){
			setColor(button);
		})	
		current_step = 0; 
	}

	function step() {
		// debugger; 
		// get visible object at step
		var visible_steps = []
		visible_steps.push(current_visible[current_step]);
		// get array of all sounds at step
		var steps = [];
		selectors.forEach(function(selector){
			steps.push(selector.array[current_step]);
		})
		_.each(bass_buttons[current_step], function(button){
			steps.push(button);
			visible_steps.push(button);
		})
		_.each(key_buttons[current_step], function(button){
			steps.push(button);
			visible_steps.push(button);
		})
		// set color of object to yellow
		visible_steps.forEach(function(step){
			step.material.color.setHex ( yellow_highlight );
		})
		// check state to play sound or not of all steps in array
		steps.forEach(function(step){
			playSound(step);
		})
		// set last button back to its normal state
		if (current_step === 0){
			setColor(current_visible[current_visible.length - 1]);
			_.each(bass_buttons[current_visible.length - 1], function(button){
				setColor(button);
			})
			_.each(key_buttons[current_visible.length - 1], function(button){
				setColor(button);
			})
			// bass_buttons[current_visible.length - 1].forEach(function(button){
			// 	setColor(button);
			// })
		} else {
			setColor(current_visible[current_step-1]);
			_.each(bass_buttons[current_step - 1], function(button){
				setColor(button);
			})
			_.each(key_buttons[current_step - 1], function(button){
				setColor(button);
			})
			// bass_buttons[current_step-1].forEach(function(button){
			// 	setColor(button);
			// })
		}
		// add one to step or reset to zero if snare_buttons.length is less than current step
		// socket.emit('nextStep', {passed_step: current_step, current_visible_length: current_visible.length});
		if (current_step > current_visible.length - 2 ){
			current_step = 0;
		} else {
			current_step = current_step + 1; 
		}
	};

	function playSound(button){
		// take the button object at current step and play its corresponding sound
		if (button.state === 1){
			button.play();
		};
	}

	function setColor(button){
		// check a button's state
		// set its color accordingly 
		if (button.state === 1 ){
			button.material.color.setHex( yellow );
		} else {
			button.material.color.setHex( blue );
		}
	}
};
>>>>>>> 150157a638a79fdbe9ae098db52a23373e67f029
