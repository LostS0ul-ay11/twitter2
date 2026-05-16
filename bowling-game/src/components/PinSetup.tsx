import { Pin } from './Pin';

export function PinSetup() {
  const pinSpacing = 0.3; 
  const startZ = -6; // Mais perto do final da pista (-10 é o fim, a pista tem tamanho 20 começando de 2)
  
  // Cria os 10 pinos no formato de triângulo
  const positions: [number, number, number][] = [];
  
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col <= row; col++) {
      const xOffset = (col * pinSpacing) - ((row * pinSpacing) / 2);
      const zOffset = startZ - (row * pinSpacing * 0.866); // Triângulo equilátero
      // y=0.2 porque a pista está no y=0 (topo) e o pino tem altura 0.4
      positions.push([xOffset, 0.2, zOffset]); 
    }
  }

  return (
    <group>
      {positions.map((pos, i) => (
        <Pin key={i} index={i} position={pos} />
      ))}
    </group>
  );
}
