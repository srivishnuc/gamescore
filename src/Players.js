
import React, { useState } from 'react';
import PlayerList from './Component/PlayersList'
import Scores from './Scores';

const Players = () => {
  var [playersCount, setPlayersCount] = useState(5);
  var [players, setPlayers] = useState([]);
  var [totalScore, setTotalScore] = useState([])


  var handlePlayerCount = (e) => {
    setPlayersCount(e.target.value);
  };

  var handleClick = () => {
    var tempArr1 = [];
    var tempArr2 = [];
    for (let i = 100 + 1; i <= 100 + parseInt(playersCount); i++) {
      tempArr1.push({ id: i, player: 'player' + i });
      tempArr2.push({ playerid: i, score: 0 });
    }
    setPlayers(tempArr1);
    setTotalScore(tempArr2);
  };
  console.log(totalScore)

  const onChange = index => e => {
    let newArr = [...players]
    newArr[index] = { id: newArr[index].id, player: e.target.value }
    setPlayers(newArr)
  }

  const ConfirmPlayers = () => {
    players.forEach((player) => {
      localStorage.setItem("player" + player.id, player.player)
    })
  }

  return (
    <div>
      <label>No of Players</label>
      <input
        type="number"
        id="playersCount"
        min="3"
        max="8"
        value={playersCount}
        onChange={handlePlayerCount}
      />
      <button onClick={handleClick}>Confirm</button>
      {players.map((p, index) => (
        <PlayerList key={p.id} playerlist={p} ConfirmPlayers={ConfirmPlayers} onChange={onChange(index)} />
      ))}
      <button onClick={ConfirmPlayers}>Confirm</button>

      <Scores playersCount={playersCount} players={players} totalScore={totalScore} setTotalScore={setTotalScore} />
    </div>
  );
};

export default Players;
