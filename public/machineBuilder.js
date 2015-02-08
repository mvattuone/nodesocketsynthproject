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

	var selectors = [];
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

	var directionalLight_top = new THREE.DirectionalLight( 0xffffff, 3 );
	directionalLight_top.position.set( -20, 20, 8 );
	// directionalLight_top.target.position.set( camera_pointer );
	directionalLight_top.castShadow = true;
	directionalLight_top.shadowDarkness = .5;

	var d = 10;
	directionalLight_top.shadowCameraLeft = -d;
	directionalLight_top.shadowCameraRight = d;
	directionalLight_top.shadowCameraTop = d;
	directionalLight_top.shadowCameraBottom = -d;
	directionalLight_top.shadowCameraNear	= 5;		
	directionalLight_top.shadowCameraFar = 500;
	directionalLight_top.shadowMapWidth = 2048;
	directionalLight_top.shadowMapHeight = 2048;
	scene.add( directionalLight_top );

	// Build Drum Machine

	drawBase(); 
	drawBackground();

	play = drawPlay(-8, 0, 0, "play");

	kick_selector = drawSelector(-6, 1, 0, "kick_selector", kick_buttons);
	kick_button_1 = drawButton(-6, 0, 0, "kick_button_1", 0, getKick, 'kick', kick_buttons, "kick");
	kick_button_2 = drawButton(-4, 0, 0, "kick_button_2", 1, getKick, 'kick', kick_buttons, "kick");
	kick_button_3 = drawButton(-2, 0, 0, "kick_button_3", 2, getKick, 'kick', kick_buttons, "kick");
	kick_button_4 = drawButton(0, 0, 0, "kick_button_4", 3, getKick, 'kick', kick_buttons, "kick");
	kick_button_5 = drawButton(2, 0, 0, "kick_button_5", 4, getKick, 'kick', kick_buttons, "kick");
	kick_button_6 = drawButton(4, 0, 0, "kick_button_6", 5, getKick, 'kick', kick_buttons, "kick");
	kick_button_7 = drawButton(6, 0, 0, "kick_button_7", 6, getKick, 'kick', kick_buttons, "kick");
	kick_button_8 = drawButton(8, 0, 0, "kick_button_8", 7, getKick, 'kick', kick_buttons, "kick");
	kick_slider = drawSlider(-6, 1.75,0, "kick_slider", "slider"); 
	kick_knob = drawKnob(-6, 6.25 ,0, "kick_knob", "knob"); 

	snare_selector = drawSelector(-4, 1, 0, "snare_selector", snare_buttons);
	snare_button_1 = drawButton(-6, 0, 0, "snare_button_1", 0,  getSnare, 'snare', snare_buttons, "snare");
	snare_button_2 = drawButton(-4, 0, 0, "snare_button_2", 1, getSnare, 'snare', snare_buttons, "snare");
	snare_button_3 = drawButton(-2, 0, 0, "snare_button_3", 2, getSnare, 'snare', snare_buttons, "snare");
	snare_button_4 = drawButton(0, 0, 0, "snare_button_4", 3, getSnare, 'snare', snare_buttons, "snare");
	snare_button_5 = drawButton(2, 0, 0, "snare_button_5", 4, getSnare, 'snare', snare_buttons, "snare");
	snare_button_6 = drawButton(4, 0, 0, "snare_button_6", 5, getSnare, 'snare', snare_buttons, "snare");
	snare_button_7 = drawButton(6, 0, 0, "snare_button_7", 6, getSnare, 'snare', snare_buttons, "snare");
	snare_button_8 = drawButton(8, 0, 0, "snare_button_8", 7, getSnare, 'snare', snare_buttons, "snare");
	snare_slider = drawSlider(-4, 1.75,0, "snare_slider", "slider"); 
	snare_knob = drawKnob(-4, 6.25, 0, "snare_knob", "knob"); 

	high_hat_selector = drawSelector(-2, 1, 0, "high_hat_selector", high_hat_buttons);
	high_hat_button_1 = drawButton(-6, 0, 0, "high_hat_button_1", 0, getHighHat, 'high_hat', high_hat_buttons, "hh");
	high_hat_button_2 = drawButton(-4, 0, 0, "high_hat_button_2", 1, getHighHat, 'high_hat', high_hat_buttons, "hh");
	high_hat_button_3 = drawButton(-2, 0, 0, "high_hat_button_3", 2, getHighHat, 'high_hat', high_hat_buttons, "hh");
	high_hat_button_4 = drawButton(0, 0, 0, "high_hat_button_4", 3, getHighHat, 'high_hat', high_hat_buttons, "hh");
	high_hat_button_5 = drawButton(2, 0, 0, "high_hat_button_5", 4, getHighHat, 'high_hat', high_hat_buttons, "hh");
	high_hat_button_6 = drawButton(4, 0, 0, "high_hat_button_6", 5, getHighHat, 'high_hat', high_hat_buttons, "hh");
	high_hat_button_7 = drawButton(6, 0, 0, "high_hat_button_7", 6, getHighHat, 'high_hat', high_hat_buttons, "hh");
	high_hat_button_8 = drawButton(8, 0, 0, "high_hat_button_8", 7, getHighHat, 'high_hat', high_hat_buttons, "hh");
	high_hat_slider = drawSlider(-2, 1.75,0, "high_hat_slider", "slider"); 
	high_hat_knob = drawKnob(-2, 6.25, 0, "high_hat_knob", "knob"); 

	high_hat_open_selector = drawSelector(0, 1, 0, "high_hat_open_selector", high_hat_open_buttons);
	high_hat_open_button_1 = drawButton(-6, 0, 0, "high_hat_open_button_1", 0, getHighHatOpen, 'high_hat_open', high_hat_open_buttons, "hho");
	high_hat_open_button_2 = drawButton(-4, 0, 0, "high_hat_open_button_2", 1, getHighHatOpen, 'high_hat_open', high_hat_open_buttons, "hho");
	high_hat_open_button_3 = drawButton(-2, 0, 0, "high_hat_open_button_3", 2, getHighHatOpen, 'high_hat_open', high_hat_open_buttons, "hho");
	high_hat_open_button_4 = drawButton(0, 0, 0, "high_hat_open_button_4", 3, getHighHatOpen, 'high_hat_open', high_hat_open_buttons, "hho");
	high_hat_open_button_5 = drawButton(2, 0, 0, "high_hat_open_button_5", 4, getHighHatOpen, 'high_hat_open', high_hat_open_buttons, "hho");
	high_hat_open_button_6 = drawButton(4, 0, 0, "high_hat_open_button_6", 5, getHighHatOpen, 'high_hat_open', high_hat_open_buttons, "hho");
	high_hat_open_button_7 = drawButton(6, 0, 0, "high_hat_open_button_7", 6, getHighHatOpen, 'high_hat_open', high_hat_open_buttons, "hho");
	high_hat_open_button_8 = drawButton(8, 0, 0, "high_hat_open_button_8", 7, getHighHatOpen, 'high_hat_open', high_hat_open_buttons, "hho");
	high_hat_open_slider = drawSlider(0, 1.75,0, "high_hat_open_slider", "slider"); 
	high_hat_open_knob = drawKnob(0, 6.25, 0, "high_hat_open_knob", "knob"); 

	clap_selector = drawSelector(2, 1, 0, "clap_selector", clap_buttons);
	clap_button_1 = drawButton(-6, 0, 0, "clap_button_1", 0, getClap, 'clap', clap_buttons, "clap");
	clap_button_2 = drawButton(-4, 0, 0, "clap_button_2", 1, getClap, 'clap', clap_buttons, "clap");
	clap_button_3 = drawButton(-2, 0, 0, "clap_button_3", 2, getClap, 'clap', clap_buttons, "clap");
	clap_button_4 = drawButton(0, 0, 0, "clap_button_4", 3, getClap, 'clap', clap_buttons, "clap");
	clap_button_5 = drawButton(2, 0, 0, "clap_button_5", 4, getClap, 'clap', clap_buttons, "clap");
	clap_button_6 = drawButton(4, 0, 0, "clap_button_6", 5, getClap, 'clap', clap_buttons, "clap");
	clap_button_7 = drawButton(6, 0, 0, "clap_button_7", 6, getClap, 'clap', clap_buttons, "clap");
	clap_button_8 = drawButton(8, 0, 0, "clap_button_8", 7, getClap, 'clap', clap_buttons, "clap");
	clap_slider = drawSlider(2, 1.75,0, "clap_slider", "slider"); 
	clap_knob = drawKnob(2, 6.25, 0, "clap_knob", "knob"); 

	tom_selector = drawSelector(4, 1, 0, "tom_selector", tom_buttons);
	tom_button_1 = drawButton(-6, 0, 0, "tom_button_1", 0, getTom, 'tom', tom_buttons, "tom");
	tom_button_2 = drawButton(-4, 0, 0, "tom_button_2", 1, getTom, 'tom', tom_buttons, "tom");
	tom_button_3 = drawButton(-2, 0, 0, "tom_button_3", 2, getTom, 'tom', tom_buttons, "tom");
	tom_button_4 = drawButton(0, 0, 0, "tom_button_4", 3, getTom, 'tom', tom_buttons, "tom");
	tom_button_5 = drawButton(2, 0, 0, "tom_button_5", 4, getTom, 'tom', tom_buttons, "tom");
	tom_button_6 = drawButton(4, 0, 0, "tom_button_6", 5, getTom, 'tom', tom_buttons, "tom");
	tom_button_7 = drawButton(6, 0, 0, "tom_button_7", 6, getTom, 'tom', tom_buttons, "tom");
	tom_button_8 = drawButton(8, 0, 0, "tom_button_8", 7, getTom, 'tom', tom_buttons, "tom");
	tom_slider = drawSlider(4, 1.75,0, "tom_slider", "slider"); 
	tom_knob = drawKnob(4, 6.25, 0, "tom_knob", "knob"); 

	cowbell_selector = drawSelector(6, 1, 0, "cowbell_selector", cowbell_buttons);
	cowbell_button_1 = drawButton(-6, 0, 0, "cowbell_button_1", 0, getCowbell, 'cowbell', cowbell_buttons, "cowbell");
	cowbell_button_2 = drawButton(-4, 0, 0, "cowbell_button_2", 1, getCowbell, 'cowbell', cowbell_buttons, "cowbell");
	cowbell_button_3 = drawButton(-2, 0, 0, "cowbell_button_3", 2, getCowbell, 'cowbell', cowbell_buttons, "cowbell");
	cowbell_button_4 = drawButton(0, 0, 0, "cowbell_button_4", 3, getCowbell, 'cowbell', cowbell_buttons, "cowbell");
	cowbell_button_5 = drawButton(2, 0, 0, "cowbell_button_5", 4, getCowbell, 'cowbell', cowbell_buttons, "cowbell");
	cowbell_button_6 = drawButton(4, 0, 0, "cowbell_button_6", 5, getCowbell, 'cowbell', cowbell_buttons, "cowbell");
	cowbell_button_7 = drawButton(6, 0, 0, "cowbell_button_7", 6, getCowbell, 'cowbell', cowbell_buttons, "cowbell");
	cowbell_button_8 = drawButton(8, 0, 0, "cowbell_button_8", 7, getCowbell, 'cowbell', cowbell_buttons, "cowbell");
	cowbell_slider = drawSlider(6, 1.75,0, "cowbell_slider", "slider"); 
	cowbell_knob = drawKnob(6, 6.25, 0, "cowbell_knob", "knob"); 

	shaker_selector = drawSelector(8, 1, 0, "shaker_selector", shaker_buttons);
	shaker_button_1 = drawButton(-6, 0, 0, "shaker_button_1", 0, getShaker, 'maraca', shaker_buttons, "shaker");
	shaker_button_2 = drawButton(-4, 0, 0, "shaker_button_2", 1, getShaker, 'maraca', shaker_buttons, "shaker");
	shaker_button_3 = drawButton(-2, 0, 0, "shaker_button_3", 2, getShaker, 'maraca', shaker_buttons, "shaker");
	shaker_button_4 = drawButton(0, 0, 0, "shaker_button_4", 3, getShaker, 'maraca', shaker_buttons, "shaker");
	shaker_button_5 = drawButton(2, 0, 0, "shaker_button_5", 4, getShaker, 'maraca', shaker_buttons, "shaker");
	shaker_button_6 = drawButton(4, 0, 0, "shaker_button_6", 5, getShaker, 'maraca', shaker_buttons, "shaker");
	shaker_button_7 = drawButton(6, 0, 0, "shaker_button_7", 6, getShaker, 'maraca', shaker_buttons, "shaker");
	shaker_button_8 = drawButton(8, 0, 0, "shaker_button_8", 7, getShaker, 'maraca', shaker_buttons, "shaker");
	shaker_slider = drawSlider(8, 1.75,0, "shaker_slider", "slider"); 
	shaker_knob = drawKnob(8, 6.25, 0, "shaker_knob", "knob"); 

	// set initial state

	App.Machine.kick_selector.click();

	function drawBackground(){
		var geometry = new THREE.PlaneGeometry( 30, 30, 16 );
		var material = new THREE.MeshLambertMaterial( {color: 0xFFE4C4, side: THREE.DoubleSide, shading: THREE.FlatShading} );
		plane = new THREE.Mesh( geometry, material );
		plane.translateZ(0); 
		// plane.translateX(0);
		// plane.translateY(3);
		plane.receiveShadow = true;
		scene.add(plane);		
	}

	function drawBase(){
		var geometry = new THREE.BoxGeometry( 19, 9, .75 );
		var material = new THREE.MeshLambertMaterial( {color: grey, side: THREE.DoubleSide, shading: THREE.FlatShading} );
		base = new THREE.Mesh( geometry, material );
		// base.translateZ(-1); 
		base.receiveShadow = true;
		base.castShadow = true;
		base.translateX(0);
		base.translateY(3);
		scene.add(base);

		for(i = 0; i < 8; i++){
			var geometry = new THREE.BoxGeometry( .1, 3.25, .1 );
			var material = new THREE.MeshLambertMaterial( {color: blue, side: THREE.DoubleSide, shading: THREE.FlatShading} );
			bar = new THREE.Mesh( geometry, material );
			bar.receiveShadow = true;
			bar.castShadow = true;
			bar.translateX(-6 + (2 * i));
			bar.translateZ(.35); 	
			bar.translateY(3.35);	
			scene.add(bar);
		};
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
		current_step = 0; 
	}

	function step() {
		// debugger; 
		// get visible object at step
		var step = current_visible[current_step];
		// get array of all sounds at step
		var steps = [];
		selectors.forEach(function(selector){
			steps.push(selector.array[current_step]);
		})
		// set color of object to yellow
		step.material.color.setHex ( yellow_highlight );
		// check state to play sound or not of all steps in array
		steps.forEach(function(step){
			playSound(step);
		})
		// set last button back to its normal state
		if (current_step === 0){
			setColor(current_visible[current_visible.length - 1]);
		} else {
			setColor(current_visible[current_step-1]);
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