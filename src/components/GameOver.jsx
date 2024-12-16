export default function GameOver({ symbol, onClick }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {symbol && <p>{symbol} won!</p>}
      {!symbol && <p>It's a draw</p>}
      <p>
        <button onClick={onClick}>Rematch!</button>
      </p>
    </div>
  );
}
