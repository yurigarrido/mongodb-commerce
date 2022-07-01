// Remova o item cebola de todos os sanduíches
// Para isso, escreva no arquivo desafio19.js duas queries, nesta ordem:

// Crie uma query que faça a remoção do item cebola em todos os sanduíches.

db.produtos.updateMany({}, {
  $pull: {
    ingredientes: "cebola",
  },
});

// Crie uma query que retorne o nome e ingredientes de todos os documentos.
db.produtos.find({}, {
  nome: true,
  ingredientes: true,
  _id: false,
});
