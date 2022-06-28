db.produtos.find({
  $and: [
      { curtidas: { $gt: 10 } },
      { curtidas: { $lt: 100 } },
  ],
}, { _id: false, nome: true, curtidas: true });
// Retorne o nome e as curtidas dos lanches que
//  tiveram curtidas maiores que 10 e menores que 100