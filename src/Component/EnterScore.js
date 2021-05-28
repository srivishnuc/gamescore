

const EnterScore = ({ scr, onChange, gameCount }) => {
    var max = 0, min = 0;
    if (scr.gameno === 1 || scr.gameno === gameCount) {
        max = 260;
        min = 54;
    }
    else {
        max = 130;
        min = 27;
    }
    return (
        <input type="number" value={scr.score} max={max} min={min} placeholder={`Game ${scr.gameno}`} onChange={onChange} />
    )
}


export default EnterScore;