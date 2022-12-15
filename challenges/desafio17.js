db.resumoProdutos.insertOne({
  franquia: "McDonalds",
  totalProdutos: db.produtos.countDocuments({}),
});

db.resumoProdutos.find(
  {},
  { franquia: 1, totalProdutos: 1, _id: 0 },
);