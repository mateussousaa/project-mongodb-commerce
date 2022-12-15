db.produtos.find({
  $nor: [
    { nome: "Big Mac" },
    { nome: "McChicken" },
  ],
}, { nome: 1, curtidas: 1, vendidos: 1, _id: 0 });