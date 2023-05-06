import './Score.css';

function Score(props: {
    clickFunction: (num: number) => void;
    active: boolean;
    score: number;
    maps: Array<string>;
}) {
    return (
        <div id="ButtonDiv">            
            {props.maps.map((map, index) => (
                <button key={map} className="MapButton" onClick={() => props.clickFunction(index)} disabled={!props.active}>
                    {map}
                </button>
            ))}
            
            <div id="ScoreDiv">
                <p id="ScoreText">Score: {props.score}</p>
            </div>
        </div>
    );
}

export default Score;