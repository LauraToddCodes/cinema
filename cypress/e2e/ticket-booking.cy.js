/// <reference types="cypress" />

describe('ticket booking', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/book')
    })
  
    it('filters films by film or date', () => {
      cy.get('#pageTitle').should('have.length', 1).contains('What\'s On')

      cy.get('div#searchContainer').should('have.length', 1)

      const whatsOnFilm = cy.get('div#searchContainer').children('form').children('div').last().children('div')

      whatsOnFilm.should('have.length', 3)

      whatsOnFilm.each((film) => {
        cy.wrap(film).find('img').should('have.length', 1)
        cy.wrap(film).find('#whatsOnFilmDetails').should('have.length', 1)
        cy.wrap(film).find('#whatsOnFilmDetails').children('h3').should('have.length', 1)
        cy.wrap(film).find('#whatsOnFilmDetails').children('p').should('have.length', 1)
      })

      const searchOptions = cy.get('div#searchContainer').children('form').children('#filmDateContainer').children('.searchOption')

      searchOptions.first().children('select').select('Harriet')

      whatsOnFilm.should('have.length', 1)

      cy.get('div#searchContainer').children('form').children('#filmDateContainer').children('.searchOption').first().children('select').select('All Films')

      cy.get('div#searchContainer').children('form').children('div').last().children('div').should('have.length', 3)

      cy.get('div#searchContainer').children('form').children('#filmDateContainer').children('.searchOption').last().children('select').select('Wednesday 4th December')

      cy.get('div#searchContainer').children('form').children('div').last().children('div').should('have.length', 2)
    })

    it('allows you to book for a screening', () => {
      cy.get('div#searchContainer').children('form').children('div').last().children('div').children('div')
      .last().children('div').children('a').first().click()

      cy.location('pathname').should('include', 'bookingdetails')

      cy.get('h1').contains('Your Booking')

      cy.get('#bookingDetailsBlock>.bookingItems').eq(0).children('.chosenDetail').contains('Harriet')

      cy.get('#bookingDetailsBlock>.bookingItems').eq(1).children('.chosenDetail').contains('Wednesday 4th December')

      cy.get('#bookingDetailsBlock>.bookingItems').eq(2).children('.chosenDetail').contains('12:30')

      cy.get('#ticketDropdowns>div').eq(0).children('select').select('1')
      cy.get('#ticketDropdowns>div').eq(1).children('select').select('1')
      cy.get('#ticketDropdowns>div').eq(2).children('select').select('2')

      cy.get('#ticketCalcCont>.ticketCalc').eq(1).children('.totalCalc').contains('£14')
      cy.get('#ticketCalcCont>.ticketCalc').eq(2).children('.totalCalc').contains('£11')
      cy.get('#ticketCalcCont>.ticketCalc').eq(3).children('.totalCalc').contains('£16')
      cy.get('#ticketCalcCont>.ticketCalc').last().children('.totalCalc').contains('£41')

      cy.get('#goToSeatsCont').children('a').click()

      cy.location('pathname').should('include', 'chooseseats')

      cy.get('.bookingDetails').children('#bookingDetailsText').children('div').eq(3).children('.chosenDetail').contains('1')
      cy.get('.bookingDetails').children('#bookingDetailsText').children('div').eq(4).children('.chosenDetail').contains('1')
      cy.get('.bookingDetails').children('#bookingDetailsText').children('div').eq(5).children('.chosenDetail').contains('2')
      cy.get('.bookingDetails').children('#bookingDetailsText').children('div').eq(6).children('.chosenDetail').contains('4')

      cy.get('h3').contains('Remaining tickets: 4')      
      cy.get('#screenLayout').children('#H11').click()
      cy.get('h3').contains('Remaining tickets: 3')      
      cy.get('#screenLayout').children('#H11').click()
      cy.get('h3').contains('Remaining tickets: 4')   
      cy.get('#screenLayout').children('#H11').click()
      cy.get('h3').contains('Remaining tickets: 3')      
      cy.get('#screenLayout').children('#H10').click()
      cy.get('h3').contains('Remaining tickets: 2')      
      cy.get('#screenLayout').children('#H9').click()
      cy.get('h3').contains('Remaining tickets: 1')
      cy.get('#screenLayout').children('#H8').click()
      cy.get('h3').contains('Remaining tickets: 0')   
      
      cy.get('#goToSeatsCont').children('a').click()

      cy.location('pathname').should('include', 'confirmation')

      cy.get('h2').contains('We\'ll see you for the 12:30 showing of Harriet on Wednesday 4th December.')
    })
  })
  