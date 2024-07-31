/// <reference types="cypress" />

describe('homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/cinema')
  })

  it('displays about block and What\'s On section', () => {
    cy.get('#aboutBlock').children('img').should('have.length', 1)
    cy.get('#aboutBlock').children('p').should('have.length', 1)

    cy.get('h2').contains('What\'s On')

    cy.get('#aboutFilmsBlock').children('#aboutFilms').should('have.length', 3)
    const aboutFilms = cy.get('#aboutFilmsBlock').children('#aboutFilms')
    aboutFilms.each((film) => {
      cy.wrap(film).find('img').should('have.length', 1)
      cy.wrap(film).find('h2').should('have.length', 1)
      cy.wrap(film).find('p').should('have.length', 1)
    })
  })
})
