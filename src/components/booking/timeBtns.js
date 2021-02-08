import React from "react";
import { Link } from "react-router-dom";

function TimeBtns(props) {
    return(
        <div>
            <h3>{props.date}</h3>
            <div>
                <Link to="/bookingdetails" ><button onClick={props.onClick} id={props.id + "0"} key={props.key + "0"} style={{display:props.time[0] ? "inline-block" : "none" }} className="bookTimeBtn">{props.time[0]}</button></Link>
                <Link to="/bookingdetails" ><button onClick={props.onClick} id={props.id + "1"} key={props.key + "1"} style={{display:props.time[1] ? "inline-block" : "none" }} className="bookTimeBtn">{props.time[1]}</button></Link>
                <Link to="/bookingdetails" ><button onClick={props.onClick} id={props.id + "2"} key={props.key + "2"} style={{display:props.time[2] ? "inline-block" : "none" }} className="bookTimeBtn">{props.time[2]}</button></Link>
                <Link to="/bookingdetails" ><button onClick={props.onClick} id={props.id + "3"} key={props.key + "3"} style={{display:props.time[3] ? "inline-block" : "none" }} className="bookTimeBtn">{props.time[3]}</button></Link>
            </div>
        </div>      
    )
}

export default TimeBtns