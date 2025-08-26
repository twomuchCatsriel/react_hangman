import React, { useState } from "react";
import CustomButton from "./CustomButton";
import Wordart from "./WordArt";

let word="Wordle"

function Game({setPage}){
    return(
        <div id="game">
            <Wordart></Wordart>

            <div className="gameBox">
                
            </div>

            <div id="buttons">
                <CustomButton buttonID="menuButton" buttonText="Back to Menu" onClick={() => {setPage("main")}}></CustomButton>
            </div>
        </div>
    )
}

export default Game;