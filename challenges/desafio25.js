// Adicione o valor muito sódio ao final do array tags nos produtos em que o percentual de sódio seja maior ou igual a 40
// Para isso, escreva no arquivo desafio25.js duas queries, nesta ordem:

// Crie uma query que faça a adição do valor muito sódio ao final do array tags nos produtos em que o percentual de sódio seja maior ou igual a 40.
db.produtos.updateMany(
  {
    valoresNutricionais: { 
      $elemMatch: { percentual: { $gte: 40 }, tipo: "sódio" },
    },
  },
  {
    $push: {
      tags: "muito sódio",
      
    },
  },
);

// Crie uma query que retorne o nome e tags de todos os documentos.
db.produtos.find(
  {},
  { _id: false, nome: true, tags: true },
);