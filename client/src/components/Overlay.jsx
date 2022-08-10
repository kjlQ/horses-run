import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {changeProgress, resetScoreboard , resetHorses} from "../redux/slices/horseSlice";
import Scoreboard from "./Scoreboard";

const Overlay = () => {
    const dispatch = useDispatch()
    const {inProgress,scoreBoard} = useSelector(state=>state.handler)
    function start() {
        dispatch(changeProgress(true))
    }
    return(
        <div className="overlay">
            <div className="overlay__content">
                {
                    !scoreBoard.length ?
                        <div className="pixel" ><p onClick={()=>start()}>Start racing</p></div>
                        :
                        <>
                            <h1>Score</h1>
                            {scoreBoard.map((item,index) => <Scoreboard index={index} {...item}/>)}
                        </>
                }
            </div>
        </div>
    )
}
export default Overlay