import { Canvas } from "@react-three/fiber";
import Terrain from "./Terrain";
import { OrbitControls } from "@react-three/drei";

const Model = () => {
  return (
    <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}>
      <OrbitControls />
      <pointLight position={[10, 0, 50]} />
      <Terrain />
    </Canvas>
  );
};

export default Model;
