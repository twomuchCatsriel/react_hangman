import React from "react";
import CustomButton from "./CustomButton";

function Game({setPage}){
    return(
        <div id="game">
            <h1>hi</h1>
            <CustomButton buttonID="menuButton" buttonText="Back to Menu" onClick={() => {setPage("main")}}></CustomButton>
        </div>
    )
}

export default Game;