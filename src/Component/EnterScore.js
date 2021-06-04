

const EnterScore = ({ scr, onChange }) => {

    return (
        <input type="number" value={scr.score} placeholder={`Game ${scr.gameno}`} onChange={onChange} />
    )
}


export default EnterScore;