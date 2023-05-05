import './Score.css';

function Score(props: {
    clickFunction: (num: number) => void;
    active: boolean;
    score: number;
}) {
    return (
        <div id="ButtonDiv">
            <button className="MapButton" onClick={() => props.clickFunction(1)} disabled={!props.active}>map1</button>
            <button className="MapButton" onClick={() => props.clickFunction(2)} disabled={!props.active}>map2</button>
            <button className="MapButton" onClick={() => props.clickFunction(3)} disabled={!props.active}>map3</button>
            <button className="MapButton" onClick={() => props.clickFunction(4)} disabled={!props.active}>map4</button>

            <div id="ScoreDiv">
                <p id="ScoreText">Score: {props.score}</p>
            </div>
        </div>
    );
}

export default Score;