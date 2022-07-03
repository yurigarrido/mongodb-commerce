db.produtos.updateMany({
  valoresNutricionais: {
    $elemMatch: {
      tipo: "sódio",
      percentual: { $gt: 20, $lt: 40 },
    },
  }, 
}, { 
    $push: { tags: "contém sódio",
  },
});

db.produtos.find({}, {
  _id: false,
  nome: true,
  tags: true,
});
// Adicione o valor contém sódio ao final do array tags nos produtos em que o percentual de sódio seja maior do que 20 e menor do que 40
// Para isso, escreva no arquivo desafio26.js duas queries, nesta ordem:

// Crie uma query que faça a adição do valor contém sódio ao final do array tags nos produtos em que o percentual de sódio seja maior do que 20 e menor do que 40.

// Crie uma query que retorne o nome e tags de todos os documentos.