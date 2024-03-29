import { useRef, RefObject } from "react";
import * as THREE from "three";
import { Mesh, BufferGeometry, Material, NormalBufferAttributes } from "three";
import { useLoader, useFrame } from "@react-three/fiber";
import { useControls } from "leva";
// import getNormalMap from "../helpers/getNormal";

const Terrain = () => {
  const modelRef: RefObject<
    Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[]>
  > = useRef();

  // const elevation = useLoader(THREE.TextureLoader, "src/assets/elevation.png");
  const elevation2 = useLoader(THREE.TextureLoader, "/elevation2.png");
  // const normal = useLoader(THREE.TextureLoader, "src/assets/normal.png");
  const normal2 = useLoader(THREE.TextureLoader, "/normal2.png");
  useFrame(({ clock }) => {
    if (modelRef.current) {
      modelRef.current.rotation.z = clock.getElapsedTime() / 5;
    }
  });
  const material = useControls({
    wireframe: true,
    displacementScale: { value: 1.3, min: 0, max: 3, step: 0.1 },
  });

  return (
    <mesh ref={modelRef} rotation={[-1.3, 0, 0]}>
      <planeGeometry args={[5, 5, 256, 256]}></planeGeometry>
      <meshStandardMaterial
        attach="material"
        color="#46595C"
        normalMap={normal2}
        displacementMap={elevation2}
        wireframe={material.wireframe}
        displacementScale={material.displacementScale}
      ></meshStandardMaterial>
    </mesh>
  );
};

export default Terrain;
