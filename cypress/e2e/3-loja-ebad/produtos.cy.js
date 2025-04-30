/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('/produtos')
    });
    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block')
            //.first() // captura o primeiro item da lista  
            //.last()   // captura o último item da lista
            //.eq(2)  // pegando um item pela posição
            .contains('Apollo Running Short') // buscando pelo nome dentro do bloco
            .click()
        cy.get('#tab-title-description > a').should('contain','Descrição')
    });
});