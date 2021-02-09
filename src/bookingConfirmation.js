import React from "react";
import { ListingsContext } from "./ListingsContext";
import filmData from "./components/booking/filmTimesData.json";

class BookingConfirmation extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render() {
        return(
            <div>
                <h1 id="pageTitle">Booking Confirmation</h1>
                <hr/>

                <div id="confirmationContainer">
                    <h1>Booking Confirmed!</h1>
                    <ListingsContext.Consumer>
                        {(context) => {
                            const btnId = context.state.selectedTime;
                            const chosenFilmSlice = btnId.slice(0, 5);
                            const chosenDate = btnId.slice(5, btnId.length - 1);
                            const chosenTimeSlice = btnId.slice(btnId.length - 1, btnId.length);
                            const chosenTimeInt = parseInt(chosenTimeSlice);

                            const chosenFilmObj = filmData.find(obj => {
                                return obj.id === chosenFilmSlice
                            });

                            const chosenFilm = chosenFilmObj.filmTitle;

                            const chosenDateObj = chosenFilmObj.showings.find(obj => {
                                return obj.date === chosenDate
                            });

                            const chosenTime = chosenDateObj.times[chosenTimeInt];

                            const chosenFilmImg = chosenFilmObj.imgSrc;

                            const chosenFilmImgAlt = chosenFilmObj.imgAlt;

                            return (
                                <>
                                    <img id="confirmationImg" src={process.env.PUBLIC_URL + chosenFilmImg} alt={chosenFilmImgAlt} />
                                    <h2>We'll see you for the {chosenTime} showing of {chosenFilm} on {chosenDate}.</h2>                                    
                                </>                 
                            
                            )}
                        }
                    </ListingsContext.Consumer>
                </div>


                <hr/>
            </div>
        )
    }

}


export default BookingConfirmation;