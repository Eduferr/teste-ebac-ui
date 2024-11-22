/// <reference types="cypress"/>

import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionlidade: Produto', () => {
    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    //testando lista de produtos
    it('Deve selecionar um produto da lista', () => {
        cy.get('.products > .row')
          //.first() //selecionando o primeiro item na lista
          //.last()  //selecionando o último item na lista
          //.eq(2)   //selecionando o item na lista pela posição
          .contains('Argus All-Weather Tank') //selecionando um item na lista pelo nome
          .click()   //clica no primeiro item da lista
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
        
    });

    //Sequência de Page objects
    it('Deve selecionar um produto da lista - Usando PageObjects', () => {
        produtosPage.buscarProdutoLista('Argus All-Weather Tank')
        cy.get('#tab-title-description > a').should('contain','Descrição')
        
    });

    it('Deve buscar um produto com sucesso - Usando o buscador de produtos', () => {
        let produto ='Ariel Roll Sleeve Sweatshirt'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain',produto)
    });

    it('Deve vistar a página do produto', () => {
        produtosPage.visitarProduto('Aether Gym Pant')
        cy.get('.product_title').should('contain','Aether Gym Pant')
    });

    it('Deve adicionar produto ao carrinho', () => {
        let qtd = 5
        let nomeProduto = 'Aero Daily Fitness Tee'
        produtosPage.buscarProduto(nomeProduto)
        produtosPage.addProdutoCarrinho('M', 'Brown', qtd)
        cy.get('.woocommerce-message').should('contain', `${qtd} × “${nomeProduto}” foram adicionados no seu carrinho`)
    });

    it.only('Deve adicionar produto ao carrinho - Buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados =>{
            let posicaoLista = 2 //Para selecionar uma posição na massa de dados
            produtosPage.buscarProduto(dados[posicaoLista].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[posicaoLista].tamanho, 
                dados[posicaoLista].cor, 
                dados[posicaoLista].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[posicaoLista].nomeProduto)
        })
    });
});
