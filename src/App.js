import React from "react";
import Header from "./components/Header";
import Start from "./components/Start";
import Game from "./components/Game";

function App() {

  const [gameStart, setGameStart] = React.useState(false);

  function startGame() {
    setGameStart(prev => !prev);
  }

  return (
    <div className="App">
      <Header />
      {gameStart? <Game /> : <Start startGame={startGame} />}
    </div>
  );
}

export default App;
