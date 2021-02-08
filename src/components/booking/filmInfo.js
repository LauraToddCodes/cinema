import React from "react";

function FilmInfo(props) {
    return(
        <div id="whatsOnFilms">
            <img src={props.imgSrc} alt={props.imgAlt}/>
            <div id="whatsOnFilmDetails">
                <h3>{props.filmTitle}</h3>
                <p>{props.paragraphText}</p>
            </div>
        </div>
    )
}

export default FilmInfo