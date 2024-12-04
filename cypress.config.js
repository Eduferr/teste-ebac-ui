const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },    
    //Url padrão de acesso a lojinha EBAC
    baseUrl:'http://lojaebac.ebaconline.art.br/',
    // para Gravar um vídeo do processo de teste
    video: true,
  },
});
