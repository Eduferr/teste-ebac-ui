/// <reference types="cypress"/>

//suite
describe('funcionalidade login', () => {
   
   //hooks
   beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
   });
   afterEach(() => {
    cy.screenshot();
    });
   
   
    //cenários de teste

    it('Fazer login com sucesso', () => {        
        cy.get('#username').type('edu.teste@teste.com.br')
        cy.get('#password').type(123456)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2) > :nth-child(1)').should('contain', 'edu.teste-0551')
    });
    //validar email
    it('Erro de acesso, ao inserir um usuário inválido', () => {
        cy.get('#username').type('eduteste@teste.com.br')
        cy.get('#password').type(123456)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido')
    });
    //Validar senha
    it('Erro de acesso, ao inserir senha inválida', () => {
        cy.get('#username').type('edu.teste@teste.com.br')
        cy.get('#password').type(12345)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida ')
    });


});