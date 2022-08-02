
const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
camera.position.z = 1;

const scene = new THREE.Scene();

const geometry = new THREE.TorusGeometry( 1, 0.4, 16, 60, Math.PI * 2 );
const material = new THREE.MeshNormalMaterial({ side: THREE.DoubleSide });

const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

mesh.rotation.x = Math.PI / 2;

const renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animation );
document.getElementById('background').appendChild( renderer.domElement );

addEventListener('resize', onWindowResize, false);
addEventListener('scroll', onWindowScroll, false);

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
}

function onWindowScroll() {

    camera.position.z = 1 + Math.min(10, window.scrollY * 1.5 / window.innerHeight);
}

// animation

function animation( time ) {

	mesh.rotation.y = time / 1000;

	renderer.render( scene, camera );

}