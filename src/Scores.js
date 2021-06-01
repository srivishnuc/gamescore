
import PropsTypes from 'prop-types';
import { useState } from 'react';
import EnterScore from './Component/EnterScore';

const Score = ({ playersCount, players, totalScore, setTotalScore }) => {
    const [playersScores, setPlayersScores] = useState([])
    const [gameCount, setGameCount] = useState(5)




    const enterScores = () => {
        const tempArr1 = [];

        for (let j = 1; j <= gameCount; j++) {

            for (let i = 100 + 1; i <= 100 + parseInt(playersCount); i++) {

                tempArr1.push({ gameno: j, playerid: i, score: 0 })

            }
        }

        setPlayersScores(tempArr1)
    }


    const onChange = index => e => {
        let newArr = [...playersScores]
        newArr[index] = { gameno: newArr[index].gameno, playerid: newArr[index].playerid, score: e.target.value }
        setPlayersScores(newArr)

    }

    const addScore = () => {
        var score = 0
        var temp = []
        var totalScore = playersScores.reduce((prevVal, currVal) =>
            prevVal + currVal.score


            , 0)
        console.log(totalScore)
    }

    Score.propsTypes = { playersCount: PropsTypes.number.isRequired };

    const gridStyle = { display: "grid", gridTemplateColumns: `repeat(${playersCount}, 1fr)`, gridGap: 20 }

    return (
        <>
            <input type="number" min="3" max="7" value={gameCount} onChange={(e) => setGameCount(e.target.value)} />
            <button onClick={enterScores}>Enter Scores</button>
            <div style={gridStyle}>

                {players.map(p => <h3 key={p.player}>{p.player}</h3>)}
                {playersScores.map((val, index) =>
                (
                    <EnterScore key={val.gameno.toString() + val.playerid} gameCount={gameCount} scr={val} onChange={onChange(index)} />
                ))
                }
                <button onClick={addScore}>Calculate</button>
            </div>
        </>
    );
};

export default Score;
