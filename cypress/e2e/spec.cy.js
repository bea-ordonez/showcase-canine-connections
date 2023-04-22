import factsFixture from "../fixtures/factsFixture";
import factsEmptyFixture from "../fixtures/factsEmptyFixture";
import factsErrorFixture from "../fixtures/factsErrorFixture";

describe('Main Page', () => {
  beforeEach(() => {
    cy.intercept({method: 'GET', url: 'https://dogapi.dog/api/v2/facts'}, factsFixture)
    cy.visit('http://localhost:3000/');
  });

  it('should display header', () => {
    cy.get('header').should('be.visible');
  });

  it('should display dog facts', () => {
    cy.get('div > :nth-child(2)').should('be.visible');
  });

  it('should display a form', () => {
    cy.get('form').should('be.visible');
  });

  it('should fetch dog facts on page load', () => {
    cy.get('div > :nth-child(2)')
      .should('have.length', 1)
      .and('contain', 'A German Shepherd guide dog led her blind companion the entire 2,100 mile Appalachian Trail.');
  });

  it('should display breed details when a valid breed is searched', () => {
    cy.get('input').type('afghan');
    cy.get('button').click();
    cy.contains('Afghan Hound').should('be.visible');
  });

  it('should display message if there are no facts', () => {
    cy.intercept({method: 'GET', url: 'https://dogapi.dog/api/v2/facts'}, factsEmptyFixture)
    cy.visit('http://localhost:3000/');
    cy.contains('Sorry, no facts available.').should('be.visible');
  });

  it('should display message if there is an error while fetching facts', () => {
    cy.intercept({method: 'GET', url: 'https://dogapi.dog/api/v2/facts'}, factsErrorFixture)
    cy.visit('http://localhost:3000/');
    cy.contains('Fact: There was an error when trying to fetch a dog fact.').should('be.visible');
  });
})