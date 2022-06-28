db.produtos.deleteMany({
  $and: [
    { curtidas: { $lt: 50 } },
  ],
});
db.produtos.find({}, { _id: false, nome: true });

// Delete os lanches com menos de 50 curtidas e retorne
// o nome dos lanches que restaram no banco
