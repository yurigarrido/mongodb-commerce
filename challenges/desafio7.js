db.produtos.find({
  $and: [
    { vendidos: { $ne: 50 } },
    { tags: { $exists: false } },
  ],
}, { _id: false, nome: true, vendidos: true });

// db.produtos.find();
// Retorne o nome e vendidos dos lanches que tenham 
// sido vendidos com uma quantidade diferente de 50 e 
// em que o campo tags não exista