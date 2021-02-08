import React from "react";
import Home from "./home.js";
import WhatsOn from "./whatsOn.js";
import Book from "./book.js";
import BookingDetails from "./bookingDetails.js";
import ComingSoon from "./comingSoon.js";
import Contact from "./contact.js";
import {Route} from "react-router-dom";
import Navbar from "./components/navbar.js";
import Title from "./components/title.js";
import Footer from "./components/footer.js";
import "./style.css";
import "./javascript.js";


function App(){
    return(
        <div>
            <Title />
            <Navbar />
            <Route exact path="/cinema" component={Home} />
            <Route exact path="/whatson" component={WhatsOn} />
            <Route exact path="/book" component={Book} />
            <Route exact path="/bookingdetails" component={BookingDetails} />
            <Route exact path="/comingsoon" component={ComingSoon} />
            <Route exact path="/contact" component={Contact} />
            <Footer />
        </div>
    )
}

export default App;