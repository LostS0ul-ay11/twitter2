import { Physics } from '@react-three/cannon';
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Ball } from './components/Ball';
import { Lane } from './components/Lane';
import { PinSetup } from './components/PinSetup';
import { UI } from './components/UI';

function App() {
  return (
    <>
      <UI />
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 2, 6]} fov={50} />
        {/* Controles restritos para o usuário poder olhar levemente ao redor, mas não sair da pista */}
        <OrbitControls 
          enablePan={false} 
          enableZoom={false}
          minPolarAngle={Math.PI / 4} 
          maxPolarAngle={Math.PI / 2.5} 
          minAzimuthAngle={-Math.PI / 8}
          maxAzimuthAngle={Math.PI / 8}
        />
        
        <color attach="background" args={['#1a1a1a']} />
        
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[5, 10, 5]} 
          intensity={1.5} 
          castShadow 
          shadow-mapSize={[1024, 1024]}
        />

        {/* Ambiente realista para reflexos na bola e na pista */}
        <Environment preset="city" />

        <Physics 
          gravity={[0, -9.81, 0]} 
          defaultContactMaterial={{ friction: 0.1, restitution: 0.2 }}
        >
          <Lane />
          <Ball />
          <PinSetup />
        </Physics>
        
      </Canvas>
    </>
  );
}

export default App;
