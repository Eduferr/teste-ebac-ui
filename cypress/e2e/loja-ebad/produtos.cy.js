/// <reference types="cypress"/>

import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Atlas Fitness Tank')
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });

    //Usando page objects
    it('Deve buscar um produto com sucesso', () => {
        //Usando LET no lugar de VAR, para a variável dentro do bloco de teste
        let nomeProduto = 'Torque Power Short'
        produtosPage.buscarProduto(nomeProduto)
        cy.get('.product_title').should('contain', nomeProduto)
    });

    it('Deve visitar a página de um produto pela url', () => {
        // Para visitar é necessário colocar o hífen no lugar do espaço
        //produtosPage.VisitarProduto('Zeppelin-Yoga-Pant')

        //Usando replace para substituir os espaços por hífen
        produtosPage.VisitarProduto('Zeppelin Yoga Pant')
        cy.get('.product_title').should('contain', 'Zeppelin Yoga Pant')


    });

    it('Deve adicionar um produto ao carrinho', () => {
        let nomeProduto = 'Abominable Hoodie'
        let tamanho = 'L'
        let cor = 'Red'
        let quantidade = 1

        produtosPage.buscarProduto(nomeProduto)
        produtosPage.addProdutoCarrinho(tamanho, cor, quantidade)

        cy.get('.woocommerce-message').should('contain', nomeProduto )
    });

    it('Deve adicionar um produto ao carrinho, buscando da Massa de Dados', () => {

        cy.fixture('produtos').then(dados => {
            let posicaoLista = 1

            produtosPage.buscarProduto(dados[posicaoLista].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[posicaoLista].tamanho, 
                dados[posicaoLista].cor, 
                dados[posicaoLista].quantidade)
            cy.get('.woocommerce-message').should('contain',dados[posicaoLista].nomeProduto)

        })

    });


});