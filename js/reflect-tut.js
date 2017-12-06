var camera;
var scene;
var renderer;
var controls;
var envMap;
var sphereParent;

init();
animate();

function init(){
	// create a scene
	scene = new THREE.Scene();
	
	// Add camera
	camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 10000);
	camera.position.set(0,250,850);
	
	// Add white hemi light
	var hemLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 1);
	scene.add(hemLight);
	
	// Load CubeMap
	loadCubeMap();
	
	// Add Scene Elements
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

function loadCubeMap(){
	// Define cube map textures
	var envMapURLs = [
		'textures/bricks.jpg',
		'textures/clouds.jpg',
		'textures/clouds.jpg',
		'textures/wood-floor.jpg',
		'textures/clouds.jpg',
		'textures/clouds.jpg',
	];
	
	// Load images into cube map
	envMap = new THREE.CubeTextureLoader().load(envMapURLs);
}

function addSceneElements(){
	// Add Ground and Sky
	addProps();
	
	sphereParent = new THREE.Object3D();
	scene.add(sphereParent);
	
	// Chrome
	addSpheres(400,0xffffff);
	
	// Gold
	addSpheres(150,0xffd700);
	
	// Tinted glass
	addSpheres(-150,0x444444);
	
	// Bronze
	addSpheres(-400,0xcd7f32);
}

function addSpheres(xPos, baseColor){
	var metalMaterial = new THREE.MeshPhongMaterial({envMap: envMap,reflectivity: .8, color: baseColor});
	
	var mesh = new THREE.Mesh(new THREE.SphereGeometry(100,32,32), metalMaterial);
	mesh.position.x = xPos;
	sphereParent.add(mesh);
}

function addProps(){
	// Add A floor
	var floorTexture = new THREE.TextureLoader().load('textures/wood-floor.jpg');
	floorTexture.wrapS = THREE.RepeatWrapping;
	floorTexture.wrapT = THREE.RepeatWrapping;
	floorTexture.repeat.x = 5;
	floorTexture.repeat.y = 5;
	
	var floorMaterial = new THREE.MeshPhongMaterial({map: floorTexture});
	var floorMesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(2000,2000), floorMaterial);
	floorMesh.position.y = -100;
	floorMesh.rotateX(-Math.PI/2);
	
	scene.add(floorMesh);
	
	// Add Brick wall
	var wallTexture = new THREE.TextureLoader().load('textures/bricks.jpg');
	wallTexture.wrapS = THREE.RepeatWrapping;
	wallTexture.wrapT = THREE.RepeatWrapping;
	wallTexture.repeat.x = 2;
	wallTexture.repeat.y = 2;
	
	var wallMaterial = new THREE.MeshPhongMaterial({map:wallTexture});
	var wallMesh = new THREE.Mesh(new THREE.BoxGeometry(50,300,400),wallMaterial);
	wallMesh.position.x = -750;
	scene.add(wallMesh);
	
	// Add A sky plane
	
	var skyTexture = new THREE.TextureLoader().load('textures/clouds.jpg');
	skyTexture.wrapS = THREE.RepeatWrapping;
	skyTexture.wrapT = THREE.RepeatWrapping;
	skyTexture.repeat.x = 10;
	skyTexture.repeat.y = 10;
	
	var skyMaterial = new THREE.MeshPhongMaterial({map:skyTexture});
	var skyMesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(2000,2000),skyMaterial);
	skyMesh.position.y = 300;
	skyMesh.rotateX(Math.PI/2);
	
	scene.add(skyMesh);
}

function animate(){
	renderer.render(scene, camera);
	requestAnimationFrame(animate);
	controls.update();
	sphereParent.rotation.y += .01;
}

function onWindowResize(){
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}