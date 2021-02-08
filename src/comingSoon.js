import React from "react";
import FilmBlocks from "./components/filmBlocks.js";

function ComingSoon(){
    return(
        <div>
            <h1 id="pageTitle">Coming Soon</h1>
            <div id="filmBlocks">
                <FilmBlocks
                    trailerUrl="https://www.youtube.com/embed/tL4McUzXfFI"
                    filmTitle="Jojo Rabbit"
                    releaseDate="Release Date: Thurs 03/01/20" 
                    paragraphText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque sagittis purus sit amet volutpat consequat. Ullamcorper malesuada proin libero nunc consequat interdum varius sit amet. Facilisis mauris sit amet massa vitae. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Egestas purus viverra accumsan in nisl nisi scelerisque. Lorem ipsum dolor sit amet consectetur adipiscing. Blandit libero volutpat sed cras."
                />
                <FilmBlocks
                    trailerUrl="https://www.youtube.com/embed/-VLEPhfEN2M" 
                    filmTitle="A Beautiful Day in the Neighborhood"
                    releaseDate="Release Date: Thurs 31/01/20"
                    paragraphText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque sagittis purus sit amet volutpat consequat. Ullamcorper malesuada proin libero nunc consequat interdum varius sit amet. Facilisis mauris sit amet massa vitae. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Egestas purus viverra accumsan in nisl nisi scelerisque. Lorem ipsum dolor sit amet consectetur adipiscing. Blandit libero volutpat sed cras."
                />
                <FilmBlocks
                    trailerUrl="https://www.youtube.com/embed/AST2-4db4ic"
                    filmTitle="Little Women"
                    releaseDate="Release Date: Thurs 05/12/19"
                    paragraphText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque sagittis purus sit amet volutpat consequat. Ullamcorper malesuada proin libero nunc consequat interdum varius sit amet. Facilisis mauris sit amet massa vitae. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Egestas purus viverra accumsan in nisl nisi scelerisque. Lorem ipsum dolor sit amet consectetur adipiscing. Blandit libero volutpat sed cras."
                />
            </div>
        </div>
    )
}

export default ComingSoon;