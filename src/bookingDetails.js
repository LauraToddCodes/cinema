import React from "react";
import { ListingsContext } from "./ListingsContext";
import filmData from "./components/booking/filmTimesData.json";
import ticketPrices from "./prices.json";
import { Link } from "react-router-dom";

class BookingDetails extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
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


                    return (
                        <div>
                            <h1 id="pageTitle">Your Booking</h1>
                            <hr />
                            <div className="bookingDetails">
                                <div id="bookingDetailsBlock">
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
                                </div>
                                <div id="bookingDetailsImg">
                                    <img src={process.env.PUBLIC_URL + chosenFilmImg} alt={chosenFilmImgAlt} />
                                </div>
                            </div>
                            <h1 id="selectTicketSubHeader">Select your tickets...</h1>
                            
                            <div id="ticketDropdowns">
                                <div>
                                    <div className="ticketOption">
                                        <span className="ticketType">Adult:</span>
                                        <span>£{ticketPrices[0].price} ea</span>
                                    </div>
                                    <select 
                                        name="adultTickets"
                                        onChange={context.handleTickets} 
                                        className="dropdown ticketDropdown"
                                    >
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        
                                    </select>
                                </div>
                                <div>
                                    <div className="ticketOption">
                                        <span className="ticketType">Concessions:</span>
                                        <span>£{ticketPrices[1].price} ea</span>
                                    </div>
                                    <select 
                                        name="concessionTickets"
                                        onChange={context.handleTickets} 
                                        className="dropdown ticketDropdown"
                                    >
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        
                                    </select>
                                </div>
                                <div>
                                    <div className="ticketOption">
                                        <span className="ticketType">Child:</span>
                                        <span>£{ticketPrices[2].price} ea</span>
                                    </div>
                                    <select 
                                        name="childTickets"
                                        onChange={context.handleTickets} 
                                        className="dropdown ticketDropdown"
                                    >
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        
                                    </select>
                                </div>
                            </div>
                            <div id="ticketCalcCont">
                                <p className="ticketCalc">
                                    <span className="ticketPriceCalc">Unit Price</span>
                                    <span className="noOfTicketsCalc">Qty</span>
                                    <span className="totalCalc">Total</span>  
                                </p>
                                <p className="ticketCalc">
                                    <span className="ticketTypeCalc">Adult tickets:</span> 
                                    <span className="ticketPriceCalc">£{ticketPrices[0].price}</span>
                                    <span className="noOfTicketsCalc">x{adultTickets}</span>
                                    <span className="totalCalc">£{ticketPrices[0].price * adultTickets}</span>  
                                </p>
                                <p className="ticketCalc">
                                    <span className="ticketTypeCalc">Concession tickets:</span> 
                                    <span className="ticketPriceCalc">£{ticketPrices[1].price}</span>
                                    <span className="noOfTicketsCalc">x{concessionTickets}</span>  
                                    <span className="totalCalc">£{ticketPrices[1].price * concessionTickets}</span>
                                </p>
                                <p className="ticketCalc">
                                    <span className="ticketTypeCalc">Child tickets:</span>
                                    <span className="ticketPriceCalc">£{ticketPrices[2].price}</span>
                                    <span className="noOfTicketsCalc">x{childTickets}</span> 
                                    <span className="totalCalc">£{ticketPrices[2].price * childTickets}</span> 
                                </p>
                                <p className="ticketCalc">
                                    <span className="noOfTicketsCalc totalPrice">Total:</span>
                                    <span className="totalCalc">£{(ticketPrices[0].price * adultTickets)+(ticketPrices[1].price * concessionTickets)+(ticketPrices[2].price * childTickets)}</span>
                                </p>

                            </div>

                            <div id="goToSeatsCont">
                                <Link to="/chooseseats"><button onClick={context.handleChooseSeatsClick} className="goToSeats">Choose your seats ></button></Link>
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


export default BookingDetails