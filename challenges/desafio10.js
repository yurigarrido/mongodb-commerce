db.produtos.find(
  {
    valoresNutricionais: 
    { $elemMatch: { tipo: "proteínas", percentual: { $gte: 30, $lte: 40 } } },
  }, { _id: false, nome: true },
  );
  // Retorne o nome de todos os lanches que tenham o percentual de proteínas maior ou igual a 30 e menor ou igual a 40
