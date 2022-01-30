import './style.css'

import { Scene, WebGLRenderer, PerspectiveCamera, BoxGeometry, ShaderMaterial, Mesh } from 'three';
import { GUI }from 'dat.gui';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import vertexShader from "./glsl/glsl.vert?raw";
import fragmentShader from "./glsl/glsl.frag?raw";

let gui = new GUI();
let params = {
  scale: 1.0,
};
gui.add(params, 'scale', 1.0, 4.0).onChange(() => { cube.scale.set(params.scale, params.scale, params.scale) });

const uniforms = {
  uTick: { type: "f", value: 0.0 }
};

let scene = new Scene();

let camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

let renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

let geometry = new BoxGeometry(1, 1, 1);
const material = new ShaderMaterial({
  uniforms,
  vertexShader,
  fragmentShader,
});
let cube = new Mesh(geometry, material);
scene.add(cube);

let animate = () => {
  requestAnimationFrame(animate);
  uniforms.uTick.value += 0.01;
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
};
animate();

let resize = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
};
window.addEventListener('resize', resize);
resize();
