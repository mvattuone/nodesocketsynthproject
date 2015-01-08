var container = document.getElementById('container');
var windowWidth = 500;
var windowHeight = 500;

var objects = [];

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, windowWidth/windowHeight, 0.1, 1000 );
var	projector = new THREE.Projector();

var renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setClearColor( 0xffffff, 1);
renderer.setSize( windowWidth, windowHeight );
container.appendChild( renderer.domElement );

renderer.domElement.addEventListener( 'mousedown', onDocumentMouseDown, false );				

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );
objects.push( cube );

camera.position.z = 5;

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
  	objects[0].material.color.setRGB( Math.random(), Math.random(), Math.random() );
  	App.Clicks = App.Clicks + 1;
  	console.log(App.Clicks);
  } 
}

var render = function () {
	requestAnimationFrame( render );
	cube.rotation.x += .01;
	cube.rotation.y += .01;
	renderer.render(scene, camera);
};

