import { useBox, usePlane } from '@react-three/cannon';
import { useRef } from 'react';
import * as THREE from 'three';

export function Lane() {
  // Chão principal invisível/escuro para suportar as coisas
  const [floorRef] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.5, 0],
    material: { friction: 0.1, restitution: 0.5 },
  }), useRef<THREE.Mesh>(null));

  // Pista de boliche principal
  const laneLength = 20;
  const laneWidth = 2;
  const [laneRef] = useBox(() => ({
    args: [laneWidth, 0.5, laneLength],
    position: [0, -0.25, -laneLength / 2 + 2], // Começa perto de z=2 e vai até o fundo (z negativo)
    type: 'Static',
    material: { friction: 0.1, restitution: 0.2 },
  }), useRef<THREE.Mesh>(null));

  // Canaletas (Gutters)
  const gutterWidth = 0.5;
  const gutterDepth = 0.2;
  
  const [leftGutterRef] = useBox(() => ({
    args: [gutterWidth, gutterDepth, laneLength],
    position: [-laneWidth / 2 - gutterWidth / 2, -0.25 - gutterDepth/2, -laneLength / 2 + 2],
    type: 'Static',
  }), useRef<THREE.Mesh>(null));

  const [rightGutterRef] = useBox(() => ({
    args: [gutterWidth, gutterDepth, laneLength],
    position: [laneWidth / 2 + gutterWidth / 2, -0.25 - gutterDepth/2, -laneLength / 2 + 2],
    type: 'Static',
  }), useRef<THREE.Mesh>(null));

  return (
    <group>
      <mesh ref={floorRef} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#111" />
      </mesh>
      
      <mesh ref={laneRef} receiveShadow>
        <boxGeometry args={[laneWidth, 0.5, laneLength]} />
        <meshStandardMaterial color="#d2b48c" roughness={0.1} metalness={0.1} />
      </mesh>

      <mesh ref={leftGutterRef} receiveShadow>
        <boxGeometry args={[gutterWidth, gutterDepth, laneLength]} />
        <meshStandardMaterial color="#222" roughness={0.8} />
      </mesh>

      <mesh ref={rightGutterRef} receiveShadow>
        <boxGeometry args={[gutterWidth, gutterDepth, laneLength]} />
        <meshStandardMaterial color="#222" roughness={0.8} />
      </mesh>
    </group>
  );
}
