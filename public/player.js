var bass_buttons = [0,0,0,0,0,0,0,0];
var bass_gain = 0;

var socket = io();

var playing = false;

var renderPlayer = function(){

	var scene;
	var renderer;
	var camera;
	var controls;
	var projector;
	var clock = new THREE.Clock();
	var objects = [];

	var kick_slider;
	var kick_knob;

	var playerControls = new function() {
    this.kickVolumePosition = 0;
    this.kickKnobPosition = 0;
  }

	init();

	function init(){

		socket.on('button pressed', function(data) {
			console.log('hello');
		});

		scene = new THREE.Scene();
		scene.add(new THREE.AmbientLight(0x212223));

		camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
		camera.position.set(0,0,7);

		renderer = new THREE.WebGLRenderer({ alpha: false });
		renderer.setClearColor( 0xFFFAFA, 1);
		renderer.setSize( window.innerWidth, window.innerHeight );
		renderer.shadowMapEnabled = true;
		// renderer.shadowMapType = THREE.PCFShadowMap;
		renderer.shadowMapType = THREE.PCFSoftShadowMap;
		document.body.appendChild( renderer.domElement );

		controls = new THREE.OrbitControls( camera, renderer.domElement );

		projector = new THREE.Projector();

    renderer.domElement.addEventListener( 'mousedown', onDocumentMouseDown, false );

    var gui = new DAT.GUI();
    gui.add(playerControls, 'kickVolumePosition',-0.5,0.5);
    gui.add(playerControls, 'kickKnobPosition',-0.5,0.5);

    // make plane
    var geometry = new THREE.PlaneBufferGeometry( 15, 15, 32 );
		var material = new THREE.MeshLambertMaterial( {color: 0xF4A460, side: THREE.DoubleSide} );
		var plane = new THREE.Mesh( geometry, material );
		plane.castShadow = false;
		plane.receiveShadow = true;
		plane.position.set(0,0,-0.71);
		scene.add( plane );

    // make box
		var geometry = new THREE.BoxGeometry( 10, 5, 1.4 );
		var material = new THREE.MeshLambertMaterial( { color: 0xA9A9A9 } );
		cube = new THREE.Mesh( geometry, material );
		cube.position.set(0,0,0);
		cube.castShadow = true;
		cube.receiveShadow = true;
		scene.add( cube );
    objects.push( cube );

    // make kick buttons
		var button_geometry = new THREE.BoxGeometry( .5, .5, .5 );
		for(i=0;i < 8; i++){
			var button_material = new THREE.MeshLambertMaterial( { color: 0x4682B4 } );
			button = new THREE.Mesh( button_geometry, button_material );
			button.position.set(-3+i,-1,.75);
			button.name = "button_"+i;
			button.type = "button";
			button.bass_button = i;
			button.castShadow = true;
			button.receiveShadow = true;
			scene.add( button );
			objects.push( button );
		}

		// make kick slider
		var slider_geometry = new THREE.BoxGeometry( .25, .25, .5 );
		var slider_material = new THREE.MeshLambertMaterial( { color: 0xDC143C } );
	  kick_slider = new THREE.Mesh( slider_geometry, slider_material );
	  kick_slider.position.set(-3,-0.5,.6);
		kick_slider.name = "kick_slider";
		kick_slider.type = "kick_slider";
		kick_slider.bass_button = i;
		kick_slider.castShadow = true;
		kick_slider.receiveShadow = true;
		scene.add( kick_slider );
		objects.push( kick_slider );

		// make kick slider rail
		var slider_geometry = new THREE.BoxGeometry( .05, 1, .1 );
		var slider_material = new THREE.MeshLambertMaterial( { color: 0xDC143C } );
	  var slider = new THREE.Mesh( slider_geometry, slider_material );
	  slider.position.set(-3,0,.7);
		slider.name = "kick_slider";
		slider.type = "kick_slider";
		slider.bass_button = i;
		slider.castShadow = true;
		slider.receiveShadow = true;
		scene.add( slider );
		objects.push( slider );

		// make kick knob
		kick_knob = new THREE.Object3D();

		var geometry = new THREE.CylinderGeometry( .2, .2, .25, 32 );
		var knob_material = new THREE.MeshLambertMaterial( { color: 0xDC143C } );
		var kick_knob_body = new THREE.Mesh( geometry, knob_material );
		kick_knob_body.position.set(-3,2,.7);
		kick_knob_body.rotation.x = 1.55;

		var geometry = new THREE.BoxGeometry( .06, .14, .1 );
		var material = new THREE.MeshLambertMaterial( { color: 0xFFFFFF } );
	  var knob_pointer = new THREE.Mesh( geometry, material );
	  knob_pointer.position.set(-3,2.15,.8);

	  kick_knob.add(knob_pointer)
		kick_knob.add(kick_knob_body)

		scene.add( kick_knob );
		objects.push( kick_knob );

		// make play button
		var button_material = new THREE.MeshLambertMaterial( { color: 0xDC143C } );
		button = new THREE.Mesh( button_geometry, button_material );
		button.position.set(-4,-1,.75);
		button.name = "play_button";
		button.type = "play_button";
		button.castShadow = true;
		button.receiveShadow = true;
		scene.add( button );
		objects.push( button );

		// make light
		var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
		directionalLight.position.set( -8, 8, 10 );
		directionalLight.castShadow = true;
		directionalLight.intensity = 1.5;

    // directionalLight.shadowCameraVisible = true;
		directionalLight.shadowCameraNear = 5;
		directionalLight.shadowCameraFar = 30;
    directionalLight.shadowCameraLeft = -20;
		directionalLight.shadowCameraRight = 20;
		directionalLight.shadowCameraTop = 20;
		directionalLight.shadowCameraBottom = -20;

    directionalLight.shadowMapBias = 0.0039;
    directionalLight.shadowMapDarkness = 0.5;
    directionalLight.shadowMapWidth = 2048;
    directionalLight.shadowMapHeight = 2048;

		// directionalLight.lookAt( scene.position )

		scene.add( directionalLight );
		// scene.add( new THREE.DirectionalLightHelper(directionalLight, 0.2) );

		////////////
		// AUDIO  //
		////////////

		// set up audio context
		context = new AudioContext();

		// set up audio buffers
		var kickBuffer;

		// load sound function
		function loadSound(url) {
		  var request = new XMLHttpRequest();
		  request.open('GET', url, true);
		  request.responseType = 'arraybuffer';

			// Decode asynchronously
		  request.onload = function() {
		    context.decodeAudioData(request.response, function(buffer) {
		      kickBuffer = buffer;

		      // set up audio analyser
					// analyser = context.createAnalyser();
					// analyser.fftSize = 2048;                       // set up analyser fourier transform domain
					// analyser.smoothingTimeConstant = 1; 				   // smooth analyser output
					// var bufferLength = analyser.frequencyBinCount; // number of data values for visualization
					// dataArray = new Uint8Array(bufferLength);  // array that will be size to take the entire buffer at sampling

					// connect sound to context through analyser
					var buffer = kickBuffer;
	  			source = context.createBufferSource(); 			// creates a sound source
	  			source.buffer = buffer;                    // tell the source which sound to play
	 			  // source.connect(analyser);									 // connect source to analyser
	 			  source.connect(context.destination);
	 			  // source.start(0);

		    }, onerror);
		  }
		  request.send();
		}

		// load the song
		// loadSound("assets/kick.wav");
	}

  function onDocumentMouseDown( event ) {
    var mouse3D = new THREE.Vector3( ( event.clientX / window.innerWidth ) * 2 - 1,   //x
                                    -( event.clientY / window.innerHeight ) * 2 + 1,  //y
                                    0.5 );                                            //z
    mouse3D.unproject( camera );
    mouse3D.sub( camera.position );
    mouse3D.normalize();
    var raycaster = new THREE.Raycaster( camera.position, mouse3D );
    var intersects = raycaster.intersectObjects( objects );
    // Change color if hit block
		// sequencer buttons
    if ( intersects.length > 0 && intersects[ 0 ].object.type == "button") {
    		button = intersects[ 0 ].object;
    		//  console.log(button.material.color.getHex());
        if (button.material.color.getHex() == "4620980"){
        	bass_buttons[button.bass_button] = 1;
        	// console.log(bass_buttons);
        	button.material.color.setHex( 0xEEE8AA );
					// console.log(bass_buttons);
					var button = {
						color: button.material.color.getHex(),
						buttons: bass_buttons
					};
					// console.log('hi');
					socket.emit('change color', button);
        }
        else {
        	bass_buttons[button.bass_button] = 0;
        	// console.log(bass_buttons);
        	button.material.color.setHex( 0x4682B4 );
        }
		// play button
    } else if ( intersects.length > 0 && intersects[ 0 ].object.type == "play_button") {
    	button = intersects[ 0 ].object;
        if (button.material.color.getHex() == "14423100"){
        	button.material.color.setHex( 0x98FB98 );
        	playing = true;
        	console.log(playing);

        }
        else {
        	button.material.color.setHex( 0xDC143C );
        	playing = false;
        	console.log(playing);
        }
		// slider
    } else if ( intersects.length > 0 && intersects[ 0 ].object.type == "kick_slider") {
    	button = intersects[ 0 ].object;
        if (button.material.color.getHex() == "14423100"){
        	button.material.color.setHex( 0x98FB98 );
        	console.log(button.position.y);
        }
        else {
        	button.material.color.setHex( 0xDC143C );
        	playing = false;
        }
    }
	}

	var update = function () {
		kick_slider.position.y = playerControls.kickVolumePosition;
		kick_knob.rotation.z = playerControls.kickKnobPosition;
	}

	var render = function () {
		update();
		requestAnimationFrame( render );
		renderer.render(scene, camera);
	}

	render();


}
