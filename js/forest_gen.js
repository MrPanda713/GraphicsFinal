var camera;
var scene;
var renderer;
var controls;

var worldWidth = 1250, worldDepth = 1250, worldHalfWidth = worldWidth / 2, worldHalfDepth = worldDepth / 2;

var light_summer = [0xfeffe0, 0.9];
var summer_ground = 'textures/summer_ground.jpg';
var summer_bump = 'textures/summer_bump.jpg';
var fog_summer = [0xb2f3ff, 0.0006];
var tree_t_summer = 's_tree.mtl';
var tree_m_summer = 's_tree.obj';

var light_winter = [0xdedede, 0.7];
var winter_ground = 'textures/winter_ground.jpg';
var winter_bump = 'textures/winter_bumps.jpg';
var fog_winter = [0xd3f7ff, 0.0008];
var tree_t_winter = 'tree.mtl';
var tree_m_winter = 'tree.obj';

var light_autumn = [0xfed78a, 0.8];
var autumn_ground = 'textures/autumn_ground.jpg';
var autumn_bump = 'textures/autumn_bump.jpg';
var fog_autumn = [0xfcc771, 0.0009];
var tree_t_autumn = 'models/';
var tree_m_autumn = 'models/';

var light_spring = [0xfeffe0, 2.25];
var spring_ground = 'textures/spring_ground.jpg';
var spring_bump = 'textures/spring_bump.jpg';
var fog_spring = [0xf9ffe0, 0.00035];
var tree_t_spring = 'models/';
var tree_m_spring = 'models/';

var lights, ground, bump, fog;

var tree_t_path, tree_m_path;

var data_master, vertices;
var ground_mat, height;

var n_trees = 800;

lights = light_summer;
ground = summer_ground;
bump = summer_bump;
fog = fog_summer;

tree_t_path = tree_t_summer;

tree_m_path = tree_m_summer;
	
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
	lights = light_spring;
	ground = spring_ground;
	bump = spring_bump;
	fog = fog_spring;
	
	tree_t_path = tree_t_spring;
	tree_m_path = tree_m_spring;
	
	buttonPress();		
}
	
document.getElementById("winter").onclick = function() {
	lights = light_winter;
	ground = winter_ground;
	bump = winter_bump;
	fog = fog_winter;
	console.log("in winter");
	
	tree_t_path = tree_t_winter;
	tree_m_path = tree_m_winter;
	
	buttonPress();
}

document.getElementById("summer").onclick = function() {
	lights = light_summer;
	ground = summer_ground;
	bump = summer_bump;
	fog = fog_summer;
	
	tree_t_path = tree_t_summer;

	tree_m_path = tree_m_summer;
	
	buttonPress();
}

document.getElementById("fall").onclick = function() {
	lights = light_autumn;
	ground = autumn_ground;
	bump = autumn_bump;
	fog = fog_autumn;
	
	tree_t_path = tree_t_autumn;
	tree_m_path = tree_m_autumn;
	
	buttonPress();
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
	console.log("here in reset scene");
	var i;
	for (var i = scene.children.length-1; i >= 0; i--) {
		var obj = scene.children[i];
		scene.remove(obj);
	}
	/*(scene.children.length > 0){
		scene.remove(scene.children[0]);
	} */
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
	console.log("here in load skyBox");
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
	console.log(ground);
	var groundTexture = new THREE.TextureLoader().load(ground);
	groundTexture.minFilter = THREE.LinearFilter;
	groundTexture.wrapS = THREE.RepeatWrapping;
	groundTexture.wrapT = THREE.RepeatWrapping;
	
	// Load bump map for the ground
	var groundBump = new THREE.TextureLoader().load(bump);
	groundBump.minFilter = THREE.LinearFilter;
	groundBump.wrapS = THREE.RepeatWrapping;
	groundBump.wrapT = THREE.RepeatWrapping;
	
	
	// Create the material
	groundMat = new THREE.MeshPhongMaterial( { map: groundTexture, bumpMap: groundBump } );
	groundMat.map.repeat.set(10,10);
}

function addSceneElements() {
	console.log("here in add scene elements");
// Create the ground using a Plane
	loadGround();
	
	// Terrain Height
	data_master = generateHeight( worldWidth, worldDepth );
	
	// Create the mesh
	var geo = new THREE.PlaneBufferGeometry(7500, 7500, worldWidth - 1, worldDepth - 1);
	geo.rotateX( - Math.PI / 2 );
	
	height = new Array(7500);
	for(var i = 0; i<7500; i++){
		height[i] = new Array(7500);
	}
	
	vertices = geo.attributes.position.array;
	console.log(geo.attributes.position.count);
	for ( var i = 0, j = 0, l = vertices.length; i < l; i ++, j += 3 ) {
		vertices[ j + 1 ] = data_master[ i ] * 4;
		if(vertices[j] < 3750){
			height[ Math.round(vertices[j]+3750) ][ Math.round(vertices[j+2]+3750) ] = vertices[j+1];
		}
	}
	
	
	var groundMesh = new THREE.Mesh( geo, groundMat);
	groundMesh.rotation.set(-90 * (3.14/180), 0, 0, 'YZ');
	groundMesh.position.set(0,0,0);
	
	scene.add(groundMesh);
	scene.updateMatrixWorld(true);
	
	for(var i = 0; i < n_trees; i++){
		loadTree();
	}
	
	scene.fog = new THREE.FogExp2( fog[0], fog[1] );
}


function onProgress(xhr) {
	// Use this to track loading progress
	if ( xhr.lengthComputable ) {
		var percentComplete = xhr.loaded / xhr.total * 100;
		console.log( Math.round(percentComplete, 2) + '% downloaded' );
	}
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

function loadTree(){

	var mtlLoader = new THREE.MTLLoader();
	mtlLoader.setPath( 'models/' );
	mtlLoader.load( tree_t_path, function( materials ) {
		materials.preload();
		var objLoader = new THREE.OBJLoader();
		objLoader.setMaterials( materials );
		objLoader.setPath( 'models/' );
		objLoader.load( tree_m_path, function ( object ) {
			var x = Math.random() * 7500 - 3750;
			var z = Math.random() * 7500 - 3750;
			object.position.y = height[Math.round(x)+3750][Math.round(z)+3750];
/*			if(!object.position.y)
				object.position.y = 100 + Math.random() * 100;
*/			var xs = Math.round(x)+3750;
			var zs = Math.round(z)+3750;
			var na = 1;
			while(!object.position.y){
				object.position.y = height[xs][zs];
				if(na!=0){
					zs = zs + na;
					na = (na + 1) % 10;
				}else{
					na = 1;
					xs = xs + na;
				}
			}
			
			object.position.x = x;
			object.position.z = z;
			var s = Math.random()*40 + 25;
			object.scale.set(s,s,s);
			scene.add( object );
		}, onProgress, onError );
	});
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