db.produtos.find(
  {},
  { nome: true, vendidos: true, _id: false },
)
  .sort({ vendidos: -1 }).limit(1);

  // Retorne o lanche mais vendido, mostrando apenas o nome e a quantidade do lanche mais vendido