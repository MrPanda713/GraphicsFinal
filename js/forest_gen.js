var camera;
var scene;
var renderer;
var controls;

var worldWidth = 512, worldDepth = 512, worldHalfWidth = worldWidth / 2, worldHalfDepth = worldDepth / 2;

var light_summer = [0xfeffe0, 0.9];
var summer_ground = 'textures/summer_ground.jpg';
var summer_bump = 'textures/summer_bump.jpg';
var fog_summer = [0xb2f3ff, 0.0006];

var light_winter = [0xdedede, 0.7];
var winter_ground = 'textures/winter_ground.jpg';
var winter_bump = 'textures/winter_bumps.jpg';
var fog_winter = [0xd3f7ff, 0.0008];

var lights, ground, bump, fog;

var ground_mat;

lights = light_summer;
ground = summer_ground;
bump = summer_bump;
fog = fog_summer;
	
init();
animate();

function init() {
    
	// Create a scene
	scene = new THREE.Scene();

	// Add the camera
	camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 1, 10000);
	camera.position.set(-0, 1000, 30);

	addLights();
	
	// Create the sky box
	loadSkyBox();
		
	// Add scene elements
	addSceneElements();
    
	// Create webGL Renderer
	renderer = new THREE.WebGLRenderer({antialias:true});
	renderer.setClearColor(0x7ea9b2,1);
	renderer.setSize(window.innerWidth, window.innerHeight);
	
	// Append the renderer to the body
	document.body.appendChild(renderer.domElement);
	
	// Add resize event listener
	window.addEventListener('resize',onWindowResize,false);
	
	// Add the orbit controls
	controls = new THREE.OrbitControls(camera, renderer.domElement);
	controls.target = new THREE.Vector3(0,0,0);  
}

document.getElementById("spring").onclick = function() {
			
}
	
document.getElementById("winter").onclick = function() {
	lights = light_winter;
	ground = winter_ground;
	bump = winter_bump;
	fog = fog_winter;	
	
	buttonPress();
}

document.getElementById("summer").onclick = function() {
	lights = light_summer;
	ground = summer_ground;
	bump = summer_bump;
	fog = fog_summer;
	
	buttonPress();
}

document.getElementById("fall").onclick = function() {
		
}

function buttonPress(){
	resetScene();
	addLights();
	
	// Create the sky box
	loadSkyBox();
		
	// Add scene elements
	addSceneElements();
}

function resetScene(){
	while(scene.children.length > 0){
		scene.remove(scene.children[0]);
	}
}

function addLights(){
	// Add a light
	var light = new THREE.SpotLight(lights[0], lights[1]);
	light.position.set(7500, 2800, -7500);
	scene.add(light);
		
	amb = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.1);
	scene.add(amb);
}

function loadSkyBox() {
	
	// Load the skybox images and create list of materials
	var materials = [
		createMaterial( 'textures/cube/summer/left.jpg' ), // right
		createMaterial( 'textures/cube/summer/right.jpg' ), // left
		createMaterial( 'textures/cube/summer/top.jpg' ), // top
		createMaterial( 'textures/cube/summer/bottom.jpg' ), // bottom
		createMaterial( 'textures/cube/summer/back.jpg' ), // back
		createMaterial( 'textures/cube/summer/front.jpg' )  // front
	];
		
	// Create a large cube
	var mesh = new THREE.Mesh( new THREE.BoxGeometry( 7500, 7500, 7500, 1, 1, 1 ), new THREE.MeshFaceMaterial( materials ) );
			
// Set the x scale to be -1, this will turn the cube inside out
	mesh.scale.set(-1,1,1);
	scene.add( mesh );	
}

function createMaterial( path ) {
	var texture = new THREE.TextureLoader().load(path);
	var material = new THREE.MeshBasicMaterial( { map: texture, overdraw: 0.5 } );
	material.needsUpdate = true;
	return material; 
}

function loadGround(){
	// Load the texture for the ground
	var groundTexture = new THREE.TextureLoader().load(ground);
	groundTexture.wrapS = THREE.RepeatWrapping;
	groundTexture.wrapT = THREE.RepeatWrapping;
	
	// Load bump map for the ground
	var groundBump = new THREE.TextureLoader().load(bump);
	groundBump.wrapS = THREE.RepeatWrapping;
	groundBump.wrapT = THREE.RepeatWrapping;
	
	
	// Create the material
	groundMat = new THREE.MeshPhongMaterial( { map: groundTexture, bumpMap: groundBump } );
	groundMat.map.repeat.set(10,10);
}

function addSceneElements() {
// Create the ground using a Plane
	loadGround();
	
	// Terrain Height
	var data = generateHeight( worldWidth, worldDepth );
	
	// Create the mesh
	var geo = new THREE.PlaneBufferGeometry(7500, 7500, worldWidth - 1, worldDepth - 1);
	geo.rotateX( - Math.PI / 2 );
	
	var vertices = geo.attributes.position.array;
	for ( var i = 0, j = 0, l = vertices.length; i < l; i ++, j += 3 ) {
		vertices[ j + 1 ] = data[ i ] * 5;
	}
	
	var groundMesh = new THREE.Mesh( geo, groundMat);
	groundMesh.rotation.set(-90 * (3.14/180), 0, 0, 'YZ');
	groundMesh.position.set(0,0,0);
	
	scene.add(groundMesh);
	
	scene.fog = new THREE.FogExp2( fog[0], fog[1] );
}


function onProgress(progress) {
	// Use this to track loading progress
}

function onError(error) {
	// Called when errors occur during loading
}

function animate() {
	
	// Update the orbit controls
	if(controls != null) {
		controls.update();
	}
	
	// Render the scene
	renderer.render( scene, camera );

	// Repeat
	requestAnimationFrame( animate );
    
}

function generateHeight( width, height ) {
	var size = width * height, data = new Uint8Array( size ),
	perlin = new ImprovedNoise(), quality = 1, z = Math.random() * 100;
	for ( var j = 0; j < 4; j ++ ) {
		for ( var i = 0; i < size; i ++ ) {
			var x = i % width, y = ~~ ( i / width );
			data[ i ] += Math.abs( perlin.noise( x / quality, y / quality, z ) * quality * 0.25 );
		}
		quality *= 10;
	}
	return data;
}


function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}