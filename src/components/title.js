import React from "react";
import TPTitle from "./images/title/talkingPicturesLogo.png";
import {Link} from "react-router-dom";

function Title(){
    return(
        <Link to="/">
            <img src={TPTitle} alt="talking pictures logo" id="title"/>
        </Link>
    )
}

export default Title;