import { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { BufferGeometry, Material } from "three";
const random = require("maath/random/dist/maath-random.esm");

const Stars = () => {
  const ref = useRef<THREE.Points<BufferGeometry, Material | Material[]>>(null);
  const [sphere, setSphere] = useState<Float32Array | null>(null);
  useEffect(() => {
    const loadSphere = async () => {
      const sphereData = await random.inSphere(new Float32Array(5001), { radius: 1.2 });
      setSphere(sphereData);
    };
    loadSphere();
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });
  if(sphere){
    return (
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points ref={ref} positions={sphere} stride={3} frustumCulled >
          <PointMaterial
            transparent
            color='#f272c8'
            size={0.002}
            sizeAttenuation={true}
            depthWrite={false}
          />
        </Points>
      </group>
    );
  }else{
    return (<></>);
  }
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;