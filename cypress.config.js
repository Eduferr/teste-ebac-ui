const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'jzc74p',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://lojaebac.ebaconline.art.br',
    video: true, // Para gerar um vídeo de cada cenário de teste que for executado
  },
});
