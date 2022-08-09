import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {io} from "socket.io-client";
import {setHorses} from "../redux/slices/horseSlice";
import Horse from "../components/Horse";
import field from '../assets/field.jpg'
import flag from '../assets/flag.png'


const Field = () => {
    const dispatch = useDispatch()
    const {horses} = useSelector(state=>state.handler)
    useEffect(()=>{
        const socket = io.connect('http://localhost:3002')
        socket.emit('start');
        socket.on('ticker',(e)=>dispatch(setHorses(e)))
    },[])
    return(
        <div className="field" style={{backgroundImage:`url(${field})`}}>

            <div className="horses">

                {horses && horses.map(item=><Horse {...item} />)}
            </div>
        </div>
    )
}
export default Field