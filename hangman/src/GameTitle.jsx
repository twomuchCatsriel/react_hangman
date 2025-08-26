import React from "react";
import Wordart from "./WordArt";

function GameTitle(){
    return (
        <div id="title">
            <Wordart></Wordart>
            <p>A game about guessing words that get progressively longer and harder as time goes on.</p>
        </div>
    )
}

export default GameTitle;