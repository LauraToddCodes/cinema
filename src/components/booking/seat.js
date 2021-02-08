import React from "react";

function Seat(props){
    return(
        <div id={props.id} onClick={props.onClick} className={props.className}>
            <img src={props.imgSrc} alt={props.imgAlt} className="seatBackground" />
            <span className="seatNumber" >{props.seatNo}</span>
        </div>
    )
}

export default Seat