const Scoreboard = ({ players, playerid, score }) => {
    console.log(players)
    console.log(playerid)

    const playerName = () => {
        var name = ""
        players.forEach(p => {
            if (p.id === playerid) {
                name = p.player
            }
        })
        return name
    }
    console.log(playerName())
    return (<>
        <tr>
            <td>
                {playerName()}
            </td>
            <td>{score}</td>
        </tr>

    </>)
}

export default Scoreboard