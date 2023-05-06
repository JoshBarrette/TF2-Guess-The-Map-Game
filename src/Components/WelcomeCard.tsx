import React from "react";
import './WelcomeCard.css';

function WelcomeCard(props: {
    clickFunction: () => void;
}) {
    return (
        <div id="WelcomeContainer">
            <p id="Title">Guess the TF2 Map</p>
            <p className="About">You will have 3 chances to guess the TF2 map shown. With each incorrect guess you will receive less points for that map.</p>
            <button onClick={() => {
                props.clickFunction();
            }}>Begin</button>
        </div>
    );
}

export default WelcomeCard;