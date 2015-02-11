<<<<<<< HEAD
// Set up 'App Wide' Variables

window.App = {
  Scene: {},
  render: function() {
    // SET CAMERA POSITION RELATIVE TO MOUSE POSITION
    // camera.position.x = ( mouseX - camera.position.x ) * 0.001;
    camera.position.y = (( - mouseY - camera.position.y ) * 0.001) + 3;
    camera.lookAt( camera_pointer );
    requestAnimationFrame( App.render );
    renderer.render(scene, camera);
  },
  Machine: {},
  Sounds: {}
};

// Audio Parameters

var context = new (window.AudioContext || window.webkitAudioContext)();

// Get DOM Element to Attach Canvas

var container = document.getElementById('container');
var windowWidth = container.offsetWidth;
var windowHeight = 500;

// Array of Objects That Will Respond To Click / Drag Events

var objects = [];
var active_object;
var mouse_x = 0;
var mouse_y = 0;

// TRACK MOUSE POSITION

var mouseX = 0, mouseY = 0;
var hoverX = 0, hoverY = 0;


// Set up Three.JS Defaults ( Renderer, Camera, Scene )

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, windowWidth/windowHeight, 0.1, 1000 );
var projector = new THREE.Projector();

var renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setClearColor( 0xecf0f1, 1);
renderer.shadowMapEnabled = true;
renderer.shadowMapType = THREE.PCFSoftShadowMap;
renderer.setSize( windowWidth, windowHeight );
container.appendChild( renderer.domElement );

// Event Listeners

renderer.domElement.addEventListener( 'mousedown', onDocumentMouseDown, false );
renderer.domElement.addEventListener( 'mousemove', onDocumentMouseMove, false );
renderer.domElement.addEventListener( 'mouseup', onDocumentMouseUp, false );

// Build Drum Machine

drawMachine();

// CAMERA FOCUS OBJECT

var camera_pointer = new THREE.Vector3( 0, 3, 0 );

// Set Camera Position

camera.position.x = 0;
camera.position.z = 12;
camera.position.y = 3;

// Application Functions

function onDocumentMouseDown( event ) {
  var mouse3D = new THREE.Vector3( ( event.clientX / windowWidth ) * 2 - 1,   //x
                                  -( event.clientY / windowHeight ) * 2 + 1,  //y
                                  0.5 );                                            //z

  mouse_x = event.clientX;
  mouse_y = event.clientY;

  mouse3D.unproject( camera );
  mouse3D.sub( camera.position );
  mouse3D.normalize();
  var raycaster = new THREE.Raycaster( camera.position, mouse3D );
  var intersects = raycaster.intersectObjects( objects );
  if ( intersects.length > 0 ) {
    // console.log(mouse3D);
    intersects[0].object.click();
    if(intersects[0].object.type === "slider" ||  intersects[0].object.type === "knob"){
      active_object = intersects[0].object;
    }
  }
};

function onDocumentMouseMove( event ) {
      mouseX = event.clientX;
      mouseY = event.clientY;
if (!active_object) return;
        y_diff = (event.clientY - mouse_y) / 25;
  if(active_object.type === "slider"){
      active_object.__dirtyPosition = true;
      if ((active_object.position.y < active_object.top) && (active_object.position.y > active_object.bottom)){
        active_object.position.y = active_object.position.y - y_diff;
        active_object.move();
      }
      mouse_x = event.clientX;
      mouse_y = event.clientY;
  }
  if(active_object.type === "knob"){
      active_object.__dirtyPosition = true;
      if ((active_object.rotation.y > active_object.maximum_rotation_left) && (active_object.rotation.y < active_object.maximum_rotation_right)){
        active_object.rotation.y = active_object.rotation.y - y_diff;
        active_object.move();
        // console.log(active_object.rotation.y);
      }
      mouse_x = event.clientX;
      mouse_y = event.clientY;
  }
}

function onDocumentMouseUp( event ) {
  if (!active_object) return;
    if(active_object.type === "slider"){
      if(active_object.position.y > active_object.top){
        active_object.position.y = active_object.top - .01;
      };
      if(active_object.position.y <= active_object.bottom){
        active_object.position.y = active_object.bottom + .01;
      }
    }
    if(active_object.type === "knob"){
      if(active_object.rotation.y >= active_object.maximum_rotation_right){
        active_object.rotation.y = active_object.maximum_rotation_right - .01;
      };
      if(active_object.rotation.y <= active_object.maximum_rotation_left){
        active_object.rotation.y = active_object.maximum_rotation_left + .01;
      }
    }
  active_object.click();
  active_object = null;
}
||||||| merged common ancestors
=======
// Set up 'App Wide' Variables 

