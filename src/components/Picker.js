import React from "react";
import deedee from "../img/deedee.png";
import courage from "../img/courage.png";
import plank from "../img/plank1.png";

function Picker() {
    
    return (
        <div className="picker-container">
            <div className="picker-row">
                <img alt="deedee" src={deedee} className="picker-img"></img>
            </div>
            <div className="picker-row">
                <img alt="courage" src={courage} className="picker-img"></img>
            </div>
            <div className="picker-row">
                <img alt="plank" src={plank} className="picker-img"></img>
            </div>
        </div>
    )
}