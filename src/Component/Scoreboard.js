
const Scoreboard = ({ players, playerid, score }) => {

    const playerName = () => {
        var name = ""
        players.forEach(p => {
            if (p.id === playerid) {
                name = p.player
            }
        })
        return name
    }


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