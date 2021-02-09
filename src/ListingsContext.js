import React, { createContext } from "react";

export const ListingsContext = createContext();

export class ListingsProvider extends React.Component {
    state = {
        selectedTime: " ",
        adultTickets: 0,
        concessionTickets: 0,
        childTickets: 0,
        totalTickets: 0,
        chosenSeat: " ",
        remainingSeats: 0,
    }

    render() {
        const { adultTickets, concessionTickets, childTickets, remainingSeats } = this.state;
        
        return(
            <ListingsContext.Provider value={{
                state: this.state,
                getTime: (event) => this.setState({
                    selectedTime: event.target.id
                }),
                handleTickets: (event) => {
                    const {name, value} = event.target 
                    this.setState({ 
                        [name]: value,
                        
                    });
                },
                handleChooseSeatsClick: () => this.setState({
                    totalTickets: parseInt(adultTickets) + parseInt(concessionTickets) + parseInt(childTickets),
                    remainingSeats: parseInt(adultTickets) + parseInt(concessionTickets) + parseInt(childTickets)
                }),
                chooseSeats: (event) => {
                    const addMinusRemaining = event.currentTarget.classList.contains("taken") ? remainingSeats + 1 : remainingSeats - 1
                    this.setState({
                        chosenSeat: event.currentTarget.id,
                        remainingSeats: addMinusRemaining,                        
                    });
                    event.currentTarget.classList.toggle("taken")
                },
                changeSeats: (event) => {
                    if (event.currentTarget.classList.contains("taken")) {
                        const addMinusRemaining = event.currentTarget.classList.contains("taken") ? remainingSeats + 1 : remainingSeats - 1
                        this.setState({
                            chosenSeat: event.currentTarget.id,
                            remainingSeats: addMinusRemaining,
                            
                        });
                        event.currentTarget.classList.toggle("taken")
                    }
                }
            }}>
                {this.props.children}
            </ListingsContext.Provider>
        )
    }
}