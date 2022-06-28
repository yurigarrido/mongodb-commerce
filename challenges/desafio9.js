db.produtos.find(
  {
     valoresNutricionais: { $elemMatch: { tipo: "calorias", quantidade: { $lt: 500 } } },
  }, { _id: false, nome: true },
);

// Retorne o nome de todos
// os lanches que possuam calorias abaixo de 500