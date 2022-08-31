import React from "react";
import gameImage from "../img/cartoon-network.jpg";

function Game() {

    return (
        <div className="game-container">
            <img className="game-image" src={gameImage} alt="cartoon network poster"></img>
        </div>
    )
}

export default Game;