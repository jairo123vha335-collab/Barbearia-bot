const express = require('express');
const app = express();

app.use(express.json());

const servicos = {
  "1": { nome: "Corte", preco: 30 },
  "2": { nome: "Barba", preco: 25 },
  "3": { nome: "Corte + Barba", preco: 50 }
};

app.get('/', (req, res) => {
  res.send("Barbearia online funcionando 🚀");
});

app.post('/webhook', (req, res) => {
  let resposta = "Escolha um serviço:\n";

  for (let key in servicos) {
    resposta += `${key} - ${servicos[key].nome} (R$${servicos[key].preco})\n`;
  }

  res.json({ reply: resposta });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});
