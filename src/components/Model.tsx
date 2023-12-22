import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Terrain from "./Terrain";
import styles from "./Model.module.css";

const Model = () => {
  return (
    <div className={styles["model"]}>
      <Canvas camera={{ fov: 75, near: 0.1, far: 500, position: [0, 0, 4] }}>
        <OrbitControls enableZoom={false} />
        <ambientLight />
        <pointLight position={[0, 0, 0]} />
        <Terrain />
      </Canvas>
    </div>
  );
};

export default Model;
