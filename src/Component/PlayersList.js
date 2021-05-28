
const PlayerList = ({ playerlist, onChange, }) => {
  return (
    <div>
      <input type="text" id={playerlist.player} value={playerlist.player} onChange={onChange} />
    </div>
  );
};

export default PlayerList;