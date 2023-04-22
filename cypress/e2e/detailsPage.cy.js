import detailsErrorFixture from "../fixtures/detailsErrorFixture";
import detailsFixture from "../fixtures/detailsFixture";

describe('Details page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/details/afghan');
  });

  it('should display header', () => {
    cy.get('header').should('be.visible');
  });

  it('should go back to main page when clicking "Go Back" button', () => {
    cy.get('button').contains('Go Back').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });  

  it('should display breed details', () => {
    cy.get('.info-card > :nth-child(1)').should('contain', 'Afghan Hound');
    cy.get('.info-card > :nth-child(2)').should('contain', 'Coursing and hunting');
    cy.get('.info-card > :nth-child(3)').should('contain', '50 - 60');
    cy.get('.info-card > :nth-child(4)').should('contain', '25 - 27');
    cy.get('.info-card > :nth-child(5)').should('contain', '10 - 13');
    cy.get('.info-card > :nth-child(6)').should('contain', 'Aloof, Clownish, Dignified, Independent, Happy');
  });
  
  it('should display an error message if there are not matches to the search', () => {
    cy.visit('http://localhost:3000/details/nomatch');
    cy.contains('Sorry! There are not matching results.').should('be.visible');
  });

  it('should display error message if breed details cannot be fetched', () => {
    cy.intercept({method: 'GET', url: 'https://api.thedogapi.com/v1/breeds/search?q=shepherd'}, detailsErrorFixture)
    .as('getData');
    cy.visit('http://localhost:3000/details/shepherd');
    cy.wait('@getData');
    cy.contains('An internal server error has occurred.').should('be.visible');
  })
})