import React from "react";
import ReactPlayer from "react-player";

function FilmBlocks(props) {
    return(
        <div>
            <div id="whatsOnFilms">
                <div className="trailerWrapper">
                    <ReactPlayer url={props.trailerUrl} className="reactPlayer" title="film trailer" width="100%" height="100%" />
                </div>
                <div id="whatsOnFilmDetails">
                    <h3>{props.filmTitle}</h3>
                    <h4>{props.releaseDate}</h4>
                    <p>{props.paragraphText}</p>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default FilmBlocks