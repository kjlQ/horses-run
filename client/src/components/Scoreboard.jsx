const Scoreboard = ({name,timer,index}) => {
    return(
        <div className="scoreboard">
            <span>{index+1}.{name}</span>
            <span>{timer}s</span>
        </div>
    )
}
export default Scoreboard