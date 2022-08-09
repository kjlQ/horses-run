const Scoreboard = ({name,timer}) => {
    return(
        <div className="scoreboard">
            <span>{name}</span>
            <span>{timer}s</span>
        </div>
    )
}
export default Scoreboard