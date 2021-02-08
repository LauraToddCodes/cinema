import React from "react";
import { ListingsContext } from "./ListingsContext";
import filmData from "./components/booking/filmTimesData.json";
import Seat from "./components/booking/seat.js";
import seatInfo from "./components/booking/seatInfo.json";

class ChooseSeats extends React.Component {

    render(){
        return(
            <div>
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

                    const adultTickets = context.state.adultTickets;
                    const concessionTickets = context.state.concessionTickets;
                    const childTickets = context.state.childTickets;

                    const seatsChosen = context.state.chosenSeat;

                    return (
                        <div>
                            <h1 id="pageTitle">Your Booking</h1>
                            <hr />
                            <div className="bookingDetails">
                                <div>
                                    <div className="bookingItems">
                                        <span className="bookingDetail">Film:</span>
                                        <span className="chosenDetail">{chosenFilm}</span>
                                    </div>
                                    <div className="bookingItems">
                                        <span className="bookingDetail">Date:</span>
                                        <span className="chosenDetail">{chosenDate}</span>
                                    </div>
                                    <div className="bookingItems">
                                        <span className="bookingDetail">Time:</span>
                                        <span className="chosenDetail">{chosenTime}</span>
                                    </div>
                                    <div className="bookingItems">
                                        <span className="bookingDetail">Adult Tickets:</span>
                                        <span className="chosenDetail">{adultTickets}</span>
                                    </div>
                                    <div className="bookingItems">
                                        <span className="bookingDetail">Concession Tickets:</span>
                                        <span className="chosenDetail">{concessionTickets}</span>
                                    </div>
                                    <div className="bookingItems">
                                        <span className="bookingDetail">Child Tickets:</span>
                                        <span className="chosenDetail">{childTickets}</span>
                                    </div>    
                                    <div className="bookingItems">
                                        <span className="bookingDetail">Total No. Of Tickets:</span>
                                        <span className="chosenDetail">{context.state.totalTickets}</span>
                                    </div>
                                </div>
                                <div id="bookingDetailsImg">
                                    <img src={chosenFilmImg} alt={chosenFilmImgAlt} />
                                </div>
                            </div>
                            <h1 id="selectTicketSubHeader">Choose your seats...</h1>
                            <h3>Remaining tickets: {context.state.remainingSeats}</h3>
                            <h3>Chosen seats: {context.state.chosenSeat}</h3>
                            
                            <div id="screenLayout">
                                {seatInfo.map(seat => <Seat id={seat.id} className={seat.className} onClick={context.chooseSeats} imgSrc={seat.imgSrc} imgAlt={seat.imgAlt} seatNo={seat.seatNo} />)}
                                
                                <div className="rowI aisle">row I</div>
                                  
                                <div className="rowH aisle">row H</div>
                                   
                                <div className="rowG aisle">row G</div>
                               
                                <div className="rowF aisle">row F</div>
                                
                                <div className="rowE aisle">row E</div>
                                
                                <div className="rowD aisle">row D</div>
                                
                                <div className="rowC aisle">row C</div>
                                
                                <div className="rowB aisle">row B</div>
                                
                                <div className="rowA aisle">row A</div>
                               
                            </div>
                            
                            
                            <hr />
                        </div>                 
                    
                    )}
                }
            </ListingsContext.Consumer>
            </div>
        )
    }
}

export default ChooseSeats