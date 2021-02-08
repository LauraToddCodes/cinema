import React from "react";

function AboutFilms(props){
    return(
        <div id="aboutFilms">
            <img src={props.imgSrc} alt="film still"/>
            <h2>{props.filmTitle}</h2>
            <p>{props.paragraphText}</p>
        </div>
    )
}


export default AboutFilms