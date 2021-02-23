# Cinema App

## Technologies
The technologies used are:
- React
- npm

## Description
A multi-page website for a Cinema built using React. This site includes pages  for what's on and what's coming up at the cinema, a contact page and a system to book tickets.

## Functionality

The site was built using create-react-app and Browser Router is used to create paths to each page whilst keeping the same Title, Navbar and Footer.

### App Structure

![File Structure](https://github.com/LauraToddCode/cinema/tree/master/structure/AppStructure.jpeg)

### What's On and Coming Soon Pages

The 'What's On' and 'Coming Soon' pages make use of the react-player dependency. Both pages use a reusable component to create the blocks for each film. The data for each film is passed to the component on each of the pages.

### Contact Page

The 'Contact' page contains the contact details for the cinema and an iframe containing an embedded Google Map.

### Search Page

The 'Search' page displays the film listings and allows the user to filter the results using two dropdown menus - one to filter by film and the other to filter by date. This required the use of a handler function to handle the change of the dropdown value and set a new state. The results are then re-rendered to map only the results which match the search parameters.

Since the selected Date, Time and Film need to be stored and used on subsequent pages, the context API is used to store those details so that they can be used later.

### Booking Details Page

The 'Booking Details' is a Context Consumer and takes the selected film information and displays it for the user. The user is then able to choose the number and types of tickets they would like using 3 separate dropdown menus and the price is displayed for them. The price is altered onChange.

### Choose Seats Page

The user can then move on to the 'Choose Seats' page where the total number of tickets they selected on the previous page is displayed using the Listings Context. They can then select their seats from a layout of the theatre. When a seat is selected, that seat turns white and the 'Remaining Seats' count is reduced by 1. If that same seat is selected, the opposite happens. This is done by changing the onClick method depending on the current state of context.state.remainingSeats.

When the 'Remaining Seats' count is 0, the user can no longer click on any of the un-selected seats, however, they can click on one of the selected seats to alter it should they wish.

Once the user is happy with their selection, they can then click the button to confirm their booking. The button will only move the user on to the next page if the 'Remaining Seats' count is down to 0.

### Booking Confirmation Page

The 'Booking Confirmation' page simply displays a confirmation message with the details of the booking.