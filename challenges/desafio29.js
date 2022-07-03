db.produtos.updateMany(
  {},
  {
    $rename: {
      descricao: "descricaoSite",
    },
  },
);

// Crie uma query que retorne o nome e descricaoSite de todos os documentos.
db.produtos.find(
  {},
  { _id: false, nome: true, descricaoSite: true },
);