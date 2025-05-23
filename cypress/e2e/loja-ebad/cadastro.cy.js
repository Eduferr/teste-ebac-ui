/// <reference types="cypress"/>

import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro', () => {
    
    beforeEach(() => {
        cy.visit('/minha-conta')
    });

    it('Realizar cadastro com sucesso', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type(123456)
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')        
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.person.firstName())
        cy.get('#account_last_name').type(faker.person.lastName())
        //cy.wait(5000) //5 segundos de pausa em tela
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('exist')
    });

    it('Realizar cadastro com sucesso - Usando variáveis', () => {

        var nome = faker.person.firstName()
        var sobreNome = faker.person.lastName()
        var  email = faker.internet.email(nome, sobreNome) //Gera primeir o nome para usa-lo no e-mail
        

        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type(123456)
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')        
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nome)
        cy.get('#account_last_name').type(sobreNome)
        //cy.wait(5000) //5 segundos de pausa em tela
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('exist')
    });
    // Comandos customizados no Support
    it('Deve completar cadastro com sucesso - Usando comando customizado', () => {
        var primeiroNome = faker.person.firstName()
        cy.preCadastro(faker.internet.email(primeiroNome),"123456",primeiroNome, faker.person.lastName())
        cy.get('.woocommerce-message').should('exist')
    });
});