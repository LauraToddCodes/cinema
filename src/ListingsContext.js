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
        remainingSeats: 0
    }

    render() {
        const { adultTickets, concessionTickets, childTickets, remainingSeats, chosenSeat } = this.state;
        
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
                    this.setState({
                        chosenSeat: event.currentTarget.id,
                        remainingSeats: remainingSeats - 1,  
                    });
                    
                },
            }}>
                {this.props.children}
            </ListingsContext.Provider>
        )
    }
}