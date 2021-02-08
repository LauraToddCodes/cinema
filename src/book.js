import React from "react";
import Search from "./components/booking/search";


class Book extends React.Component{    

    render() {
        return(
            <div>
                <h1 id="pageTitle">What's On</h1>
                <hr />
                <div id="searchContainer">
                    <h2>Search by...</h2>
                    <Search />
                </div>
                <hr />
            </div>
        )
    }
}

export default Book;