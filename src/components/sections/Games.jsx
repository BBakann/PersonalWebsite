import { useState } from 'react';
import TicTacToe from '../games/TicTacToe';
import SnakeGame from '../games/SnakeGame';
import MemoryGame from '../games/MemoryGame';

const Games = () => {
  const [activeGame, setActiveGame] = useState(null);

  const games = [
    {
      id: 'tictactoe',
      name: 'XOX (Tic Tac Toe)',
      description: 'Klasik XOX oyunu - 😈',
      icon: '🎯',
      difficulty: 'Impossible',
      component: TicTacToe
    },
    {
      id: 'snake',
      name: 'Snake Game',
      description: 'Nostaljik yılan oyunu - Modern twist ile!',
      icon: '🐍',
      difficulty: 'Classic',
      component: SnakeGame
    },
    {
      id: 'memory',
      name: 'Memory Game',
      description: 'Hafıza oyunu - Kartları eşleştir!',
      icon: '🧠',
      difficulty: 'Medium',
      component: MemoryGame
    }
  ];

  return (
    <section id="games" className="games">
      <div className="container">
        <h2 className="section-title">Mini Games</h2>
        <p className="section-subtitle">
        İşte sizin için hazırladığım mini oyunlar 🎮
        </p>

        {!activeGame ? (
          <div className="games-grid">
            {games.map((game) => (
              <div key={game.id} className="game-card">
                <div className="game-icon">{game.icon}</div>
                <h3>{game.name}</h3>
                <p>{game.description}</p>
                <div className="game-difficulty">
                  <span className={`difficulty ${game.difficulty.toLowerCase()}`}>
                    {game.difficulty}
                  </span>
                </div>
                <button 
                  className="btn-primary game-btn animate-start"
                  onClick={() => setActiveGame(game)}
                >
                  <span className="btn-text">Oyuna Başla</span>
                  <span className="btn-icon">🎮</span>
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="active-game">
            <div className="game-header">
              <h3>{activeGame.name}</h3>
              <button 
                className="btn-secondary animate-back"
                onClick={() => setActiveGame(null)}
              >
                <span className="btn-icon">←</span>
                <span className="btn-text">Geri Dön</span>
              </button>
            </div>
            <div className="game-container compact">
              <activeGame.component />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Games; 