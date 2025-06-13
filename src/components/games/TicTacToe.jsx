import { useState, useEffect } from 'react';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [gameStatus, setGameStatus] = useState('playing');
  const [aiThinking, setAiThinking] = useState(false);

  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  const checkWinner = (board) => {
    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return board.includes(null) ? null : 'draw';
  };

  const minimax = (board, depth, isMaximizing, alpha = -Infinity, beta = Infinity) => {
    const winner = checkWinner(board);
    
    if (winner === 'O') return 10 - depth;
    if (winner === 'X') return depth - 10;
    if (winner === 'draw') return 0;

    if (isMaximizing) {
      let maxEval = -Infinity;
      for (let i = 0; i < 9; i++) {
        if (board[i] === null) {
          board[i] = 'O';
          const evaluation = minimax(board, depth + 1, false, alpha, beta);
          board[i] = null;
          maxEval = Math.max(maxEval, evaluation);
          alpha = Math.max(alpha, evaluation);
          if (beta <= alpha) break;
        }
      }
      return maxEval;
    } else {
      let minEval = Infinity;
      for (let i = 0; i < 9; i++) {
        if (board[i] === null) {
          board[i] = 'X';
          const evaluation = minimax(board, depth + 1, true, alpha, beta);
          board[i] = null;
          minEval = Math.min(minEval, evaluation);
          beta = Math.min(beta, evaluation);
          if (beta <= alpha) break;
        }
      }
      return minEval;
    }
  };

  const getBestMove = (board) => {
    let bestMove = -1;
    let bestValue = -Infinity;

    for (let i = 0; i < 9; i++) {
      if (board[i] === null) {
        board[i] = 'O';
        const moveValue = minimax(board, 0, false);
        board[i] = null;

        if (moveValue > bestValue) {
          bestValue = moveValue;
          bestMove = i;
        }
      }
    }
    return bestMove;
  };

  const handlePlayerMove = (index) => {
    if (board[index] || !isPlayerTurn || gameStatus !== 'playing') return;

    const newBoard = [...board];
    newBoard[index] = 'X';
    setBoard(newBoard);
    setIsPlayerTurn(false);

    const winner = checkWinner(newBoard);
    if (winner) {
      setGameStatus(winner === 'X' ? 'win' : winner === 'O' ? 'lose' : 'draw');
      return;
    }

    setAiThinking(true);
  };

  useEffect(() => {
    if (!isPlayerTurn && gameStatus === 'playing') {
      setTimeout(() => {
        const newBoard = [...board];
        const aiMove = getBestMove(newBoard);
        
        if (aiMove !== -1) {
          newBoard[aiMove] = 'O';
          setBoard(newBoard);

          const winner = checkWinner(newBoard);
          if (winner) {
            setGameStatus(winner === 'O' ? 'lose' : winner === 'X' ? 'win' : 'draw');
          } else {
            setIsPlayerTurn(true);
          }
        }
        setAiThinking(false);
      }, 800);
    }
  }, [isPlayerTurn, board, gameStatus]);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsPlayerTurn(true);
    setGameStatus('playing');
    setAiThinking(false);
  };

  const getStatusMessage = () => {
    if (aiThinking) return '🤖 Bilgisayar düşünüyor...';
    if (gameStatus === 'win') return '🎉 Tebrikler! Kazandınız!';
    if (gameStatus === 'lose') return '😔 Bilgisayar kazandı!';
    if (gameStatus === 'draw') return '🤝 Berabere!';
    return isPlayerTurn ? '👤 Sizin sıranız (X)' : '🤖 Bilgisayarın sırası (O)';
  };

  return (
    <div className="tictactoe">
      <div className="game-status">
        <h4>{getStatusMessage()}</h4>
      </div>
      
      <div className="tictactoe-board">
        {board.map((cell, index) => (
          <button
            key={index}
            className={`tictactoe-cell ${cell ? 'filled' : ''} ${cell === 'X' ? 'player-x' : cell === 'O' ? 'player-o' : ''}`}
            onClick={() => handlePlayerMove(index)}
            disabled={!isPlayerTurn || gameStatus !== 'playing' || aiThinking}
          >
            {cell}
          </button>
        ))}
      </div>

      {gameStatus !== 'playing' && (
        <button className="btn-primary reset-btn" onClick={resetGame}>
          Yeniden Oyna
        </button>
      )}
    </div>
  );
};

export default TicTacToe; 