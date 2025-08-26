import React, { useState } from "react";

import GameTitle from "./GameTitle";
import CustomButton from "./CustomButton";

function FrontPage({setPage}){
    return(
        <div id="FrontPage">
            <GameTitle></GameTitle>
            <CustomButton buttonID="playButton" buttonText="Play the Game" onClick={() => {setPage("play")}}></CustomButton>
            <CustomButton buttonID="StatsButton" buttonText="View your Stats" onClick={() => {setPage("stats")}}></CustomButton>
        </div> 
    )
}


export default FrontPage;