db.produtos.updateMany(
  {},
  { $set: { criadoPor: "Ronald McDonald" } },
);

db.produtos.find(
  {},
  { _id: false, nome: true, criadoPor: true },
);

// Inclua o campo criadoPor em todos os documentos, colocando Ronald McDonald no valor desse campo