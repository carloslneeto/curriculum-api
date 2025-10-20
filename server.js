import express from "express";
import dotenv from "dotenv";
import sequelize from "./src/config/database.js";

dotenv.config();
const app = express();

app.use(express.json());

// Rota inicial simples
app.get("/", (req, res) => {
  res.send("API do Currículo está rodando! 🚀");
});

// Teste de conexão com o banco
try {
  await sequelize.authenticate();
  console.log("✅ Conexão com o banco de dados estabelecida com sucesso!");
} catch (error) {
  console.error("❌ Erro ao conectar com o banco de dados:", error);
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
