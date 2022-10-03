import * as THREE from "three";
import Watch from "./watch.js";

let scene, camera, renderer;
let watch0, watch1, watch2, watch3, watch4;

function windowResize() {
  const aspectRatio = window.innerWidth / window.innerHeight;
  if (aspectRatio < 1.0) {
    camera.left = -1.0;
    camera.right = 1.0;
    camera.top = 1.0 / aspectRatio;
    camera.bottom = -1.0 / aspectRatio;
  } else {
    camera.left = -aspectRatio;
    camera.right = aspectRatio;
    camera.top = 1.0;
    camera.bottom = -1.0;
  }
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function initialize() {
  // Create a scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x999999);

  // Create an orthographic camera
  const aspectRatio = window.innerWidth / window.innerHeight;
  if (aspectRatio < 1.0) {
    camera = new THREE.OrthographicCamera(
      -1.0,
      1.0,
      1.0 / aspectRatio,
      -1.0 / aspectRatio,
      0.0,
      1.0
    );
  } else {
    camera = new THREE.OrthographicCamera(
      -aspectRatio,
      aspectRatio,
      1.0,
      -1.0,
      0.0,
      1.0
    );
  }

  // Create a renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Register the event handler to be called on window resize
  window.addEventListener("resize", windowResize);

  // Create five watches
  watch0 = new Watch(
    "Oporto",
    new THREE.Vector2(0.0, 0.04),
    0.5,
    0x999999,
    0xffffff,
    0x333333,
    0xcccccc,
    0xffffff,
    0xff0000
  );
  /* To-do #8 - Scaling: uncomment the following line: */
  // watch0.scale.set(0.75, 1.0);
  /* To-do #9 - Rotation: uncomment the following line: */
  // watch0.rotateZ(Math.PI / 4.0);
  /* To-do #10 - Translation: re-comment the two previous instructions and uncomment the following line: */
  // watch0.translateX(0.5);
  /* To-do #11 - Reflection (a special case of scale transformation): re-comment the previous instruction and uncomment the following line: */
  // watch0.scale.set(-1.0, 1.0);
  /* To-do #12 - Restore the previous state: re-comment the previous instruction */
  scene.add(watch0);

  watch1 = new Watch(
    "New York",
    new THREE.Vector2(-0.65, 0.65),
    0.25,
    0x999999,
    0xffffff,
    0x333333,
    0xcccccc,
    0xffffff,
    0xff0000
  );
  scene.add(watch1);

  watch2 = new Watch(
    "Paris",
    new THREE.Vector2(0.65, 0.65),
    0.25,
    0x999999,
    0xffffff,
    0x333333,
    0xcccccc,
    0xffffff,
    0xff0000
  );
  scene.add(watch2);

  watch3 = new Watch(
    "Sydney",
    new THREE.Vector2(-0.65, -0.57),
    0.25,
    0x999999,
    0xffffff,
    0x333333,
    0xcccccc,
    0xffffff,
    0xff0000
  );
  scene.add(watch3);

  watch4 = new Watch(
    "Tokyo",
    new THREE.Vector2(0.65, -0.57),
    0.25,
    0x999999,
    0xffffff,
    0x333333,
    0xcccccc,
    0xffffff,
    0xff0000
  );
  scene.add(watch4);
}

function animate() {
  requestAnimationFrame(animate);
  // Update watches time
  watch0.update(); // Oporto
  watch1.update(); // Oporto
  watch2.update(); // Oporto
  watch3.update(); // Oporto
  watch4.update(); // Oporto
  /* To-do #7 - Animate the remaining watches of the scene
            ...; // New York
            ...; // Paris
            ...; // Sydney
            ...; // Tokyo */
  renderer.render(scene, camera);
}

initialize();
animate();
