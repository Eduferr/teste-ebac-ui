class ProdutosPage {

    visitarUrl() {
        cy.visit('/produtos')
    }
    //Método com elementos do devTools
    buscarProduto(nomeProduto) {        
        cy.get('[name="s"]').eq(1).type(nomeProduto)
        cy.get('.button-search').eq(1).click()
    }

    buscarProdutoLista(nomeProduto) {
        cy.get('.product-block')
          .contains(nomeProduto)
          .click()
    }

    VisitarProduto(nomeProduto) {
        //Concatenação por interpolação
        //cy.visit(`produtos/${nomeProduto}`)

        // / /g - substitua todos os espaços em branco pelo hífen '-'   
        const urlFormatada = nomeProduto.replace(/ /g, '-')
        cy.visit(`produtos/${urlFormatada}`)

    }

    addProdutoCarrinho(tamanho,cor,quantidade) {
        cy.get('.button-variable-item-' + tamanho).click()
        cy.get(`.button-variable-item-${cor}`).click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

    }
}
//Para ficar visivel é necessário exportar a class
export default new ProdutosPage()