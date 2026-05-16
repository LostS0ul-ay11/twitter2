import { useGameStore } from '../store/gameStore';

export function UI() {
  const { score, gameState, resetGame, resetBall } = useGameStore();

  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      pointerEvents: 'none', // Lets clicks pass through to the canvas
      fontFamily: 'sans-serif',
      zIndex: 10
    }}>
      <div style={{
        background: 'rgba(0,0,0,0.7)',
        padding: '10px 30px',
        borderRadius: '10px',
        color: 'white',
        textAlign: 'center',
        marginBottom: '10px',
        pointerEvents: 'auto'
      }}>
        <h1 style={{ margin: 0, fontSize: '24px' }}>Boliche 3D</h1>
        <p style={{ margin: '10px 0 0 0', fontSize: '18px' }}>
          Pinos Derrubados: <strong style={{ color: '#4ade80' }}>{score}</strong>/10
        </p>
      </div>

      {gameState === 'idle' && (
        <p style={{
          background: 'rgba(255,255,255,0.9)',
          color: '#000',
          padding: '5px 15px',
          borderRadius: '5px',
          fontWeight: 'bold',
          marginTop: '10px',
          textAlign: 'center'
        }}>
          Clique para lançar a bola!<br />
          <span style={{ fontSize: '14px', fontWeight: 'normal' }}>
            Dica: Clique mais para a esquerda ou direita da tela para mirar.
          </span>
        </p>
      )}

      {(gameState === 'thrown' || gameState === 'resetting') && (
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <button 
            onClick={resetBall}
            style={{
              pointerEvents: 'auto',
              padding: '10px 20px',
              fontSize: '16px',
              background: '#10b981',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}
          >
            Devolver Bola (Tentativa 2)
          </button>
          
          <button 
            onClick={resetGame}
            style={{
              pointerEvents: 'auto',
              padding: '10px 20px',
              fontSize: '16px',
              background: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}
          >
            Reiniciar Pinos
          </button>
        </div>
      )}
    </div>
  );
}
