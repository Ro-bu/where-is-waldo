import React from "react";
import courage from "../img/courage.png";
import deedee from "../img/deedee.png";
import plank from "../img/plank1.png";

function Start() {

    return (
        <div className="start-container">
            <h2 className="start-title">
                FIND THESE THREE CHARACTERS
            </h2>
            <div className="character-container">
                <div class="single-character">
                    <img src={courage} alt="courage the cowardly dog" className="character-image"></img>
                    <p className="character-name">Courage</p>
                </div>
                <div class="single-character">
                    <img src={deedee} alt="dee dee" className="character-image"></img>
                    <p className="character-name">Dee Dee</p>
                </div>
                <div class="single-character">
                    <img src={plank} alt="plank" className="character-image"></img>
                    <p className="character-name">Plank</p>
                </div>
            </div> 
            <button type="button" className="start-button">Start Game</button>
        </div>
    )
}

export default Start;