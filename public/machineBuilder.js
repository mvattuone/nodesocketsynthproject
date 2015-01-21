function drawMachine(){

	// Parameters

	var bpm = 128;
	var quarter_note = calculateQuarterNote(bpm);
	var sixteenth_note = calculateSixteenthNote(quarter_note);

	var play_button = [];

	var snare_buttons = [];
	var kick_buttons = [];
	var high_hat_buttons = [];
	var high_hat_open_buttons = [];

	var selectors = [];

	var current_step = 0;
	var current_visible = kick_buttons;

	// Colors

	var red = 0xe74c3c;
  var green = 0x2ecc71;
  var grey = 0x95a5a6;
  var yellow = 0xf39c12;
  var yellow_highlight = 0xf1c40f;

	// Build Drum Machine

	play = drawPlay(-8, 0, 0, "play");

	kick_selector = drawSelector(-6, 1, 0, "kick_selector", kick_buttons);
	kick_button_1 = drawButton(-6, 0, 0, "kick_button_1", getKick, 'kick', kick_buttons);
	kick_button_2 = drawButton(-4, 0, 0, "kick_button_2", getKick, 'kick', kick_buttons);
	kick_button_3 = drawButton(-2, 0, 0, "kick_button_3", getKick, 'kick', kick_buttons);
	kick_button_4 = drawButton(0, 0, 0, "kick_button_4", getKick, 'kick', kick_buttons);
	kick_button_5 = drawButton(2, 0, 0, "kick_button_5", getKick, 'kick', kick_buttons);
	kick_button_6 = drawButton(4, 0, 0, "kick_button_6", getKick, 'kick', kick_buttons);
	kick_button_7 = drawButton(6, 0, 0, "kick_button_7", getKick, 'kick', kick_buttons);
	kick_button_8 = drawButton(8, 0, 0, "kick_button_8", getKick, 'kick', kick_buttons);

	snare_selector = drawSelector(-4, 1, 0, "snare_selector", snare_buttons);
	snare_button_1 = drawButton(-6, 0, 0, "snare_button_1", getSnare, 'snare', snare_buttons);
	snare_button_2 = drawButton(-4, 0, 0, "snare_button_2", getSnare, 'snare', snare_buttons);
	snare_button_3 = drawButton(-2, 0, 0, "snare_button_3", getSnare, 'snare', snare_buttons);
	snare_button_4 = drawButton(0, 0, 0, "snare_button_4", getSnare, 'snare', snare_buttons);
	snare_button_5 = drawButton(2, 0, 0, "snare_button_5", getSnare, 'snare', snare_buttons);
	snare_button_6 = drawButton(4, 0, 0, "snare_button_6", getSnare, 'snare', snare_buttons);
	snare_button_7 = drawButton(6, 0, 0, "snare_button_7", getSnare, 'snare', snare_buttons);
	snare_button_8 = drawButton(8, 0, 0, "snare_button_8", getSnare, 'snare', snare_buttons);

	high_hat_selector = drawSelector(-2, 1, 0, "high_hat_selector", high_hat_buttons);
	high_hat_button_1 = drawButton(-6, 0, 0, "high_hat_button_1", getHighHat, 'high_hat', high_hat_buttons);
	high_hat_button_2 = drawButton(-4, 0, 0, "high_hat_button_2", getHighHat, 'high_hat', high_hat_buttons);
	high_hat_button_3 = drawButton(-2, 0, 0, "high_hat_button_3", getHighHat, 'high_hat', high_hat_buttons);
	high_hat_button_4 = drawButton(0, 0, 0, "high_hat_button_4", getHighHat, 'high_hat', high_hat_buttons);
	high_hat_button_5 = drawButton(2, 0, 0, "high_hat_button_5", getHighHat, 'high_hat', high_hat_buttons);
	high_hat_button_6 = drawButton(4, 0, 0, "high_hat_button_6", getHighHat, 'high_hat', high_hat_buttons);
	high_hat_button_7 = drawButton(6, 0, 0, "high_hat_button_7", getHighHat, 'high_hat', high_hat_buttons);
	high_hat_button_8 = drawButton(8, 0, 0, "high_hat_button_8", getHighHat, 'high_hat', high_hat_buttons);

	high_hat_open_selector = drawSelector(0, 1, 0, "high_hat_open_selector", high_hat_open_buttons);
	high_hat_open_button_1 = drawButton(-6, 0, 0, "high_hat_open_button_1", getHighHatOpen, 'high_hat_open', high_hat_open_buttons);
	high_hat_open_button_2 = drawButton(-4, 0, 0, "high_hat_open_button_2", getHighHatOpen, 'high_hat_open', high_hat_open_buttons);
	high_hat_open_button_3 = drawButton(-2, 0, 0, "high_hat_open_button_3", getHighHatOpen, 'high_hat_open', high_hat_open_buttons);
	high_hat_open_button_4 = drawButton(0, 0, 0, "high_hat_open_button_4", getHighHatOpen, 'high_hat_open', high_hat_open_buttons);
	high_hat_open_button_5 = drawButton(2, 0, 0, "high_hat_open_button_5", getHighHatOpen, 'high_hat_open', high_hat_open_buttons);
	high_hat_open_button_6 = drawButton(4, 0, 0, "high_hat_open_button_6", getHighHatOpen, 'high_hat_open', high_hat_open_buttons);
	high_hat_open_button_7 = drawButton(6, 0, 0, "high_hat_open_button_7", getHighHatOpen, 'high_hat_open', high_hat_open_buttons);
	high_hat_open_button_8 = drawButton(8, 0, 0, "high_hat_open_button_8", getHighHatOpen, 'high_hat_open', high_hat_open_buttons);

	// set initial state

	App.Machine.kick_selector.click();

	function drawPlay(x, y, z, name)	{
		
		// Geometry and Material

		var geometry = new THREE.BoxGeometry( 1, 1, 1 );
		var material = new THREE.MeshBasicMaterial( { color: red } );
		App.Machine[name] = new THREE.Mesh( geometry, material );

		// Set Location

		App.Machine[name].translateX(x);
		App.Machine[name].translateY(y);
		App.Machine[name].translateZ(z); 

		// Set Parameters 

		App.Machine[name].state = 0;

		// Functions & Listeners 

		App.Machine[name].click = function(){
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
			socket.emit('push', App.Machine[name]);
		};

		// Add to Scene 

		scene.add( App.Machine[name] );
		objects.push( App.Machine[name] );
		play_button.push( App.Machine[name] );
		
	};

	function drawButton(x, y, z, name, getSound, sound, array){
		
		// Geometry and Material

		var geometry = new THREE.BoxGeometry( 1, 1, 1 );
		var material = new THREE.MeshBasicMaterial( { color: grey } );
		App.Machine[name] = new THREE.Mesh( geometry, material );

		// Set Location

		App.Machine[name].translateX(x);
		App.Machine[name].translateY(y);
		App.Machine[name].translateZ(z); 

		// Set Parameters 

		App.Machine[name].name = name;
		App.Machine[name].state = 0;
		// App.Machine[name].sound = sound;

		// Functions & Listeners 

		App.Machine[name].click = function(){
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

	function drawSelector(x, y, z, name, array){
		
		// Geometry and Material

		var geometry = new THREE.BoxGeometry( 1, .5, 1 );
		var material = new THREE.MeshBasicMaterial( { color: grey } );
		App.Machine[name] = new THREE.Mesh( geometry, material );

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
		step(); 
		intervalID = window.setInterval(step, sixteenth_note);
	}

	function stop_player() {
		clearInterval(intervalID);
		current_visible.forEach(setColor);
		current_step = 0; 
	}

	function step() {
		// get visible object at step
		var step = current_visible[current_step];
		// get array of all sounds at step
		var steps = []
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
			button.material.color.setHex( grey );
		}
	}
};