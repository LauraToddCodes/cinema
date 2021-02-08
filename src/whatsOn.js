import React from "react";
import FilmBlocks from "./components/filmBlocks.js";

function WhatsOn(){
    return(
        <div>
            <h1 id="pageTitle">What's On</h1>
            <div id="filmBlocks">
                <FilmBlocks
                    trailerUrl="https://www.youtube.com/embed/qGqiHJTsRkQ"
                    filmTitle="Knives Out"
                    releaseDate="Release Date: Thurs 28/11/19" 
                    paragraphText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque sagittis purus sit amet volutpat consequat. Ullamcorper malesuada proin libero nunc consequat interdum varius sit amet. Facilisis mauris sit amet massa vitae. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Egestas purus viverra accumsan in nisl nisi scelerisque. Lorem ipsum dolor sit amet consectetur adipiscing. Blandit libero volutpat sed cras."
                />
                <FilmBlocks
                    trailerUrl="https://www.youtube.com/embed/63NAagrKOcc" 
                    filmTitle="Judy and Punch"
                    releaseDate="Release Date: Thurs 21/11/19"
                    paragraphText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque sagittis purus sit amet volutpat consequat. Ullamcorper malesuada proin libero nunc consequat interdum varius sit amet. Facilisis mauris sit amet massa vitae. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Egestas purus viverra accumsan in nisl nisi scelerisque. Lorem ipsum dolor sit amet consectetur adipiscing. Blandit libero volutpat sed cras."
                />
                <FilmBlocks 
                    trailerUrl="https://www.youtube.com/embed/GqoEs4cG6Uw"
                    filmTitle="Harriet"
                    releaseDate="Release Date: Thurs 21/11/19"
                    paragraphText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque sagittis purus sit amet volutpat consequat. Ullamcorper malesuada proin libero nunc consequat interdum varius sit amet. Facilisis mauris sit amet massa vitae. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Egestas purus viverra accumsan in nisl nisi scelerisque. Lorem ipsum dolor sit amet consectetur adipiscing. Blandit libero volutpat sed cras."
                />
            </div>
        </div>
    )
}

export default WhatsOn;