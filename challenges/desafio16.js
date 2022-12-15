db.produtos.updateMany(
  { nome: "Big Mac" },
  {
    $currentDate: {
      ultimaModificacao: true,
    },
  },
);

db.produtos.find(
  { ultimaModificacao: { $exists: true } },
  { nome: 1, _id: 0 },
);