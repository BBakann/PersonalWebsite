import { useState, useEffect } from 'react';

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  const emojis = ['🎮', '🚀', '🎯', '⚡', '🎨', '🎵', '🔥', '⭐'];

  const initializeGame = () => {
    const gameCards = [...emojis, ...emojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({ id: index, emoji, flipped: false }));
    
    setCards(gameCards);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setGameWon(false);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    if (flipped.length === 2) {
      const [first, second] = flipped;
      if (cards[first].emoji === cards[second].emoji) {
        setMatched(prev => [...prev, first, second]);
        setFlipped([]);
      } else {
        setTimeout(() => setFlipped([]), 1000);
      }
      setMoves(prev => prev + 1);
    }
  }, [flipped, cards]);

  useEffect(() => {
    if (matched.length === cards.length && cards.length > 0) {
      setGameWon(true);
    }
  }, [matched, cards]);

  const handleCardClick = (index) => {
    if (flipped.includes(index) || matched.includes(index) || flipped.length === 2) {
      return;
    }
    setFlipped(prev => [...prev, index]);
  };

  return (
    <div className="memory-game">
      <div className="game-header">
        <h4>Hamle: {moves}</h4>
        {gameWon && <h4 className="game-won">🎉 Tebrikler! {moves} hamlede bitirdiniz!</h4>}
      </div>

      <div className="memory-board">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`memory-card ${
              flipped.includes(index) || matched.includes(index) ? 'flipped' : ''
            }`}
            onClick={() => handleCardClick(index)}
          >
            <div className="card-inner">
              <div className="card-front">?</div>
              <div className="card-back">{card.emoji}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="game-controls">
        <button className="btn-primary" onClick={initializeGame}>
          Yeni Oyun
        </button>
        <p className="game-info">
          🧠 Aynı kartları eşleştirin!
        </p>
      </div>
    </div>
  );
};

export default MemoryGame; 