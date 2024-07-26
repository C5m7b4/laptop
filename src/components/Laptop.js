import React, { useRef } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { useControls } from "leva";

export function Laptop(props) {
  const { nodes, materials } = useGLTF("/laptop.glb");

  const { position } = useControls({
    position: {
      value: {
        x: 0.1,
        y: 0.07,
        z: -0.22,
      },
      min: -4,
      max: 4,
      step: 0.01,
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
        x: 1.89,
        y: 2.38,
        z: 1,
      },
      min: -4,
      max: 4,
      step: 0.01,
    },
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cameraGlass.geometry}
        material={materials.glass}
        position={[0, 0.108, -0.106]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.152, 0.006, 0.102]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda.geometry}
        material={materials.key}
        position={[-0.115, 0.005, -0.06]}
        rotation={[0.03, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda001.geometry}
        material={materials.one}
        position={[-0.099, 0.005, -0.06]}
        rotation={[0.03, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda002.geometry}
        material={materials.two}
        position={[-0.083, 0.005, -0.06]}
        rotation={[0.03, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda003.geometry}
        material={materials.three}
        position={[-0.066, 0.005, -0.06]}
        rotation={[0.03, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda004.geometry}
        material={materials.four}
        position={[-0.05, 0.005, -0.06]}
        rotation={[0.03, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda005.geometry}
        material={materials.five}
        position={[-0.034, 0.005, -0.06]}
        rotation={[0.03, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda006.geometry}
        material={materials.six}
        position={[-0.018, 0.005, -0.06]}
        rotation={[0.03, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda007.geometry}
        material={materials.seven}
        position={[-0.001, 0.005, -0.06]}
        rotation={[0.03, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda008.geometry}
        material={materials.eight}
        position={[0.015, 0.005, -0.06]}
        rotation={[0.03, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda009.geometry}
        material={materials.nine}
        position={[0.031, 0.005, -0.06]}
        rotation={[0.03, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda010.geometry}
        material={materials.zero}
        position={[0.047, 0.005, -0.06]}
        rotation={[0.03, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda011.geometry}
        material={materials.minus}
        position={[0.064, 0.005, -0.06]}
        rotation={[0.03, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda012.geometry}
        material={materials.equal}
        position={[0.08, 0.005, -0.06]}
        rotation={[0.03, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda017.geometry}
        material={materials.Q}
        position={[-0.087, 0.005, -0.037]}
        rotation={[0.031, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda018.geometry}
        material={materials.W}
        position={[-0.071, 0.005, -0.037]}
        rotation={[0.031, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda019.geometry}
        material={materials.E}
        position={[-0.054, 0.005, -0.037]}
        rotation={[0.031, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda020.geometry}
        material={materials.R}
        position={[-0.038, 0.005, -0.037]}
        rotation={[0.031, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda021.geometry}
        material={materials.T}
        position={[-0.022, 0.005, -0.037]}
        rotation={[0.031, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda022.geometry}
        material={materials.Y}
        position={[-0.006, 0.005, -0.037]}
        rotation={[0.031, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda023.geometry}
        material={materials.U}
        position={[0.01, 0.005, -0.037]}
        rotation={[0.031, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda024.geometry}
        material={materials.I}
        position={[0.027, 0.005, -0.037]}
        rotation={[0.031, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda025.geometry}
        material={materials.O}
        position={[0.043, 0.005, -0.037]}
        rotation={[0.031, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda026.geometry}
        material={materials.P}
        position={[0.059, 0.005, -0.037]}
        rotation={[0.031, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda030.geometry}
        material={materials.A}
        position={[-0.087, 0.003, -0.015]}
        rotation={[0.03, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda031.geometry}
        material={materials.S}
        position={[-0.071, 0.003, -0.015]}
        rotation={[0.03, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda032.geometry}
        material={materials.D}
        position={[-0.055, 0.003, -0.015]}
        rotation={[0.03, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda033.geometry}
        material={materials.F}
        position={[-0.038, 0.003, -0.015]}
        rotation={[0.03, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda034.geometry}
        material={materials.G}
        position={[-0.022, 0.003, -0.015]}
        rotation={[0.03, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda035.geometry}
        material={materials.H}
        position={[-0.006, 0.003, -0.015]}
        rotation={[0.03, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda036.geometry}
        material={materials.J}
        position={[0.01, 0.003, -0.015]}
        rotation={[0.03, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda037.geometry}
        material={materials.K}
        position={[0.027, 0.003, -0.015]}
        rotation={[0.03, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda038.geometry}
        material={materials.L}
        position={[0.043, 0.003, -0.015]}
        rotation={[0.03, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda039.geometry}
        material={materials.colon}
        position={[0.059, 0.003, -0.015]}
        rotation={[0.03, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda040.geometry}
        material={materials.Z}
        position={[-0.078, 0.003, 0.006]}
        rotation={[0.041, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda041.geometry}
        material={materials.X}
        position={[-0.062, 0.003, 0.006]}
        rotation={[0.041, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda042.geometry}
        material={materials.C}
        position={[-0.046, 0.003, 0.006]}
        rotation={[0.041, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda043.geometry}
        material={materials.V}
        position={[-0.03, 0.003, 0.006]}
        rotation={[0.041, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda044.geometry}
        material={materials.B}
        position={[-0.013, 0.003, 0.006]}
        rotation={[0.041, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda045.geometry}
        material={materials.N}
        position={[0.003, 0.003, 0.006]}
        rotation={[0.041, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda046.geometry}
        material={materials.M}
        position={[0.019, 0.003, 0.006]}
        rotation={[0.041, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda047.geometry}
        material={materials.comma}
        position={[0.035, 0.003, 0.006]}
        rotation={[0.041, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda048.geometry}
        material={materials.slash}
        position={[0.068, 0.003, 0.007]}
        rotation={[0.041, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda049.geometry}
        material={materials.pipe}
        position={[0.11, 0.005, -0.037]}
        rotation={[0.031, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda014.geometry}
        material={materials.tab}
        position={[-0.112, 0.005, -0.037]}
        rotation={[0.031, 0, 0]}
        scale={[0.01, 0.007, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda015.geometry}
        material={materials.fn}
        position={[-0.115, 0.002, 0.028]}
        rotation={[0.044, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda016.geometry}
        material={materials.Ctrl}
        position={[-0.099, 0.002, 0.028]}
        rotation={[0.044, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda027.geometry}
        material={materials.Alt}
        position={[-0.083, 0.002, 0.028]}
        rotation={[0.044, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda028.geometry}
        material={materials.win}
        position={[-0.066, 0.002, 0.028]}
        rotation={[0.044, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda029.geometry}
        material={materials.spacebar}
        position={[-0.057, 0.001, 0.028]}
        rotation={[0.044, 0, 0]}
        scale={[0.053, 0.007, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda055.geometry}
        material={materials.enter}
        position={[0.105, 0.003, -0.015]}
        rotation={[0.03, 0, 0]}
        scale={[0.009, 0.007, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda050.geometry}
        material={materials.Esc}
        position={[-0.115, 0.006, -0.081]}
        rotation={[0.022, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda051.geometry}
        material={materials.f1}
        position={[-0.099, 0.006, -0.081]}
        rotation={[0.022, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda052.geometry}
        material={materials.f2}
        position={[-0.083, 0.006, -0.081]}
        rotation={[0.022, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda053.geometry}
        material={materials.f3}
        position={[-0.066, 0.006, -0.081]}
        rotation={[0.022, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda054.geometry}
        material={materials.f4}
        position={[-0.05, 0.006, -0.081]}
        rotation={[0.022, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda057.geometry}
        material={materials.f5}
        position={[-0.034, 0.006, -0.081]}
        rotation={[0.022, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda058.geometry}
        material={materials.f6}
        position={[-0.018, 0.006, -0.081]}
        rotation={[0.022, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda059.geometry}
        material={materials.f7}
        position={[-0.001, 0.006, -0.081]}
        rotation={[0.022, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda060.geometry}
        material={materials.f8}
        position={[0.015, 0.006, -0.081]}
        rotation={[0.022, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda061.geometry}
        material={materials.f9}
        position={[0.031, 0.006, -0.081]}
        rotation={[0.022, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda062.geometry}
        material={materials.f10}
        position={[0.047, 0.006, -0.081]}
        rotation={[0.022, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda063.geometry}
        material={materials.f11}
        position={[0.064, 0.006, -0.081]}
        rotation={[0.022, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda064.geometry}
        material={materials.f12}
        position={[0.08, 0.006, -0.081]}
        rotation={[0.022, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda013.geometry}
        material={materials.bracketO}
        position={[0.076, 0.005, -0.037]}
        rotation={[0.031, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda065.geometry}
        material={materials.bracketC}
        position={[0.093, 0.005, -0.037]}
        rotation={[0.031, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda066.geometry}
        material={materials["delete"]}
        position={[0.103, 0.006, -0.081]}
        rotation={[0.022, 0, 0]}
        scale={[0.014, 0.007, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda067.geometry}
        material={materials.backspace}
        position={[0.103, 0.005, -0.06]}
        rotation={[0.03, 0, 0]}
        scale={[0.014, 0.007, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda068.geometry}
        material={materials.doubleQuote}
        position={[0.076, 0.003, -0.015]}
        rotation={[0.03, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda069.geometry}
        material={materials.capsLock}
        position={[-0.113, 0.003, -0.015]}
        rotation={[0.03, 0, 0]}
        scale={[0.009, 0.007, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda070.geometry}
        material={materials["period.001"]}
        position={[0.052, 0.003, 0.006]}
        rotation={[0.041, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda071.geometry}
        material={materials.shift}
        position={[-0.11, 0.003, 0.006]}
        rotation={[0.041, 0, 0]}
        scale={[0.012, 0.007, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda072.geometry}
        material={materials.Alt}
        position={[0.06, 0.002, 0.028]}
        rotation={[0.044, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda073.geometry}
        material={materials.left}
        position={[0.076, 0.002, 0.028]}
        rotation={[0.044, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda074.geometry}
        material={materials["up.001"]}
        position={[0.093, 0.002, 0.023]}
        rotation={[0.044, 0, 0]}
        scale={[0.007, 0.007, 0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda075.geometry}
        material={materials.down}
        position={[0.093, 0.002, 0.032]}
        rotation={[0.044, 0, 0]}
        scale={[0.007, 0.007, 0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda076.geometry}
        material={materials.right}
        position={[0.11, 0.002, 0.028]}
        rotation={[0.044, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tilda056.geometry}
        material={materials.shift}
        position={[0.101, 0.003, 0.006]}
        rotation={[0.041, 0, 0]}
        scale={[0.012, 0.007, 0.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials.body}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_1.geometry}
        material={materials.up}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials.body}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002_1.geometry}
        material={materials.screen}
      />
      <Html
        transform
        wrapperClass="htmlscreen"
        distanceFactor={0.25}
        position={[position.x, position.y, position.z]}
        rotation={[rotation.x, rotation.y, rotation.z]}
        scale={[scale.x, scale.y, scale.z]}
      >
        <iframe src="https://bruno-simon.com/html" />
      </Html>
    </group>
  );
}

useGLTF.preload("/laptop.glb");
