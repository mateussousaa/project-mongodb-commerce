db.produtos.find({ 
  valoresNutricionais: {
    $elemMatch: {
      tipo: "proteínas",
      $and: [
        { percentual: { $gte: 30 } },
        { percentual: { $lte: 40 } },
      ],
    },
  },
}, { nome: 1, _id: 0 });