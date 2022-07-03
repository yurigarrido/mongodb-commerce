// Ordene em todos os documentos os valores do array valoresNutricionais pelo campo percentual de forma decrescente
// Para isso, escreva no arquivo desafio24.js duas queries, nesta ordem:

// Crie uma query que faça em todos os documentos a ordenação dos valores do array valoresNutricionais pelo campo percentual de forma decrescente. eyesDe olho na dica: mesmo sem adicionar nenhum novo valor, para essa operação é necessário utilizar também o modificador $each.
db.produtos.updateMany(
  {},
  {
      $push: { // metodo
        valoresNutricionais: { // campo que quero
        $each: [], // valores
        $sort: { percentual: -1 }, // pós ordem
        },
      },
  },
);
// Crie uma query que retorne o nome e valoresNutricionais de todos os documentos.
db.produtos.find(
  {},
  { _id: false, nome: true, valoresNutricionais: true },
);