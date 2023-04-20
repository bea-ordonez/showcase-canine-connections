import factsFixture from "../fixtures/factsFixture";

describe('Main Page', () => {
  beforeEach(() => {
    cy.intercept({method: 'GET', url: 'https://dogapi.dog/api/v2/facts'}, factsFixture)
    cy.visit('http://localhost:3000/');
  })

  it('should display header', () => {
    cy.get('header').should('be.visible');
  })

  it('should display dog facts', () => {
    cy.get('div > :nth-child(2)').should('be.visible');
  })

  it('should display a form', () => {
    cy.get('form').should('be.visible');
  })

  it('should fetch dog facts on page load', () => {
    cy.get('div > :nth-child(2)')
      .should('have.length', 1)
      .and('contain', 'A German Shepherd guide dog led her blind companion the entire 2,100 mile Appalachian Trail.');
  });


})