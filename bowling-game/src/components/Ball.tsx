import { useSphere } from '@react-three/cannon';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useGameStore } from '../store/gameStore';

export function Ball() {
  const { gameState, setGameState } = useGameStore();
  const startPosition: [number, number, number] = [0, 0.5, 2];
  const ballRadius = 0.2;

  const [ref, api] = useSphere(() => ({
    mass: 5, // Heavy ball
    args: [ballRadius],
    position: startPosition,
    material: { friction: 0.1, restitution: 0.2 },
  }), useRef<THREE.Mesh>(null));

  useEffect(() => {
    if (gameState === 'resetting' || gameState === 'resetting_ball') {
      api.position.set(...startPosition);
      api.velocity.set(0, 0, 0);
      api.angularVelocity.set(0, 0, 0);
      // Wait a tick then set to idle
      setTimeout(() => setGameState('idle'), 100);
    }
  }, [gameState, api, setGameState, startPosition]);

  const handleThrow = (e: PointerEvent) => {
    if (gameState === 'idle') {
      // Calcular a direção baseada no clique do mouse
      // A tela vai de -1 (esquerda) a 1 (direita)
      const xPos = (e.clientX / window.innerWidth) * 2 - 1;
      const xImpulse = xPos * -15; // Ajuste este multiplicador para mais ou menos sensibilidade

      api.applyImpulse([xImpulse, 0, -100], [0, 0, 0]);
      setGameState('thrown');
    }
  };

  // Add click listener to the window to throw
  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => handleThrow(e);
    window.addEventListener('pointerdown', onPointerDown);
    return () => window.removeEventListener('pointerdown', onPointerDown);
  }, [gameState]); // Rebind if gameState changes to ensure we only throw on idle

  return (
    <mesh ref={ref} castShadow receiveShadow>
      <sphereGeometry args={[ballRadius, 32, 32]} />
      <meshStandardMaterial color="#1a5b82" roughness={0.1} metalness={0.5} />
    </mesh>
  );
}
