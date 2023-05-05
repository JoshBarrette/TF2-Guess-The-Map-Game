import './Score.css';

function Score(props: {
    clickFunction: (num: number) => void;
    active: boolean;
    score: number;
    maps: Array<string>;
}) {
    return (
        <div id="ButtonDiv">
            <button className="MapButton" onClick={() => props.clickFunction(1)} disabled={!props.active}>
                {props.maps[0]}
            </button>
            <button className="MapButton" onClick={() => props.clickFunction(2)} disabled={!props.active}>
                {props.maps[1]}
            </button>
            <button className="MapButton" onClick={() => props.clickFunction(3)} disabled={!props.active}>
                {props.maps[2]}
            </button>
            <button className="MapButton" onClick={() => props.clickFunction(4)} disabled={!props.active}>
                {props.maps[3]}
            </button>

            <div id="ScoreDiv">
                <p id="ScoreText">Score: {props.score}</p>
            </div>
        </div>
    );
}

export default Score;