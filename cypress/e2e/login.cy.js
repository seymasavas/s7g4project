describe('Project E2E testing', () => {
   it('form submit test', () => {
    cy.visit('http://localhost:5174/')

    cy.get('[data-cy="input-email"]').type("erdem.guntay@wit.com.tr");
    cy.get('[data-cy="input-password"]').type("9fxIH0GXesEwH_I");

    cy.get('[data-cy="input-terms"]').check();
    cy.get('[data-cy="input-button"]').click();
    cy.contains("Başarılı bir şekilde giriş yaptınız")

  })

  
  it('wrong email test', () => {
    cy.visit('http://localhost:5174/')

    cy.get('[data-cy="input-email"]').type("deneme");
    cy.contains("Please enter a valid email address")


    cy.get('[class="invalid-feedback"]').should("have.length",1);
    cy.get('[data-cy="input-button"]').should("be.disabled");

  })
   it('wrong email & password test', () => {
    cy.visit('http://localhost:5174/')

    cy.get('[data-cy="input-email"]').type("deneme");
    cy.get('[data-cy="input-password"]').type("1");
    cy.contains("Password must be at least 4 characters long")


    cy.get('[class="invalid-feedback"]').should("have.length",2);
    

  })
    it('no terms selected', () => {
    cy.visit('http://localhost:5174/')

    cy.get('[data-cy="input-email"]').type("erdem.guntay@wit.com.tr");
    cy.get('[data-cy="input-password"]').type("9fxIH0GXesEwH_I");

    cy.get('.invalid-feedback').should('have.length', 0);
    cy.get('[data-cy="input-button"]').should("be.disabled");
    
  
  })
})