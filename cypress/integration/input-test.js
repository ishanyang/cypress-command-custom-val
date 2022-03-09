describe('input-test', function () {
  it('input-test use type', function () {
    cy.visit('http://localhost:4005/input-test.html')
    cy.get('#input1')
      .type('input1')
      .should('have.value', 'input1')
    cy.get('#input2')
      .type('input2')
      .should('have.value', 'input2')
    cy.get('#input3')
      .type('input3')
      .should('have.value', 'input3')
    cy.get('#input4')
      .type('input4')
      .should('have.value', 'input4')
  })
})
