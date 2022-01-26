import { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../../lib/model'
import { CharacterContainer, CharacterSpinner } from './CharacterLoader'

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

export const CharacterModel = () => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)
  const [renderer, setRenderer] = useState()
  const [_camera, setCamera] = useState()
  const [target] = useState(new THREE.Vector3(0, 0.6, 0))
  const [initialCameraPosition] = useState(
	new THREE.Vector3(0, 1, 1.4)
  )
  const [scene] = useState(new THREE.Scene())
  const [_controls, setControls] = useState()
  const handleWindowResize = useCallback(() => {
    const { current: container } = refContainer
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      renderer.setSize(scW, scH)
    }
  }, [renderer])

  useEffect(() => {
    const { current: container } = refContainer
    if (container && !renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW, scH)
	  renderer.shadowMap.enabled = true;
      renderer.outputEncoding = THREE.sRGBEncoding
      container.appendChild(renderer.domElement)
      setRenderer(renderer)

	  // CAMERA
      const camera = new THREE.PerspectiveCamera( 35, 1, 1, 1000 );
      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)
      setCamera(camera)
	  
	  // LIGHTS
	  const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x303030 );
	  hemiLight.position.set( 100, 200, 0 );
	  scene.add( hemiLight );

	  const dirLight = new THREE.DirectionalLight( 0xffffff );
	  dirLight.position.set( 0, 200, 100 );
	  dirLight.castShadow = true;
	  dirLight.shadow.camera.top = 180;
	  dirLight.shadow.camera.bottom = - 100;
	  dirLight.shadow.camera.left = - 120;
	  dirLight.shadow.camera.right = 120;
	  scene.add( dirLight );

	  // CONTROLS
      const controls = new OrbitControls(camera, renderer.domElement)
	  controls.autoRotate = true
	  controls.autoRotateSpeed = 1
      controls.target = target
	  controls.enableZoom = false;
	  controls.enableDamping = true;
	  controls.enablePan = false;
      setControls(controls)

	  // MODEL
      loadGLTFModel(scene, '/assets/CloseUpReduced.glb', {
        receiveShadow: true,
        castShadow: true
      }).then(() => {
        animate()
        setLoading(false)
      })

      let req = null
      let frame = 0
      const animate = () => {
        req = requestAnimationFrame(animate)

        frame = frame <= 100 ? frame + 1 : frame

        if (frame <= 100) {
          const p = initialCameraPosition
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 2

          camera.position.y = 0.8
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
          camera.lookAt(target)
        } else {
          controls.update()
        }

        renderer.render(scene, camera)
      }

      return () => {
        cancelAnimationFrame(req)
        renderer.dispose()
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [renderer, handleWindowResize])

  return (
    <CharacterContainer ref={refContainer}>{loading && <CharacterSpinner />}</CharacterContainer>
  )
}
