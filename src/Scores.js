
import PropsTypes from 'prop-types';
import { useState } from 'react';
import EnterScore from './Component/EnterScore';

const Score = ({ playersCount, players }) => {
    const [playersScores, setPlayersScores] = useState([])
    const [gameCount, setGameCount] = useState(5)



    const enterScores = () => {
        const tempArr = [];

        for (let j = 1; j <= gameCount; j++) {

            for (let i = 100 + 1; i <= 100 + parseInt(playersCount); i++) {

                tempArr.push({ gameno: j, playerid: i, score: 0 })

            }
        }

        setPlayersScores(tempArr)
    }

    const onChange = index => e => {
        console.log(e.target.value)
        let newArr = [...playersScores]
        newArr[index] = { gameno: newArr[index].gameno, playerid: newArr[index].playerid, score: e.target.value }
        setPlayersScores(newArr)
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
            </div>
        </>
    );
};

export default Score;
