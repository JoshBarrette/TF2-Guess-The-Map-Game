import React from "react";
import './FailedCard.css';

function FailedCard(props: {
    clickFunction: () => void;
    score: number;
}) {
    return (
        <div id="FailedContainer">
            <p id="Title">You Failed!</p>
            <p className="About">You had a score of {props.score}</p>
            <button onClick={() => {
                props.clickFunction();
            }}>Try Again</button>
        </div>
    );
}

export default FailedCard;