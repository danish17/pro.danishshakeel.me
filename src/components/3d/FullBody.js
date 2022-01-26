import { useState, useEffect, useRef, useCallback } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { loadFBXModel } from "../../lib/model";
import { CharacterContainer, CharacterSpinner } from "./CharacterLoader";

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

export const CharacterModel = () => {
  const refContainer = useRef();
  let mixer;
  const clock = new THREE.Clock();
  const [loading, setLoading] = useState(true);
  const [renderer, setRenderer] = useState();
  const [_camera, setCamera] = useState();
  const [target] = useState(new THREE.Vector3(0, 100, 0));
  const [initialCameraPosition] = useState(new THREE.Vector3(200, 100, 300));
  const [scene] = useState(new THREE.Scene());
  const [_controls, setControls] = useState();

  useEffect(() => {
    const { current: container } = refContainer;
    if (container && !renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;
	//   const scW = window.innerWidth;
    //   const scH = window.innerWidth;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      renderer.shadowMap.enabled = false;
      renderer.outputEncoding = THREE.sRGBEncoding;
      container.appendChild(renderer.domElement);
      setRenderer(renderer);

      // CAMERA
      const camera = new THREE.PerspectiveCamera(
        35,
        scW / scH,
        1,
        2000
      );
      camera.position.copy(initialCameraPosition);
      camera.lookAt(target);
      setCamera(camera);

      // LIGHTS
      const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
      hemiLight.position.set(0, 200, 0);
      scene.add(hemiLight);

      const dirLight = new THREE.DirectionalLight(0xffffff);
      dirLight.position.set(0, 0, 50);
      dirLight.castShadow = false;
      dirLight.shadow.camera.top = 180;
      dirLight.shadow.camera.bottom = -100;
      dirLight.shadow.camera.left = -120;
      dirLight.shadow.camera.right = 120;
      scene.add(dirLight);

      // CONTROLS
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.target = target;
	  controls.autoRotate = true;
	  controls.autoRotateSpeed = 0.5;
	  controls.enableRotate = true;
	  controls.enableZoom = false;
	  controls.enablePan = false;
      controls.update();
      setControls(controls);

	  // HANDLE WINDOW RESIZE
	  const onWindowResize = () => {
		camera.aspect = scW/scH;
		camera.updateProjectionMatrix();
	
		renderer.setSize(scW, scH);
	  };
      window.addEventListener("resize", onWindowResize);

      // MODEL
      loadFBXModel(scene, {
        receiveShadow: false,
        castShadow: false,
      }).then((object) => {
		mixer = new THREE.AnimationMixer(object);

        const action = mixer.clipAction(object.animations[0]);
        action.play();
        animate();
        setLoading(false);
      });

	  let frame = 0;
      let req = null;
      const animate = () => {
        requestAnimationFrame(animate);

        const delta = clock.getDelta();

        if (mixer) mixer.update(delta);

		// TODO: make this more efficient and optimize animations on mobile
		// frame = frame <= 100 ? frame + 1 : frame

        // if (frame <= 100) {
        //   const p = initialCameraPosition
        //   const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 2

        //   camera.position.y = 50
        //   camera.position.x =
        //     p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
        //   camera.position.z =
        //     p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
        //   camera.lookAt(target)
        // } else {
        //   controls.update()
        // }

        renderer.render(scene, camera);
      };

      return () => {
        cancelAnimationFrame(req);
        renderer.dispose();
      };
    }
  }, []);


  return (
    <CharacterContainer ref={refContainer}>
      {loading && <CharacterSpinner />}
    </CharacterContainer>
  );
};
