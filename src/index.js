import React from "react";
// import ReactDOM from "react-dom";
import App from "./App";
import Home from "./home.js";
import WhatsOn from "./whatsOn.js";
import Book from "./book.js";
import BookingDetails from "./bookingDetails.js";
import ChooseSeats from "./chooseSeats.js";
import BookingConfirmation from "./bookingConfirmation.js";
import ComingSoon from "./comingSoon.js";
import Contact from "./contact.js";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { ListingsProvider } from "./ListingsContext.js";
import { createRoot } from 'react-dom/client';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />
    },
    {
      path: "cinema",
      element: <Home />,
    },
    {
        path: "whatson",
        element: <WhatsOn />,
      },
      {
        path: "book",
        element: <Book />,
      },
      {
        path: "bookingdetails",
        element: <BookingDetails />,
      },
      {
        path: "chooseseats",
        element: <ChooseSeats />,
      },
      {
        path: "confirmation",
        element: <BookingConfirmation />,
      },
      {
        path: "comingsoon",
        element: <ComingSoon />,
      },
      {
        path: "contact",
        element: <Contact />,
      }
  ]);

createRoot(document.getElementById("root")).render(
    <ListingsProvider>
        <RouterProvider router={router}>
            <App/>
        </RouterProvider>
    </ListingsProvider>
)
