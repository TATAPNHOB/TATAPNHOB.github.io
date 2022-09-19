
import * as THREE from './node_modules/three/build/three.module.js';
import { TrackballControls } from './node_modules/three/examples/jsm/controls/TrackballControls.js';
import { GLTFLoader } from './node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import { AsciiEffect } from './node_modules/three/examples/jsm/effects/AsciiEffect.js';

let controls, container;
let camera, scene, renderer, effect;

init();
animate();

function init() {
  container = document.createElement('div');
  document.body.appendChild(container);

  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 50);
  camera.position.z = 2;

  scene = new THREE.Scene();
  scene.add(new THREE.HemisphereLight());

  const directionalLight = new THREE.DirectionalLight(0xffeedd);
  directionalLight.position.set(0, 0, 2);
  camera.add(directionalLight);

  const loader = new GLTFLoader();
  loader.load('model/postmortem.glb', function(gltf) {
    scene.add(gltf.scene);
  });
  // const geometry = new THREE.BoxGeometry(1, 1, 1);
  // const material = new THREE.MeshNormalMaterial();
  // const cube = new THREE.Mesh(geometry, material);
  // scene.add(cube);

  renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  // renderer.outputEncoding = THREE.sRGBEncoding;
  // container.appendChild(renderer.domElement);

  effect = new AsciiEffect(renderer, ' .:-+*=%@#',{invert: true});
  effect.setSize(window.innerWidth, window.innerHeight);
  effect.domElement.style.color = 'white';
  effect.domElement.style.backgroundColor = 'black';

  container.appendChild(effect.domElement);

  controls = new TrackballControls(camera, effect.domElement);

  window.addEventListener('resize', resize);
}

function resize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
  effect.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  scene.rotation.y += 1 / 800;
  effect.render(scene, camera);
  controls.update();
  requestAnimationFrame(animate);
}