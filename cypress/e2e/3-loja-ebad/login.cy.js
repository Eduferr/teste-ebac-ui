/// <reference types="cypress"/>

//suite
describe('funcionalidade login', () => {
    //cenário de teste
    it('Fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('edu.teste@teste.com.br')
        cy.get('#password').type(123456)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2) > :nth-child(1)').should('contain', 'edu.teste-0551')
    });
});