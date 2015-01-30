// Set up 'App Wide' Variables 

window.App = {
  Scene: {},
  render: function() {
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
var windowWidth = 500;
var windowHeight = 500;

// Array of Objects That Will Respond To Click / Drag Events

var objects = [];

// Set up Three.JS Defaults ( Renderer, Camera, Scene )

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, windowWidth/windowHeight, 0.1, 1000 );
var projector = new THREE.Projector();

var renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setClearColor( 0xffffff, 1);
renderer.setSize( windowWidth, windowHeight );
container.appendChild( renderer.domElement );

// Event Listeners 

renderer.domElement.addEventListener( 'mousedown', onDocumentMouseDown, false );        

// Build Drum Machine

drawMachine();

// Set Camera Position

camera.position.z = 13;

// Application Functions

function onDocumentMouseDown( event ) { 
  var mouse3D = new THREE.Vector3( ( event.clientX / windowWidth ) * 2 - 1,   //x
                                  -( event.clientY / windowHeight ) * 2 + 1,  //y
                                  0.5 );                                            //z
  mouse3D.unproject( camera );   
  mouse3D.sub( camera.position );                
  mouse3D.normalize();
  var raycaster = new THREE.Raycaster( camera.position, mouse3D );
  var intersects = raycaster.intersectObjects( objects );
  if ( intersects.length > 0 ) {
    intersects[0].object.click();
  } 
};