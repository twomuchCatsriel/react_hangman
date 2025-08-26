import React from "react";

function CustomButton({buttonID, buttonText, onClick}){

    return <button className="customButtons" id={buttonID} onClick={onClick}>{buttonText}</button>


}

export default CustomButton;