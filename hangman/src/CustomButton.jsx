import React from "react";

function CustomButton({buttonID, buttonText}){
    return(
        <button className="customButtons" id={buttonID}>{buttonText}</button>
    )
}

export default CustomButton;