import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { useControls } from "leva";

const Terrain = () => {
  const elevation = useLoader(THREE.TextureLoader, "src/assets/elevation.png");
  const normal = useLoader(THREE.TextureLoader, "src/assets/normal.png");

  const material = useControls({
    wireframe: false,
    displacementScale: { value: 1.7, min: 0, max: 3, step: 0.1 },
  });

  return (
    <mesh rotation={[-1.3, 0, 0]}>
      <planeGeometry args={[5, 5, 128, 128]}></planeGeometry>
      <meshStandardMaterial
        wireframe={material.wireframe}
        attach="material"
        color="#00a000"
        normalMap={normal}
        displacementMap={elevation}
        displacementScale={material.displacementScale}
      ></meshStandardMaterial>
    </mesh>
  );
};

export default Terrain;
