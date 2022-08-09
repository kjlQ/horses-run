import React, {useEffect} from 'react'
import horse from '../assets/horse.png'
import {addToTheScoreBoard} from '../redux/slices/horseSlice'
import {useDispatch, useSelector} from "react-redux";

const Horse = ({distance,name,timer}) => {
    const dispatch = useDispatch()
    useEffect(()=> {
        if(distance === 1000) {
            dispatch(addToTheScoreBoard({name, timer}))
            console.log(timer)
        }
    },[distance])
    return(
        <div className={`${distance !== 1000 && 'animated'} horse`} style={{width:distance+120}}>
            <img height={70} src={horse} alt=""/>
            <span>{name}</span>
        </div>
    )
}
export default Horse