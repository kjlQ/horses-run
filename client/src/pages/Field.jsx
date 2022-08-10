import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {io} from "socket.io-client";
import {changeProgress, setHorses , resetScoreboard} from "../redux/slices/horseSlice";
import Horse from "../components/Horse";
import field from '../assets/field.jpg'
import Overlay from "../components/Overlay";


const Field = () => {
    const [timer,setTimer] = useState(0)
    const dispatch = useDispatch()
    const {horses,inProgress,scoreBoard} = useSelector(state=>state.handler)
    const socket = io.connect('http://localhost:3002')

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(seconds => seconds + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(()=>{
        if(inProgress) {
            socket.emit('start')
            socket.on('ticker',(e)=>dispatch(setHorses(e)))
        }
    },[inProgress])
    useEffect(()=> {
        if(scoreBoard.length === 6) {
            dispatch(changeProgress(false))
        }
    },[scoreBoard])
    return(
        <div className="field" style={{backgroundImage:`url(${field})`}}>
            {inProgress ?
                <div className="horses">
                    {horses && horses.map(item=><Horse timer={timer} {...item} />)}
                </div>
                :
                <Overlay />
            }

        </div>
    )
}
export default Field