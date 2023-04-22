import factsFixture from "../fixtures/factsFixture";

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
  //test that error shows up if there is no fact
  //test for error if there are no facts due to server error
})