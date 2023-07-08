import * as THREE from "three";
import { useLoader } from "@react-three/fiber";

const Terrain = () => {
  const elevation = useLoader(THREE.TextureLoader, "src/assets/elevation.png");
  const normal = useLoader(THREE.TextureLoader, "src/assets/normal.png");

  return (
    <mesh
      rotation={[-1.3, 0, 0]}
      //  position={[0, 0, 0]}
    >
      <planeGeometry args={[5, 5, 64, 64]}></planeGeometry>
      <meshStandardMaterial
        attach="material"
        color="white"
        displacementMap={elevation}
        normalMap={normal}
      ></meshStandardMaterial>
    </mesh>
  );
};

export default Terrain;
