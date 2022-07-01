db.produtos.find({
  ingredientes: {
    $all: ["picles"],
  },
}, {
  nome: true,
  valoresNutricionais: {
    $slice: 3,
  },
  ingredientes: true,
  _id: false,
});

// Crie uma query que retorne todos os lanches que possuem picles em seus ingredientes e mostre apenas os 3 primeiros itens contidos no array valoresNutricionais

// Sua query deve retornar apenas os campos nome, ingredientes e valoresNutricionais