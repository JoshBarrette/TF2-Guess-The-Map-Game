import React from 'react';
import './App.css';

import WelcomeCard from './Components/WelcomeCard';
import FailedCard from './Components/FailedCard';
import Score from './Components/Score';

const img = "https://cdn.wallpapersafari.com/1/86/EYVIlD.jpg"
const maps: Array<string> = ["Upward", "Badwater", "Goldrush", "Thunder Mountain"];

function App() {
    const [welcome, setWelcome] = React.useState(true);
    const [active, setActive] = React.useState(false);
    const [score, setScore] = React.useState(0);
    const [answer, setAnswer] = React.useState<number>(1);
    const [image, setImage] = React.useState(img);
    const [failed, setFailed] = React.useState(false);

    const checkAnswer = (guessNumber: number) => {
        if (guessNumber === answer) {
            setScore(score + 1);
        } else {
            setActive(false);
            setFailed(true);
        }
    }

    return (
        <div className="App">
            {welcome ? 
            <div className="PopUp">
                <WelcomeCard clickFunction={() => {setWelcome(false); setActive(true)}}/>
            </div> 
            : null}

            {failed ? 
            <div className="PopUp">
                <FailedCard clickFunction={() => {setFailed(false); setActive(true); setScore(0);}} score={score}/>
            </div> 
            : null}
            
            <div id="ImageDiv">
                <img src={image} />
            </div>

            <div>
                <Score clickFunction={checkAnswer} active={active} score={score} maps={maps}/>
            </div>
        </div>
    );
}

export default App;
