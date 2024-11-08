/// <reference types="cypress"/>

// usa-se o ../ para retorno de pasta
const perfil =require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', ()=>{

    //comando para rodar antes de cada teste
    beforeEach(() => {
        //A baseurl, que é comum para todos fica em cypress.conjig.js
        cy.visit('minha-conta')
    });

    //comando para rodar depois de cada teste
    afterEach(() => {
        cy.screenshot()
    });

    //Login válido
    it('Deve fazer login com sucesso', ()=>{
        //cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('eduferr@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, eduferr (não é eduferr? Sair)')
    })

    //Login inválido
    //int.only - roda o teste que esta sendo implementado
    it('Deve exibir uma mensagem de erro ao inserir o usuário inválido', () => {
        //cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('eduqa@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()
        //valida se no  elemento contem a mensagem
        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido')
        //Validando se o elemento passa a existir depois do erro
        cy.get('.woocommerce-error > li').should('exist')        
    })

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        //cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('eduferr@teste.com.br')
        cy.get('#password').type('teste@12345')
        cy.get('.woocommerce-form > .button').click()
        //valida se no  elemento contem a mensagem
        cy.get('.woocommerce-error > li').should('contain', 'A senha fornecida para o e-mail eduferr@teste.com.br está incorreta')
        //Validando se o elemento passa a existir depois do erro
        cy.get('.woocommerce-error > li').should('exist') 
        
    });

    //teste importando a massa de dados    
    it('Deve fazer login com sucesso - Usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, eduferr (não é eduferr? Sair)')
    });

    // teste usando direto a fixtures
    it.only('Deve fazer login com sucesso - Usando Fixtures', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha , {log: false}) // para ocultar a senha na execução
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, eduferr (não é eduferr? Sair)')
        })
    });

})