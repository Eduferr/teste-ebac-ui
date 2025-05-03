/// <reference types="cypress"/>

const perfil = require('../../fixtures/perfil.json')

//suite
describe('funcionalidade login', () => {
   
   //hooks
   beforeEach(() => {
    cy.visit('/minha-conta') //baseUrl - Está em cypresse.config.js
   });
   afterEach(() => {
    cy.screenshot();
    });
      
    //cenários de teste
    it.skip('Fazer login com sucesso', () => {        
        cy.get('#username').type('edu.teste@teste.com.br')
        cy.get('#password').type(123456)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2) > :nth-child(1)').should('contain', 'edu.teste-0551')
    });
    //validar email
    it.skip('Erro de acesso, ao inserir um usuário inválido', () => {
        cy.get('#username').type('eduteste@teste.com.br')
        cy.get('#password').type(123456)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido')
    });
    //Validar senha
    it.skip('Erro de acesso, ao inserir senha inválida', () => {
        cy.get('#username').type('edu.teste@teste.com.br')
        cy.get('#password').type(12345)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida ')
    });
    
    // Importando massa de dados
    it.skip('Efetuar login com sucesso - Usando massa de dados', () => {        
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha,{log: false})// log: para ocultar dados
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2) > :nth-child(1)').should('contain', 'edu.teste-0551')
    });
    //Usando a fixtures de forma nativa
    it.skip('Efetuar login com sucesso - Usando fixtures', () => {        
        cy.fixture('perfil').then(dados=> {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha,{log: false})// log: para ocultar dados
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2) > :nth-child(1)').should('contain', 'edu.teste-0551')
        })
    });
    
    // Comandos customizados no Support
    it('Deve fazer login com sucesso - Usando comandos customizados', () => {
        cy.login('edu.teste@teste.com.br','123456')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2) > :nth-child(1)').should('contain', 'edu.teste-0551')
    });

});