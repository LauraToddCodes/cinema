import React from "react";
import filmData from "./filmTimesData.json";
import FilmInfo from "./filmInfo";
import TimeBtns from "./timeBtns";
import { ListingsContext } from "../../ListingsContext";


class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // initialises the array to hold the data from filmTimesData.js
            filmListings: filmData,
            // initialises the variable to hold the selected film and date
            selectedFilm: "allFilms",
            selectedDate: "allDates",
            selectedTime: " "
        }
        this.handleChange = this.handleChange.bind(this);
    }

    // gets the name and value of the option from the specific dropdown being used i.e. the event.target. And sets the current state to be equal to the selected value
    handleChange(event){
        const {name, value} = event.target;
        this.setState({ 
            [name]: value 
        });
    }

    render() {
        const { filmListings, selectedFilm, selectedDate } = this.state;
        const allFilms = selectedFilm === 'allFilms';
        const allDates = selectedDate === 'allDates';
        const validDate = date => allDates || selectedDate === date;
        const filmHasDate = showings => showings.some(showing => validDate(showing.date));
        const validFilm = (id, showings) => (allFilms || selectedFilm === id) && filmHasDate(showings);


        return (
            
            <form id="searchForm">
            <h1 id="noResults">{this.state.selectedTime}</h1>
                <div id="filmDateContainer">
                    <div className="searchOption">
                        <h2>Film:</h2>
                        <img src={process.env.PUBLIC_URL + "/book/filmIcon.png"} alt="film icon"/>
                        <select 
                            name="selectedFilm" 
                            value={this.state.selectedFilm}
                            onChange={this.handleChange}
                            className="dropdown"
                        >
                            <option value="allFilms">All Films</option>
                            {filmData.map(film => <option value={film.id}>{film.filmTitle}</option>)}
                        </select>
                    </div>
                    <h2 id="or">OR</h2>
                    <div className="searchOption">
                        <h2>Date:</h2>
                        <img src={process.env.PUBLIC_URL + "/book/dateIcon.png"} alt="date icon"/>
                        <select 
                            name="selectedDate" 
                            value={this.state.selectedDate}
                            onChange={this.handleChange}
                            className="dropdown" 
                        >
                            <option value="allDates">All Dates</option>
                            {filmData.map((film, i) => <option value={film.showings[i].date}>{film.showings[i].date}</option>)}
                        </select>
                    </div>
                </div>

                        <div>
                        {filmListings.map(film => validFilm(film.id, film.showings) && (
                            <div key={film.id}>
                            <FilmInfo imgSrc={process.env.PUBLIC_URL + film.imgSrc} imgAlt={film.imgAlt} filmTitle={film.filmTitle} paragraphText={film.paragraphText}/>
                            {film.showings.map(showing => validDate(showing.date) && (
                                <ListingsContext.Consumer>
                                    {(context) => (
                                        <TimeBtns date={showing.date} id={film.id + showing.date} onClick={context.getTime} time={showing.times} key={film.id + showing.date} />
                                    )
                                    }     
                                </ListingsContext.Consumer>
                            ))}
                            </div>
                        ))}
                        </div>
                

                
            </form>
        )
        

    }

    
    
}

export default Search
