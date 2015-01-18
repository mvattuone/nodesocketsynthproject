function drawMachine(){

	// Parameters

	var bpm = 128;
	var quarter_note = calculateQuarterNote(bpm);
	var sixteenth_note = calculateSixteenthNote(quarter_note);

	var play_button = [];
	var kick_buttons = [];

	var current_step = 0;
	var current_visible = kick_buttons;

	// Colors

	var red = 0xe74c3c;
  var green = 0x2ecc71;
  var grey = 0x95a5a6;
  var yellow = 0xf39c12;
  var yellow_highlight = 0xf1c40f;

	// Build Drum Machine

	play = drawPlay(-4, 0, 0, "play");
	snare_button_1 = drawButton(-2, 0, 0, "snare_button_1");
	snare_button_2 = drawButton(0, 0, 0, "snare_button_2");
	snare_button_3 = drawButton(2, 0, 0, "snare_button_3");
	snare_button_4 = drawButton(4, 0, 0, "snare_button_4");

	function drawPlay(x, y, z, name)	{
		
		console.log("drawing play button");

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

	function drawButton(x, y, z, name)	{
		
		console.log("drawing sequencer button")

		// Geometry and Material

		var geometry = new THREE.BoxGeometry( 1, 1, 1 );
		var material = new THREE.MeshBasicMaterial( { color: grey } );
		App.Machine[name] = new THREE.Mesh( geometry, material );

		// Set Location

		App.Machine[name].translateX(x);
		App.Machine[name].translateY(y);
		App.Machine[name].translateZ(z); 

		// Set Parameters 

		App.Machine[name].state = 0;

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

		// Add to Scene 

		scene.add( App.Machine[name] );
		objects.push( App.Machine[name] );
		kick_buttons.push( App.Machine[name] );

	};

	// Timing / BPM Functions 

	function changeBPM(bpm){
		bpm = bpm;
		quarter_note = calculateQuarterNote(bpm);
		sixteenth_note = calculateSixteenthNote(quarter_note);		
	}

	function calculateQuarterNote(bpm){
		var quarter_note = 60 / bpm * 1000;
		console.log(quarter_note); 
		return quarter_note;
	}

	function calculateSixteenthNote(quarter_note){
		var sixteenth_note = quarter_note / 4; 
		console.log(sixteenth_note); 
		return sixteenth_note; 
	}

	// Player Functions

	function start_player() {
		console.log("starting player");
		intervalID = window.setInterval(step, sixteenth_note);
	}

	function stop_player() {
		console.log("stopping player");
		clearInterval(intervalID);
		current_visible.forEach(setColor);
		current_step = 0; 
	}

	function step() {
		// get object at step
		var step = current_visible[current_step];
		// set color of object to yellow
		step.material.color.setHex ( yellow_highlight );
		// check state to play sound or not
		playSound(step);
		// set last button back to its normal state
		if (current_step === 0){
			setColor(current_visible[current_visible.length - 1]);
		} else {
			setColor(current_visible[current_step-1]);
		}
		// add one to step or reset to zero if kick_buttons.length is less than current step
		if (current_step > current_visible.length - 2 ){
			current_step = 0;
		} else {
			current_step = current_step + 1; 
		}
	}

	function playSound(button){
		// take the button object at step and play its corresponding sound
		console.log(button.state)
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