window.App = {
  Scene: {},
  render: function() {
    // SET CAMERA POSITION RELATIVE TO MOUSE POSITION
    // camera.position.x = ( mouseX - camera.position.x ) * 0.001;
    camera.position.y = (( - mouseY - camera.position.y ) * 0.001) + 3;
    camera.lookAt( camera_pointer );
    requestAnimationFrame( App.render );
    renderer.render(scene, camera);
  }, 
  Machine: {},
  Sounds: {}
};

// Audio Parameters 

var context = new (window.AudioContext || window.webkitAudioContext)();

// Get DOM Element to Attach Canvas 

var container = document.getElementById('container');
var windowWidth = container.offsetWidth;
var windowHeight = 500;

// Array of Objects That Will Respond To Click / Drag Events

var objects = [];
var active_object; 
var mouse_x = 0;
var mouse_y = 0;

// TRACK MOUSE POSITION

var mouseX = 0, mouseY = 0;
var hoverX = 0, hoverY = 0;


// Set up Three.JS Defaults ( Renderer, Camera, Scene )

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, windowWidth/windowHeight, 0.1, 1000 );
var projector = new THREE.Projector();

var renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setClearColor( 0xecf0f1, 1);
renderer.shadowMapEnabled = true;
renderer.shadowMapType = THREE.PCFSoftShadowMap;
renderer.setSize( windowWidth, windowHeight );
container.appendChild( renderer.domElement );

// Event Listeners 

renderer.domElement.addEventListener( 'mousedown', onDocumentMouseDown, false );        
renderer.domElement.addEventListener( 'mousemove', onDocumentMouseMove, false );        
renderer.domElement.addEventListener( 'mouseup', onDocumentMouseUp, false );        

// Build Drum Machine

drawMachine();

// CAMERA FOCUS OBJECT

var camera_pointer = new THREE.Vector3( 0, 3, 0 );

// Set Camera Position

camera.position.x = 0;
camera.position.z = 12;
camera.position.y = 3;

// Application Functions

function onDocumentMouseDown( event ) { 
  var mouse3D = new THREE.Vector3( ( event.clientX / windowWidth ) * 2 - 1,   //x
                                  -( event.clientY / windowHeight ) * 2 + 1,  //y
                                  0.5 );                                            //z
 
  mouse_x = event.clientX;
  mouse_y = event.clientY;

  mouse3D.unproject( camera );   
  mouse3D.sub( camera.position );                
  mouse3D.normalize();
  var raycaster = new THREE.Raycaster( camera.position, mouse3D );
  var intersects = raycaster.intersectObjects( objects );
  if ( intersects.length > 0 ) {
    // console.log(mouse3D);
    intersects[0].object.click();
    if(intersects[0].object.type === "slider" ||  intersects[0].object.type === "knob"){
      active_object = intersects[0].object; 
    }
  } 
};

function onDocumentMouseMove( event ) {
      mouseX = event.clientX;
      mouseY = event.clientY;
if (!active_object) return;
        y_diff = (event.clientY - mouse_y) / 25;
  if(active_object.type === "slider"){
      active_object.__dirtyPosition = true;
      if ((active_object.position.y < active_object.top) && (active_object.position.y > active_object.bottom)){
        active_object.position.y = active_object.position.y - y_diff;
        active_object.move(); 
      }
      mouse_x = event.clientX;
      mouse_y = event.clientY;
  }
  if(active_object.type === "knob"){
      active_object.__dirtyPosition = true;
      if ((active_object.rotation.y > active_object.maximum_rotation_left) && (active_object.rotation.y < active_object.maximum_rotation_right)){
        active_object.rotation.y = active_object.rotation.y - y_diff;
        active_object.move(); 
        // console.log(active_object.rotation.y);
      }
      mouse_x = event.clientX;
      mouse_y = event.clientY;
  }
}

function onDocumentMouseUp( event ) {
  if (!active_object) return;
    if(active_object.type === "slider"){
      if(active_object.position.y > active_object.top){
        active_object.position.y = active_object.top - .01;
      };
      if(active_object.position.y <= active_object.bottom){
        active_object.position.y = active_object.bottom + .01;
      }
    }
    if(active_object.type === "knob"){
      if(active_object.rotation.y >= active_object.maximum_rotation_right){
        active_object.rotation.y = active_object.maximum_rotation_right - .01;
      };
      if(active_object.rotation.y <= active_object.maximum_rotation_left){
        active_object.rotation.y = active_object.maximum_rotation_left + .01;
      }
    }
  active_object.click(); 
  active_object = null;
}
>>>>>>> 150157a638a79fdbe9ae098db52a23373e67f029
