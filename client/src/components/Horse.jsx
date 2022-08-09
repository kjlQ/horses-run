import React from 'react'
import horse from '../assets/horse.png'
const Horse = ({distance}) => {
    return(
        <div className="horse" style={{width:distance}}>
            <img height={70} src={horse} alt=""/>
            123
        </div>
    )
}
export default Horse