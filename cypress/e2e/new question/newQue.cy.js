describe('Sign up', () => {
  // beforeEach(() => {
  //   cy.visit('http://localhost:3000/auth/signin');
  // })

  // it('signin', () => {
  //   cy.get('#email').type('adam@gmail.com')
  //   cy.get('#password').type('123')
  //   cy.get('#signInBtn').click()
  // })

  // beforeEach(() => {
  //   cy.visit('http://localhost:3000/c/1/t/1/q/new');
  // });

  it('create question', () => {
    cy.visit('http://localhost:3000/auth/signin');

    cy.get('#email').type('adam@gmail.com');
    cy.get('#password').type('123');
    cy.get('#signInBtn').click();

    cy.visit('http://localhost:3000/c/1/t/1/q/new');

    cy.get('#queName').type('Jesus christ question');
    cy.get('#points').type('999');
    cy.get('#queDesc').type('Jesus christ \ndescription');

    cy.get('#next').click();

    cy.get('#dropdown').click();
    cy.get('#option4').click();
    cy.get('#solCode').type('print("Hello world!")');

    cy.get('#next').click();

    cy.get('#testCases').type('0');

    cy.get('#next').click();

    cy.get('#addBtn').click();
    cy.get('#input0').type('0');
    cy.get('#output0').type('None');
    cy.get('#explaination0').type('None');

    cy.get('#submit').click();
  });
});
