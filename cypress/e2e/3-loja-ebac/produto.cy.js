/// <reference types="cypress"/>

describe('Funcionlidade: Produto', () => {
    beforeEach(() => {
        //A baseurl, que é comum para todos fica em cypress.conjig.js
        cy.visit('produtos')
    });

    //testando lista de produtos
    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block')
          //.first() //selecionando o primeiro item na lista
          //.last()  //selecionando o último item na lista
          //.eq(2)   //selecionando o item na lista pela posição
          .contains('Argus All-Weather Tank') //selecionando um item na lista pelo nome
          .click()   //clica no primeiro item da lista
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
        
    });
});
