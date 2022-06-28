db.produtos.find({}, { nome: true, vendidos: true, _id: false })
  .sort({ vendidos: 1 });

  // 2 - Ordene a coleção produtos pela quantidade de lanches vendidos em ordem crescente, mostrando apenas o nome e a quantidade de lanches vendidos