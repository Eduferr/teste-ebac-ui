class ProdutosPage{

    visitarUrl(){
        cy.visit('produtos')
    }

    buscarProduto(nomeProduto){
        cy.get('[name="s"]').eq(1).type(nomeProduto)
        cy.get('.button-search').eq(1).click()
    }

    buscarProdutoLista(nomeProduto){
      cy.get('.products > .row')
      .contains(nomeProduto)
      .click()
    }

    visitarProduto(nomeProduto){
        // ${ } para carregar uma variável 
        // cy.visit(`produtos/${nomeProduto}` )

        // -> entre barra / / o carecter a ser alterado 
        // -> g que identifica os espaços em branco em uma forma global
        // -> ' ', entre aspas o que eu quero que substitua        
        const urlFormatada = nomeProduto.replace(/ /g, '-') 
        cy.visit(`produtos/${urlFormatada}`)
    }

    addProdutoCarrinho(tamanho, cor, quantidade){
        //cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-' + tamanho).click()
        //cy.get('.button-variable-item-Brown').click()
        cy.get(`.button-variable-item-${cor}`).click() // concatena da mesma forma que o comando anterior
        //clear Limpando o campo, para inserir novo valor
        //cy.get('.input-text').clear().type(2)
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
    }
}

export default new ProdutosPage()