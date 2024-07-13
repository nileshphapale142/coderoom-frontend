describe('signup.cy.tsx', () => {
  beforeEach(() => {
  })
  
  it('sign up', () => {
    cy.get('#teacher').click()
    cy.get('#nextBtn').click()
    cy.get('#firstName').type('Jesus')
    cy.get('#lastName').type('Christ')
    cy.get('#nextBtn').click()
    cy.get('#email').type('jesus@christ.ac.in')
    cy.get('#nextBtn').click()
    cy.get('#password').type('123')
    cy.get('#confirmPassword').type('123')
    cy.get('#createBtn')
  })
})