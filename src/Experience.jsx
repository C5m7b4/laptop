import {
  Environment,
  Float,
  PresentationControls,
  ContactShadows,
  Html,
  Text,
} from "@react-three/drei";

import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";

export default function Experience() {
  const computer = useGLTF("laptop.glb");

  const { position } = useControls({
    position: {
      value: {
        x: 0.04,
        y: 0.19,
        z: -0.22,
      },
      min: -4,
      max: 4,
      step: 0.001,
    },
  });

  const { rotation } = useControls({
    rotation: {
      value: {
        x: 0,
        y: 0,
        z: 0,
      },
      min: -4,
      max: 4,
      step: 0.01,
    },
  });

  const { scale } = useControls({
    scale: {
      value: {
        x: 0.81,
        y: 1.03,
        z: 1,
      },
      min: -10,
      max: 10,
      step: 0.01,
    },
  });

  return (
    <>
      <color args={["#2e3033"]} attach="background" />
      <Environment preset="city" />

      <ambientLight intensity={2} />
      <directionalLight intensity={2} />

      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          <Text
            font="./bangers-v20-latin-regular.woff"
            fontSize={0.7}
            position={[1, 0.75, 0.75]}
            rotation-y={-1.25}
            maxWidth={2}
          >
            C5m7b4
          </Text>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={55}
            color={"#ff6900"}
            rotation={[0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />
          <primitive object={computer.scene} scale={5} position-y={-1.2}>
            <Html
              transform
              wrapperClass="htmlscreen"
              distanceFactor={1}
              position={[position.x, position.y, position.z]}
              rotation={[rotation.x, rotation.y, rotation.z]}
              scale={[scale.x, scale.y, scale.z]}
            >
              <iframe src="https://bruno-simon.com/html" />
            </Html>
          </primitive>
        </Float>
      </PresentationControls>

      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={3} />
    </>
  );
}
