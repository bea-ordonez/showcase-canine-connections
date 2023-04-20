import detailsFixture from "../fixtures/detailsFixture";

describe('Details page', () => {
    beforeEach(() => {
        // cy.intercept({method: 'GET', url: '/api/breeds/afghan-hound'}, detailsFixture)
        cy.visit('http://localhost:3000/details/afghan%20hound');
    })

    it('should display header', () => {
        cy.get('header').should('be.visible');
      })

    it('should display breed details', () => {
        cy.get('.info-card > :nth-child(1)').should('contain', 'Afghan Hound')
        cy.get('.info-card > :nth-child(2)').should('contain', 'Coursing and hunting')
        cy.get('.info-card > :nth-child(3)').should('contain', '50 - 60')
        cy.get('.info-card > :nth-child(4)').should('contain', '25 - 27')
        cy.get('.info-card > :nth-child(5)').should('contain', '10 - 13')
        cy.get('.info-card > :nth-child(6)').should('contain', 'Aloof, Clownish, Dignified, Independent, Happy')
    })
})