import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import { useAtom } from 'jotai';
import { darkModeAtom } from "@/atoms/atoms";

const EarthAndSun = () => {
  const earth = useGLTF("./planet/scene.gltf");
  const sun = useGLTF("./sun/scene.gltf");
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);

  return (
    <>
    {darkMode && <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />}
    {!darkMode && <primitive object={sun.scene} scale={0.2} position-y={0} rotation-y={0} />}
    </>
  );
};

const EarthAndSunCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <EarthAndSun />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthAndSunCanvas;