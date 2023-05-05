import React from 'react';
import './App.css';

import WelcomeCard from './Components/WelcomeCard';
import Score from './Components/Score';

const img = "https://cdn.wallpapersafari.com/1/86/EYVIlD.jpg"

function App() {
    const [active, setActive] = React.useState(false);
    const [score, setScore] = React.useState(0);
    const [answer, setAnswer] = React.useState<number>();
    
    const printer = (guessNumber: number) => {
        console.log(guessNumber);
        setScore(score + 1);
    }

    const reset = () => {
        setScore(0);
        setActive(false);
    }

    return (
        <div className="App">
            <div id="WelcomeDiv">
                <WelcomeCard clickFunction={() => {setActive(true);}}/>
            </div>
            
            <div id="ImageDiv">
                <img src={img} />
            </div>

            <div>
                <Score clickFunction={printer} active={active} score={score} />
            </div>
        </div>
    );
}

export default App;
