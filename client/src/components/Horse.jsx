import React from 'react'
import horse from '../assets/horse.png'
const Horse = ({distance,name}) => {
    return(
        <div className="horse" style={{width:distance+120}}>
            <img height={70} src={horse} alt=""/>
            <span>{name}</span>
        </div>
    )
}
export default Horse