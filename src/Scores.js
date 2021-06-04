
import PropsTypes from 'prop-types';
import { useState } from 'react';
import EnterScore from './Component/EnterScore';
import Scoreboard from './Component/Scoreboard'

const Score = ({ playersCount, players, setPlayers, totalScore, setTotalScore }) => {
    const [playersScores, setPlayersScores] = useState([])
    const [gameCount, setGameCount] = useState(5)


    useState(() => {
        var temp = []
        players.forEach((p) => {
            temp = { id: p.id, player: localStorage.getItem(p.id) }
            console.log(temp)
        })
        setPlayers(temp)
    }, [players, setPlayers])


    const enterScores = () => {
        const tempArr1 = [];

        for (let j = 1; j <= gameCount; j++) {

            for (let i = 100 + 1; i <= 100 + parseInt(playersCount); i++) {
                if (localStorage.getItem(`game${j + i.toString()}`) === null)
                    tempArr1.push({ gameno: j, playerid: i, score: 0 })
                else
                    tempArr1.push({ gameno: j, playerid: i, score: localStorage.getItem(`game${j + i.toString()}`) })
            }
        }

        setPlayersScores(tempArr1)
    }


    const onChange = index => e => {
        let newArr = [...playersScores]
        // let score = 0;
        // var max = 0, min = 0;
        // if (newArr[index].gameno === 1 || newArr[index].gameno === gameCount) {
        //     max = 260;
        //     min = 54;
        // }
        // else {
        //     max = 130;
        //     min = 27;
        // }
        // score = (parseInt(e.target.val) < max && parseInt(e.target.val) > min) ? parseInt(e.target.value) : 0
        newArr[index] = { gameno: newArr[index].gameno, playerid: newArr[index].playerid, score: e.target.value }
        setPlayersScores(newArr)
    }

    const addScore = () => {
        var temp = []
        temp = [...totalScore]
        temp.forEach((ts, index) => {
            var sumOfPlayerId = (id) => playersScores.filter(i => i.playerid === id).reduce((prevVal, currVal) => prevVal + parseInt(currVal.score), 0)
            temp[index] = { playerid: ts.playerid, score: sumOfPlayerId(ts.playerid) }
        });

        temp.sort((a, b) => {
            return a.score - b.score;
        });

        setTotalScore(temp)
    }

    const ConfirmPlayers = () => {
        players.forEach((player) => {
            localStorage.setItem(player.id, player.player)
        })
        totalScore.forEach((player) => {
            localStorage.setItem("score" + player.playerid, player.score)
        })
        playersScores.forEach((player) => {
            console.log(`game${player.gameno.toString() + player.playerid}`)
            localStorage.setItem(`game${player.gameno.toString() + player.playerid}`, player.score)
        })

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
            <div>
                <button onClick={addScore}>Calculate</button>
            </div>
            <div>
                <table>
                    <tbody>

                        {totalScore.map((s, index) => (
                            < Scoreboard key={index} players={players} playerid={s.playerid} score={s.score} />
                        ))
                        }

                    </tbody>
                </table>

            </div>
            <button onClick={() => {
                localStorage.clear()
                setPlayers([])
                setPlayersScores([])
                setTotalScore([])
            }}>Clear</button>
            <button onClick={ConfirmPlayers}>Local Save</button>

        </>
    );
};

export default Score;
