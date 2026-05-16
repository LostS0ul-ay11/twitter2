import { useCylinder } from '@react-three/cannon';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useGameStore } from '../store/gameStore';

interface PinProps {
  position: [number, number, number];
  index: number;
}

export function Pin({ position, index }: PinProps) {
  const { gameState, addKnockedPin } = useGameStore();
  const [isKnocked, setIsKnocked] = useState(false);
  const pinRadiusTop = 0.05;
  const pinRadiusBottom = 0.1;
  const pinHeight = 0.4;

  const [ref, api] = useCylinder(() => ({
    mass: 1.5,
    args: [pinRadiusTop, pinRadiusBottom, pinHeight, 16],
    position: position,
    material: { friction: 0.1, restitution: 0.5 },
  }), useRef<THREE.Mesh>(null));

  useEffect(() => {
    if (gameState === 'resetting') {
      api.position.set(...position);
      api.rotation.set(0, 0, 0);
      api.velocity.set(0, 0, 0);
      api.angularVelocity.set(0, 0, 0);
      setIsKnocked(false);
    }
  }, [gameState, api, position]);

  useFrame(() => {
    if (!ref.current || isKnocked || gameState === 'resetting') return;

    // A simple way to check if knocked is by looking at the up vector
    const upVector = new THREE.Vector3(0, 1, 0);
    const pinUp = new THREE.Vector3(0, 1, 0).applyQuaternion(ref.current.quaternion);
    
    // If the angle between world up and pin up is greater than threshold, it's knocked
    const angle = upVector.angleTo(pinUp);
    if (angle > Math.PI / 4) { // 45 degrees
      setIsKnocked(true);
      addKnockedPin(index);
    }
  });

  return (
    <mesh ref={ref} castShadow receiveShadow>
      <cylinderGeometry args={[pinRadiusTop, pinRadiusBottom, pinHeight, 16]} />
      <meshStandardMaterial color="#ffffff" roughness={0.5} />
      
      {/* Red stripes */}
      <mesh position={[0, pinHeight / 4, 0]}>
        <cylinderGeometry args={[pinRadiusTop * 0.9, pinRadiusTop * 0.95, 0.02, 16]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh position={[0, pinHeight / 4 - 0.05, 0]}>
        <cylinderGeometry args={[pinRadiusTop * 0.95, pinRadiusTop * 1.0, 0.02, 16]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </mesh>
  );
}
