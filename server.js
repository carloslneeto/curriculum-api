import express from "express";
import dotenv from "dotenv";
import sequelize from "./src/config/database.js";

dotenv.config();
const app = express();

app.use(express.json());

// Rotas
import personRoutes from "./src/routes/personRoutes.js";
import educationRoutes from "./src/routes/educationRoutes.js";
import experienceRoutes from "./src/routes/experienceRoutes.js";
import skillRoutes from "./src/routes/skillRoutes.js";

app.use("/api/persons", personRoutes);
app.use("/api/educations", educationRoutes);
app.use("/api/experiences", experienceRoutes);
app.use("/api/skills", skillRoutes);

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

import "./src/models/Person.js";
import "./src/models/Education.js";
import "./src/models/Experience.js";
import "./src/models/Skill.js";

await sequelize.sync({ alter: true });
console.log("✅ Tabelas sincronizadas com o banco!");


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});

// trigger redeploy
