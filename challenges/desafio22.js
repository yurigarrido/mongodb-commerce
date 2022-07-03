// 22 - Adicione a quantidade de vendas dos sanduíches por dia da semana
// Para isso, escreva no arquivo desafio22.js quatro queries, nesta ordem:

// Crie uma query que inclua um campo vendasPorDia em todos os sanduíches. O valor deste campo deverá ser um array com sete posições
db.produtos.updateMany(
  {},
  { $set: {
      vendasPorDia: [0, 0, 0, 0, 0, 0, 0],
    },
  },
);

db.produtos.find();

// . Cada uma delas representará um dia da semana, e cada posição iniciará em 0. O array deve seguir a estrutura do exemplo abaixo:
// "vendasPorDia": [0, 0, 0, 0, 0, 0, 0]

// O primeiro item desse array representa as vendas no domingo, o segundo item representa as vendas na segunda-feira, e assim sucessivamente até chegar ao último item, que representa as vendas no sábado.

// Crie uma query que incremente as vendas de Big Mac às quartas-feiras em 60.
db.produtos.updateMany(
  { nome: "Big Mac" },
  {
    $inc: {
      "vendasPorDia.3": 60,
    },
  },
);

// Crie uma query que incremente as vendas de todos os sanduíches de carne do tipo bovino aos sábados em 120.
db.produtos.updateMany(
  {
    tags: { $all: ["bovino"] },
  },
  {
    $inc: {
      "vendasPorDia.6": 120,
    },
  },
);

// Crie uma query que retorne o nome e vendasPorDia de todos os documentos.

db.produtos.find(
  { },
  { _id: false, nome: true, vendasPorDia: true },
);