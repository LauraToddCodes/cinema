import React from "react";
import Navbar from "./components/navbar.js";
import Title from "./components/title.js";
import Footer from "./components/footer.js";
import Home from "./home.js";
import WhatsOn from "./whatsOn.js";
import Book from "./book.js";
import BookingDetails from "./bookingDetails.js";
import ChooseSeats from "./chooseSeats.js";
import BookingConfirmation from "./bookingConfirmation.js";
import ComingSoon from "./comingSoon.js";
import Contact from "./contact.js";
import { Route } from "react-router-dom";
import "./style.css";
import "./javascript.js";


function App(){
    return(
        <div>
            <Title />
            <Navbar />
            <Route path="/cinema" element={Home} />
            <Route path="/whatson" element={WhatsOn} />
            <Route path="/book" element={Book} />
            <Route path="/bookingdetails" element={BookingDetails} />
            <Route path="/chooseseats" element={ChooseSeats} />
            <Route path="/confirmation" element={BookingConfirmation} />
            <Route path="/comingsoon" element={ComingSoon} />
            <Route path="/contact" element={Contact} />
            <Footer />
        </div>
    )
}

export default App;