"use client";

import { useEffect, useRef, useState } from "react";
import { Scene, PerspectiveCamera, WebGLRenderer, DirectionalLight, AmbientLight, PointLight, Clock, AnimationMixer } from "three";
import { GLTFLoader } from "three-stdlib";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeScene = () => {
  const sceneRef = useRef();
  const rendererRef = useRef();
  const controlsRef = useRef();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (rendererRef.current) {
      return;
    }

    const scene = new Scene();
    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.5,
    );
    const renderer = new WebGLRenderer({ antialias: true, alpha: true });
    rendererRef.current = renderer;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.physicallyCorrectLights = true;
    renderer.shadowMap.enabled = true;
    renderer.setClearColor(0x000000, 0);
    sceneRef.current.appendChild(renderer.domElement);

    // Add beautiful lighting setup
    const ambientLight = new AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const mainLight = new DirectionalLight(0xffffff, 2);
    mainLight.position.set(10, 10, 10);
    mainLight.castShadow = true;
    scene.add(mainLight);

    const pointLight1 = new PointLight(0x2196f3, 2);
    pointLight1.position.set(-5, 5, 0);
    scene.add(pointLight1);

    const pointLight2 = new PointLight(0xff9800, 2);
    pointLight2.position.set(5, -5, 0);
    scene.add(pointLight2);

    // Add OrbitControls for model rotation
    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.enableRotate = true;
    // Animation setup
    const clock = new Clock();
    let mixer;

    // Load 3D model
    const loader = new GLTFLoader();
    loader.load(
      "/robot_rocket/scene.gltf",
      (gltf) => {
        const model = gltf.scene;
        scene.add(model);
        model.position.set(0, 0, 0);

        // Setup animation
        mixer = new AnimationMixer(model);
        const animation = gltf.animations.find(anim => anim.name === "metarig|metarigAction");
        if (animation) {
          const action = mixer.clipAction(animation);
          action.play();
        }
        setIsLoading(false);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      (error) => {
        console.error("Error loading the model", error);
        setIsLoading(false);
      }
    );

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      // Update controls
      controls.update();

      // Update animation
      if (mixer) {
        mixer.update(clock.getDelta());
      }

      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Clean up on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      if(sceneRef.current && rendererRef.current) {
        sceneRef.current.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
        rendererRef.current = null;
      }
      if(controlsRef.current) {
        controlsRef.current.dispose();
        controlsRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative h-screen w-screen">
      <div ref={sceneRef} className="h-full w-full" />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-b-4 border-blue-500"></div>
        </div>
      )}
    </div>
  );
};

export default ThreeScene;