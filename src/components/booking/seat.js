import React from "react";

function Seat(props){
    return(
        <div id={props.id} onClick={props.onClick} className={props.className}>
            <span className="seatNumber" >{props.seatNo}</span>
        </div>
    )
}

export default Seat