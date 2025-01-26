"use client";

import { useEffect, useRef, useState } from "react";
import { Scene, PerspectiveCamera, WebGLRenderer, DirectionalLight, AmbientLight, PointLight, Clock } from "three";
import { GLTFLoader } from "three-stdlib";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const TrophyThreeScene = () => {
  const sceneRef = useRef();
  const rendererRef = useRef();
  const controlsRef = useRef();
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (rendererRef.current) return;
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    const scene = new Scene();
    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.5, 1000);
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

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2; // Restrict vertical rotation
    controls.minPolarAngle = 0;
    controls.enableZoom = false;

    // Animation setup
    const clock = new Clock();
    let mixer;

    // Load 3D model
    const loader = new GLTFLoader();
    loader.load(
      "/trophy/scene.gltf",
      (gltf) => {
        const model = gltf.scene;
        scene.add(model);
        model.position.set(1, 0, 0);
        console.log(isMobile);
        model.scale.set(2, 2, 2);
        // if(isMobile) {
        // }
        setIsLoading(false);
      },
      (xhr) => console.log((xhr.loaded / xhr.total) * 100 + "% loaded"),
      (error) => {
        console.error("Error loading the model", error);
        setIsLoading(false);
      }
    );

    camera.position.set(4, 1, 5); // Adjust for a better initial view

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      controls.update();

      if (mixer) {
        mixer.update(clock.getDelta());
      }

      renderer.render(scene, camera);
    };
    animate();
    
    // Cleanup
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
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
    <div className="relative inset-0 h-full w-full">
      <div ref={sceneRef} className="h-full w-full" />
      {isLoading && (
        <div className="absolute inset-0 top-0 left-0 flex items-center justify-center">
          <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-b-4 border-blue-500"></div>
        </div>
      )}
    </div>
  );
};

export default TrophyThreeScene;
