"use client";

import { useEffect, useRef, useState } from "react";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  DirectionalLight,
  AmbientLight,
  PointLight,
  Clock,
  AnimationMixer,
} from "three";
import { GLTFLoader } from "three-stdlib";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const TrophyThreeScene = () => {
  const sceneRef = useRef();
  const rendererRef = useRef();
  const controlsRef = useRef();
  const modelRef = useRef();
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
      if (modelRef.current) {
        const scale = window.innerWidth <= 500 ? 1.5 : 2.5;
        const yPosition = window.innerWidth <= 500 ? 0 : -2;
        modelRef.current.scale.set(scale, scale, scale);
        modelRef.current.position.setY(yPosition);
      }
      if (rendererRef.current) {
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    if (rendererRef.current) return;

    const scene = new Scene();
    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      2,
      500
    );
    const renderer = new WebGLRenderer({ antialias: true, alpha: true });
    rendererRef.current = renderer;

    // Set renderer size and pixel ratio
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.physicallyCorrectLights = true;
    renderer.shadowMap.enabled = true;
    renderer.setClearColor(0x000000, 0);
    sceneRef.current.appendChild(renderer.domElement);

    // Lighting setup
    const ambientLight = new AmbientLight(0xffffff, 4);
    scene.add(ambientLight);

    const mainLight = new DirectionalLight(0xffffff, 2);
    mainLight.position.set(10, 10, 10);
    mainLight.castShadow = true;
    scene.add(mainLight);

    const pointLight1 = new PointLight(0xfff5d1, 5);
    pointLight1.position.set(-5, 5, 0);
    scene.add(pointLight1);

    const pointLight2 = new PointLight(0xffffff, 2);
    pointLight2.position.set(5, -5, 0);
    scene.add(pointLight2);

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2; // Restrict vertical rotation
    controls.minPolarAngle = Math.PI / 2;
    controls.enableZoom = false;

    // Animation setup
    const clock = new Clock();
    let mixer;

    // Load 3D model
    const loader = new GLTFLoader();
    loader.load(
      "/trophy.glb",
      (gltf) => {
        const model = gltf.scene;
        modelRef.current = model;
        // Material enhancements for metallic look
        model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;

            if (child.material.name === "Material.002") {
              child.material.metalness = 1.0;
              child.material.roughness = 0.1;
              child.material.envMapIntensity = 2.0;
              child.material.color.setHex(0xffd700); // Gold color
            }

            if (child.material.name === "Material.001") {
              child.material.roughness = 0.08;
              child.material.metalness = 0.4;
              child.material.envMapIntensity = 2;
              child.material.color.setHex(0xffd700); // Gold color
            }
          }
        });
        scene.add(model);
        const yPosition = window.innerWidth <= 500 ? 0 : -2;
        model.position.set(0, yPosition, 0);
        
        const scale = window.innerWidth <= 500 ? 1.5 : 2.5;
        model.scale.set(scale, scale, scale);
        
        // Setup animation
        mixer = new AnimationMixer(model);

        setIsLoading(false);
      },
      (xhr) => console.log((xhr.loaded / xhr.total) * 100 + "% loaded"),
      (error) => {
        console.error("Error loading the model", error);
        setIsLoading(false);
      }
    );

    camera.position.set(0, -2, 5); // Adjusted for a lower view

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      controls.update();

      if (mixer) {
        mixer.update(clock.getDelta());
      }

      if (modelRef.current) {
        modelRef.current.rotation.y += 0.005; // Add rotation to the model
      }

      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (sceneRef.current && rendererRef.current) {
        sceneRef.current.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
        rendererRef.current = null;
      }
      if (controlsRef.current) {
        controlsRef.current.dispose();
        controlsRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative inset-0 h-screen w-screen">
      <div ref={sceneRef} className="h-full w-full" />
      {isLoading && (
        <div className="absolute inset-0 top-0 left-0 flex items-center justify-center">
          <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-b-4 border-yellow-600"></div>
        </div>
      )}
    </div>
  );
};

export default TrophyThreeScene;
