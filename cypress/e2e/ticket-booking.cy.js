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
    })
  })
  