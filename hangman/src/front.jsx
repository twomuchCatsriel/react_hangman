import React from "react";

import GameTitle from "./GameTitle";
import CustomButton from "./CustomButton";

function FrontPage({}){
    return(
        <div id="FrontPage">
            <GameTitle></GameTitle>
            <CustomButton buttonID="playButton" buttonText="Play the Game"></CustomButton>
            <CustomButton buttonID="StatsButton" buttonText="View your Stats"></CustomButton>
        </div> 
    )
}

export default FrontPage;