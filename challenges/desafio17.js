// Retorne a quantidade total de produtos em uma nova coleção chamada resumoProdutos
// Para isso, escreva no arquivo desafio17.js duas queries, nesta ordem:

// Crie uma query que insira na coleção resumoProdutos um documento com os campos: franquia com o valor McDonalds e totalProdutos com o valor sendo a quantidade total de produtos registrados na coleção produtos.

db.resumoProdutos.updateOne(
  { franquia: "McDonalds" },
  {
    $set: {
      franquia: "McDonalds",
      totalProdutos: db.produtos.find().count(),
    },
  },
  { upsert: true },
);

// Crie uma query que retorne os campos franquia e o totalProdutos da coleção resumoProdutos, resultantes da primeira query.
db.resumoProdutos.find(
  {},
  { _id: false },
);