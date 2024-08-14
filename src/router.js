import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import App from './App'
import Home from "./home.js";
import WhatsOn from "./whatsOn.js";
import Book from "./book.js";
import BookingDetails from "./bookingDetails.js";
import ChooseSeats from "./chooseSeats.js";
import BookingConfirmation from "./bookingConfirmation.js";
import ComingSoon from "./comingSoon.js";
import Contact from "./contact.js";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="" element={<Home />} />
            <Route path="/cinema" element={<Home />} />
            <Route path="/whatson" element={<WhatsOn />} />
            <Route path="/book" element={<Book />} />
            <Route path="/bookingdetails" element={<BookingDetails />} />
            <Route path="/chooseseats" element={<ChooseSeats />} />
            <Route path="/confirmation" element={<BookingConfirmation />} />
            <Route path="/comingsoon" element={<ComingSoon />} />
            <Route path="/contact" element={<Contact />} />
        </Route>
    )
)

export default router
