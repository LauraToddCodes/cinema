import React from "react";
import Seats from "./components/images/cinemaSeats.jpg";
import AboutFilms from "./components/about/aboutFilms.js";

function Home(){
    return(
        <div>
            <div id="aboutBlock">
                <img src={Seats} alt="cinema seats"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque sagittis purus sit amet volutpat consequat. Ullamcorper malesuada proin libero nunc consequat interdum varius sit amet. Facilisis mauris sit amet massa vitae. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque sagittis purus sit amet volutpat consequat.</p>
            </div>
            <h2>What's On</h2>
            <div id="aboutFilmsBlock">
                <AboutFilms 
                    imgSrc={process.env.PUBLIC_URL + "/book/aboutKnivesOut.jpg"} 
                    filmTitle="Knives Out" 
                    paragraphText ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque sagittis purus sit amet volutpat consequat. Ullamcorper malesuada proin libero nunc consequat interdum varius sit amet. Facilisis mauris sit amet massa vitae. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus." 
                />
                <AboutFilms 
                    imgSrc={process.env.PUBLIC_URL + "/book/aboutJudyAndPunch.jpg"} 
                    filmTitle="Judy and Punch" 
                    paragraphText ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque sagittis purus sit amet volutpat consequat. Ullamcorper malesuada proin libero nunc consequat interdum varius sit amet. Facilisis mauris sit amet massa vitae. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus." 
                />
                <AboutFilms 
                    imgSrc={process.env.PUBLIC_URL + "/book/aboutHarriet.jpg"} 
                    filmTitle="Harriet" 
                    paragraphText ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque sagittis purus sit amet volutpat consequat. Ullamcorper malesuada proin libero nunc consequat interdum varius sit amet. Facilisis mauris sit amet massa vitae. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus." 
                />
            </div>
        </div>
    )
}

export default Home;