import React from 'react';
import './App.css';

import WelcomeCard from './Components/WelcomeCard';
import FailedCard from './Components/FailedCard';
import Score from './Components/Score';
import questionData from './Questions.json';

import path from 'path';

type question = {
    image : string,
    map : string,
    maps: Array<string>,
    answer: number
}

const img = "2fort1.jpg"
const questions: Array<question> = questionData.questions;

function App() {
    const [welcome, setWelcome] = React.useState(true);
    const [active, setActive] = React.useState(false);
    const [score, setScore] = React.useState(0);
    const [q, setQ] = React.useState(questions[0])
    const [failed, setFailed] = React.useState(false);

    const checkAnswer = (guessNumber: number) => {
        if (guessNumber === q.answer) {
            setScore(score + 1);
        } else {
            setActive(false);
            setFailed(true);
        }
    }

    return (
        <div className="App">
            {welcome && 
            <div className="PopUp">
                <WelcomeCard clickFunction={() => {setWelcome(false); setActive(true)}}/>
            </div> }

            {failed && 
            <div className="PopUp">
                <FailedCard clickFunction={() => {setFailed(false); setActive(true); setScore(0);}} score={score}/>
            </div> }
            
            {/* TODO: This method of pointing to images with require feels like it's wrong but idk man */}
            <div id="ImageDiv">
                <img src={require("./Assets/" + img)} alt={"Map Image Here."}/>
            </div>

            <div>
                <Score clickFunction={checkAnswer} active={active} score={score} maps={q.maps}/>
            </div>
        </div>
    );
}

export default App;
